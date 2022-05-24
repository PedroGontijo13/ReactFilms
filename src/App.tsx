import { Container } from "react-bootstrap";
import Avaliations from "./Components/Avaliation";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MakingOf from "./Components/MakingOf";
import News from "./Components/News";
import SuggestMovies from "./Components/SuggestMovies";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Banner />
        <SuggestMovies />
        <Avaliations />
        <MakingOf />
        <News />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
