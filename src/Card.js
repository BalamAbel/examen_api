import React, { useState, useEffect } from 'react';

function Card(props) {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${props.cardId}`)
      .then(response => response.json())
      .then(data => setCardData(data.data[0]))
      .catch(error => console.log(error));
  }, [props.cardId]);

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image" style={{ float: 'left' }}>
          <img src={cardData.card_images && cardData.card_images[0].image_url} alt={cardData.name} />
        </div>
        <div className="card-info" style={{ display: 'inline-block', marginLeft: '20px' }}>
          <h2>{cardData.name}</h2>
          <div className="card-grid">
          <div className="card-item">
              <div className="card">
                <p>ID:</p>
                <p>{cardData.id}</p>
              </div>
            </div>
            <div className="card-item">
              <div className="card">
                <p>Nombre:</p>
                <p>{cardData.name}</p>
              </div>
            </div>
          <div className="card-item">
              <div className="card">
                <p>Tipo:</p>
                <p>{cardData.type}</p>
              </div>
            </div>
            <div className="card-item">
              <div className="card">
                <p>Tipo de cuadro:</p>
                <p>{cardData.frameType}</p>
              </div>
            </div>
           
            <div className="card-item">
              <div className="card">
                <p>Attack:</p>
                <p>{cardData.atk}</p>
              </div>
            </div>
            <div className="card-item">
              <div className="card">
                <p>Defense:</p>
                <p>{cardData.def}</p>
              </div>
            </div>
            <div className="card-item">
              <div className="card">
                <p>Level/Rank:</p>
                <p>{cardData.level ? cardData.level : cardData.rank}</p>
              </div>
            </div>
            <div className="card-item">
              <div className="card">
                <p>Raza:</p>
                <p>{cardData.race}</p>
              </div>
            </div>
            <div className="card-item">
              <div className="card">
                <p>Atributo:</p>
                <p>{cardData.attribute}</p>
              </div>
            </div>
            
            
            
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
}


export default Card;