import pandas as pd
import requests
df = pd.read_csv("bridgeData3.csv")
# pull each id,before image and after from df
# for each data item do a put request with the id as the param id
# t
print(df.iloc[2,0:5])
