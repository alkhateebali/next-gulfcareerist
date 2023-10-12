import SearchBox from "../components/searchBox/SearchBox";

const HeroSection = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-blue-900/50 dark:to-blue-900"></div>
          <div className="bg-gradient-to-tl from-gray-50 via-gray-100 to-gray-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-blue-900/70 dark:via-blue-900/70 dark:to-blue-900/70"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  Are you ready for new  <br/><span className="inline bg-transparent text-blue-950  dark:text-gray-200">career horizons?</span>
                </h1>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Explore the best Gulf job websites and find thousands of
                  career opportunities in the region, start your journey to a
                  fulfilling career today.
                </p>
              </div>
              <div className="relative  z-20 bg-white  dark:bg-transparent rounded-md shadow-md mt-8  p-5   w-full   lg:mx-15 ">
                  <SearchBox direction="col" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
