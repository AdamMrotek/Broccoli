import HowItWorks from "../Components/HowItWorks.js";
import "./Home.css";
function Home({ handlePopUp }) {
  return (
    <div>
      <div className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--sub"> A Chef In Every</span>
            <span className="heading-primary--sub"> Tasty Meal List</span>
            <label htmlFor="email">
              <button
                onClick={() => handlePopUp()}
                className="btn margin-medium"
              >
                Join!
              </button>
            </label>
          </h1>
        </div>
      </div>
      <HowItWorks handlePopUp={handlePopUp} />
    </div>
  );
}
export default Home;
