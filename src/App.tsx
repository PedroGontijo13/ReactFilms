import Avaliations from "./Components/Avaliation";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import MakingOf from "./Components/MakingOf";
import SuggestMovies from "./Components/SuggestMovies";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <SuggestMovies/>
      <Avaliations/>
      <MakingOf/>
    </div>
  )
}

export default App