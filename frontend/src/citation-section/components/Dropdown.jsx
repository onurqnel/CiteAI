"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const Dropdown = () => {
  const publishingOptions = [
    {
      title: "APA",
      description:
        "Used in social sciences, emphasizes author-date citation format.",
      current: true,
    },
    {
      title: "MLA",
      description: "Common in humanities, uses author-page citation format.",
      current: false,
    },
    {
      title: "IEEE",
      description: "Used in engineering, cites sources with numbered brackets.",
      current: false,
    },
    {
      title: "Chicago",
      description: "Bibliography for humanities and author-date for sciences.",
      current: false,
    },
    {
      title: "Harvard",
      description:
        "A general author-date citation style widely used in academia.",
      current: false,
    },
  ];
  const [selected, setSelected] = useState(publishingOptions[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="sr-only">Change published status</Label>
      <div className="relative">
        <div className="inline-flex divide-x rounded-md outline-hidden">
          <div className="inline-flex items-center gap-x-1 rounded-l-md bg-gray-900 px-2 py-1.5 text-white">
            <CheckIcon aria-hidden="true" className="-ml-0.5 size-5" />
            <p className="text-lg font-medium">{selected.title}</p>
          </div>
          <ListboxButton className="inline-flex items-center  rounded-r-md bg-gray-900 p-1 outline-hidden hover:bg-indigo-500">
            <span className="sr-only">Change published status</span>
            <ChevronDownIcon
              aria-hidden="true"
              className="size-5 text-white forced-colors:text-[Highlight]"
            />
          </ListboxButton>
        </div>

        <ListboxOptions
          transition
          className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0"
        >
          {publishingOptions.map((option) => (
            <ListboxOption
              key={option.title}
              value={option}
              className="group cursor-default p-4 text-sm text-gray-900 select-none data-focus:bg-indigo-500 data-focus:text-white"
            >
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="font-normal group-data-selected:font-semibold">
                    {option.title}
                  </p>
                  <span className="text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                    <CheckIcon aria-hidden="true" className="size-5" />
                  </span>
                </div>
                <p className="mt-2 text-gray-500 group-data-focus:text-white">
                  {option.description}
                </p>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default Dropdown;
