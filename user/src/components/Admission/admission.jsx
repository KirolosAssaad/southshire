import universityStudents from "./../../Assets/university-students.jpg";
import "./admission.css";

const Admission = () => {
  return (
    <>
      <header id="home" className="header"/>
      <div id="#home" className="image-container">
        <div className="overlay"></div>
        <img
          src={universityStudents}
          alt="Background"
          className="background-image"
        />
        <div className="text-container">
          <p className="text">BECOME A PART OF SOUTHSHIRE</p>
          <button className="apply-button">APPLY NOW</button>
        </div>
      </div>
    </>
  );
};

export default Admission;
