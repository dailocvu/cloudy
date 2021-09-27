export const Stats = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      className="mx-4 sm:mx-6 lg:mx-auto lg:max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20 bg-gradient-to-br from-blue-400 to-blue-700 rounded-3xl"
    >
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="opacity-70">Trusted by</span> developers{" "}
          <span className="opacity-70"> from over </span> 80 planets
        </h2>
        <p className="mt-3 text-xl text-gray-300 sm:mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          repellat laudantium.
        </p>
      </div>
      <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div className="flex flex-col">
          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">
            Satisfied
          </dt>
          <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0">
          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">
            Support
          </dt>
          <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>
        </div>
        <div className="flex flex-col mt-10 sm:mt-0">
          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">
            Customers
          </dt>
          <dd className="order-1 text-5xl font-extrabold text-white">100k+</dd>
        </div>
      </dl>
    </div>
  );
};
