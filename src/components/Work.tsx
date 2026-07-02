import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Quantum State Visualizer",
    role: "Designer",
    date: "AQVH 2025",
    desc: "Built an interactive quantum visualization platform to analyze and display single-qubit states using partial trace methods.",
    tools: "Quantum Computing, UI Design",
    image: "/images/quantum.jpg"
  },
  {
    title: "DietBox Juicebar",
    role: "Founder & Operations Manager",
    date: "2024 - Present",
    desc: "Launched and operated a cloud kitchen business from concept to execution. Handled P&L management, pricing strategy, and inventory control.",
    tools: "Business Operations, Management",
    image: "/images/dietbox.jpg"
  },
  {
    title: "WebSaga Hackathon Winner",
    role: "Full-Stack Developer",
    date: "STEPCONE 2026",
    desc: "Secured 1st Place at the overnight 14-hour WebSaga Hackathon held at GMRIT, Rajam. Demonstrated rapid product development.",
    tools: "Full Stack Development",
    image: "/images/placeholder.webp"
  },
  {
    title: "BrandForge AI",
    role: "AI Product Developer",
    date: "",
    desc: "Designed and built an intelligent digital solution leveraging AI tools to accelerate brand creation for beginners.",
    tools: "AI Tools, Full Stack Development",
    image: "/images/placeholder.webp"
  }
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = Math.max(0, rect.width * box.length - (rectLeft + parentWidth) + padding);
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX || 1000}`, // Ensure there's scroll width if translateX is 0
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.role} {project.date && `| ${project.date}`}</p>
                  </div>
                </div>
                <h4>Description and features</h4>
                <p>{project.desc}</p>
                <h4>Tools</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image || "/images/placeholder.webp"} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
