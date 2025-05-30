import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const Dropdown = ({ options, selected, onChange }) => (
  <Listbox value={selected} onChange={onChange}>
    <div className="relative inline-block text-left">
      <div className="inline-flex divide-x overflow-hidden rounded-md">
        <div className="inline-flex items-center bg-black px-3 py-1.5 text-white rounded-l-md">
          <span className="text-sm font-semibold">{selected.title}</span>
        </div>
        <ListboxButton className="inline-flex items-center bg-black p-1 rounded-r-md hover:bg-indigo-600">
          <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </ListboxButton>
      </div>

      <ListboxOptions
        className="
          absolute right-0 mt-2 w-72 max-h-40 overflow-y-auto
          divide-y divide-gray-200 rounded-md bg-white py-1 shadow-lg
          ring-0
        "
      >
        {options.map((option) => (
          <ListboxOption
            key={option.title}
            value={option}
            className={({ active }) =>
              `group cursor-default select-none px-4 py-2 text-sm
               ${active ? "bg-indigo-500 text-white" : "text-gray-900"}`
            } 
          >
            <div className="flex items-center justify-between">
              <span>{option.title}</span>
              {option.title === selected.title && (
                <CheckIcon
                  className={`h-5 w-5 ${
                    option.title === selected.title
                      ? "group-hover:text-white text-indigo-600"
                      : ""
                  }`}
                  aria-hidden="true"
                />
              )}
            </div>
            <p className="mt-1 text-xs group-hover:text-white">
              {option.description}
            </p>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </div>
  </Listbox>
);

export default Dropdown;
