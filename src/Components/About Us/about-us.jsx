import './about-us.css';
import realEstateImg from './real estate.png';
import educationImg from './education.png';
import commerceImg from './commerce.png';
import hospitalityImg from './hospitality.png';
import healthcareImg from './health care.png';
import fintechImg from './fintech.png';

function About() {
  return (
    <>
      <section className="industries-container" id="about-us">
        <div className="industries-header">
          <h2 className="industries-title">
            Industries We <br />
            <span className="industries-accent-text">Work With</span>
          </h2>
          <p className="industries-subtitle">
            We work as a technology partner for various industries.
          </p>
        </div>

        <div className="industries-grid">
          <div className="industry-card">
            <div className="industry-image-container">
              <img src={realEstateImg} alt="Real Estate" className="industry-img" />
            </div>
            <h3 className="industry-label">REAL ESTATE</h3>
          </div>

          <div className="industry-card">
            <div className="industry-image-container">
              <img src={educationImg} alt="Education" className="industry-img" />
            </div>
            <h3 className="industry-label">EDUCATION</h3>
          </div>

          <div className="industry-card">
            <div className="industry-image-container">
              <img src={commerceImg} alt="Commerce" className="industry-img" />
            </div>
            <h3 className="industry-label">COMMERCE</h3>
          </div>

          <div className="industry-card">
            <div className="industry-image-container">
              <img src={hospitalityImg} alt="Hospitality" className="industry-img" />
            </div>
            <h3 className="industry-label">HOSPITALITY</h3>
          </div>

          <div className="industry-card">
            <div className="industry-image-container">
              <img src={healthcareImg} alt="Healthcare" className="industry-img" />
            </div>
            <h3 className="industry-label">HEALTHCARE</h3>
          </div>

          <div className="industry-card">
            <div className="industry-image-container">
              <img src={fintechImg} alt="Fintech" className="industry-img" />
            </div>
            <h3 className="industry-label">FINTECH</h3>
          </div>
        </div>
      </section>

      <section className="about-section">
        <span className="section-subtitle">EVERYTHING YOU NEED TO KNOW ABOUT</span>
        
        <div className="content-block">
          <h2 className="content-title">THE DIGITAL IMPACTS</h2>
          <p className="content-text">
            The <strong>Digital Impacts</strong> create a perfect company for its customers. <strong>Digital Impacts</strong> offers the best services to ensure your business thrives online. Because we partner with our clients with a team of professionals, we can to provide the best on our side. We strive to be leaders in digital marketing services worldwide by revolutionizing the industry and setting new standards of professionalism and success.
          </p>
        </div>

        <div className="content-block">
          <h2 className="content-title">OUR VISION</h2>
          <p className="content-text">
            We strive to be leaders in digital marketing services across the world by revolutionizing the industry and setting new standards of professionalism and success. Our vision is to become a top agency offering online marketing strategies, digital sales solutions, and internet brand management in the international business sphere.
          </p>
        </div>

        <div className="content-block">
          <h2 className="content-title">OUR MISSION</h2>
          <p className="content-text">
            Our mission is to partner with customers for their success as we create diverse client base including companies and individuals functioning in many different fields and economies. We will be best in providing consistently successful, unique, and forward-thinking digital marketing solutions that take into account the individual requirements and unique demands of each client.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
