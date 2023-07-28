import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Banner from './components/pages/Banner';
import Works from './components/pages/Works';
import LatestPost from './components/pages/LatestPost';
import ModernArt from './components/pages/ModernArt';
import Features from './components/pages/Features';
import TrendContent from './components/pages/TrendContent';
import Author from './components/pages/Author';
import Obsession from './components/pages/Obsession';
import Cards from './components/pages/Cards';
import Accordions from './components/pages/Accordions';
import Subscribe from './components/pages/Subscribe';
import Comments from './components/pages/Comments';
import ArtPieces from './components/pages/ArtPieces';
import Footer from './components/Footer';
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Works />
      <LatestPost />
      <ModernArt />
      <Features />
      <TrendContent />
      <Author />
      <Obsession />
      <Cards />
      <Accordions />
      <Subscribe />
      <Comments />
      <ArtPieces />
      <Footer />
    </div>
  );
}

export default App;
