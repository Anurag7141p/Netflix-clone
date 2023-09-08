import "./App.css";
import Banner from "./components/banner/Banner";
import Row from "./components/row/Row";
import requests from "./requests";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
  
        <Banner fetchUrl={requests.fetchNetflixOriginals} />
        <Row
          isLargeRow={true}
          title="NetflixOriginals"
          fetchUrl={requests.fetchNetflixOriginals}
        />

        <Row title="Trending" fetchUrl={requests.fetchTrending} />

        <Row title="TopRated" fetchUrl={requests.fetchTopRated} />

        <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />

        <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />

        <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />

        <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />

        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </header>
      <Footer />
    </div>
  );
}

export default App;
