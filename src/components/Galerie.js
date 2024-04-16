import React from 'react';

const Galerie = () => {
    return (
        <div>
            <section id="projects" className="projects">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Our Projects</h2>
        <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
          accusamus fugit aut qui distinctio</p>
      </div>
      <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">
        <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay={100}>
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-remodeling">Remodelingoooooo</li>
          <li data-filter=".filter-construction">Construction</li>
          <li data-filter=".filter-repairs">Repairs</li>
          <li data-filter=".filter-design">Design</li>
        </ul>{/* End Projects Filters */}
        <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay={200}>
          <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/09016721e1e7d03c9499e59914d76518.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Remodeling 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/d95d24592d781c70a556b56a113ef8db.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/30a1fccd2708d8dc8ed3f4efb13ca707.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Construction  1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/images.jpeg" title="Construction 1" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/d95d24592d781c70a556b56a113ef8db.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Repairs 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/repairs-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-design">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/design-1.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Design 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/images.jpg" title="Repairs 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/154ff1d1bb5dc7b6dc7e04fab5b44fc6.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Remodeling 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/le-bapteme-d-un-garcon-legnano-italie-ceh24h.jpg" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/767c39932a227a524028beaa8d381ffe.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Construction 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/image.jpg" title="Construction 2" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/une-jeune-femme-est-baptise-dans-une-eglise-de-morogoro-tanzanie-afrique-de-l-est-cbxk9d.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Repairs 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/le-bapteme-d-un-garcon-legnano-italie-ceh24h.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-design">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/baptism-331581_1920.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Design 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/image.jpg" title="Repairs 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/baptism-106057_1920.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Remodeling 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/remodeling-3.jpg" title="Remodeling 3" data-gallery="portfolio-gallery-remodeling" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/construction-3.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Construction 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/construction-3.jpg" title="koook" data-gallery="portfolio-gallery-construction" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/bapteme.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Repairs 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/image.jpg" title="MAriage" data-gallery="portfolio-gallery-repairs" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-design">
            <div className="portfolio-content h-100">
              <img src="assets/img/projects/design-3.jpg" className="img-fluid" alt />
              <div className="portfolio-info">
                <h4>Design 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <a href="assets/img/projects/design-3.jpg" title="Repairs 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in" /></a>
                <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg" /></a>
              </div>
            </div>
          </div>{/* End Projects Item */}
        </div>{/* End Projects Container */}
      </div>
    </div>
  </section>{/* End Our Projects Section */}
        </div>
    );
}

export default Galerie;
