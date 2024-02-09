import React, { useState } from "react";
import {
    name_validation,
    desc_validation,
    email_validation,
    num_validation,
    password_validation,
  } from "../utils/ContactValidation"
  

function ContactPage() {
  const [countryOption, setCountryOption] = useState("");
  const [multiCountryOption, setMultiCountryOption] = useState([]);
  const [gender, setGender] = useState("male");
  const [terms, setTerms] = useState(false);
  const [contactDate, setContactDate] = useState("");
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  function handleMultiCountry(e) {
    setMultiCountryOption(
      [...e.target.selectedOptions].map((country) => country.value)
    );
  }

  function handleDate(e) {
    setContactDate(e.target.value);
  }

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Name is required.');
    } else {
      setNameError('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    // Optionally reset the error message as the user types
    if (nameError) setNameError('');
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(countryOption);
    console.log(terms);
    console.log(multiCountryOption);
    console.log(contactDate);
  }


  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-auto">
        <div className="container mx-auto">
          <h1 className="text-7xl">ContactPage</h1>
          <div className="my-10">
            <form onSubmit={handleSubmit} className="grid">
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={validateName}
                    className="ml-2 border border-black"
                  />
                </label>
                {nameError && <div style={{ color: "red" }}>{nameError}</div>}
              </div>
              <div className="my-10">
                <textarea
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                  className="p-4 border"
                ></textarea>
              </div>
              <div className="grid grid-cols-4 my-10">
                <label htmlFor="country">
                  <select
                    name="country"
                    id="country"
                    autoComplete="country-name"
                    className="block w-full col-span-1 border"
                    onChange={(e) => setCountryOption(e.target.value)}
                    value={countryOption}
                    // defaultValue={"Sweden"}
                  >
                    <option value="" disabled>
                      Select a country
                    </option>
                    <option value="Sweden">Sweden</option>
                    <option value="England">England</option>
                    <option value="USA">USA</option>
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-4 my-10">
                <label htmlFor="country">
                  <select
                    name="multi-country"
                    id="multi-country"
                    autoComplete="country-name"
                    className="block w-full col-span-1 border"
                    onChange={handleMultiCountry}
                    value={multiCountryOption}
                    multiple={true}
                    // defaultValue={"Sweden"}
                  >
                    <option value="" disabled>
                      Select a country
                    </option>
                    <option value="Sweden">Sweden</option>
                    <option value="England">England</option>
                    <option value="USA">USA</option>
                  </select>
                </label>
              </div>
              <label htmlFor="female">
                <div className="flex gap-x-3">
                  <input
                    type="radio"
                    name="female"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </label>
              <div className="flex gap-x-3">
                <input
                  type="radio"
                  name="male"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex gap-x-3">
                <input
                  type="radio"
                  name="other"
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                  value="other"
                />
                <label htmlFor="other">Other</label>
              </div>
              <div className="flex my-10">
                <label htmlFor="date"></label>
                <input
                  type="date"
                  name="date"
                  className="p-2 border"
                  value={contactDate}
                  onChange={handleDate}
                />
              </div>
              <div className="my-10">
                <input
                  className="mr-2"
                  type="checkbox"
                  name="terms"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                <label htmlFor="terms" className="font-medium text-gray-900">
                  Terms of Agreement
                </label>
                <p className="text-gray-500">
                  Do you accept our terms of agreement?
                </p>
              </div>

              <button
                type="submit"
                className="block px-8 py-2 bg-white border-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;