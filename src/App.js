import './App.css';
import './style/Landingpage.css';
import Navigationbar from './components/Navbar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      {/* Intro section */}
      <div className="my-bg">
        <Navigationbar />
        <Intro />
      </div>
      {/* End Intro Section */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End Trending Section */}

      {/* Hero Section */}
      <div className="Heroes">
        <Hero />
      </div>
      {/* End Hero */}
    </div>
  );
}

export default App;
