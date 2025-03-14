import pandas as pd

def differentiate_categorical(df):
    
    categorical_variables = []
    continuous_variables = []

    cat = list(df.select_dtypes(include=["object","category"]).columns)
    if(len(cat)>0):
        categorical_variables.append()
    
    for i in df:
        if i not in categorical_variables:
            if(df[i].nunique() < 10):
                categorical_variables.append(i)
                
    for i in df:
        if i not in categorical_variables:
            continuous_variables.append(i)
    
    return categorical_variables, continuous_variables



if __name__ == "__main__":
    
    df = pd.read_csv("train.csv")
    
    categorical_variables, continuous_variables = differentiate_categorical(df)
    print(categorical_variables)
    print(continuous_variables)