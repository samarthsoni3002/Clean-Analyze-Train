from statistical_summary import statistical_summary
import pandas as pd

df = pd.read_csv("train.csv")

print(statistical_summary(df))