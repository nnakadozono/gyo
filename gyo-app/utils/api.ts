const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/todos` || "http://localhost:8000/api/todos";

export const getTodos = async () => {
  const response = await fetch(API_URL);
  const todos = await response.json();
  return todos;
};

export const createTodo = async (task: string) => {
  console.log(API_URL)
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  });
  const todo = await response.json();
  return todo;
};

export const updateTodo = async (id: string, task: string, completed: boolean) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task, completed })
  });
  const todo = await response.json();
  return todo;
};

export const deleteTodo = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
