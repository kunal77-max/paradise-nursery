
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function HomePage() {
  const navigate = useNavigate();

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
          onClick={() => navigate("/plants")}
        >
          Get Started
        </button>
      </div>
      <AboutUs />
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;

