import React from "react"
import Cell from "./Cell"

const sampleData = {"RecordNumber":"9467",
                    "Zipcode":"11356",
                    "ZipCodeType":"STANDARD",
                    "City":"COLLEGE POINT",
                    "State":"NY",
                    "LocationType":"PRIMARY",
                    "Lat":"40.78",
                    "Long":"-73.84",
                    "Xaxis":"0.21",
                    "Yaxis":"-0.72",
                    "Zaxis":"0.65",
                    "WorldRegion":"NA",
                    "Country":"US",
                    "LocationText":"College Point, NY",
                    "Location":"NA-US-NY-COLLEGE POINT",
                    "Decommisioned":"false",
                    "TaxReturnsFiled":"10492",
                    "EstimatedPopulation":"18183",
                    "TotalWages":"357006630",
                    "Notes":""}


export default function InfoTable(props){
    return (
       props.data.map((datum) => <Cell info={datum} key={datum.RecordNumber}/>) 
    )
}