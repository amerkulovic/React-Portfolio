import { useState } from "react";
import "../../pages/Body.css";

const Contact = () => {
  const [nameInput, setNameInput] = useState("");
  const [nameStyling, setNameStyling] = useState("w-1/2 max-sm:w-5/6 rounded-lg");
  const [emailInput, setEmailInput] = useState("");
  const [emailStyling, setEmailStyling] = useState("w-1/2 max-sm:w-5/6 rounded-lg");

  const nameInputHandler = (event) => {
    if (nameInput.trim().length > 0) {
      setNameStyling("w-1/2 max-sm:w-5/6 rounded-lg");
    }
    setNameInput(event.target.value);
  };

  const emailInputHandler = (event) => {
    if (emailInput.trim().length > 0) {
      setEmailStyling("w-1/2 max-sm:w-5/6 rounded-lg");
    }
    setEmailInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (nameInput === "") {
      setNameStyling("w-1/2 max-sm:w-5/6 rounded-lg border border-red-600 bg-red-200");
    } else {
      // setNameInput("");
      // setEmailInput("");
      setNameStyling("w-1/2 max-sm:w-5/6 rounded-lg");
    }
    if (emailInput === "") {
      setEmailStyling("w-1/2 max-sm:w-5/6 rounded-lg border border-red-600 bg-red-200");
    } else {
      // setNameInput("");
      // setEmailInput("");
      setEmailStyling("w-1/2 max-sm:w-5/6 rounded-lg");
    }
  };
  return (
    <div className="text-center flex justify-center items-start">
      <form className="bg-[#CCDAEB] m-5 text-center p-10 rounded-lg w-1/2 max-sm:w-5/6 max-lg:w-3/4 transition-all duration-1000">
        <h1 className="font-bold text-[#032a5d] text-3xl">Contact Me!</h1>
        <div className="py-3 flex flex-col justify-center items-center">
          <label className="text-[#032a5d] m-3 font-bold">Name:</label>
          <input type="text" className={nameStyling} onChange={nameInputHandler} />
        </div>
        <div className="py-3 flex flex-col justify-center items-center">
          <label className="text-[#032a5d] m-3 font-bold">Email:</label>
          <input type="email" className={emailStyling} onChange={emailInputHandler} />
        </div>
        <div className="py-3 flex flex-col justify-center items-center">
          <label className="text-[#032a5d] m-3 font-bold">Message:</label>
          <textarea className="w-1/2 max-sm:w-5/6 rounded-lg" rows="5" name="message"></textarea>
        </div>
        <button onClick={submitHandler} className="bg-[#f97444] text-white px-6 py-1 rounded-lg text-lg mt-3 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
