export default function TodoMessage({ todos }) {
  const uncompletedTodos = todos.filter(todo => todo.status === 'Uncompleted')
  const message = uncompletedTodos.length ? `You have ${uncompletedTodos.length} todos left` : 'You have no todos yet';
  return <p className="font-bold text-sm mb-3">{message}</p>;
}
