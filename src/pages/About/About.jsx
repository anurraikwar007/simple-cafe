import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import SectionHeading from "../../components/ui/SectionHeading";
import ScrollReveal from "../../components/animations/ScrollReveal/ScrollReveal";

function About() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <ScrollReveal>
            <span className="section-label">OUR STORY</span>
            <h1>It's the simple things that make life beautiful.</h1>
            <p>A café built around good food, warm coffee and meaningful moments.</p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="about-story section-padding">
        <Container className="about-story__grid">
          <ScrollReveal>
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1000&q=85"
              alt="Warm and welcoming café interior"
              loading="lazy"
              decoding="async"
            />
          </ScrollReveal>
          <ScrollReveal>
            <SectionHeading eyebrow="HOW IT STARTED" title="A place to slow down." />
            <p>
              Simple Café started with one little idea: create a welcoming
              place where everyone can feel at home. A place for your
              morning coffee, afternoon conversations and everything in between.
            </p>
            <p>
              We care about fresh ingredients, thoughtful preparation
              and making every visit feel special.
            </p>
            <Button to="/menu">Explore Our Menu</Button>
          </ScrollReveal>
        </Container>
      </section>

      <section className="belief section-padding">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="WHAT WE BELIEVE"
              title="Simple values. Beautiful experiences."
              align="center"
            />
          </ScrollReveal>
          <div className="belief__grid">
            {[
              ["01", "Fresh is best", "We believe in quality ingredients and freshly prepared food."],
              ["02", "Everyone belongs", "A welcoming table and a warm smile are always waiting."],
              ["03", "Enjoy the moment", "Life is better when we slow down and enjoy the little things."],
            ].map(([number, title, description], index) => (
              <ScrollReveal key={number} as="article" className="belief__item" delay={index * 0.08}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
