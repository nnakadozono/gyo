from fastapi import FastAPI
from typing import Optional, List
from pydantic import BaseModel

app = FastAPI()

class Todo(BaseModel):
    id: Optional[int] = None
    task: str
    completed: bool = False

todos: List[Todo] = []

@app.get("/api/todos", response_model=List[Todo])
async def get_todos():
    return todos

@app.post("/api/todos", response_model=Todo)
async def create_todo(todo: Todo):
    todo.id = len(todos) + 1
    todos.append(todo)
    return todo

@app.patch("/api/todos/{todo_id}", response_model=Todo)
async def toggle_todo(todo_id: int):
    for todo in todos:
        if todo.id == todo_id:
            todo.completed = not todo.completed
            return todo
    return None

@app.delete("/api/todos/{todo_id}")
async def delete_todo(todo_id: int):
    for todo in todos:
        if todo.id == todo_id:
            todos.remove(todo)
            return {"message": f"Todo with id {todo_id} deleted."}
    return {"message": f"No Todo with id {todo_id} found."}
