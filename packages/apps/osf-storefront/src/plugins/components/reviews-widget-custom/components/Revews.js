import React from "react";


function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="o-container">
        <div className="reviews__title">
          <h3>Reviews</h3>
          <div className="rate">
            <div className="rate-stars">
              <div
                className="Rating"
                aria-label="Rating of this item is 3 out of 5"
              >
                <img
                  src="/file/general/star-active.svg" 
                  className="Rating--Star Rating--Star__active"
                />
                <img
                 src="/file/general/star-active.svg" 
                  className="Rating--Star Rating--Star__active"
                />
                <img
                  src="/file/general/star-active.svg" 
                  className="Rating--Star Rating--Star__active"
                />
                <img
                  src="/file/general/star-active.svg" 
                  className="Rating--Star"
                />
                <img
                  src="/file/general/star-default.svg"
                  className="Rating--Star"
                />

                <div className="rate-counts">
                  <h6 className="rating">4</h6>/<h6>5</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card__content--reviews">
              <div className="rate">
                <div className="rate-stars">
                  <div
                    className="Rating"
                    aria-label="Rating of this item is 4 out of 5"
                  >
                    <div className="rate-counts">
                      <h6 className="rating">4</h6>/<h6>5</h6>
                    </div>
                  </div>
                </div>
              </div>

              <span className="customer-name">Angel Cedro</span>

              <p>
                Product is great, very convenient if you are not allowed to
                install a window or split type aircon in your place; although it
                was not mentioned that this product was noisy and will take a
                lot of getting used to.
              </p>

              <span>posted jan 24, 2020</span>
            </div>
          </div>
          <div className="card">
            <div className="card__content--reviews">
              <div className="rate">
                <div className="rate-stars">
                  <div
                    className="Rating"
                    aria-label="Rating of this item is 4 out of 5"
                  >
                    <div className="rate-counts">
                      <h6 className="rating">4</h6>/<h6>5</h6>
                    </div>
                  </div>
                </div>
              </div>

              <span className="customer-name">Angel Cedro</span>

              <p>
                Product is great, very convenient if you are not allowed to
                install a window or split type aircon in your place; although it
                was not mentioned that this product was noisy and will take a
                lot of getting used to.
              </p>

              <span>posted jan 24, 2020</span>
            </div>
          </div>
          <div className="card">
            <div className="card__content--reviews">
              <div className="rate">
                <div className="rate-stars">
                  <div
                    className="Rating"
                    aria-label="Rating of this item is 4 out of 5"
                  >
                    <div className="rate-counts">
                      <h6 className="rating">4</h6>/<h6>5</h6>
                    </div>
                  </div>
                </div>
              </div>

              <span className="customer-name">Angel Cedro</span>

              <p>
                Product is great, very convenient if you are not allowed to
                install a window or split type aircon in your place; although it
                was not mentioned that this product was noisy and will take a
                lot of getting used to.
              </p>

              <span>posted jan 24, 2020</span>
            </div>
          </div>
        </div>
        <div className="pagination">
          <ul>
            <li className="no-previous">
              <a href="#">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="cta">
          <a
            href="#"
            className="o-button-full"
            title="Write Review"
          >
            Write a review
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
