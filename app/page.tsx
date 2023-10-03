
import SearchBox from "./components/searchBox/SearchBox";
import JobsGrid from "./components/jobsGrid/JobsGrid";


export default function Home() {
  return (
    <div className="container mx-auto">
      <SearchBox />
      <JobsGrid />
    </div>
  );
}
