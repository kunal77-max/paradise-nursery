
import { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const [showPlants, setShowPlants] = useState(false);

  if (showPlants) {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your favorite place to discover beautiful houseplants.</p>
          <button
            className="get-started-button"
            onClick={() => setShowPlants(false)}
          >
            Back to Home
          </button>
          <AboutUs />
        </div>
      </div>
    );
  }

  return (
    <main className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Bring nature home. Discover beautiful houseplants and create
          a greener, happier living space.
        </p>
        <button
          className="get-started-button"
          onClick={() => setShowPlants(true)}
        >
          Get Started
        </button>
      </div>
    </main>
  );
}

export default App;
