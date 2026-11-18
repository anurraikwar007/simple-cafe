import { lazy, Suspense } from "react";
import { ArrowDown, ArrowUpRight, Coffee } from "lucide-react";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import SectionHeading from "../../components/ui/SectionHeading";
import ScrollReveal from "../../components/animations/ScrollReveal/ScrollReveal";

const Scene = lazy(() => import("../../components/three/Scene/Scene"));

const popularItems = [
  {
    name: "Classic Cappuccino",
    category: "Freshly brewed",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=85",
  },
  {
    name: "Butter Croissant",
    category: "Freshly baked",
    price: "₹140",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=85",
  },
  {
    name: "Chocolate Dessert",
    category: "Made with love",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=85",
  },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__image" />
        <div className="hero__scene" data-scroll data-scroll-speed="0.12">
          <Suspense fallback={<div className="hero__scene-fallback" />}>
            <Scene />
          </Suspense>
        </div>

        <Container className="hero__content">
          <span className="hero__eyebrow">
            <Coffee size={15} /> YOUR EVERYDAY HAPPY PLACE
          </span>

          <h1>
            A little coffee.
            <br />
            A lot of <em>happiness.</em>
          </h1>

          <p>
            Slow down, take a breath, and enjoy the little things.
            Fresh coffee, good food and moments worth sharing.
          </p>

          <div className="hero__actions">
            <Button to="/menu">Explore Our Menu <ArrowUpRight size={17} /></Button>
            <Button to="/about" variant="outline">Discover Our Story</Button>
          </div>

          <div className="hero__scroll">
            <ArrowDown size={16} />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </Container>
      </section>

      <section className="intro section-padding">
        <Container className="intro__grid">
          <ScrollReveal>
            <span className="section-label">WELCOME TO SIMPLE CAFÉ</span>
            <h2 className="section-title">
              More than coffee.
              <br />
              A feeling of <em>home.</em>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="intro__text" y={42} delay={0.08}>
            <p>
              We believe the best moments are often the simplest ones.
              A warm cup of coffee, freshly prepared food and conversations
              that last a little longer.
            </p>
            <Button to="/about" variant="text">
              Get to know us <ArrowUpRight size={17} />
            </Button>
          </ScrollReveal>
        </Container>
      </section>

      <section className="popular section-padding">
        <Container>
          <ScrollReveal className="popular__heading">
            <SectionHeading
              eyebrow="MADE FRESH, SERVED WITH LOVE"
              title="A few of our favourites."
              description="Good things taste even better when shared."
            />
            <Button to="/menu" variant="outline">
              View Full Menu <ArrowUpRight size={17} />
            </Button>
          </ScrollReveal>

          <div className="popular__grid">
            {popularItems.map((item, index) => (
              <ScrollReveal key={item.name} as="article" className="food-card" delay={index * 0.08}>
                <div className="food-card__image">
                  <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
                  <span>0{index + 1}</span>
                </div>
                <div className="food-card__info">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                  </div>
                  <strong>{item.price}</strong>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="visit section-padding">
        <Container className="visit__inner">
          <ScrollReveal>
            <span className="section-label">YOUR TABLE IS WAITING</span>
            <h2>
              Make room for
              <br />
              something <em>good.</em>
            </h2>
            <Button to="/contact" variant="light">
              Find Your Way Here <ArrowUpRight size={17} />
            </Button>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}

export default Home;
