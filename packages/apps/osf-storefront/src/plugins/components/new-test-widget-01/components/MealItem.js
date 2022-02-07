import React from "react";

const MealItem = (props) => {
  return (
    // <li className='meal'>
    //     <h3 className='MealItemName'>{props.name}</h3>
    //     <div className='MealItemDescription'>{props.description}</div>
    //     <div className='MealItemPrice'>{props.price}</div>

    // </li>

    //product  listing card container--GRID

    <div className="card">
      <div className="card-content">
        <div className="card-content__header">
        <a href={`/airconditioners/portable-aircon?occsite=${props.siteID}`}>
          <img
            src={props.imageURL}
            size="(max-width:480px) 300px,(min-width:481px) and (max-width:768px) 300px,(min-width:769px) and (max-width:979px) 300px,(min-width:980px) 300px"
            loading="lazy"
            width="300"
            height="300"
          />
          </a>
        </div>
        <div className="card-content__body">
          <span className="subtitle">{props.name}</span>
          <div className="title">{props.description}</div>
          <div className="rate">
            <div className="rate-stars">
              <div
                className="Rating"
                aria-label="Rating of this item is 3 out of 5"
              ></div>
            </div>
            <div className="rate-counts">(16)</div>
          </div>
          <span className="price">${props.price}</span>
        </div>
        <div className="card-content__footer">
          <button className="o-button-full">Compare</button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;
