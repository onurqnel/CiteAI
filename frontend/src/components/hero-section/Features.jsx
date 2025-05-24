import {
  PaintBrushIcon,
  LinkIcon,
  CheckIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  EyeSlashIcon,
} from "@heroicons/react/20/solid";

const Features = () => {
  const features = [
    {
      name: "Citation Style",
      description:
        "Switch between APA, MLA, Chicago or any custom style with a single toggle.",
      icon: PaintBrushIcon,
    },
    {
      name: "URL & DOI",
      description:
        "Paste a URL or DOI and citeAI automatically retrieves complete citation",
      icon: LinkIcon,
    },
    {
      name: "Validation",
      description: "CiteAI flags missing fields and suggests corrections.",
      icon: CheckIcon,
    },
    {
      name: "Search",
      description:
        "Automatically searches related links to fill in any missing details.",
      icon: ClipboardDocumentListIcon,
    },
    {
      name: "Multiple Links",
      description:
        "Upload multiple sources, generate individual bibliographies",
      icon: DocumentTextIcon,
    },
    {
      name: "Privacy",
      description: "Citations or the source are not stored on our servers.",
      icon: EyeSlashIcon,
    },
  ];

  return (
    <div className="mx-auto mt-16 max-w-6xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {features.map(({ name, description, icon: Icon }) => (
          <div key={name} className="relative pl-9 space-y-1.5">
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
