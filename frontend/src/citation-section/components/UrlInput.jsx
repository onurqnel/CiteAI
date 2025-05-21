"use client";

import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

const UrlInput = ({ value, error, errorMsg, onChange }) => {
  return (
    <div>
      <div className="relative mt-4">
        <input
          id="website"
          type="url"
          placeholder="https://example.com"
          value={value}
          onChange={onChange}
          aria-invalid={error}
          aria-describedby="url-error"
          className={`block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base sm:text-xl
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
      {error && errorMsg && (
        <p id="url-error" className="mt-1 text-sm text-red-600">
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export default UrlInput;
