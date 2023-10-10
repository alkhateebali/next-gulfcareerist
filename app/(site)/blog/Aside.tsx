import { getCategories } from "@/sanity/sanity-utils";
import Tag from "./Tag";
const Aside = async () => {
  const categories = await getCategories();
  return (

    <div className="block rounded-lg p-6  shadow-md dark:bg-default">
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
      Discover more of what matters to you
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {categories.map((category) => (
          <Tag key={category._id} title={category.title} />
       ))}
      </p>
    </div>
    
  );
};

export default Aside;
