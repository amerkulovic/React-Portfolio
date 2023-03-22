import resumeSvg from "../../images/resume.svg";
import "./Resume.css";

const Resume = () => {
  const onButtonClick = () => {
    fetch("ATS Resume.docx").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ATS Resume.docx";
        alink.click();
      });
    });
  };
  return (
    <div className="flex flex-wrap items-center justify-center">
      <img className="py-5" src={resumeSvg}></img>
      <div className="text-center p-8">
        <h1 className="font-bold text-5xl mb-14">My Resume</h1>
        <button onClick={onButtonClick} className="font-bold text-4xl border-4 border-[#032a5d] p-5 rounded-lg text-white download-btn">
          Download
        </button>
      </div>
    </div>
  );
};
export default Resume;
