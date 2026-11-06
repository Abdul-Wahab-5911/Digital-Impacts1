import './Services.css';

const Services = () => {
  const serviceData = [
    {
      title: "Digital Marketing",
      icon: "⚙️", // Replace with custom SVG/Icon if preferred
      description: "The Digital Impacts have compiled a list of the best digital marketing companies in the world."
    },
    {
      title: "Web Development",
      icon: "🌐",
      description: "Web design services comprise the process of user interface (UI) and user experience (UX) design of any web-based solution."
    },
    {
      title: "Graphic Designing",
      icon: "📊",
      description: "Create visual concepts to communicate ideas that inspire and captivate consumers, creative thinking, an aptitude towards art and design."
    },
    {
      title: "Content Writer",
      icon: "📄",
      description: "That content can include blog posts, video or podcast scripts, ebooks or whitepapers, press releases, product category descriptions, landing page or social media."
    },
    {
      title: "SEO",
      icon: "🌐",
      description: "Help search engines find, crawl, and index your content efficiently. The website can become easily findable, more relevant and popular towards user search queries."
    }
  ];

  return (
    <section className="services-container" id="services">
      <h2 className="services-heading">
        We Provide <span className="highlight-text">The Best</span> <br />
        Services With <span className="highlight-text">Our Developers</span>
      </h2>
      
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="card-title">{service.title}</h3>
            <div className="card-icon">{service.icon}</div>
            <p className="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
