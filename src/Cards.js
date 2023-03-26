import React, { useState, useEffect } from "react";

function Cards(props) {
  const [cardData, setCardData] = useState({});
  const [setName, setSetName] = useState("");

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${props.cardId}`)
      .then((response) => response.json())
      .then((data) => {
        setCardData(data.data[0]);
        setSetName(data.data[0].card_sets[0].set_name); // assuming you want to display the first set name only
      })
      .catch((error) => console.log(error));
  }, [props.cardId]);

  return (
    

   

      <div className="cards">
         <div className="card-items">
              <div className="card">
                <h2>Descripción:</h2>
                <p>{cardData.desc}</p>
              </div>
            </div>
        
          <h2>Set Name:</h2>
          {cardData.card_sets && (
            <div className="card-gri">
              {cardData.card_sets.map((set) => (
                <div className="card-items" key={set.set_code}>
                  
                    <p>* {set.set_name}:  </p>
                    <p>  {set.set_rarity}</p>
                  
                </div>
              ))}
            </div>
          )}
          <h2>Precios:</h2>
{cardData.card_prices && (
  <div className="card-items">
    {cardData.card_prices.map((price) => (
      <div key={price.cardmarket_price}>
        
        <p >* Cardmarket: {price.cardmarket_price}</p>
        <p >* TCGPlayer: {price.tcgplayer_price}</p>
        <p >* eBay: {price.ebay_price}</p>
        <p >* Amazon: {price.amazon_price}</p>
        <p >* CoolStuffInc: {price.coolstuffinc_price}</p>
      </div>
    ))}
  </div>
)}
       
      </div>
  
  );
}

export default Cards;
