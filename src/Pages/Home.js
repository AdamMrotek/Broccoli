import HowItWorks from "../Components/HowItWorks.js";
import FeaturedRecipes from "../Components/FeaturedRecipes.js";
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
            The place for home chefs whose passion is sustainability. We take
            the food supply out of your mind, so you can focus on the things you
            enjoy!
          </p>

          <button onClick={() => handlePopUp()} className="btn margin-medium">
            Join!
          </button>
        </div>
        <div className="hero-image-container">
          <img
            src="/hero-brocoli-main.png"
            className="hero__img"
            alt="broccoli"
          ></img>
          <img
            src="/hero-brocoli-twig.png"
            className="hero__img__animated"
            alt="broccoli"
          ></img>
        </div>
      </div>
      <HowItWorks handlePopUp={handlePopUp} />
      <FeaturedRecipes handlePopUp={handlePopUp} />
    </div>
  );
}
export default Home;
