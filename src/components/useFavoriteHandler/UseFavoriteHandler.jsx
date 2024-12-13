import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const useFavoriteHandler = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup2, setShowPopup2] = useState(false);
  const [popupMessage2, setPopupMessage2] = useState("");
  const navigate = useNavigate();

  const handleAddToFavorites = (tour) => {
    const userToken = localStorage.getItem("userToken");

    if (!userToken) {
      setPopupMessage(
        "Đây là tính năng chỉ dành cho thành viên, vui lòng đăng nhập tài khoản Waventourist của bạn."
      );
      setShowPopup(true);
      return;
    }
    // Kiểm tra danh sách yêu thích
    const existingFavorites = localStorage.getItem("favoriteTours");
    const favorites = existingFavorites ? JSON.parse(existingFavorites) : [];
    const isExist = favorites.some((item) => item.id === tour.id);

    if (isExist) {
      setPopupMessage2("Tour này đã có trong danh sách yêu thích!");
      setShowPopup2(true);
      autoClosePopup(setShowPopup2); 
    } else {
      const updatedFavorites = [...favorites, tour];
      localStorage.setItem("favoriteTours", JSON.stringify(updatedFavorites));
      setPopupMessage2("Đã thêm vào danh sách yêu thích!");
      setShowPopup2(true);
      autoClosePopup(setShowPopup2); 
    }
  };

  const autoClosePopup = (setPopupState) => {
    setTimeout(() => {
      setPopupState(false);
    }, 1500);
  };

  const LoginPopup = () =>
    showPopup && (
      <div className="popup-container">
        <div className="popup-content">
          <div className="titlePopup">Bạn cần đăng nhập</div>
          <p className="messagePopup">{popupMessage}</p>
          <div>
            <button onClick={() => setShowPopup(false)}>Để sau</button>
            <button onClick={() => navigate("/login")}>Đăng nhập ngay</button>
          </div>
        </div>
      </div>
    );

  const NotificationPopup = () =>
    showPopup2 && (
      <div className="notification-popup">
        <p>{popupMessage2}</p>
      </div>
    );

  return {
    handleAddToFavorites,
    LoginPopup,
    NotificationPopup,
  };
};

export default useFavoriteHandler;
