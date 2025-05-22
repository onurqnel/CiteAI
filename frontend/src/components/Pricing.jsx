import { CheckIcon } from "@heroicons/react/20/solid";

const Pricing = () => {
  const tiers = [
    {
      name: "Personal",
      id: "tier-personal",
      href: "#",
      priceMonthly: "$29",
      description:
        "The perfect plan if you're just getting started with our product.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Audience segmentation",
        "Advanced analytics",
        "Email support",
        "Marketing automations",
      ],
      featured: true,
    },
    {
      name: "Team",
      id: "tier-team",
      href: "#",
      priceMonthly: "$99",
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "Priority support",
        "Single sign-on",
        "Enterprise integrations",
        "Custom reporting tools",
      ],
      featured: false,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative isolate px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-5xl font-medium tracking-tight text-balance text-black ">
          Pricing
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative shadow-2xl"
                : "sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 bg-white/80"
            )}
          >
            <h3
              id={tier.id}
              className="text-base/7 font-semibold text-indigo-600"
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-gray-900">
                {tier.priceMonthly}
              </span>
              <span className="text-base text-gray-500">/month</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-600">{tier.description}</p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-indigo-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                  : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
