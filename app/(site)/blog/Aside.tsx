import { getCategories } from "@/sanity/sanity-utils";
import SearchBox from "../components/searchBox/SearchBox";

const Aside = async () => {
  const categories = await getCategories();
  return (
    <div className="lg:fixed lg:top-52">
      <p className="text-md border-l-2 font-semibold">
        Discover more of what matters to you
      </p>
      <p className="py-4">
        {categories.map((category) => (
          <span className="badge badge-ghost  gap-2 font-semibold" key={category._id}>{category.title}</span>
        ))}
      </p>
    </div>
  );
};

export default Aside;
