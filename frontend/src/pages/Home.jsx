import Logo from "../components/Logo";

function Home() {
  return (
    <div className="homePage">
      <Logo />
      <div className="heroImageDiv">
        <img
          className="heroImage"
          alt="heroImage"
          src="../src/assets/images/hero.png"
        />
      </div>
    </div>
  );
}

export default Home;
