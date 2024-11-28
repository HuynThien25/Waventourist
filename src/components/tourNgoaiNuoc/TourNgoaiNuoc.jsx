import "./tourNgoaiNuoc.css";
import React, { useState, useEffect } from "react";
import favorite from "../../assets/img/logo/favorite.png";
import heartFill from "../../assets/img/logo/heartFill.png";
import bali from "../../assets/img/hinhAnh/bali.jpg";
import busan from "../../assets/img/hinhAnh/busan.jpg";
import china2 from "../../assets/img/hinhAnh/china2.jpg";
import china3 from "../../assets/img/hinhAnh/china3.jpg";
import france from "../../assets/img/hinhAnh/france1.jpg";
import france2 from "../../assets/img/hinhAnh/france2.jpg";
import germany from "../../assets/img/hinhAnh/germany.jpg";
import halan from "../../assets/img/hinhAnh/halan.jpg";
import japan from "../../assets/img/hinhAnh/japan.jpg";
import uc from "../../assets/img/hinhAnh/uc.jpg";
import fav from "../../assets/img/logo/fav.png";
import favFill from "../../assets/img/logo/favFill.png";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import useFavoriteHandler from "../useFavoriteHandler/UseFavoriteHandler";
import ReviewPopup from "../reviewPopup/ReviewPopup";

const TourNgoaiNuoc = () => {
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();
  const [isReviewPopupVisible, setReviewPopupVisible] = useState(false);

  const toggleReviewPopup = () => {
    setReviewPopupVisible(!isReviewPopupVisible);
  };

  const handleWatch = () => {
    navigate("/chiTietTour", { state: {} });
  };

  const { handleAddToFavorites, LoginPopup, NotificationPopup } =
    useFavoriteHandler();

  const [favorites, setFavorites] = useState([]);

  // Lấy danh sách yêu thích từ localStorage khi component được render
  useEffect(() => {
    const existingFavorites = localStorage.getItem("favoriteTours");
    setFavorites(existingFavorites ? JSON.parse(existingFavorites) : []);
  }, []);

  // Kiểm tra tour có trong danh sách yêu thích không
  const isFavorite = (tourId) => {
    return favorites.some((item) => item.id === tourId);
  };

  // Xử lý thêm yêu thích và cập nhật trạng thái
  const handleFavoriteClick = (tour) => {
    handleAddToFavorites(tour);
    const updatedFavorites = localStorage.getItem("favoriteTours");
    setFavorites(updatedFavorites ? JSON.parse(updatedFavorites) : []);
  };

  const danang = [
    {
      id: 45,
      h1: "Tour ngắm hoa anh đào, Busan - 2N1Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 15%",
      gia: "2.955.300 VND",
      giaGoc: "4.284.200 VND",
      image1: favorite,
      image2: busan,
      danhGia: heartFill,
      diemDanhGia: "9.5",
      textDanhGia: "(17 đánh giá)",
    },
    {
      id: 46,
      h1: "Tour Ontabi Núi Phú Sĩ và hồ Kawaguchiko - 9 giờ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "1.506.200 VND",
      giaGoc: "1.824.200 VND",
      image1: favorite,
      image2: japan,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 47,
      h1: "Tour Bali Nusa Penida Private - 11 giờ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "1.106.200 VND",
      giaGoc: "1.324.200 VND",
      image1: favorite,
      image2: bali,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(11 đánh giá)",
    },
    {
      id: 48,
      h1: "Tour Trung Quốc trọn gói (Bắc Kinh, Thượng Hải, Hàng Châu) - 4N3Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "13.106.200 VND",
      giaGoc: "13.924.200 VND",
      image1: favorite,
      image2: china2,
      danhGia: heartFill,
      diemDanhGia: "9.1",
      textDanhGia: "(3 đánh giá)",
    },
    {
      id: 49,
      h1: "Tour Ngày Giethoorn Hà Lan từ Amsterdam",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "2.506.200 VND",
      giaGoc: "2.824.200 VND",
      image1: favorite,
      image2: halan,
      danhGia: heartFill,
      diemDanhGia: "8.7",
      textDanhGia: "(4 đánh giá)",
    },
    {
      id: 50,
      h1: "Tour tham quan lâu đài Linderloof & Neuschwanstein",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "1.886.200 VND",
      giaGoc: "1.624.200 VND",
      image1: favorite,
      image2: germany,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(9 đánh giá)",
    },
    {
      id: 51,
      h1: "Tour ngày Mont-saint-Michael Paris",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "3.506.200 VND",
      giaGoc: "3.324.200 VND",
      image1: favorite,
      image2: france,
      danhGia: heartFill,
      diemDanhGia: "8.7",
      textDanhGia: "(12 đánh giá)",
    },
  ];
  // --------------------------------------------
  const hochiminh = [
    {
      id: 52,
      h1: "Tour Trung Quốc trọn gói (Phượng Hoàng Cổ Trấn, ...) - 4N3Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "10.106.200 VND",
      giaGoc: "9.924.200 VND",
      image1: favorite,
      image2: china3,
      danhGia: heartFill,
      diemDanhGia: "9.4",
      textDanhGia: "(3 đánh giá)",
    },
    {
      id: 48,
      h1: "Tour Trung Quốc trọn gói (Bắc Kinh, Thượng Hải, Hàng Châu) - 4N3Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "13.106.200 VND",
      giaGoc: "13.924.200 VND",
      image1: favorite,
      image2: china2,
      danhGia: heartFill,
      diemDanhGia: "9.1",
      textDanhGia: "(3 đánh giá)",
    },
    {
      id: 46,
      h1: "Tour Ontabi Núi Phú Sĩ và hồ Kawaguchiko - 9 giờ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "1.506.200 VND",
      giaGoc: "1.824.200 VND",
      image1: favorite,
      image2: japan,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 47,
      h1: "Tour Bali Nusa Penida Private - 11 giờ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "1.106.200 VND",
      giaGoc: "1.324.200 VND",
      image1: favorite,
      image2: bali,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(11 đánh giá)",
    },
    {
      id: 49,
      h1: "Tour Ngày Giethoorn Hà Lan từ Amsterdam",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "2.506.200 VND",
      giaGoc: "2.824.200 VND",
      image1: favorite,
      image2: halan,
      danhGia: heartFill,
      diemDanhGia: "8.7",
      textDanhGia: "(4 đánh giá)",
    },
    {
      id: 45,
      h1: "Tour ngắm hoa anh đào, Busan - 2N1Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 15%",
      gia: "2.955.300 VND",
      giaGoc: "4.284.200 VND",
      image1: favorite,
      image2: busan,
      danhGia: heartFill,
      diemDanhGia: "9.5",
      textDanhGia: "(17 đánh giá)",
    },
    {
      id: 50,
      h1: "Tour tham quan lâu đài Linderloof & Neuschwanstein",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "1.886.200 VND",
      giaGoc: "1.624.200 VND",
      image1: favorite,
      image2: germany,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(9 đánh giá)",
    },
    {
      id: 59,
      h1: "Tour cả ngày Sa Mạc Pinnacles New Morcia và Hoa Dại",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "4.106.200 VND",
      giaGoc: "3.924.200 VND",
      image1: favorite,
      image2: uc,
      danhGia: heartFill,
      diemDanhGia: "8.4",
      textDanhGia: "(2 đánh giá)",
    },
  ];
  // -------------------------------------------------------
  const hanoi = [
    {
      id: 47,
      h1: "Tour Bali Nusa Penida Private - 11 giờ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "1.106.200 VND",
      giaGoc: "1.324.200 VND",
      image1: favorite,
      image2: bali,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(11 đánh giá)",
    },
    {
      id: 59,
      h1: "Tour cả ngày Sa Mạc Pinnacles New Morcia và Hoa Dại",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "4.106.200 VND",
      giaGoc: "3.924.200 VND",
      image1: favorite,
      image2: uc,
      danhGia: heartFill,
      diemDanhGia: "8.4",
      textDanhGia: "(2 đánh giá)",
    },
    {
      id: 62,
      h1: "Tour Nửa ngày tham quan Cung Điện Versailles",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "2.316.200 VND",
      giaGoc: "2.524.200 VND",
      image1: favorite,
      image2: france2,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(14 đánh giá)",
    },
    {
      id: 45,
      h1: "Tour ngắm hoa anh đào, Busan - 2N1Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 15%",
      gia: "2.955.300 VND",
      giaGoc: "4.284.200 VND",
      image1: favorite,
      image2: busan,
      danhGia: heartFill,
      diemDanhGia: "9.5",
      textDanhGia: "(17 đánh giá)",
    },
    {
      id: 46,
      h1: "Tour Ontabi Núi Phú Sĩ và hồ Kawaguchiko - 9 giờ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "1.506.200 VND",
      giaGoc: "1.824.200 VND",
      image1: favorite,
      image2: japan,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 48,
      h1: "Tour Trung Quốc trọn gói (Bắc Kinh, Thượng Hải, Hàng Châu) - 4N3Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "13.106.200 VND",
      giaGoc: "13.924.200 VND",
      image1: favorite,
      image2: china2,
      danhGia: heartFill,
      diemDanhGia: "9.1",
      textDanhGia: "(3 đánh giá)",
    },
    {
      id: 49,
      h1: "Tour Ngày Giethoorn Hà Lan từ Amsterdam",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "2.506.200 VND",
      giaGoc: "2.824.200 VND",
      image1: favorite,
      image2: halan,
      danhGia: heartFill,
      diemDanhGia: "8.7",
      textDanhGia: "(4 đánh giá)",
    },
    {
      id: 50,
      h1: "Tour tham quan lâu đài Linderloof & Neuschwanstein",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "1.886.200 VND",
      giaGoc: "1.624.200 VND",
      image1: favorite,
      image2: germany,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(9 đánh giá)",
    },
  ];

  const renderItems = (tours) => {
    return tours.map((tour) => (
      <div className="pList2">
        <div className="pListCard2" key={tour.id}>
          <div className="pListItem2">
            <LazyLoad>
              <div>
                <div className="tietkiem2">{tour.tietKiem}</div>
                <img
                  src={isFavorite(tour.id) ? favFill : fav}
                  alt="Favorite"
                  className="favorite2"
                  onClick={() => handleFavoriteClick(tour)}
                />
                <img
                  src={tour.image2}
                  alt={tour.image2}
                  className="pListImg2"
                />
              </div>
            </LazyLoad>
            <div className="pListTitles2">
              <h1>{tour.h1}</h1>
              <p>{tour.giaGoc}</p>
              <h1>
                <span>{tour.gia}</span>
              </h1>
            </div>
            <div className="pListTitle3">
              <div className="grIconDanhGia">
                <img className="iconDanhGia" alt="" src={tour.danhGia} />
                <div className="diemDanhGia" onClick={toggleReviewPopup}>
                  {tour.diemDanhGia}
                </div>
              </div>
              <div className="textDanhGia" onClick={toggleReviewPopup}>
                {tour.textDanhGia}
              </div>
              <button className="cardBtn2" onClick={handleWatch}>
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="">
      <div className="TourNgoaiNuoc">
        <div className="grDestBtn">
          <div className="grDestBtn2">
            <button
              className={`destBtn1 ${activeTab === "1" ? "active" : ""}`}
              onClick={() => setActiveTab("1")}
            >
              Khởi Hành từ Đà Nẵng
            </button>
            <button
              className={`destBtn1 ${activeTab === "2" ? "active" : ""}`}
              onClick={() => setActiveTab("2")}
            >
              Khởi hành từ Hồ Chí Minh
            </button>
            <button
              className={`destBtn1 ${activeTab === "3" ? "active" : ""}`}
              onClick={() => setActiveTab("3")}
            >
              Khởi hành từ Hà Nội
            </button>
          </div>
        </div>
        {/* ---------------------------- */}
        <div className="grContent">
          <div
            className={`content ${activeTab === "1" ? "active" : ""}`}
            id="1"
          >
            <div className="grid-container">{renderItems(danang)}</div>
          </div>
          <div
            className={`content ${activeTab === "2" ? "active" : ""}`}
            id="2"
          >
            <div className="grid-container">{renderItems(hochiminh)}</div>
          </div>
          <div
            className={`content ${activeTab === "3" ? "active" : ""}`}
            id="3"
          >
            <div className="grid-container">{renderItems(hanoi)}</div>
          </div>
        </div>
      </div>
      <div className="xemtatca">Xem Tất Cả ►</div>
      {/* Popup yêu cầu đăng nhập */}
      <LoginPopup />
      {/* Popup thông báo */}
      <NotificationPopup />
      {/* popup đánh giá du khác */}
      <ReviewPopup
        isVisible={isReviewPopupVisible}
        togglePopup={toggleReviewPopup}
      />
    </div>
  );
};

export default TourNgoaiNuoc;
