import { List } from '@mui/material';
import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import { getTodos, createTodo, updateTodo, deleteTodo } from '../utils/api'

type Task = {
  id: string
  task: string
  completed: boolean
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTasks(todos);
    };
    fetchTodos();
  }, []);

  const addTask = async (task: string) => {
    const newTask = await createTodo(task);
    setTasks([...tasks, newTask]);
  }

  const toggleTask = async (id: string) => {
    const task = tasks.find((task) => task.id === id)!;
    await updateTodo(id, task.task, !task.completed);
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }

  const deleteTask = async (id: string) => {
    await deleteTodo(id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <TodoInput addTask={addTask} />
      <List>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task.task}
            completed={task.completed}
            toggleTask={() => toggleTask(task.id)}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </List>
    </div>
  )
}

export default TodoList
