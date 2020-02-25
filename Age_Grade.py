import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import plotly as py
import plotly.graph_objs as go

#Reading the raw datset
data = pd.read_csv('F:/Data Science/Teesside Uni/Interactive grahpics/Raw_GradeFR.csv')
data.shape
count1 =data.groupby(['Grade','Age','Total']).count()
count1
