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
        "Switch between styles with a single toggle.",
      icon: PaintBrushIcon,
    },
    {
      name: "URL & DOI",
      description:
        "Paste URL or DOI and CiteAI will generate the citation.",
      icon: LinkIcon,
    },
    {
      name: "Validation",
      description: "CiteAI flags missing fields and makes deeper search for corrections.",
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
      <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {features.map(({ name, description, icon: Icon }) => (
          <div key={name} className="relative pl-16 space-y-1.5">
            {Icon && (
              <Icon
                aria-hidden="true"
                className="absolute top-0.5 h-5 w-5 text-black"
              />
            )}
            <dt className="ml-7 font-semibold text-black text-lg">{name}</dt>
            <dd className="ml-1 text-gray-600">{description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Features;
