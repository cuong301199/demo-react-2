import videoHomePage from "../../assets/hero.mp4";
const Homepage = () => {
  return (
    <div className="homepage-container">
      <video width="600" height="500" autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};

export default Homepage;
