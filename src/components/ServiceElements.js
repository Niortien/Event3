import React from 'react';

const ServiceElements = () => {
    return (
        <div>
             <section id="services" className="services section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2> Nos Services </h2>
        <p>Pour une variété de services, notre plateforme digitale propose une gestion centralisée des événements, une promotion ciblée et des interactions personnalisées, garantissant ainsi une expérience de qualité pour chaque utilisateur.</p>
      </div>
    
    </div>
  </section>{/* End Services Section */}
  {/* ======= Alt Services Section ======= */}
  <section id="alt-services" className="alt-services">
    <div className="container" data-aos="fade-up">
      <div className="row justify-content-around gy-4">
        <div className="col-lg-6 img-bg" style={{backgroundImage: 'url(assets/img/8170549.jpg)'}} data-aos="zoom-in" data-aos-delay={100} />
        <div className="col-lg-5 d-flex flex-column justify-content-center">
          <h3>Quelques Services</h3>
          <p>Notre application vous propose des services comme:</p>
          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay={100}>
          <i class="bi bi-hearts"></i>
            <div>
              <h4><a href className="stretched-link">Wedding Planner</a></h4>
              <p>Le wedding planner est votre expert dédié pour réaliser le mariage de vos rêves, prenant en charge chaque aspect de la planification et de la coordination pour créer une journée inoubliable et sans stress</p>
            </div>
          </div>{/* End Icon Box */}
          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay={200}>
          <i class="bi bi-person-heart"></i>
            <div>
              <h4><a href className="stretched-link">Make up artiste</a></h4>
              <p>Nos make-up artistes experts transforment votre beauté naturelle en un look éblouissant, parfaitement adapté à chaque occasion spéciale, pour une confiance et une élégance inégalées.</p>
            </div>
          </div>{/* End Icon Box */}
          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay={300}>
          <i class="bi bi-car-front-fill"></i><div>
              <h4><a href className="stretched-link">Location de voiture</a></h4>
              <p>Optez pour notre service de location de voiture pour des déplacements sans tracas. Des véhicules élégants et bien entretenus disponibles pour répondre à vos besoins, que ce soit pour un événement spécial ou pour vos déplacements quotidiens</p>
            </div>
          </div>{/* End Icon Box */}
          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay={400}>
          <i class="bi bi-camera-fill"></i>
            <div>
              <h4><a href className="stretched-link">Créateur de souvenir</a></h4>
              <p>Découvrez notre équipe de créateurs de souvenirs, dévoués à capturer et à immortaliser vos moments spéciaux avec créativité et passion. Des produits personnalisés et uniques pour vous aider à revivre vos souvenirs les plus précieux encore et encore.</p>
            </div>
          </div>{/* End Icon Box */}
        </div>
      </div>
    </div>
  </section>{/* End Alt Services Section */}
        </div>
    );
}

export default ServiceElements;
