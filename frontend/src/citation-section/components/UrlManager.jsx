/* components/UrlManager.js */
import { useState } from "react";
import Dropdown from "./Dropdown";
import UrlInput from "./UrlInput";
import HistoryList from "./HistoryList";
import Button from "./Button";

const publishingOptions = [
  { title: "APA", description: "Used in social sciences, author-date format.", avatar: "/apa.png" },
  { title: "MLA", description: "Common in humanities, author-page format.", avatar: "/mla.png" },
  { title: "IEEE", description: "Engineering style, uses numbered brackets.", avatar: "/ieee.png" },
  { title: "Chicago", description: "Humanities bibliography / sciences author-date.", avatar: "/chicago.png" },
  { title: "Harvard", description: "General author-date style.", avatar: "/harvard.png" },
];

const UrlManager = () => {
  // Başlangıçta boş geçmiş listesi
  const [history, setHistory] = useState([]);

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [customErrorMsg, setCustomErrorMsg] = useState("");
  const [selected, setSelected] = useState(publishingOptions[0]);

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
        avatar: selected.avatar,
        url: trimmed.includes('://') ? trimmed : `https://${trimmed}`,
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