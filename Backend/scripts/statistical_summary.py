import pandas as pd
import numpy as np


def statistical_summary(df,variables):
    json_file = {}
    
    for j in variables:
        json_file[j] = {}
        json_file[j]["Mean"] = df[j].mean().item()
        json_file[j]["Median"] = df[j].median()
        json_file[j]["Mode"] = df[j].mode().values[0].item()
        json_file[j]["Standard Deviation"] = df[j].std()
        json_file[j]["Variance"] = df[j].var()
        json_file[j]["Minimum"] = df[j].min()
        json_file[j]["Maximum"] = df[j].max()
        json_file[j]["25th Percentile"] = np.percentile(df[j], 25).item()
        json_file[j]["50th Percentile"] = np.percentile(df[j], 50).item()
        json_file[j]["75th Percentile"] = np.percentile(df[j], 75).item()
        json_file[j]["IQR"] = json_file[j]["75th Percentile"] - json_file[j]["25th Percentile"]

    return json_file
    


if __name__ == "__main__":
    
    df = pd.read_csv("train.csv")
    
    variables = []
    for i in df:
        variables.append(i)
    
    statistics_data = statistical_summary(df,variables)
    print(statistics_data)  