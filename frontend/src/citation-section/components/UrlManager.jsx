"use client";

import { useState } from "react";
import PublishingStatusSelect from "./Dropdown";
import UrlInput from "./UrlInput";
import HistoryList from "./HistoryList";

const UrlManager = () => {
  const [history, setHistory] = useState([
    { id: 1, name: "APA", avatar: "/apa.png", url: "https://example.com/apa" },
    { id: 2, name: "MLA", avatar: "/mla.png", url: "https://example.com/mla" },
    {
      id: 3,
      name: "IEEE",
      avatar: "/ieee.png",
      url: "https://example.com/ieee",
    },
    {
      id: 4,
      name: "Chicago",
      avatar: "/chicago.png",
      url: "https://example.com/chicago",
    },
    {
      id: 5,
      name: "Harvard",
      avatar: "/harvard.png",
      url: "https://example.com/harvard",
    },
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
        avatar: "/link.png",
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
        <UrlInput value={value} error={error} onChange={handleChange} />

        <div className="mt-4 flex items-center justify-between">
          <button
            type="submit"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Submit
          </button>
          <PublishingStatusSelect />
        </div>
      </form>

      <HistoryList history={history} onCopy={handleCopy} />
    </div>
  );
};

export default UrlManager;
