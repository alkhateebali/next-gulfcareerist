"use client";
import useSearch from "./useSearch";
const SearchBox = () => {
  const { handleSubmit, onSubmit, register } = useSearch();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap mx-auto p-5">
      <div className="join join-vertical">
        <label htmlFor="what" className="text-lg pb-2">What</label>
          <input
            type="text"
            name="keywords"
            placeholder="Job title, keywords or company"
            className="input input-bordered input-primary w-full  lg:mr-2 md:mt-4"
            {...register}
          />
        </div>
        <div className="join join-vertical">
        <label htmlFor="where" className="text-lg pb-2">Where</label>
          <input
            type="text"
            name="location"
            placeholder="Town or region"
            className="input input-bordered input-primary w-full lg:ml-2 sm:mt-4"
            {...register}
          />
        </div>
        <div>
          <button className="btn lg:ml-4  sm:mt-4">Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
