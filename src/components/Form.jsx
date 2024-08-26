import { useState } from 'react';

export default function Filter({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text) return

    const newTodo = { text, status: 'Uncompleted', id: Date.now() };

    onAdd(newTodo)

    setText('')
  }
  return (
    <form action="" method="post" className="flex items-center gap-3 mb-3" onSubmit={handleSubmit}>
      <input type="search" name="" id="" placeholder="Todo" className="border p-1 rounded-md w-full focus:ring focus:outline-none" value={text} onChange={(e) => setText(e.target.value)} />
      <button type='submit' className="p-1 btn-primary rounded-md px-3 flex items-center gap-2" >
        Add
      </button>
    </form>
  );
}
