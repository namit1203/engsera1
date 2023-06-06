import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-img2.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">ABOUT US</span>
                <h2>Welcome to Engsera!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo.
                </p>

                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Expert Trainers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Lifetime Acces
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Remote Learning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Self Development
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
