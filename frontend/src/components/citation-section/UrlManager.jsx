import { useState } from "react";
import Dropdown from "./Dropdown";
import UrlInput from "./Input";
import HistoryList from "./History";
import Button from "./Submit";

const publishingOptions = [
  {
    title: "APA",
    description: "Used in social sciences, author-date format.",
    avatar: "/apa.png",
  },
  {
    title: "MLA",
    description: "Common in humanities, author-page format.",
    avatar: "/mla.png",
  },
  {
    title: "IEEE",
    description: "Engineering style, uses numbered brackets.",
    avatar: "/ieee.png",
  },
  {
    title: "Chicago",
    description: "Humanities bibliography / sciences author-date.",
    avatar: "/chicago.png",
  },
  {
    title: "Harvard",
    description: "General author-date style.",
    avatar: "/harvard.png",
  },
];

const UrlManager = () => {
  const [history, setHistory] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [customErrorMsg, setCustomErrorMsg] = useState("");
  const [selected, setSelected] = useState(publishingOptions[0]);
  const [, setLoading] = useState(false);

  const styleMap = {
    APA: "APA7",
    MLA: "MLA",
    Chicago: "Chicago",
    IEEE: "IEEE",
    Harvard: "Harvard",
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (error) {
      setError(false);
      setCustomErrorMsg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = value.trim();

    if (!trimmed) {
      setError(true);
      setCustomErrorMsg("URL can not be empty!");
      return;
    }

    const urlNormalized = trimmed.includes("://") ? trimmed : `https://${trimmed}`;
    const id = Date.now();

    setHistory((prev) => [
      ...prev,
      {
        id,
        name: trimmed,
        avatar: selected.avatar,
        url: urlNormalized,
        style: selected.title,
        citation: null,
      },
    ]);

    setLoading(true);

    try {
      const res = await fetch('/api/cite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: urlNormalized, style: styleMap[selected.title] }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const { citation } = await res.json();

      setHistory((prev) =>
        prev.map((item) => (item.id === id ? { ...item, citation } : item))
      );
    } catch (err) {
      console.error(err);
      setHistory((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, citation: "❌ Could not generate citation." }
            : item
        )
      );
    } finally {
      setLoading(false);
    }

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

        <div className="mt-4 flex justify-between">
          <Button />
          <Dropdown
            options={publishingOptions}
            selected={selected}
            onChange={setSelected}
          />
        </div>
      </form>
      <HistoryList history={history} onCopy={handleCopy} />
    </>
  );
};

export default UrlManager;
