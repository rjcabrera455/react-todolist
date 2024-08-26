import Header from './components/Header';
import Filter from './components/Filter';
import Form from './components/Form';
import TodoMessage from './components/TodoMessage';
import ListItem from './components/ListItem';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filterBy, setFilterBy] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [query, setQuery] = useState('');

  function handleFilterBy(value) {
    setFilterBy(value);
    setIsOpenMenu((prev) => !prev);
  }

  function handleIsOpenMenu() {
    setIsOpenMenu((prev) => !prev);
  }

  function handleQuery(value) {
    setQuery(value);
  }

  function handleAdd(todo) {
    setTodos((todos) => [...todos, todo])
  }

  function handleUpdate(id) {
    setTodos((todos) =>
      todos.map((todo) => {
        const status = todo.status === 'Completed' ? 'Uncompleted' : 'Completed'
        return todo.id === id ? { ...todo, status: status } : todo
      }
      )
    );
  }

  function handleDelete(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }


  let filteredTodos = todos.filter((todo) => {
    const result = todo.text.toLowerCase().includes(query.toLowerCase())

    if (filterBy && filterBy === 'Completed') {
      return todo.status === 'Completed' && result;
    } else if (filterBy && filterBy === 'Uncompleted') {
      return todo.status === 'Uncompleted' && result;
    } else {
      return result;
    }
  });

  return (
    <main className="p-5 bg-gradient-to-r from-sky-500 to-blue-500 h-lvh relative">
      <div className="shadow-default max-w-3xl mx-auto p-3 rounded-md bg-white">
        <Header />
        <hr className="mt-3 mb-3" />
        <Filter onFilterBy={handleFilterBy} filterBy={filterBy} onIsOpenMenu={handleIsOpenMenu} isOpenMenu={isOpenMenu} onQuery={handleQuery} />
        <TodoMessage todos={filteredTodos} />
        <ul>
          {filteredTodos.map((todo) => (
            <ListItem todo={todo} onDelete={handleDelete} onUpdate={handleUpdate} key={todo.id} />
          ))}
        </ul>

        <Form onAdd={handleAdd} />
      </div>


    </main>
  );
}
