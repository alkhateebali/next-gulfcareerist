interface Props {
  key: string;
  title: string;
}
const Tag = ({ title, key }: Props) => {
  return (
    <span
      key={key}
      className="inline-block px-2 py-1 text-small font-semibold leading-none text-white bg-gray-400   dark:bg-primary   rounded-full  my-4 p-5 mx-1"
    >
      {title}
    </span>
  );
};

export default Tag;
