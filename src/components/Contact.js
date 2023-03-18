const Contact = () => {
  return (
    <div className="h-screen text-center">
      <form className="bg-[#CCDAEB] inline-block text-center p-10">
        <h1 className="font-bold text-[#032a5d]">Contact Me!</h1>
        <div className="py-3 flex flex-col">
          <label className="text-[#032a5d]">Name:</label>
          <input type="text" />
        </div>
        <div className="py-3 flex flex-col">
          <label className="text-[#032a5d]">Email:</label>
          <input type="text" />
        </div>
        <div className="py-3 flex flex-col">
          <label className="text-[#032a5d]">Message:</label>
          <textarea name="message"></textarea>
        </div>
        <button className="bg-[#f97444] text-white px-3 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
