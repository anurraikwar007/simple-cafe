import { useState } from "react";
import Container from "../../components/ui/Container";
import ScrollReveal from "../../components/animations/ScrollReveal/ScrollReveal";

const categories = ["All", "Breakfast", "Lunch", "Drinks", "Desserts"];

const menuItems = [
  { name: "Avocado Toast", category: "Breakfast", description: "Toasted sourdough, creamy avocado and herbs.", price: 240 },
  { name: "Classic Pancakes", category: "Breakfast", description: "Fluffy pancakes with maple syrup.", price: 220 },
  { name: "Garden Sandwich", category: "Lunch", description: "Fresh vegetables, cheese and house dressing.", price: 260 },
  { name: "Creamy Pasta", category: "Lunch", description: "Pasta tossed in a rich creamy sauce.", price: 320 },
  { name: "Cappuccino", category: "Drinks", description: "Espresso with silky steamed milk.", price: 180 },
  { name: "Cold Coffee", category: "Drinks", description: "Chilled coffee blended with milk.", price: 200 },
  { name: "Chocolate Brownie", category: "Desserts", description: "Rich chocolate brownie, baked fresh.", price: 160 },
  { name: "Classic Cheesecake", category: "Desserts", description: "Creamy cheesecake with a buttery base.", price: 240 },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="menu-page section-padding">
      <Container>
        <ScrollReveal className="menu-page__heading">
          <span className="section-label">FRESH FROM OUR KITCHEN</span>
          <h1 className="section-title">Good food, good mood.</h1>
          <p>Something delicious for every time of the day.</p>
        </ScrollReveal>

        <div className="menu-filters" aria-label="Filter menu categories">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-list">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.name} as="article" className="menu-item" y={18} delay={index * 0.025}>
              <div>
                <span className="menu-item__category">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <strong>₹{item.price}</strong>
            </ScrollReveal>
          ))}
        </div>

        <p className="menu-note">
          Sample menu and prices for demonstration. Final prices and availability
          should be confirmed by the café.
        </p>
      </Container>
    </section>
  );
}

export default Menu;
