import { useState } from "react";
import "./Body.css";

const Contact = () => {
  let nameStyling = "";
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const nameInputHandler = (event) => {
    setNameInput(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmailInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (nameInput === "" || emailInput === "") {
      console.log("One field is empty");
      nameStyling += "border border-red-600";
    } else {
      console.log("GOOD JOB, THE FIELDs WERE FILLED!");
    }
  };
  return (
    <div className="h-screen text-center">
      <form className="bg-[#CCDAEB] m-5 text-center p-10">
        <h1 className="font-bold text-[#032a5d]">Contact Me!</h1>
        <div className="py-3 flex flex-col">
          <label className="text-[#032a5d]">Name:</label>
          <input type="text" className={nameStyling} onChange={nameInputHandler} />
        </div>
        <div className="py-3 flex flex-col">
          <label className="text-[#032a5d]">Email:</label>
          <input type="text" onChange={emailInputHandler} />
        </div>
        <div className="py-3 flex flex-col">
          <label className="text-[#032a5d]">Message:</label>
          <textarea rows="5" cols="40" name="message"></textarea>
        </div>
        <button onClick={submitHandler} className="bg-[#f97444] text-white px-3 py-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
