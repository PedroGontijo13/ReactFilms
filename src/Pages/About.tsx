import AboutTheProject from "../Components/AbouTheProject";
import AboutMe from "../Components/AboutMe";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import MovieList from "../Components/MovieList";

export default function About() {
  return (
    <div>
      <div style={{ padding: "5% 0" }} className="bg-secondary">
        <AboutMe />
        <AboutTheProject />
      </div>
      <MovieList/>
      <Footer />
    </div>
  );
}
