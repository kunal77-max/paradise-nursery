
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "./CartSlice";
import "./ProductList.css";

const plantCategories = [
  {
    category: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 18, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500" },
      { id: 2, name: "Peace Lily", price: 22, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=500" },
      { id: 3, name: "Spider Plant", price: 15, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500" },
      { id: 4, name: "Areca Palm", price: 28, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500" },
      { id: 5, name: "Boston Fern", price: 20, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500" },
      { id: 6, name: "Rubber Plant", price: 25, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500" },
    ],
  },
  {
    category: "Low Maintenance Plants",
    plants: [
      { id: 7, name: "ZZ Plant", price: 24, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500" },
      { id: 8, name: "Jade Plant", price: 16, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500" },
      { id: 9, name: "Aloe Vera", price: 14, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500" },
      { id: 10, name: "Pothos", price: 19, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500" },
      { id: 11, name: "Philodendron", price: 23, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500" },
      { id: 12, name: "Parlor Palm", price: 21, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500" },
    ],
  },
  {
    category: "Decorative Plants",
    plants: [
      { id: 13, name: "Monstera", price: 30, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500" },
      { id: 14, name: "Calathea", price: 26, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500" },
      { id: 15, name: "Bird of Paradise", price: 35, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500" },
      { id: 16, name: "Fiddle Leaf Fig", price: 32, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500" },
      { id: 17, name: "Chinese Money Plant", price: 20, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500" },
      { id: 18, name: "Anthurium", price: 27, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="products-page">
      <nav className="shop-navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          Cart 🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </nav>

      <header className="products-header">
        <h1>Our Houseplants</h1>
        <p>Find the perfect green companion for your home.</p>
      </header>

      {plantCategories.map((group) => (
        <section className="plant-category" key={group.category}>
          <h2>{group.category}</h2>
          <div className="plant-grid">
            {group.plants.map((plant) => {
              const added = cartItems.some((item) => item.id === plant.id);

              return (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p className="plant-price">${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={added}
                  >
                    {added ? "Added to Cart" : "Add to Cart"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
