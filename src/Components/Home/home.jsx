import { Link } from 'react-router-dom';
import './home.css';
import img from './2nd img.png';

const Home = () => {
  return (
    <main className="main-content" id="home">
      <div className="image-side">
        <img src={img} alt="Team working illustration" className="hero-image" />
      </div>

      <div className="text-side">
        <h2 className="title-top">We are full Services</h2>
        <h1 className="title-center">Digital Marketing Agency</h1>
        <h3 className="title-bottom">Welcome to the Digital Impacts</h3>
        <p className="desc">
          We partner with our clients with a team of professionals, we are able to provide
          the best on our side. We strive to be leaders in digital marketing services worldwide
          by revolutionizing the industry and setting new standards of professionalism and success.
        </p>
        <div className="btn-container">
          <Link to="/contact">
            <button className="cta-btn">Message Us Now</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
