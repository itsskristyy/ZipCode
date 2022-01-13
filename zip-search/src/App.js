import { useEffect, useState } from "react";
import InfoTable from "./components/InfoTable";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import queryZipcode from "./script/queryZipcode";

function App() {
  const [data, setData] = useState(sampleData) // need to be linkd to queryZipcode function
  const [curSearch, setCurSearch] = useState("10001")


  useEffect(
    () => {
      (queryZipcode(curSearch || "10001", setData))
    },
    [curSearch]
  )


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar/>
      <SearchBar setCurSearch={setCurSearch}/>
      <InfoTable data={data}/>
    </div>
  );
}

export default App;
