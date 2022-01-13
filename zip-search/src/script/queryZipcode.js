export default async function queryZipcode(zipcode, setData){
    const res = await fetch("http://ctp-zip-api.herokuapp.com/zip/" + zipcode)
        .then(res => {
            if(res.status == '404'){
                alert("zip code not valid")
            }
            return res
        })
        .then(res => res.json())
        .then((result) => {
            setData(result)
            return result
        }).catch((error) => {
            console.log(error)
            return []
        })
}
