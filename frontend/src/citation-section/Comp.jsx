"use client";

import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  PlusIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";

// ------------------------------------------------
//  Dropdown (yayın durumu seçimi) — alt bileşen
// ------------------------------------------------
const publishingOptions = [
  {
    title: "Published",
    description: "This job posting can be viewed by anyone who has the link.",
  },
  {
    title: "Draft",
    description: "This job posting will no longer be publicly accessible.",
  },
];

function PublishingStatusSelect() {
  const [selected, setSelected] = useState(publishingOptions[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="sr-only">Change published status</Label>
      <div className="relative">
        <div className="inline-flex divide-x divide-indigo-700 rounded-md outline-hidden">
          <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-indigo-600 px-3 py-2 text-white">
            <CheckIcon aria-hidden="true" className="-ml-0.5 size-5" />
            <p className="text-sm font-semibold">{selected.title}</p>
          </div>
          <ListboxButton className="inline-flex items-center rounded-l-none rounded-r-md bg-indigo-600 p-2 outline-hidden hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-indigo-400">
            <span className="sr-only">Change published status</span>
            <ChevronDownIcon aria-hidden="true" className="size-5 text-white" />
          </ListboxButton>
        </div>

        <ListboxOptions
          transition
          className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
        >
          {publishingOptions.map((option) => (
            <ListboxOption
              key={option.title}
              value={option}
              className="group cursor-default p-4 text-sm text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white"
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
                <p className="mt-2 text-gray-500 group-data-focus:text-indigo-200">
                  {option.description}
                </p>
              </div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}

// ------------------------------------------------
//  Asıl bileşen (Comp) — güncellenmiş sürüm
// ------------------------------------------------
const Comp = () => {
  const [history, setHistory] = useState([
    { id: 1, name: "APA", avatar: "/public/apa.png", url: "https://example.com/apa" },
    { id: 2, name: "MLA", avatar: "/public/mla.png", url: "https://example.com/mla" },
    { id: 3, name: "IEEE", avatar: "/public/ieee.png", url: "https://example.com/ieee" },
    { id: 4, name: "Chicago", avatar: "/public/chicago.png", url: "https://example.com/chicago" },
    { id: 5, name: "Harvard", avatar: "/public/harvard.png", url: "https://example.com/harvard" },
  ]);

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const v = e.target.value.trim();
    setValue(v);

    try {
      new URL(v.includes("://") ? v : `https://${v}`);
      setError(false);
    } catch {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error || !value) return;

    setHistory((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: value,
        avatar: "/public/link.png",
        url: value.includes("://") ? value : `https://${value}`,
      },
    ]);
    setValue("");
  };

  const handleCopy = (url) => {
    setValue(url);
    setError(false);
  };

  return (
    <div className="mx-auto max-w-lg">
      <form onSubmit={handleSubmit}>
        <label htmlFor="website" className="block text-sm/6 font-medium text-gray-900">
          Website
        </label>

        <div className="mt-2 grid grid-cols-1">
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://example.com"
            value={value}
            onChange={handleChange}
            aria-invalid={error}
            aria-describedby="url-error"
            className={`col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-base outline-1 -outline-offset-1 focus:outline-2 sm:pr-9 sm:text-sm/6
              ${
                error
                  ? "text-red-900 outline-red-300 placeholder:text-red-300 focus:outline-red-600"
                  : "text-gray-900 outline-gray-300 focus:outline-gray-600"
              }`}
          />
          {error && (
            <ExclamationCircleIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-3 self-center justify-self-end size-5 text-red-500 sm:size-4"
            />
          )}
        </div>

        {error && (
          <p id="url-error" className="mt-2 text-sm text-red-600">
            Not a valid URL.
          </p>
        )}

        {/* Submit düğmesi ile dropdown aynı satırda */}
        <div className="mt-4 flex items-center justify-between">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Submit
          </button>

          {/* Sağ tarafa hizalanan dropdown */}
          <PublishingStatusSelect />
        </div>
      </form>

      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-500">History</h3>
        <ul role="list" className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
          {history.map((item) => (
            <li key={item.id} className="flex items-center justify-between space-x-3 py-4">
              <div className="flex min-w-0 flex-1 items-center space-x-3">
                <img alt="" src={item.avatar} className="size-10 rounded-full shrink-0" />
                <p className="truncate text-sm font-medium text-gray-900">{item.name}</p>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(item.url)}
                className="inline-flex items-center gap-x-1.5 text-sm/6 font-semibold text-gray-900"
              >
                <PlusIcon aria-hidden="true" className="size-5 text-gray-400" />
                Copy <span className="sr-only">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comp;
