
import { ClipboardIcon } from "@heroicons/react/24/outline"; 

const HistoryList = ({ history, onCopy }) => {
  return (
    <div className="mt-10">
      <h3 className="text-sm font-medium text-gray-500">History</h3>
      <ul className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
        {history.map((item) => (
          <li key={item.id} className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3 min-w-0">
              <img
                src={item.avatar}
                alt=""
                className="h-10 w-10 rounded-full shrink-0"
              />
              <p className="truncate text-sm font-medium text-gray-900">
                {item.name}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onCopy(item.url)}
              className="rounded-full p-2 transition-colors hover:bg-gray-100 focus:outline-none"
              title={`Copy ${item.name}`}
            >
              <ClipboardIcon className="h-5 w-5 text-gray-600 hover:text-indigo-600" aria-hidden="true" />
              <span className="sr-only">Copy {item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
