"use client";

import { useState } from "react";
import PublishingStatusSelect from "./Dropdown";
import UrlInput from "./UrlInput";
import HistoryList from "./HistoryList";

const UrlManager = () => {
  const [history, setHistory] = useState([
    { id: 1, name: "APA", avatar: "/apa.png", url: "https://example.com/apa" },
    { id: 2, name: "MLA", avatar: "/mla.png", url: "https://example.com/mla" },
    { id: 3, name: "IEEE", avatar: "/ieee.png", url: "https://example.com/ieee" },
    { id: 4, name: "Chicago", avatar: "/chicago.png", url: "https://example.com/chicago" },
    { id: 5, name: "Harvard", avatar: "/harvard.png", url: "https://example.com/harvard" },
  ]);

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [customErrorMsg, setCustomErrorMsg] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (error) {
      setError(false);
      setCustomErrorMsg("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = value.trim();
    if (!trimmed) {
      setError(true);
      setCustomErrorMsg("URL can not be empty!");
      return;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: trimmed,
        avatar: "/link.png",
        url: trimmed.includes("://") ? trimmed : `https://${trimmed}`,
      },
    ]);
    setValue("");
    setError(false);
    setCustomErrorMsg("");
  };

  const handleCopy = (url) => {
    setValue(url);
    setError(false);
    setCustomErrorMsg("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <UrlInput
          value={value}
          error={error}
          errorMsg={customErrorMsg}
          onChange={handleChange}
        />

        <div className="mt-4 flex items-center justify-between">
          <button
            type="submit"
            className="rounded-md bg-gray-900 px-2 py-1.5 text-lg font-medium text-white hover:bg-indigo-500"
          >
            Submit
          </button>
          <PublishingStatusSelect />
        </div>
      </form>

      <HistoryList history={history} onCopy={handleCopy} />
    </>
  );
};

export default UrlManager;