import HowItWorks from "../Components/HowItWorks.js";
import "./Home.css";
function Home({ handlePopUp }) {
  return (
    <div>
      <div className="header">
        <img
          className="header__fixed-img"
          src="/broccoli-cut.png"
          alt="halved broccoli"
        ></img>

        <div className="header__text-box">
          <h1 className="heading-primary-title">Wellcome to Broccoli</h1>
          <p className="paragraph">
            Place for home chefs, whos pation is sustainability. <br />
            We take the food supply out of your mind, so you can focus on the
            things you really enjoy!
          </p>

          <button onClick={() => handlePopUp()} className="btn margin-medium">
            Join!
          </button>
        </div>
        <img
          src="/broccoli-full.png"
          className="header__img"
          alt="broccoli"
        ></img>
      </div>
      <HowItWorks handlePopUp={handlePopUp} />
    </div>
  );
}
export default Home;
