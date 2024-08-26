import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Filter({ onFilterBy, filterBy, onIsOpenMenu, isOpenMenu, onQuery }) {
  return (
    <>
      <div className="flex items-center gap-3 mb-3">
        <input type="search" name="" id="" placeholder="Search" className="border p-1 rounded-md w-full focus:ring focus:outline-none" onChange={(e) => onQuery(e.target.value)} />
        <div className="relative">
          <button className="p-1 btn-primary rounded-md px-3 flex items-center gap-2" onClick={onIsOpenMenu}>
            {filterBy ? filterBy : 'Filter'}
            <FontAwesomeIcon icon="caret-down" />
          </button>
          <ul className={`bg-white shadow-default rounded-md mt-3 absolute right-0 overflow-hidden ${!isOpenMenu && 'hidden'}`}>
            <li className="p-2 border-b hover:bg-sky-500 hover:text-white cursor-pointer" onClick={() => onFilterBy('All')}>
              All
            </li>
            <li className="p-2 border-b hover:bg-sky-500 hover:text-white cursor-pointer" onClick={() => onFilterBy('Uncompleted')}>
              Uncompleted
            </li>
            <li className="p-2 border-0 hover:bg-sky-500 hover:text-white cursor-pointer" onClick={() => onFilterBy('Completed')}>
              Completed
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
