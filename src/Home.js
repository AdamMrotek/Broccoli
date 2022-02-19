import HowItWorks from "./HowItWorks.js";
function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main"> A Chef In Every</span>
            <span className="heading-primary--sub"> Tasty Meal List</span>
            <a href="#features" className="btn margin-medium">
              Log in
            </a>
          </h1>
        </div>
      </div>
      <HowItWorks />
    </div>
  );
}
export default Home;
