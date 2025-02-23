import React from "react";

const PetCard = ({ pet, onFavourite }) => {
  return (
    <div className="pet-card">
      <img src={pet.photo} alt={pet.name} className="pet-image" />
      <h3>{pet.name}</h3>
      <p>Age: {pet.age} years</p>
      <p>Breed: {pet.breed}</p>
      <button onClick={() => onFavourite(pet)}>
        {pet.isFavourite ? "❤️ Unfavourite" : "🤍 Favourite"}
      </button>
    </div>
  );
};

export default PetCard;