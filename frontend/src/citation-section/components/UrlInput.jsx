"use client";

import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

const UrlInput = ({ value, error, onChange }) => {
  return (
    <div>
      <label
        htmlFor="website"
        className="block text-sm font-medium text-gray-900"
      >
        Website
      </label>
      <div className="relative mt-2">
        <input
          id="website"
          type="url"
          placeholder="https://example.com"
          value={value}
          onChange={onChange}
          aria-invalid={error}
          aria-describedby="url-error"
          className={`block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base sm:text-sm
            ${
              error
                ? "text-red-900 ring-1 ring-red-300 placeholder:text-red-300 focus:ring-red-600"
                : "text-gray-900 ring-1 ring-gray-300 focus:ring-gray-600"
            }`}
        />
        {error && (
          <ExclamationCircleIcon className="absolute inset-y-0 right-3 my-auto h-5 w-5 text-red-500" />
        )}
      </div>
    </div>
  );
};

export default UrlInput;
