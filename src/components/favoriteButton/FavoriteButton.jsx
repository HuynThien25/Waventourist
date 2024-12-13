import React, { useState, useEffect } from "react";
import favoriteIcon from "../../assets/img/logo/favorite.png";
import "./favoriteButton.css";
const FavoriteButton = ({ tour, onUpdateFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existingFavorites = localStorage.getItem("favoriteTours");
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
    const isExist = favorites.some((item) => item.id === tour.id);
    setIsFavorite(isExist);
  }, [tour]);

  const handleFavoriteToggle = () => {
    const existingFavorites = localStorage.getItem("favoriteTours");
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];

    if (isFavorite) {
      // Xóa khỏi danh sách yêu thích
      const updatedFavorites = favorites.filter((item) => item.id !== tour.id);
      localStorage.setItem("favoriteTours", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      if (onUpdateFavorites) onUpdateFavorites(updatedFavorites);
    } else {
      // Thêm vào danh sách yêu thích
      const updatedFavorites = [...favorites, tour];
      localStorage.setItem("favoriteTours", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      if (onUpdateFavorites) onUpdateFavorites(updatedFavorites);
    }
  };

  return (
    <button className={`favoriteButton ${isFavorite ? "active" : ""}`} onClick={handleFavoriteToggle}>
      <img src={favoriteIcon} alt="Favorite" />
    </button>
  );
};

export default FavoriteButton;
