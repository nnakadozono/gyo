import React, { useState } from 'react'

type TodoInputProps = {
  addTask: (task: string) => void
}

const TodoInput: React.FC<TodoInputProps> = ({ addTask }) => {
  const [task, setTask] = useState('')

  const submitTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (task === '') return
    addTask(task)
    setTask('')
  }

  return (
    <form onSubmit={submitTask}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">
        追加
      </button>
    </form>
  )
}

export default TodoInput
