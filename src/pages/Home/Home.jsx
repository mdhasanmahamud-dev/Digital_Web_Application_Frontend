import About from "../../sections/About/About";
import Availability from "../../sections/Availability/Availability";
import Consultation from "../../sections/Consultation/Consultation";
import Contact from "../../sections/Contact/Contact";
import DigitalManagementIntro from "../../sections/DigitalManagementIntro/DigitalManagementIntro";
import Featured from "../../sections/Featured/Featured";
import Hero from "../../sections/Hero/Hero";
import Services from "../../sections/Services/Services";

const Home = () => {
  return (
    <div>
      <section id="home"><Hero /></section>
      <section><DigitalManagementIntro/></section>
      <section id="services"><Services/></section>
      <section id="services"><Consultation/></section>
      {/* <section id="projects"><Project/></section> */}
      <section id="projects"><Featured/></section>
      <section><Availability/></section>
      <section id="about"><About/></section>
      <section id="contact"> <Contact/></section>
    </div>
  );
};

export default Home;
