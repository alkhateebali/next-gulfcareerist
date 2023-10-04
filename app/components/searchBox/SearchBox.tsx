"use client";
import Briefcase from "./icons/Briefcase";
import Location from "./icons/Location";
import useSearch from "./useSearch";


const SearchBox = () => {
  const { handleSubmit, onSubmit, register } = useSearch();
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="flex flex-wrap  p-5">
        <div className="join join-vertical lg:w-2/6 lg:mr-2 md:mt-4">
          <div className="join join-horizontal">
            <label htmlFor="what" className="text-lg pb-2 mr-2">
              What
            </label>
             <Briefcase/>
          </div>

          <input
            type="text"
            placeholder="Job title, keywords or company"
            className="input input-bordered input-primary  "
            {...register("keywords")}
          />
        </div>
        <div className="join join-vertical lg:w-2/6 lg:ml-2 sm:mt-4 ">
          <div  className="join join-horizontal" >
          <label htmlFor="where" className="text-lg pb-2 pr-2">
            Where
          </label>
          <Location />
          </div>
          <input
            type="text"
            placeholder="Town or region in Gulf countries"
            className="input input-bordered input-primary "
            {...register("location")}
          />
          <input hidden value={1} {...register("page")} />
        </div>
        <div className="pt-4 lg:ml-4  sm:mt-4 w-2/9 ">
          <button type="submit" className="btn  sm:w-full  ">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
