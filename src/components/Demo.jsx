import React, { useEffect, useState } from 'react'; // Correctly import useEffect and useState
const Demo = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all') // Use the correct API URL
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((error) => console.error('Error fetching the data', error));
  }, []);

  return (
    <div>
      <h1>Countries and Flags</h1>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.cca3}>
              <td>{country.name.common}</td>
              <td>
                <img src={country.flags.svg} alt={`${country.name.common} flag`} width={50} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
