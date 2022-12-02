/* import React from "react"; //react 17 den sonra bunu import etmeye gerek kalmadı */

import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { CountryType } from "./types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getCountries = () => {
    setLoading(true);
    axios
      .get<CountryType[]>("https://restcountries.com/v2/all")
      .then(res => setCountries(res.data))
      .catch(err => console.log(err))
      .finally(() => setTimeout(() => setLoading(false), 1000));
  };
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Loading loading={loading}>
        {countries.map(country => {
          return <Country key={country.name} country={country} />;
        })}
      </Loading>
    </div>
  );
}

export default App;
