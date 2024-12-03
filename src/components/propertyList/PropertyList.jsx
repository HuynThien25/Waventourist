import React, { useEffect, useState } from "react";
import "./propertyList.css";
import useFavoriteHandler from "../useFavoriteHandler/UseFavoriteHandler";
import { useNavigate } from "react-router-dom";
import china from "../../assets/img/hinhAnh/china.jpg";
import korea2 from "../../assets/img/hinhAnh/korea2.jpg";
import thailand11 from "../../assets/img/hinhAnh/thailand11.jpg";
import singapore11 from "../../assets/img/hinhAnh/singapore11.jpg";
import phuquoc11 from "../../assets/img/hinhAnh/phuquoc11.jpg";
import fav from "../../assets/img/logo/fav.png";
import favFill from "../../assets/img/logo/favFill.png";

const PropertyList = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { handleAddToFavorites, LoginPopup, NotificationPopup } = useFavoriteHandler();
  const [favorites, setFavorites] = useState([]);

  const tours = [
    {
      id: 1,
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      image2: china,
      title: "Tour Trung Quốc",
      h1: "Thượng Hải - Hàng Châu - Tô Châu - Ô Trấn (5N4Đ)",
      gia: "17.600.000 VND",
      giaGoc: "15.756.888 VND",
      tietkiem: "15%",
      diemDanhGia: "8.9",
      textDanhGia: "(27 đánh giá)",
    },
    {
      id: 2,
      maTour: "GJH-46674",
      ngayDi: "27/11/2024",
      ngayVe: "28/11/2024",
      image2: korea2,
      title: "Tour Hàn Quốc",
      h1: "Busan - Incheon - Seoul - Công viên Everland (7N6Đ)",
      gia: "16.204.000 VND",
      giaGoc: "15.456.888 VND",
      tietkiem: "10%",
      diemDanhGia: "8.9",
      textDanhGia: "(27 đánh giá)",
    },
    {
      id: 3,
      maTour: "FGH-96841",
      ngayDi: "24/11/2024",
      ngayVe: "27/11/2024",
      image2: thailand11,
      title: "Tour Thái Lan",
      h1: "Tour Thái Lan trọn gói - Bangkok - Pattaya (5N4Đ)",
      gia: "6.139.000 VND",
      giaGoc: "5.456.888 VND",
      tietkiem: "10%",
      diemDanhGia: "8.9",
      textDanhGia: "(27 đánh giá)",
    },
    {
      id: 4,
      maTour: "SGH-78284",
      ngayDi: "29/11/2024",
      ngayVe: "30/11/2024",
      image2: singapore11,
      title: "Tour Singapore",
      h1: "Tour trọn gói Singapore và Malaysia (4N3Đ)",
      gia: "8.456.888 VND",
      giaGoc: "9.879.000 VND",
      tietkiem: "15%",
      diemDanhGia: "8.9",
      textDanhGia: "(27 đánh giá)",
    },
    {
      id: 5,
      maTour: "HGJ-67884",
      ngayDi: "26/11/2024",
      ngayVe: "28/11/2024",
      image2: phuquoc11,
      title: "Tour Việt Nam",
      h1: "Tour Khám Phá Bắc Đảo - Safari - Vinwonder (3N2Đ)",
      gia: "6.139.000 VND",
      giaGoc: "5.456.888 VND",
      tietkiem: "10%",
      diemDanhGia: "8.9",
      textDanhGia: "(27 đánh giá)",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Kiểm tra tour có phải yêu thích hay không
  const isFavorite = (tourId) => favorites.some((item) => item.id === tourId);

  const handleFavoriteClick = (tour) => {
    handleAddToFavorites(tour);
    const updatedFavorites = localStorage.getItem("favoriteTours");
    setFavorites(updatedFavorites ? JSON.parse(updatedFavorites) : []);
  };

  const handleBuy = (tourId) => {
    navigate("/trangDatTour", { state: { tourId } });
  };

  return (
    <div className="pList">
      <div className="plistCenter">
        {isLoading
          ? // Hiển thị Skeleton trong lúc tải dữ liệu
            Array(5)
              .fill(null)
              .map((_, index) => (
                <div className="pListCard" key={index}>
                  <div className="pListItem">
                    <div className="skeleton skeleton-img"></div>
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-text"></div>
                    <div className="skeleton skeleton-button"></div>
                  </div>
                </div>
              ))
          : // Hiển thị dữ liệu thật sau khi tải xong
            tours.map((tour) => (
              <div className="pListCard" key={tour.id}>
                <div className="pListItem">
                 
                      <div className="tietkiem">Giảm giá {tour.tietkiem}</div>
                      <img
                        src={isFavorite(tour.id) ? favFill : fav}
                        alt="Favorite"
                        className="favorite"
                        onClick={() => handleFavoriteClick(tour)}
                      />
                      <img
                        src={tour.image2}
                        alt={tour.title}
                        className="pListImg"
                      />
                    
                  <div className="pListTitles">
                    <h1>{tour.title}</h1>
                    <h2>{tour.h1}</h2>
                    <p>{tour.gia}</p>
                    <h2>
                      <span>{tour.giaGoc}</span>
                    </h2>
                  </div>
                  <button
                    className="cardBtn"
                    onClick={() => handleBuy(tour.id)}
                  >
                    Mua Tour
                  </button>
                </div>
              </div>
            ))}
      </div>
      {/* Popup yêu cầu đăng nhập */}
      <LoginPopup />
      {/* Popup thông báo */}
      <NotificationPopup />
    </div>
  );
};

export default PropertyList;