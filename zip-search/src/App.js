import { useState } from "react";
import InfoTable from "./components/InfoTable";

const sampleData = [{"RecordNumber":"9467","Zipcode":"11356","ZipCodeType":"STANDARD","City":"COLLEGE POINT","State":"NY","LocationType":"PRIMARY","Lat":"40.78","Long":"-73.84","Xaxis":"0.21","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"College Point, NY","Location":"NA-US-NY-COLLEGE POINT","Decommisioned":"false","TaxReturnsFiled":"10492","EstimatedPopulation":"18183","TotalWages":"357006630","Notes":""},
                    {"RecordNumber":"9468","Zipcode":"11356","ZipCodeType":"STANDARD","City":"FLUSHING","State":"NY","LocationType":"ACCEPTABLE","Lat":"40.78","Long":"-73.84","Xaxis":"0.21","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"Flushing, NY","Location":"NA-US-NY-FLUSHING","Decommisioned":"false","TaxReturnsFiled":"10492","EstimatedPopulation":"18183","TotalWages":"357006630","Notes":""},
                    {"RecordNumber":"9469","Zipcode":"11356","ZipCodeType":"STANDARD","City":"QUEENS","State":"NY","LocationType":"NOT ACCEPTABLE","Lat":"40.78","Long":"-73.84","Xaxis":"0.21","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"Queens, NY","Location":"NA-US-NY-QUEENS","Decommisioned":"false","TaxReturnsFiled":"10492","EstimatedPopulation":"18183","TotalWages":"357006630","Notes":""}]


function App() {
  const [data, setData] = useState(sampleData)

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <InfoTable data={data}/>
    </div>
  );
}

export default App;
