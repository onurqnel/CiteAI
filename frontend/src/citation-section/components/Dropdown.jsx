import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const Dropdown = ({ options, selected, onChange }) => {
  return (
    <Listbox value={selected} onChange={onChange}>
      <Label className="sr-only">Select citation style</Label>
      <div className="relative">
        <div className="inline-flex divide-x rounded-md">
          <div className="inline-flex items-center gap-x-1 rounded-l-md bg-gray-900 px-2 py-1.5 text-white">
            <span className="text-lg font-medium">{selected.title}</span>
          </div>
          <ListboxButton className="inline-flex items-center rounded-r-md bg-gray-900 p-1 hover:bg-indigo-500">
            <ChevronDownIcon
              className="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </ListboxButton>
        </div>
        <ListboxOptions className="absolute right-0 z-10 mt-2 w-72 divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5">
          {options.map((option) => (
            <ListboxOption
              key={option.title}
              value={option}
              className="group cursor-default select-none p-4 text-sm text-black hover:bg-indigo-600 hover:text-white"
            >
              <div className="flex items-center justify-between">
                <span>{option.title}</span>
                {option.title === selected.title && (
                  <CheckIcon
                    className="h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                )}
              </div>
              <p className="mt-2 text-sm text-gray-500 group-hover:text-white">
                {option.description}
              </p>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default Dropdown;
