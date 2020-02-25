import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import plotly as py
import plotly.graph_objs as go

#Reading the raw datset
data = pd.read_csv('C:/Users/Moses/Desktop/attendance_with_gender_age(UPDATED).csv')
# Checking the size of the dataframe
data.shape

#checking the head of the data to understand  various variables involved
data.head()

#Perfomring some exploratory data analysis on the given dataset 
data.describe()

#finding out if there are any missing values in the given dataset
data.isnull().sum().sum()

# finding the Distribution of online shoppers on Revenue
data1 = pd.read_csv('C:/Users/Moses/Desktop/att_module_results.csv')
data1.shape

#checking the head of the data to understand  various variables involved
data1.head()

#Perfomring some exploratory data analysis on the given dataset 
data1.describe()

#finding out if there are any missing values in the given dataset
data1.isnull().sum().sum()
# making data frame from csv file 
  
# dropping passed columns 
data.drop(["DayNum","DiffGrp","Gender","GroupId","Module_Name","Department","StartTime","Status","StudentStatus","UpdatedDateTime","WeekNum","classDateTime","logintime","room","updatedBy"], axis = 1, inplace = True) 
data
# making data frame from csv file 
data = pd.read_csv("nba.csv", index_col ="Name" ) 
  
# dropping passed columns 
data.drop(["CourseCode", "ID"], axis = 1, inplace = True) 
data.drop(["acYear"],axis=1,inplace=True)
data.drop(["Unnamed: 0"],axis=1,inplace=True)
data

data1 = pd.read_csv('C:/Users/Moses/Desktop/att_module_results.csv')
data1.shape

#checking the head of the data to understand  various variables involved
data1.head()

#Perfomring some exploratory data analysis on the given dataset 
data1.describe()

#finding out if there are any missing values in the given dataset
data1.isnull().sum().sum()


data1.drop(["Unnamed: 5"],axis=1,inplace=True)
data1.drop(["Unnamed: 6","Unnamed: 7","Unnamed: 8","Unnamed: 9","Unnamed: 10","AcYear"],axis=1,inplace=True)
df1=pd.DataFrame(data)
df2=pd.DataFrame(data1)    
abc=pd.merge(df1,df2,on=['StudentID','ModuleCode'])       
abc.drop_duplicates(keep=False)
abc.drop_duplicates(keep=False, inplace=False)
abc.drop_duplicates()
new=abc.drop_duplicates()

new.drop(["ModuleCode", "StudentID", "Mark"],axis=1,inplace=True)
new
new.drop(["ModuleCode"],axis=1,inplace=True)
new.drop(["StudentID"],axis=1,inplace=True)
new['PostalArea'].value_counts()
new['Age'].value_counts()
new['Grade'].value_counts()
np.corrcoef(new["Age"], new["PostalArea"])

new.isnull().sum().sum()
from scipy.stats import pearsonr
corr, p_value = pearsonr(new['Age'], new['PostalArea'])
new.corr(method ='pearson') 
new.corr(method='kendall')

new['TypeInt']=(new['Type']=='PostalArea').astype(int)
new_dummies = pd.get_dummies(new['PostalArea'])
del new_dummies[new_dummies.columns[-1]]
new_new = pd.concat([new, new_dummies], axis=1)
del new_new['PostalArea']
x = new_new.values.corr(method='pearson')
corr = new_new.corr()
ax = sns.heatmap(
    corr, 
    vmin=-1, vmax=1, center=0,
    cmap=sns.diverging_palette(20, 220, n=200),
    square=True
)
ax.set_xticklabels(
    ax.get_xticklabels(),
    rotation=45,
    horizontalalignment='right'
);
       import seaborn as sns
       import matplotlib.pyplot as plt
       cmap = sns.diverging_palette(220, 10, as_cmap=True)

        sns.heatmap(corr,cmap=cmap, vmax=.3, center=0,
            square=True, linewidths=.5, cbar_kws={"shrink": .5})
    count = new.groupby(['PostalArea']).count()
    count
count =new.groupby(['Age','Grade']).size()
count    
