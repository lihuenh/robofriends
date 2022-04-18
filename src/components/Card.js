import React from "react";

/*
    {name, email, id} es destructuring en js
 */

const Card = ({ name, email, id }) => {
  return (
    // tener en cuenta que se puede devolver solo un elemento
    // este elemento es un div
    // Si le agregamos un h1 arriba de este div, generará un error de compilación
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}`}></img>
      <div>
        <h2>{name}</h2>
        <p>{email.toLowerCase()}</p>
      </div>
    </div>
  );
};

export default Card;
