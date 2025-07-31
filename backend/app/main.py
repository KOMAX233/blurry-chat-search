from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello from blurry chat search!"}

@app.get("/ping")
def ping():
    return {"pong": True}
