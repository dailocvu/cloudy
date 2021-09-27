const Feature = (props) => {
  return (
    <div className="relative pt-24 bg-white py-8 sm:py-24 ">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2
          data-aos="fade-up"
          className="text-base font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 uppercase "
        >
          Deploy faster
        </h2>
        <p
          data-aos="fade-up"
          className="mt-2 text-3xl font-extrabold text-gray-700 sm:text-4xl lg:text-5xl"
        >
          Everything you need to deploy your app
        </p>
        <div data-aos="zoom-in" className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {props.features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-400 to-pink-500   rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-700 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
