import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Operations Manager</h4>
                <h5>DietBox Juicebar</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Launched and operated a cloud kitchen business from concept to execution, managing daily operations, vendor relationships, and end-to-end customer experience. Handled P&L management, pricing strategy, and inventory control, successfully maintaining healthy unit economics and 25% profit margins. Gained practical entrepreneurship experience in hiring, training staff, and managing cash flow in a highly competitive market.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (B.Tech)</h4>
                <h5>BVC College of Engineering</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology (B.Tech) degree. Based in Rajahmundry, AP.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Engineering</h4>
                <h5>Sir C.R. Reddy Polytechnic</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              Graduated with a Diploma in Engineering from Sir C.R. Reddy Polytechnic in Eluru, AP. Achieved a percentage of 92%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
