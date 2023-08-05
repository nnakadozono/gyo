import React from 'react'

type TodoItemProps = {
  task: string
  completed: boolean
  toggleTask: () => void
  deleteTask: () => void
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed, toggleTask, deleteTask }) => {
  return (
    <li>
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task}
      </span>
      <button onClick={toggleTask}>
        {completed ? '未完了' : '完了'}
      </button>
      <button onClick={deleteTask}>
        削除
      </button>
    </li>
  )
}

export default TodoItem
