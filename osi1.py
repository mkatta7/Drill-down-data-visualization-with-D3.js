# -*- coding: utf-8 -*-
"""
Created on Mon Aug  5 13:21:46 2019

@author: Moses
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns


#Reading the raw datset
osi = pd.read_csv('C:/Users/Moses/Desktop/online_shoppers_intention.csv')
# Checking the size of the dataframe
osi.shape

#checking the head of the data to understand  various variables involved
osi.head()

osi.info()

#Perfomring some exploratory data analysis on the given dataset 
osi.describe()

#finding out if there are any missing values in the given dataset
osi.isnull().sum().sort_values(ascending=False)
#PLotting correlation matrix
corr = osi.corr()
ax = sns.heatmap(
    corr, 
    vmin=-1, vmax=1, center=0,
    cmap=sns.diverging_palette(30, 320, n=300),
    square=True
)
ax.set_xticklabels(
    ax.get_xticklabels(),
    rotation=45,
    horizontalalignment='right'
)


# finding the Distribution of online shoppers on Revenue

plt.rcParams['figure.figsize'] = (14, 5)
plt.subplot(1, 2, 2)
sns.countplot(osi['Weekend'], palette = 'dark')
plt.title('Bought the product?', fontsize = 15)
plt.xlabel('Got the Benefit?(Revenue)', fontsize = 12)
plt.ylabel('count', fontsize = 14)


# finding the Distribution of browsers on Weekend
plt.subplot(1, 2, 2)
sns.countplot(osi['Weekend'], palette = 'muted')
plt.title('How many Purchases on Weekends?', fontsize = 15)
plt.xlabel('Is it a Weekend?', fontsize = 12)
plt.ylabel('count', fontsize = 14)
plt.show() 
#counts of specialday
sns.countplot(osi['SpecialDay'], palette='dark')


#Visitor type counts
osi['VisitorType'].value_counts()


#Traffic Distribution in terms of traffic codes
plt.rcParams['figure.figsize'] = (14, 5)

plt.subplot(2, 2, 1)
plt.title('Traffic Distribution',fontsize = 15)
plt.xlabel('Codes of TrafficType', fontsize = 12)
plt.ylabel('Count', fontsize = 14)
plt.barplot(osi['TrafficType'], color = 'blue')



plt.subplot(1, 2, 2)
plt.title('Distribution of Customers',fontsize = 15)
plt.xlabel('Codes of the Regions', fontsize = 12)
plt.ylabel('Count', fontsize = 14)
plt.hist(osi['Region'], color = 'red')

plt.show()

#Checking the online browsers on the shopping website month wise

osi['Month'].value_counts()
#Region count
sns.countplot(osi['Region'], palette='pastel')
#TrafficType count
sns.countplot(osi['TrafficType'], palette='pastel')
#The number of OS's each user has?
osi['OperatingSystems'].value_counts()

#Filling the missing values with 0
osi.fillna(0, inplace = True)

#Checking the missing values if any after filling with 0
osi.isnull().sum().sum
#Bivariante Analysis
sns.violinplot(osi['Revenue'], osi['Informational_Duration'])
sns.violinplot(osi['Revenue'], osi['Administrative_Duration'])
sns.violinplot(osi['Revenue'], osi['ProductRelated_Duration'])
sns.violinplot(osi['Revenue'], osi['ExitRates'])
sns.violinplot(osi['Revenue'], osi['PageValues'])
sns.violinplot(osi['Revenue'], osi['BounceRates'])

# Q1: Time Spent by the online shoppers with respect to bounce rates

#Taking the Administrative duration and bounce rates in x
x = osi.iloc[:, [1, 6]].values

#Shape of the dataset
x.shape

#Importing Kmeans from the library to perform clustering
from sklearn.cluster import KMeans
#Code for knowing the number of clusters using Elbow method
wcss = []
for i in range(1, 10):
    km = KMeans(n_clusters = i,
              init = 'k-means++',
              max_iter = 200,
              n_init = 10,
              random_state = 0,
              algorithm = 'elkan',
              tol = 0.001)
    km.fit(x)
    labels = km.labels_
    wcss.append(km.inertia_)
    
plt.rcParams['figure.figsize'] = (14, 5)
plt.plot(range(1, 10), wcss)
plt.title('The Elbow Method', fontsize = 14)
plt.xlabel('No. of Clusters')
plt.ylabel('wcss')
plt.show()
#The Number of clusters to be taken as 3 according to elbow method and visualizing the desired
km = KMeans(n_clusters = 3, init = 'k-means++', max_iter = 200, n_init = 10, random_state = 0)
y_means = km.fit_predict(x)

plt.scatter(x[y_means == 0, 0], x[y_means == 0, 1], s = 70, c = 'red', label = 'Un-interested Customers')
plt.scatter(x[y_means == 1, 0], x[y_means == 1, 1], s = 70, c = 'yellow', label = 'Normal Customers')
plt.scatter(x[y_means == 2, 0], x[y_means == 2, 1], s = 70, c = 'green', label = 'Interested Customers')
plt.scatter(km.cluster_centers_[:,0], km.cluster_centers_[:, 1], s = 70, c = 'blue' , label = 'centeroid')

plt.title('Administrative Duration vs Duration', fontsize = 14)
plt.xlabel('Administrative Duration')
plt.ylabel('Bounce Rates')
plt.legend()
plt.show()
# The behaviour of the customer using informational duration and bounce rates
#Locating the 3rd and 6th columns for the performance
x = osi.iloc[:, [3, 6]].values
#Elbow method to find out the number of clusters
wcss = []
for i in range(1, 5):
    km = KMeans(n_clusters = i,
              init = 'k-means++',
              max_iter = 200,
              n_init = 5,
              random_state = 0,
              algorithm = 'elkan',
              tol = 0.001)
    km.fit(x)
    labels = km.labels_
    wcss.append(km.inertia_)
    
plt.rcParams['figure.figsize'] = (14, 5)
plt.plot(range(1, 5), wcss)
plt.title('The Elbow Method', fontsize = 20)
plt.xlabel('No. of Clusters')
plt.ylabel('wcss')
plt.show()
#Visualizing the data, knowing the targeted customers
km = KMeans(n_clusters = 2, init = 'k-means++', max_iter = 200, n_init = 5, random_state = 0)
y_means = km.fit_predict(x)

plt.scatter(x[y_means == 0, 0], x[y_means == 0, 1], s = 70, c = 'red', label = 'Un-interested Customers')
plt.scatter(x[y_means == 1, 0], x[y_means == 1, 1], s = 70, c = 'green', label = 'Target Customers')
plt.scatter(km.cluster_centers_[:,0], km.cluster_centers_[:, 1], s = 50, c = 'orange' , label = 'centeroid')

plt.title('Informational Duration vs Bounce Rates', fontsize = 14)
plt.xlabel('Informational Duration')
plt.ylabel('Bounce Rates')
plt.legend()
plt.show()

#Question2: Where from the customers come? the region?
#Preparing the dataset
x = osi.iloc[:, [13, 14]].values
#Elbow method to find the number of clusters
wcss = []
for i in range(1, 7):
    km = KMeans(n_clusters = i,
              init = 'k-means++',
              max_iter = 200,
              n_init = 7,
              random_state = 0,
              algorithm = 'elkan',
              tol = 0.001)
    km.fit(x)
    labels = km.labels_
    wcss.append(km.inertia_)
    
plt.rcParams['figure.figsize'] = (14, 5)
plt.plot(range(1, 7), wcss)
plt.title('The Elbow Method', fontsize = 14)
plt.xlabel('No. of Clusters')
plt.ylabel('wcss')
plt.show()
#The cluters are 2 from elbow method and the visualization
km = KMeans(n_clusters = 2, init = 'k-means++', max_iter = 200, n_init = 7, random_state = 0)
y_means = km.fit_predict(x)

plt.scatter(x[y_means == 0, 0], x[y_means == 0, 1], s = 100, c = 'red', label = 'Un-interested Customers')
plt.scatter(x[y_means == 1, 0], x[y_means == 1, 1], s = 100, c = 'green', label = 'Target Customers')
plt.scatter(km.cluster_centers_[:,0], km.cluster_centers_[:, 1], s = 50, c = 'blue' , label = 'centeroid')

plt.title('Region vs Traffic Type', fontsize = 20)
plt.xlabel('Region')
plt.ylabel('Traffic')
plt.legend()
plt.show()

#Knowing from which region the customers have shopped using administrative duration
#Preparing the dataset for performing
x = osi.iloc[:, [1, 13]].values
#Elbow method
wcss = []
for i in range(1, 7):
    km = KMeans(n_clusters = i,
              init = 'k-means++',
              max_iter = 200,
              n_init = 7,
              random_state = 0,
              algorithm = 'elkan',
              tol = 0.001)
    km.fit(x)
    labels = km.labels_
    wcss.append(km.inertia_)
    
plt.rcParams['figure.figsize'] = (14, 5)
plt.plot(range(1, 7), wcss)
plt.title('The Elbow Method', fontsize = 14)
plt.xlabel('No. of Clusters')
plt.ylabel('wcss')
plt.show()
#visualisation
km = KMeans(n_clusters = 2, init = 'k-means++', max_iter = 200, n_init = 7, random_state = 0)
y_means = km.fit_predict(x)

plt.scatter(x[y_means == 0, 0], x[y_means == 0, 1], s = 70, c = 'red', label = 'Unproductive Customers')
plt.scatter(x[y_means == 1, 0], x[y_means == 1, 1], s = 70, c = 'green', label = 'Target Customers')
plt.scatter(km.cluster_centers_[:,0], km.cluster_centers_[:, 1], s = 50, c = 'blue' , label = 'centeroid')
centroids=km.cluster_centers_
plt.title('Adminstrative Duration vs Region', fontsize = 14)
plt.xlabel('Administrative Duration')
plt.ylabel('Region Type')
plt.legend()
plt.show()
#Creating dummy variables 
osi1 = pd.get_dummies(osi)
#Showing the newly created dummy variables along with others
osi1.columns


#Label encoding
from sklearn.preprocessing import LabelEncoder
lablen = LabelEncoder()
#Transforming the Revenue Data
osi['Revenue'] = lablen.fit_transform(osi['Revenue'])
osi['Revenue'].value_counts()


#loading the dataset with dummy variables in x
x = osi1
# dropping the target variable 'Revenue'
x = x.drop(['Revenue'], axis = 1)
#Loading it into y
y = osi['Revenue']

#Knowing the shapes of x and y 
print("Shape of x:", x.shape)
print("Shape of y:", y.shape)

# splitting the data

from sklearn.model_selection import train_test_split

xtrain, xtest, ytrain, ytest = train_test_split(x, y, test_size = 0.5, random_state = 0)

# checking the shapes

print("Shape of x_train :", xtrain.shape)
print("Shape of y_train :", ytrain.shape)
print("Shape of x_test :", xtest.shape)
print("Shape of y_test :", ytest.shape)
 #Random Forest Classifier
 
#Data modelling
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix
model = RandomForestClassifier()
model.fit(xtrain, ytrain)

ypred = model.predict(xtest)

# evaluation of the model
TrainingAccuracy= model.score(xtrain, ytrain)
TrainingAccuracy
TestingAccuracy= model.score(xtest, ytest)
TestingAccuracy

# confusion matrix
confmtx = confusion_matrix(ytest, ypred)
plt.rcParams['figure.figsize'] = (7, 7)
sns.heatmap(confmtx,cbar= True,annot = True)
#DecisionTreeClassifier
from sklearn.tree import DecisionTreeClassifier
classifier = DecisionTreeClassifier()
classifier.fit(xtrain, ytrain)


