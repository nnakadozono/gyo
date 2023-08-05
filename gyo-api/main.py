from fastapi.middleware.cors import CORSMiddleware
from typing import List
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from databases import Database
from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String, Boolean, select

DATABASE_URL = "postgresql://myuser:mypassword@localhost:5432/mydatabase"

metadata = MetaData()

todos = Table(
    "todos",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("task", String(50)),
    Column("completed", Boolean),
)

database = Database(DATABASE_URL)

class TodoIn(BaseModel):
    task: str
    completed: bool = False

class TodoOut(TodoIn):
    id: int

app = FastAPI()

# CORS設定を追加

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/api/todos", response_model=List[TodoOut])
async def get_todos():
    query = todos.select()
    return await database.fetch_all(query)

@app.post("/api/todos", response_model=TodoOut)
async def create_todo(todo: TodoIn):
    query = todos.insert().values(task=todo.task, completed=todo.completed)
    last_record_id = await database.execute(query)
    return {**todo.dict(), "id": last_record_id}

@app.patch("/api/todos/{todo_id}", response_model=TodoOut)
async def toggle_todo(todo_id: int, todo: TodoIn):
    query = todos.update().where(todos.c.id == todo_id).values(task=todo.task, completed=todo.completed)
    await database.execute(query)
    return {**todo.dict(), "id": todo_id}

@app.delete("/api/todos/{todo_id}")
async def delete_todo(todo_id: int):
    query = todos.delete().where(todos.c.id == todo_id)
    await database.execute(query)
    return {"message": f"Todo with id {todo_id} deleted."}
