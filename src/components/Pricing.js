import { CheckIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = (props) => {
  return (
    <div className="max-w-7xl mx-auto sm:py-24 px-4 bg-white sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <div
            data-aos="fade-up"
            className="max-w-xl mx-auto py-16 px-4 sm:pb-48 sm:px-6 lg:max-w-4xl lg:px-8"
          >
            <p className="mb-6 font-sans text-2xl font-bold tracking-tight text-center text-gray-500 sm:text-xl sm:leading-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Gobal{" "}
              </span>
              digital experience
            </p>
            <p className="mb-6 font-sans text-4xl font-bold tracking-tight text-center text-gray-800 sm:text-3xl sm:leading-none">
              Build apps faster, make smarter business decisions, and
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                {" "}
                connect people{" "}
              </span>
              anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Tiers */}
      <div
        data-aos="zoom-in"
        className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"
      >
        {props.pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative p-8 bg-white border border-gray-300 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {tier.title}
              </h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 left-1/3 py-1.5 px-4 bg-gray-800  rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <span className="text-5xl font-extrabold tracking-tight ">
                  ${tier.price}
                </span>
                <span className="ml-1 text-xl font-semibold ">
                  {tier.frequency}
                </span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon
                      className="flex-shrink-0 w-6 h-6 text-purple-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/*Button*/}
            <button
              href="#"
              className={classNames(
                tier.mostPopular
                  ? "bg-gray-800 hover:bg-gray-700 text-white hover:opacity-90"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-100",
                "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
              )}
            >
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
