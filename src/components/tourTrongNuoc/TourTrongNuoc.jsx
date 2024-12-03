import "./tourTrongNuoc.css";
import React, { useState, useEffect } from "react";
import favorite from "../../assets/img/logo/favorite.png";
import heartFill from "../../assets/img/logo/heartFill.png";
import banahill from "../../assets/img/hinhAnh/banahill.jpg";
import chuaDN from "../../assets/img/hinhAnh/chuadanang.jpg";
import culaocham from "../../assets/img/hinhAnh/cuLaoCham.jpg";
import hoianDN from "../../assets/img/hinhAnh/HoiAnDN.jpg";
import duluon from "../../assets/img/hinhAnh/tourDuLuonDN.jpg";
import choiGolfDN from "../../assets/img/hinhAnh/choiGolfDN.jpg";
import AmThucDN from "../../assets/img/hinhAnh/AmThucDN.jpg";
import nuiThanTai from "../../assets/img/hinhAnh/nuiThanTai.jpg";
import thuyenThungHA from "../../assets/img/hinhAnh/thuyenThungHA.jpg";
import NHSonVaHoiAn from "../../assets/img/hinhAnh/NHSonVaHoiAn.jpg";
import duthuyen from "../../assets/img/hinhAnh/duthuyen.jpg";
import dalat1 from "../../assets/img/hinhAnh/dalat1.jpg";
import dalat2 from "../../assets/img/hinhAnh/dalat2.jpg";
import dalat3 from "../../assets/img/hinhAnh/dalat3.jpg";
import dalat4 from "../../assets/img/hinhAnh/dalat4.jpg";
import dalat5 from "../../assets/img/hinhAnh/dalat5.jpg";
import dalat6 from "../../assets/img/hinhAnh/dalat6.jpg";
import dalat7 from "../../assets/img/hinhAnh/dalat7.jpg";
import dalat8 from "../../assets/img/hinhAnh/dalat8.jpg";
import dalat9 from "../../assets/img/hinhAnh/dalat9.jpg";
import dalat10 from "../../assets/img/hinhAnh/dalat10.jpg";
import dalat11 from "../../assets/img/hinhAnh/dalat11.jpg";
import dalat12 from "../../assets/img/hinhAnh/dalat12.jpg";
import halong1 from "../../assets/img/hinhAnh/halong1.jpg";
import halong2 from "../../assets/img/hinhAnh/halong2.jpg";
import halong3 from "../../assets/img/hinhAnh/halong3.jpg";
import halong4 from "../../assets/img/hinhAnh/halong4.jpg";
import halong5 from "../../assets/img/hinhAnh/halong5.jpg";
import halong6 from "../../assets/img/hinhAnh/halong6.jpg";
import halong7 from "../../assets/img/hinhAnh/halong7.jpg";
import phuquoc1 from "../../assets/img/hinhAnh/phuquoc1.jpg";
import phuquoc2 from "../../assets/img/hinhAnh/phuquoc2.jpg";
import phuquoc3 from "../../assets/img/hinhAnh/phuquoc3.jpg";
import phuquoc4 from "../../assets/img/hinhAnh/phuquoc4.jpg";
import sapa1 from "../../assets/img/hinhAnh/sapa1.jpg";
import sapa2 from "../../assets/img/hinhAnh/sapa2.jpg";
import nhatrang1 from "../../assets/img/hinhAnh/nhatrang1.jpg";
import nhatrang2 from "../../assets/img/hinhAnh/nhatrang2.jpg";
import nhatrang3 from "../../assets/img/hinhAnh/nhatrang3.jpg";
import fav from "../../assets/img/logo/fav.png";
import favFill from "../../assets/img/logo/favFill.png";
import { useNavigate } from "react-router-dom";
import useFavoriteHandler from "../useFavoriteHandler/UseFavoriteHandler";
import ReviewPopup from "../reviewPopup/ReviewPopup";

const TourTrongNuoc = () => {
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(true);
  const [isReviewPopupVisible, setReviewPopupVisible] = useState(false);

  const toggleReviewPopup = () => {
    setReviewPopupVisible(!isReviewPopupVisible);
  };

  const handleWatch = () => {
    navigate("/chiTietTour");
  };

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false); 
    },7000);
    return ()=> clearTimeout(timer);
  },[]);

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

  const danangs = [
    {
      id: 6,
      h1: "Tour Premium Bà Nà Hills, Đà Nẵng - 1 ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 25%",
      gia: "955.300 VND",
      giaGoc: "1.284.200 VND",
      image1: favorite,
      image2: banahill,
      danhGia: heartFill,
      diemDanhGia: "9.7",
      textDanhGia: "(27 đánh giá)",
    },
    {
      id: 7,
      h1: "Tour chùa Linh Ứng, Ngũ Hành Sơn, Hội An - Nửa ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "566.200 VND",
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: chuaDN,
      danhGia: heartFill,
      diemDanhGia: "8.0",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 8,
      h1: "Tour Cù Lao Chàm - 1 ngày | Khởi hành Đà Nẵng",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "650.602 VND",
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: culaocham,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(21 đánh giá)",
    },
    {
      id: 9,
      h1: "Tour Hội An - Đà Nẵng - 2 ngày 1 đêm",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "2.179.000 VND",
      giaGoc: "1.824.200 VND",
      image1: favorite,
      image2: hoianDN,
      danhGia: heartFill,
      diemDanhGia: "8.0",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 10,
      h1: "Trải nghiệm du lượn trên núi Sơn Trà | Đà Nẵng",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "2.079.300 VND",
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: duluon,
      danhGia: heartFill,
      diemDanhGia: "9.0",
      textDanhGia: "(4 đánh giá)",
    },
    {
      id: 11,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Du Thuyền ngắm Hoàng Hôn trên Sông Hàn",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "390.000 VND",
      giaGoc: "524.200 VND",
      image1: favorite,
      image2: duthuyen,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(17 đánh giá)",
    },
    {
      id: 12,
      h1: "Tour ngày | Đà Nẵng Công Viên Súi Khoáng Nóng Núi Thần Tài",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "850.000 VND",
      giaGoc: "924.200 VND",
      image1: favorite,
      image2: nuiThanTai,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(23 đánh giá)",
    },
    {
      id: 13,
      h1: "Tour trải nghiệm thuyền thúng dừa, Hội An - Đà Nẵng",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "916.200 VND",
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: thuyenThungHA,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(19 đánh giá)",
    },
    {
      id: 14,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Ngũ Hành Sơn và Phố Cổ Hội An - Nửa ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "434.000 VND",
      giaGoc: "468.200 VND",
      image1: favorite,
      image2: NHSonVaHoiAn,
      danhGia: heartFill,
      diemDanhGia: "9.3",
      textDanhGia: "(24 đánh giá)",
    },
    {
      id: 15,
      h1: "Tour Chơi Golf một ngày từ Đà Nẵng BRG Golf Resort",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "3.800.000 VND",
      giaGoc: "2.824.200 VND",
      image1: favorite,
      image2: choiGolfDN,
      danhGia: heartFill,
      diemDanhGia: "9.4",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 16,
      h1: "Tour thưởng thức ẩm thực Đà Nẵng bằng Xe Máy",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "938.000 VND",
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: AmThucDN,
      danhGia: heartFill,
      diemDanhGia: "8.6",
      textDanhGia: "(14 đánh giá)",
    },
  ];
  // -----------da lat---------------
  const dalats = [
    {
      id: 17,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Khám Phá Đà Lạt thơ mộng - 1 ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "530.000 VND",
      giaGoc: "600.200 VND",
      image1: favorite,
      image2: dalat1,
      danhGia: heartFill,
      diemDanhGia: "9.0",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 18,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Chinh phục Langbiang, thác Datanla và Crazy House",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "440.000 VND",
      giaGoc: "504.200 VND",
      image1: favorite,
      image2: dalat2,
      danhGia: heartFill,
      diemDanhGia: "9.3",
      textDanhGia: "(6 đánh giá)",
    },
    {
      id: 19,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Khám Phá địa điểm mới tại Đà Lạt - 1 ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "550.000 VND",
      giaGoc: "620.200 VND",
      image1: favorite,
      image2: dalat3,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(9 đánh giá)",
    },
    {
      id: 20,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour săn mấy và đón bình minh tại Đà Lạt - Nửa ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "350.000 VND",
      giaGoc: "404.200 VND",
      image1: favorite,
      image2: dalat4,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(19 đánh giá)",
    },
    {
      id: 21,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour chèo thuyền SUP & ăn trưa picnic tại Hồ Tuyền Lâm",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "714.000 VND",
      giaGoc: "924.000 VND",
      image1: favorite,
      image2: dalat5,
      danhGia: heartFill,
      diemDanhGia: "8.6",
      textDanhGia: "(8 đánh giá)",
    },
    {
      id: 22,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Xe trượt Aipine Coaster Datanla tại Đà Lạt",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "175.000 VND",
      giaGoc: "180.200 VND",
      image1: favorite,
      image2: dalat6,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(17 đánh giá)",
    },
    {
      id: 23,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé Nông Trại Cún Puppy Farm, Đà Lạt",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "100.000 VND",
      image1: favorite,
      image2: dalat7,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(28 đánh giá)",
    },
    {
      id: 24,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé núi Langbiang, Đà Lạt",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "50.000 VND",
      image1: favorite,
      image2: dalat8,
      danhGia: heartFill,
      diemDanhGia: "8.6",
      textDanhGia: "(14 đánh giá)",
    },
    {
      id: 25,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé khu du lịch rừng thông Núi Voi tại Đà Lạt",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "180.000 VND",
      giaGoc: "190.200 VND",
      image1: favorite,
      image2: dalat9,
      danhGia: heartFill,
      diemDanhGia: "8.5",
      textDanhGia: "(15 đánh giá)",
    },
    {
      id: 26,
      tietKiem: "Tiết Kiệm 45%",
      h1: "Vé Euro Garden Vườn Châu Âu, Đà Lạt",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "90.000 VND",
      giaGoc: "160.200 VND",
      image1: favorite,
      image2: dalat10,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(17 đánh giá)",
    },
    {
      id: 27,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé xe buýt 2 tầng Đà Lạt City Sightseeing",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "120.000 VND",
      giaGoc: "130.200 VND",
      image1: favorite,
      image2: dalat11,
      danhGia: heartFill,
      diemDanhGia: "9.7",
      textDanhGia: "(18 đánh giá)",
    },
    {
      id: 28,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé Fresh Garden Đà Lạt",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "108.000 VND",
      giaGoc: "120.200 VND",
      image1: favorite,
      image2: dalat12,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(11 đánh giá)",
    },
  ];
  // ---------Hạ Long--------------
  const halongs = [
    {
      id: 29,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Vịnh Hạ Long trên du thuyền 5 sao Cozy Bay Premium",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "960.500 VND",
      giaGoc: "1.065.200 VND",
      image1: favorite,
      image2: halong1,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(19 đánh giá)",
    },
    {
      id: 30,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour khám phá vịnh Hạ Long du thuyền 5 sao Wego Halong",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "788.000 VND",
      image1: favorite,
      image2: halong2,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(12 đánh giá)",
    },
    {
      id: 31,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Khám vịnh Hạ Long trên du thuyền 5 sao - Tour 1 ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "1.125.000 VND",
      giaGoc: "1.435.200 VND",
      image1: favorite,
      image2: halong3,
      danhGia: heartFill,
      diemDanhGia: "8.5",
      textDanhGia: "(16 đánh giá)",
    },
    {
      id: 32,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Hạ Long Bay Day Cruise",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "1.044.000 VND",
      image1: favorite,
      image2: halong4,
      danhGia: heartFill,
      diemDanhGia: "10.0",
      textDanhGia: "(1 đánh giá)",
    },
    {
      id: 33,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Khám phá vịnh Hạ Long với du thuyền 4 giờ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "813.500 VND",
      image1: favorite,
      image2: halong5,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(9 đánh giá)",
    },
    {
      id: 34,
      tietKiem: "Tiết Kiệm 15%",
      h1: "Tour Dragonfly Cruise Vịnh Hạ Long - 1 ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "687.000 VND",
      giaGoc: "787.200 VND",
      image1: favorite,
      image2: halong6,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(18 đánh giá)",
    },
    {
      id: 35,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Khám phá Hạ Long với tour du thuyền Vitory Stande",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "3.123.000 VND",
      image1: favorite,
      image2: halong7,
      danhGia: heartFill,
      diemDanhGia: "9.3",
      textDanhGia: "(6 đánh giá)",
    },
  ];
  // ------------phu quoc--------------------
  const phuquocs = [
    {
      id: 36,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Đi bộ dưới biển Seawalker Phú Quốc Namaste",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "450.000 VND",
      image1: favorite,
      image2: phuquoc1,
      danhGia: heartFill,
      diemDanhGia: "9.0",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 37,
      tietKiem: "Tiết Kiệm 25%",
      h1: "Đi bộ dưới biển Seawalker và khám phá 3 đảo Phú Quốc",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "1.990.000 VND",
      giaGoc: "2.494.200",
      image1: favorite,
      image2: phuquoc2,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(17 đánh giá)",
    },
    {
      id: 38,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour khám phá 3 đảo bằng tàu - 1 ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "605.000 VND",
      giaGoc: "650.200",
      image1: favorite,
      image2: phuquoc3,
      danhGia: heartFill,
      diemDanhGia: "8.6",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 39,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé Vin Wonder Phú Quốc",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "200.000 VND",
      image1: favorite,
      image2: phuquoc4,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(7 đánh giá)",
    },
  ];
  // ---------------sapa----------------
  const sapas = [
    {
      id: 40,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Khám phá Sapa - Khởi hành Hà Nội - 3N2Đ|2N1Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "1.879.000 VND",
      giaGoc: "1.624.200",
      image1: favorite,
      image2: sapa1,
      danhGia: heartFill,
      diemDanhGia: "8.0",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 41,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Trekking Sapa (Cát Cát , Lao Chải, Tả Van) - 2N1Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "2.437.000 VND",
      giaGoc: "2.500.200",
      image1: favorite,
      image2: sapa2,
      danhGia: heartFill,
      diemDanhGia: "8.0",
      textDanhGia: "(7 đánh giá)",
    },
  ];
  // -----------------nha trang-------------------
  const nhatrangs = [
    {
      id: 42,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour tham quan đảo Nhà Trang (Lặn ống thở & tiệc nổi) - 1 ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "510.000 VND",
      giaGoc: "600.200 VND",
      image1: favorite,
      image2: nhatrang1,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(27 đánh giá)",
    },
    {
      id: 43,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour du thuyền Emperor Cruises trên Vịnh Nha Trang - 1 ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "900.000 VND",
      giaGoc: "800.200 VND",
      image1: favorite,
      image2: nhatrang2,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(7 đánh giá)",
    },
    {
      id: 44,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Tham quan địa danh thành phố Nha Trang - Tour nửa ngày",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "584.000 VND",
      giaGoc: "615.200 VND",
      image1: favorite,
      image2: nhatrang3,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(17 đánh giá)",
    },
  ];

  const renderItems = (tours, isLoading) => {
    return isLoading
      ? // Hiển thị Skeleton khi dữ liệu đang tải
        Array(8)
          .fill(null)
          .map((_, index) => (
            <div className="pList2" key={index}>
              <div className="pListCard2 ">
                <div className="pListItem2">
                  <div className="skeleton2 skeleton-img2"></div>
                  <div className="skeleton2 skeleton-tietkiem2"></div>
                  <div className="skeleton2 skeleton-title2"></div>
                  <div className="skeleton2 skeleton-price2"></div>
                  <div className="skeleton2 skeleton-rating2"></div>
                  <div className="skeleton2 skeleton-button2"></div>
                </div>
              </div>
            </div>
          ))
      : // Hiển thị danh sách tour khi đã tải xong
        tours.map((tour) => (
          <div className="pList2" key={tour.id}>
            <div className="pListCard2">
              <div className="pListItem2">
                
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
                  
                <div className="pListTitles2" onClick={handleWatch}>
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
      {/* --------------------------------------- */}
      <div className="destWeLove">
        <div className="grDestBtn">
          <div className="grDestBtn2">
            <button
              className={`destBtn2 ${activeTab === "1" ? "active" : ""}`}
              onClick={() => setActiveTab("1")}
            >
              Đà Nẵng
            </button>
            <button
              className={`destBtn2 ${activeTab === "2" ? "active" : ""}`}
              onClick={() => setActiveTab("2")}
            >
              Đà Lạt
            </button>
            <button
              className={`destBtn2 ${activeTab === "3" ? "active" : ""}`}
              onClick={() => setActiveTab("3")}
            >
              Hạ Long
            </button>
            <button
              className={`destBtn2 ${activeTab === "4" ? "active" : ""}`}
              onClick={() => setActiveTab("4")}
            >
              Phú Quốc
            </button>
            <button
              className={`destBtn2 ${activeTab === "5" ? "active" : ""}`}
              onClick={() => setActiveTab("5")}
            >
              Sa Pa
            </button>
            <button
              className={`destBtn2 ${activeTab === "6" ? "active" : ""}`}
              onClick={() => setActiveTab("6")}
            >
              Nha Trang
            </button>
          </div>
        </div>
        {/* ---------------------------------- */}
        <div className={`content ${activeTab === "1" ? "active" : ""}`} id="1">
          <div className="grid-container">{renderItems(danangs, isLoading)}</div>
        </div>
        <div className={`content ${activeTab === "2" ? "active" : ""}`} id="2">
          <div className="grid-container">{renderItems(dalats, isLoading)}</div>
        </div>
        <div className={`content ${activeTab === "3" ? "active" : ""}`} id="3">
          <div className="grid-container">{renderItems(halongs, isLoading)}</div>
        </div>
        <div className={`content ${activeTab === "4" ? "active" : ""}`} id="4">
          <div className="grid-container">{renderItems(phuquocs, isLoading)}</div>
        </div>
        <div className={`content ${activeTab === "5" ? "active" : ""}`} id="5">
          <div className="grid-container">{renderItems(sapas, isLoading)}</div>
        </div>
        <div className={`content ${activeTab === "6" ? "active" : ""}`} id="6">
          <div className="grid-container">{renderItems(nhatrangs, isLoading)}</div>
        </div>
      </div>
      {/* ------------------------------------------ */}
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

export default TourTrongNuoc;
