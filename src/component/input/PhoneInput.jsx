import { useRef, useState, useEffect } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput, { getCountryCallingCode } from "react-phone-number-input";
import '../../screens/css/login.css'
import Input from "./Input";


const select = document.querySelector(".PhoneInputCountrySelect");

function PhoneInputField() {
  const [selectValue, setSelectValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const img = document.querySelector(".PhoneInputCountryIconImg");
    if (img) img.alt = "";
  }, [selectValue]);

  const handleSelectChange = selectValue => {
    console.log(selectValue);
    console.log(typeof selectValue);
    // select.title = getCountryCallingCode(selectValue);
    setSelectValue(selectValue);
  };

  return (
    <>
      <label className="label" htmlFor="number">Phone Number</label>
      <div className=" phone-group form-input-box">
        <PhoneInput className="input" 
          style={{ width:"150px"}}
          placeholder="Enter phone number"
          value={selectValue}
          defaultCountry="NG"
          international
          countryCallingCodeEditable={false}
          ref={inputRef}
          onChange={handleSelectChange}
        />
        <input style={{marginLeft:"-30px", borderLeft: "2px solid #3B043B", paddingLeft:"20px"}}
              id="email" name="email"
              className="input" type="number" placeholder="987654"/>
      </div>
    </>
  );
}

export default PhoneInputField;
