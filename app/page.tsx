import Image from "next/image";
import SearchBox from "./components/searchBox/SearchBox";
import CardList from "./components/cardList/CardList";

export default function Home() {
  return (
   
      <div className="container mx-auto">
        <SearchBox />
        <CardList/>
      </div>
 
  );
}
