import { FC } from "react";
import { CountryType } from "../types";

interface ICountryProps {
  country: CountryType;
}
const Country: FC<ICountryProps> = props => {
  const { country } = props;
  return (
    <p>
      {country.name} - {country.capital}
    </p>
  );
};

export default Country;
