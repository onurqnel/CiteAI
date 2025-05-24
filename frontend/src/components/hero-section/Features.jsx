import {
  PaintBrushIcon,          // note the **Icon** suffix
  LinkIcon,
  CheckIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  EyeSlashIcon,
} from "@heroicons/react/20/solid";

const Features = () => {
  const features = [
    {
      name: "Style Formatting",
      description:
        "Generate citations instantly in APA, MLA, Chicago, IEEE, or any custom style with a single toggle.",
      icon: PaintBrushIcon,
    },
    {
      name: "URL & DOI Scraping",
      description:
        "Paste a link or DOI and citeAI retrieves author, title, publisher, and date details automatically.",
      icon: LinkIcon,
    },
    {
      name: "OpenAI Validation",
      description:
        "The model flags missing fields, normalises capitalisation, and suggests corrections before export.",
      icon: CheckIcon,
    },
    {
      name: "Batch Processing",
      description:
        "Upload multiple links or PDFs and receive a deduplicated bibliography in seconds.",
      icon: ClipboardDocumentListIcon,
    },
    {
      name: "Export Options",
      description:
        "Copy to clipboard, download BibTeX, or push entries directly to reference managers such as Zotero or EndNote.",
      icon: DocumentTextIcon,
    },
    {
      name: "Privacy",
      description:
        "All processing is performed in memory; no citations or source texts are persisted on the server.",
      icon: EyeSlashIcon,
    },
  ];

  return (
    <div className="mx-auto mt-16 max-w-6xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {features.map(({ name, description, icon: Icon }) => (
          <div key={name} className="relative pl-9 space-y-1.5 text-justify">
            {Icon && (
              <Icon
                aria-hidden="true"
                className="absolute top-0.5 left-2 h-5 w-5 text-black"
              />
            )}
            <dt className="font-semibold text-gray-700">{name}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Features;
