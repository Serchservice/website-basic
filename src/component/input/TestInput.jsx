import { useEffect, useState } from "react";
import { test } from "./test.js";

const sortFunc = (a, b) => {
  const countryA = a.name.common;
  const countryB = b.name.common;
  return countryA.localeCompare(countryB);
};

function TestInput() {
  const [countryState, setCountryState] = useState({
    loading: false,
    countries: test,
    errorMessage: "",
  });
  const [selectedCountry, setSelectedCountry] = useState();

  const { loading, countries } = countryState;

  const sortedCountries = countries.sort(sortFunc);
  const countrySelected = countries.find(obj => obj.name.common === selectedCountry);

  const handleSelectChange = e => {
    setSelectedCountry(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set spinner
        setCountryState({ ...countryState, loading: true });

        //  fetch data
        const dataUrl = "https://restcountries.com/v3.1/all";
        const res = await fetch(dataUrl);
        const data = await res.json();

        if (data) {
          const sortedCountries = data.sort(sortFunc);
          setCountryState({
            ...countryState,
            countries: sortedCountries,
            loading: false,
          });
        }
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry something went wrong",
        });
      }
    };
    //  To make fetch request
    //  fetchData();
  }, []);

  return (
    <>
      <section>
        {/* header section */}
        <div>
          <p>
            Select Country / <br />
            auto flag & area code
          </p>
        </div>

        {/* body section */}
        <div>
          {loading === true ? (
            <div>
              <p>...loading</p>
            </div>
          ) : (
            <div>
              <div>
                <select value={selectedCountry} onChange={handleSelectChange}>
                  <option>--Select Country--</option>
                  {sortedCountries.map((item, idx) => {
                    return (
                      <option key={idx} value={item.name.common}>
                        {item.name.common}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div>
                <div>
                  <img src={countrySelected && countrySelected.flags.png} alt="" />
                </div>
                <div>
                  <p>
                    {countrySelected && countrySelected.idd.root}
                    {countrySelected && countrySelected.idd.suffixes}
                  </p>
                </div>
                <div>
                  <input type="tel" placeholder="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default TestInput;
