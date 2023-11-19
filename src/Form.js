import React, { useState } from "react";

const countriesData = [
  {
    name: "Germany",
    states: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
    districts:[
        {
            Duesseldorf :["GD","G gg"],
            LeinfeldenEchterdingen:["Leinfelden","Echterdingen"]
        }
    
    ]
    
  },
  {
    name: "India",
    states: ["Delhi", "Kolkata", "Mumbai", "Bangalore"],
    district :["","G gg"]

  },
  {
    name: "France",
    states: ["Auvergne", "Bretagne", "Corse", "Centre"]
  }
];

function Form() {
  const [{ country, state,district }, setData] = useState({
    country: "Germany",
    state: "Leinfelden-Echterdingen",
    district:"Leinfelden"
  });

  const countries = countriesData.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ));

  const states = countriesData.find(item => item.name === country)?.states.map((state) => (
    <option key={state} value={state}>
      {state}
    </option>
  ));

  const districts = countriesData.find(item => item.states == state)?.districts.map((dist)=>(
    dist.find(dist === district)?.Duesseldorf.map((d)=>{
        <option key={d} value={d}>
        {d}
        </option>
    })
    
  ))

  function handleCountryChange(event) {
    setData(data => ({ state: '', country: event.target.value }));
  }

  function handleStateChange(event) {
    setData(data => ({ ...data, state: event.target.value }));
  }

  return (
    <form onSubmit={() => alert("Submitted")}>
      <div>
        <select value={country} onChange={handleCountryChange}>
          {countries}
        </select>
      </div>

      <div>
        <select value={state} onChange={handleStateChange}>
          {states}
        </select>
      </div>
      <div>
        <select value={district}>{districts}</select>
      </div>
      <input type="submit" />
    </form>
  );
}

export default Form;
