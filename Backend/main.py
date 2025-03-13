from fastapi import FastAPI
from scripts.statistical_summary import statistical_summary
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

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

@app.get("/statistical-summary")
def read_statistical_summary():
    print(variables)
    summary = statistical_summary(df,variables)
    return summary


