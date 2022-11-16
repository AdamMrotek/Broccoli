import HowItWorks from "../Components/HowItWorks.js";
import FeaturedRecipes from "../Components/FeaturedRecipes.js";
import MotionComponent from "../Components/MotionComponent.js";
import { useSignIn } from "../Hooks/useSignIn.js";
import "./Home.css";
function Home({ handlePopUp }) {
  const { signIn, error, isPending } = useSignIn();
  const testLogin = async () => {
    signIn("example@email.com", "123456");
  };
  return (
    <div>
      <img
        className="header__fixed-img"
        src="/broccoli-cut.png"
        alt="halved broccoli"
      ></img>
      <div className="header">
        <div className="header__text-backround"></div>
        <div className="header_container">
          <div className="header__text-box">
            <h1 className="heading-primary-title">Wellcome to Broccoli</h1>
            <p className="paragraph header__paragraph">
              Broccoli it the place for home chefs whose passion is
              sustainability. We take the food supply out of your mind, so you
              can focus on the things you enjoy!
            </p>
            <div className="header__buttons-container">
              <button
                onClick={() => handlePopUp()}
                className="btn margin-medium header__call-to-actions"
              >
                Join!
              </button>
              <button
                className="btn btn-outline header__call-to-actions"
                onClick={testLogin}
              >
                Test Account
              </button>
            </div>
          </div>
          {/* <div className="hero-image-container">
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
          </div> */}
        </div>
      </div>
      <HowItWorks handlePopUp={handlePopUp} />
      <FeaturedRecipes handlePopUp={handlePopUp} />
    </div>
  );
}
export default Home;
