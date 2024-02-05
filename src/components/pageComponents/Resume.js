import resumeSvg from "../../images/resume.svg";
import resume from "../../images/Resume-Tech-PDF.pdf";

import "./Resume.css";

const Resume = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <img className="py-5" src={resumeSvg}></img>
      <div className="text-center p-8">
        <h1 className="font-bold text-5xl mb-14">My Resume</h1>
        <a href={resume} download="Resume">
          <button className="font-bold text-4xl border-4 border-[#032a5d] p-5 rounded-lg text-white download-btn">Download</button>
        </a>
      </div>
    </div>
  );
};
export default Resume;
