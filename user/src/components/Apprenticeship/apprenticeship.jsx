import apprenticeship from "./../../Assets/apprenticeship.jpg";
import "./apprenticeship.css";

const Apprenticeship = () => {
  return (
    <>
      <header id="apprenticeship" className="header" />
      <div id="#home" className="image-container-app">
        <div className="overlay-app"></div>
        <img
          src={apprenticeship}
          alt="Background"
          className="background-image-app"
        />
        <div className="text-container-app">
          <p className="text-app">Join our apprenticeship program</p>
          <button className="apply-button-app">APPLY NOW</button>
        </div>
      </div>
    </>
  );
};

export default Apprenticeship;
