const HeroSection = () => {
  return (
    <>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-5">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-3xl lg:text-4xl lg:max-w-7xl">
                  Welcome to Gulf Careerist
                </h1>
                <p className="max-w-xl mx-auto mt-2 text-base leading-relaxed text-gray-500">
                  Explore the best Gulf job websites and find thousands of
                  career opportunities in the region
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
