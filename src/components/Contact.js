import { useState } from "react";
import "./Body.css";

const Contact = () => {
  const [nameInput, setNameInput] = useState("");
  const [nameStyling, setNameStyling] = useState("w-1/2 max-sm:w-full rounded-lg");
  const [emailInput, setEmailInput] = useState("");
  const [emailStyling, setEmailStyling] = useState("w-1/2 max-sm:w-full rounded-lg");

  const nameInputHandler = (event) => {
    setNameInput(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (nameInput === "") {
      setNameStyling("w-1/2 max-sm:w-full rounded-lg border border-red-600");
    } else {
      // setNameInput("");
      // setEmailInput("");
      setNameStyling("w-1/2 max-sm:w-full rounded-lg");
    }
    if (emailInput === "") {
      setEmailStyling("w-1/2 max-sm:w-full rounded-lg border border-red-600");
    } else {
      // setNameInput("");
      // setEmailInput("");
      setEmailStyling("w-1/2 max-sm:w-full rounded-lg");
    }
  };
  return (
    <div className="h-screen text-center flex justify-center items-start">
      <form className="bg-[#CCDAEB] m-5 text-center p-10 rounded-lg w-1/2 max-sm:w-full max-lg:w-3/4">
        <h1 className="font-bold text-[#032a5d] text-3xl">Contact Me!</h1>
        <div className="py-3 flex flex-col justify-center items-center">
          <label className="text-[#032a5d] m-3">Name:</label>
          <input type="text" className={nameStyling} onChange={nameInputHandler} />
        </div>
        <div className="py-3 flex flex-col justify-center items-center">
          <label className="text-[#032a5d] m-3">Email:</label>
          <input type="email" className={emailStyling} onChange={emailInputHandler} />
        </div>
        <div className="py-3 flex flex-col justify-center items-center">
          <label className="text-[#032a5d] m-3">Message:</label>
          <textarea className="w-1/2 max-sm:w-full rounded-lg" rows="5" name="message"></textarea>
        </div>
        <button onClick={submitHandler} className="bg-[#f97444] text-white px-6 py-1 rounded-lg text-lg mt-3 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
