import { useState } from "react";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

import Container from "../../components/ui/Container";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import ScrollReveal from "../../components/animations/ScrollReveal/ScrollReveal";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setSubmitted(false);
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || "Café enquiry");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@simplecafe.example?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="contact-page section-padding">
      <Container>
        <ScrollReveal className="contact-heading">
          <span className="section-label">LET'S CONNECT</span>
          <h1 className="section-title">We'd love to hear from you.</h1>
          <p>Questions, feedback or just want to say hello? Drop us a message.</p>
        </ScrollReveal>

        <div className="contact-grid">
          <ScrollReveal className="contact-info">
            <div className="contact-info__item">
              <MapPin />
              <div><h3>Visit Us</h3><p>Add your café's complete address here.</p></div>
            </div>
            <div className="contact-info__item">
              <Phone />
              <div><h3>Call Us</h3><p>Add your café's phone number here.</p></div>
            </div>
            <div className="contact-info__item">
              <Mail />
              <div><h3>Email Us</h3><p>hello@simplecafe.example</p></div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <form className="contact-form" onSubmit={handleSubmit}>
              <Input id="name" name="name" label="Your name" placeholder="Enter your name" value={form.name} onChange={handleChange} required />
              <Input id="email" name="email" type="email" label="Email address" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
              <Input id="subject" name="subject" label="Subject" placeholder="What is this about?" value={form.subject} onChange={handleChange} />
              <Input id="message" name="message" as="textarea" label="Your message" placeholder="Write your message..." rows={5} value={form.message} onChange={handleChange} required />
              <Button type="submit">Send Message <ArrowUpRight size={17} /></Button>
              {submitted && <p className="form-success" role="status">Your email application should open with your message.</p>}
            </form>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
