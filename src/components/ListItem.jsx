import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ListItem({ todo, onDelete, onUpdate }) {

  return (
    <li className="flex items-center justify-between gap-1 shadow-default p-2 px-3 rounded-md mb-3" >
      <div className="flex items-center gap-2">
        <input type="checkbox" name="" id={todo.id} className="hidden" value='' onChange={() => onUpdate(todo.id)} />
        <label htmlFor={todo.id} className={`h-5 w-5 flex justify-center items-center rounded-full text-white cursor-pointer ${todo.status === 'Completed' ? 'bg-green-500' : 'bg-slate-300'}`}>
          <FontAwesomeIcon icon="check" />
        </label>
        <p className={`mb-0 ${todo.status === 'Completed' && 'line-through decoration-2'}`}>{todo.text} </p>
      </div>

      <button className="text-red-500 hover:text-red-600 outline-none" onClick={() => onDelete(todo.id)}>
        <FontAwesomeIcon icon="trash" />
      </button>
    </li>
  );
}
