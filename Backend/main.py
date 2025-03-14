from fastapi import FastAPI
from scripts.statistical_summary import statistical_summary
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
from scripts.continuous_categorical import differentiate_categorical

df = pd.read_csv("train.csv")
variables = []

for i in df:
    variables.append(i)
    
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

@app.get("/summary")
def summary():
    
    summaries = {
        "statistical_summary": statistical_summary(df,variables),
        "continuous_categorical": differentiate_categorical(df)
        
    }
    
    print(variables)
    summary = statistical_summary(df,variables)
    return summary


