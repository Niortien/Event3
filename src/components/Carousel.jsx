import React from 'react'

interface Props {}

function Carousel(props: Props) {
    const {} = props

    return (
        <div>
            {/* ======= Hero Section ======= */}
{/* ======= Hero Section ======= */}
<section id="hero" className="hero" style={{ backgroundColor: '', }}>
  <div className="info d-flex align-items-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h2 data-aos="fade-down">Welcome to <span>EventPlanner</span></h2>
          <p data-aos="fade-up">Notre application événementielle simplifie la gestion des événements et maximise la participation grâce à des fonctionnalités avancées de promotion et d'interaction..</p>
          <a data-aos="fade-up" data-aos-delay={200} href="#get-started" className="btn-get-started">Get Started</a>
        </div>
      </div>
    </div>
  </div>
  <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval={5000}>
    <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/hero-carousel/deux-bagues-or-sont-assises-cote-rose-rouge_254939-889.jpg)'}}>
    </div>
    <div className="carousel-item" style={{backgroundImage: 'url(assets/img/hero-carousel/bapt1.jpeg)'}} />
    <div className="carousel-item" style={{backgroundImage: 'url(assets/img/hero-carousel/bapteme.jpg)'}} />
    <div className="carousel-item" style={{backgroundImage: 'url(assets/img/hero-carousel/deux-bagues-or-sont-assises-cote-rose-rouge_254939-889.jpg)'}} />
    <div className="carousel-item" style={{backgroundImage: 'url(assets/img/hero-carousel/homme-proposant-sa-copine_53876-40964.jpg)'}} />
    <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
      <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
    </a>
    <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
      <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
    </a>
  </div>
</section>{/* End Hero Section */}
        </div>
    )
}

export default Carousel
