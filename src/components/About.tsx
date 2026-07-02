import "./styles/About.css";
import introVideo from "../assets/my-intro.mp4";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-video-container">
        <video src={introVideo} autoPlay loop muted playsInline controls className="about-video" />
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Product-driven builder and entrepreneur with a strong focus on applied AI, SaaS platforms, and front-end development.
          Proven track record of turning ideas into sustainable businesses, from launching tech platforms (Middle Class Asmr) to
          scaling operational startups (DietBox JuiceBar). Passionate about blending technology with business operations to
          create scalable, user-centric solutions. Highly skilled in AI-assisted development and rapid prototyping to accelerate
          product lifecycles.
        </p>
      </div>
    </div>
  );
};

export default About;
