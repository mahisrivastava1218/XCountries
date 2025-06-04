import React,{useEffect, useState}from "react";
 function CountryCard({name,flag,abrr}){
  return(
 <div style={{border:"1px solid gray",justifyContent:"center",borderRadius:"4px",height:"200px",width:"200px",display:"flex",gap:"10px",flexDirection:"column",alignItems:"center"}}>
     <img style={{width:"100px",height:"100px",objectFit:"contain"}} src={flag} alt={flag}/>
     <div>{name}</div>
     </div>
  )
  }
const Countries=()=>{
  
  const API_ENDPOINT="https://xcountries-backend.azurewebsites.net/all";
  const[countryData,setCountryData] = useState([])
  
  useEffect(()=>{
  fetch(API_ENDPOINT)
  .then((res)=>res.json())
  .then((data)=>setCountryData(data))
  .catch((error)=> console.error("Error fetching data:",error));
  },[])
  // const data = dummyData();
  console.log(countryData)
  // const items=[1,2,3,4,5,6];
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center",justifyContent:"center"}}>
     {countryData.map((item)=>(
     <CountryCard name={item.name} flag={item.flag} abbr={item.abbr} key={item.abbr}/>
    ))}

    </div>
  );
}

export default Countries;