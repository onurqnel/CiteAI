import { ClipboardIcon } from "@heroicons/react/24/outline";

const History = ({ history, onCopy }) => (
  <div className="mt-10 mb-60">
    <h3 className="text-md font-semibold text-black">References</h3>

    <ul className="mt-4 divide-y divide-gray-200">
      {history.map((item) => (
        <li key={item.id} className="flex items-start justify-between py-4">
          {/* Style avatar */}
          <div className="flex space-x-3">
            <img
              src={item.avatar}
              alt=""
              className="h-10 w-10 rounded-full shrink-0"
            />

            {/* Citation only */}
            <p className="min-w-0 text-sm text-gray-900">
              {item.citation ?? "Generating citation…"}
            </p>
          </div>

          {/* Copy‑citation button */}
          <button
            type="button"
            onClick={() => onCopy(item.citation)}
            className="rounded-full p-2 transition-colors hover:bg-gray-100 focus:outline-none disabled:opacity-40"
            title="Copy citation"
            disabled={!item.citation}
          >
            <ClipboardIcon
              className="h-5 w-5 text-gray-600 hover:text-indigo-600"
              aria-hidden="true"
            />
            <span className="sr-only">Copy citation</span>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default History;
