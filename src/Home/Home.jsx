import Services from "./Services";

const Home = () => {
  return (
    <div className="link-with-bg-image h-[700px] lg:h-screen w-full">
      <div className="mt-20">
        <div className="hero h-[10vh] hero-overlay bg-opacity-10 lg:h-[80vh]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              id="banner-img"
              src="https://i.ibb.co/3dq29qZ/rise-humanoids-with-advanced-headgear-generative-ai.jpg"
              className="max-w-[200px] lg:max-w-sm hover"
            />
            <div>
              <h1 className="text-5xl font-bold">Gaming is Life</h1>
              <p className="py-6 font-bold text-lg shadow-lg">
                Games are recreational activities enjoyed for entertainment,
                competition, or skill development. They encompass a wide range
                of genres, from video games and board games to sports and
                puzzles, offering diverse experiences.
              </p>
              <button
                id="banner-id"
                className="btn btn-outline backdrop-blur-sm bg-transparent btn-primary hover:bg-[#ce6eff]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;
