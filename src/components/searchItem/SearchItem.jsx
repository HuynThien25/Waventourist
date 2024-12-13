import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import "./searchItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft,faAngleRight,faCalendarDays,faCalendarWeek,faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
import useFavoriteHandler from "../useFavoriteHandler/UseFavoriteHandler";
import ReviewPopup from "../reviewPopup/ReviewPopup";
const SearchItem = ({destination,date,options,category,transport,priceRange,sapxep,
}) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Số mục trên mỗi trang
  const toursPerPage = 10; // Số lượng tour hiển thị trên mỗi trang
  const [isLoading, setIsLoading] = useState(true);
  const [filteredTours, setFilteredTours] = useState([]);
  const [isReviewPopupVisible, setReviewPopupVisible] = useState(false);

  const toggleReviewPopup = () => {
    setReviewPopupVisible(!isReviewPopupVisible);
  };

  const handleSee = () => {
    navigate("/chiTietTour", {
      state: { destination, date, options, category, transport, priceRange },
    });
  };
  // -----------đà nẵng------------------
  const danangs = [
    {
      id: 6,
      destination: "Đà nẵng",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietnam Airlines",
      category: "Ngắm cảnh",
    },
    {
      id: 7,
      destination: "Đà nẵng",
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
      diemDanhGia: "8.7",
      textDanhGia: "(7 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 9 chỗ",
      category: "Ngắm cảnh",
    },
    {
      id: 8,
      destination: "Đà nẵng",
      h1: "Tour Cù Lao Chàm - 1 ngày | Khởi hành: Đà Nẵng",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 26 chỗ",
      category: "Ngắm cảnh",
    },
    {
      id: 9,
      destination: "Hội An, Đà Nẵng",
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
      diemDanhGia: "8.4",
      textDanhGia: "(7 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietjet Air",
      category: "Nghệ thuật và văn hóa",
    },
    {
      id: 10,
      destination: "Đà nẵng",
      h1: "Trải nghiệm dù lượn trên núi Sơn Trà | Đà Nẵng",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "2.079.300 VND",
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: duluon,
      danhGia: heartFill,
      diemDanhGia: "9.3",
      textDanhGia: "(4 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietjet Air",
      category: "Ngắm cảnh",
    },
    {
      id: 11,
      destination: "Đà nẵng",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietnam Airlines",
      category: "Ngắm cảnh",
    },
    {
      id: 12,
      destination: "Đà nẵng",
      h1: "Tour ngày | Công Viên Súi Khoáng Nóng Núi Thần Tài",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Air Asia",
      category: "Điểm thiên nhiên",
    },
    {
      id: 13,
      destination: "Đà nẵng, Hội An",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 9 chỗ",
      category: "Điểm thiên nhiên",
    },
    {
      id: 14,
      destination: "Đà nẵng, Hội An",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 9 chỗ",
      category: "Ngắm cảnh",
    },
    {
      id: 15,
      destination: "Đà nẵng",
      h1: "Tour Chơi Golf một ngày từ Đà Nẵng BRG Golf Resort",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      tietKiem: "Tiết Kiệm 10%",
      gia: "3.800.000 VND",
      giaGoc: "2.824.200",
      image1: favorite,
      image2: choiGolfDN,
      danhGia: heartFill,
      diemDanhGia: "9.4",
      textDanhGia: "(7 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Tour theo chủ đề",
    },
    {
      id: 16,
      destination: "Đà nẵng",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Trải nghiệm ẩm thực",
    },
  ];
  // ----------đà lạt---------------------
  const dalats = [
    {
      id: 17,
      destination: "Đà lạt",
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
      diemDanhGia: "9.2",
      textDanhGia: "(7 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
    {
      id: 18,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 26 chỗ",
      category: "Điểm thiên nhiên",
    },
    {
      id: 19,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 26 chỗ",
      category: "Ngắm cảnh",
    },
    {
      id: 20,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 26 chỗ",
      category: "Điểm thiên nhiên",
    },
    {
      id: 21,
      destination: "Đà lạt",
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour chèo thuyền Sup & ăn trưa picnic, Hồ Tuyền Lâm",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 26 chỗ",
      category: "Tour theo chủ đề",
    },
    {
      id: 22,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 26 chỗ",
      category: "Tour theo chủ đề",
    },
    {
      id: 23,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Tour theo chủ đề",
    },
    {
      id: 24,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Tour theo chủ đề",
    },
    {
      id: 25,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 26 chỗ",
      category: "Tour theo chủ đề",
    },
    {
      id: 26,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Đi về bằng tàu hỏa",
      category: "Tour theo chủ đề",
    },
    {
      id: 27,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Tour bằng xe buýt",
    },
    {
      id: 28,
      destination: "Đà lạt",
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
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Tour theo chủ đề",
    },
  ];
  // ---------Hạ Long--------------
  const halongs = [
    {
      id: 29,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Vịnh Hạ Long trên du thuyền 5 sao Cozy Bay",
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
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
    {
      id: 30,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour vịnh Hạ Long trên du thuyền 5 sao Wego Halong",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "788.000 VND",
      image1: favorite,
      image2: halong2,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(12 đánh giá)",
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietjet Air",
      category: "Ngắm cảnh",
    },
    {
      id: 31,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Khám vịnh Hạ Long trên du thuyền 5 sao",
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
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietjet Air",
      category: "Ngắm cảnh",
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
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietjet Air",
      category: "Ngắm cảnh",
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
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
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
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 26 chỗ",
      category: "Ngắm cảnh",
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
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
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
      destination: "Phú Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Tour dưới nước",
    },
    {
      id: 37,
      tietKiem: "Tiết Kiệm 25%",
      h1: "Đi bộ dưới biển Seawalker và khám phá 3 đảo Phú Quốc",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "1.990.000 VND",
      giaGoc: "2.494.200 VND",
      image1: favorite,
      image2: phuquoc2,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(17 đánh giá)",
      destination: "Phú Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Tour dưới nước",
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
      destination: "Phú Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Điểm thiên nhiên",
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
      destination: "Phú Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Tour theo chủ đề",
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
      giaGoc: "1.624.200 VND",
      image1: favorite,
      image2: sapa1,
      danhGia: heartFill,
      diemDanhGia: "8.0",
      textDanhGia: "(7 đánh giá)",
      destination: "Sa pa",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
    {
      id: 41,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Trekking Sapa (Cát Cát , Lao Chải, Tả Van) - 2N1Đ",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "2.437.000 VND",
      giaGoc: "2.500.200 VND",
      image1: favorite,
      image2: sapa2,
      danhGia: heartFill,
      diemDanhGia: "8.0",
      textDanhGia: "(7 đánh giá)",
      destination: "Sa pa",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch Limousine 26 chỗ",
      category: "Điểm thiên nhiên",
    },
  ];
  // -----------------nha trang-------------------
  const nhatrangs = [
    {
      id: 42,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour tham quan đảo Nhà Trang (Lặn ống thở & tiệc nổi)",
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
      destination: "Nha Trang",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Tour dưới nước",
    },
    {
      id: 43,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour du thuyền Emperor Cruises trên Vịnh Nha Trang",
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
      destination: "Nha Trang",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
    {
      id: 44,
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Tham quan địa danh thành phố Nha Trang",
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
      destination: "Nha Trang",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
  ];
  // --------nước ngoài------------------------
  const hochiminh = [
    {
      id: 52,
      h1: "Tour Trung Quốc trọn gói (Phượng Hoàng Cổ Trấn, ...)",
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
      destination: "Trung quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
    {
      id: 53,
      h1: "Tour Trung Quốc trọn gói (Bắc Kinh, Thượng Hải,...)",
      tietKiem: "Tiết Kiệm 10%",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "13.106.200 VND",
      giaGoc: "13.924.200 VND",
      image1: favorite,
      image2: china2,
      danhGia: heartFill,
      diemDanhGia: "9.1",
      textDanhGia: "(3 đánh giá)",
      destination: "Trung quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
    {
      h1: "Tour Nửa ngày tham quan Cung Điện Versailles",
      tietKiem: "Tiết Kiệm 10%",
      gia: "2.316.200 VND",
      giaGoc: "2.524.200 VND",
      image1: favorite,
      image2: france2,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(14 đánh giá)",
      destination: "Pháp",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
    {
      h1: "Tour ngày Mont-saint-Michael Paris",
      tietKiem: "Tiết Kiệm 10%",
      gia: "3.506.200 VND",
      giaGoc: "3.324.200 VND",
      image1: favorite,
      image2: france,
      danhGia: heartFill,
      diemDanhGia: "8.7",
      textDanhGia: "(12 đánh giá)",
      destination: "Pháp",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
    {
      id: 54,
      h1: "Tour Ontabi Núi Phú Sĩ và hồ Kawaguchiko - 9 giờ",
      tietKiem: "Tiết Kiệm 10%",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "1.506.200 VND",
      giaGoc: "1.824.200 VND",
      image1: favorite,
      image2: japan,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(7 đánh giá)",
      destination: "Nhật bản",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietjet Air",
      category: "Ngắm cảnh",
    },
    {
      id: 55,
      h1: "Tour Bali Nusa Penida Private - 11 giờ",
      tietKiem: "Tiết Kiệm 10%",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "1.106.200 VND",
      giaGoc: "1.324.200 VND",
      image1: favorite,
      image2: bali,
      danhGia: heartFill,
      diemDanhGia: "8.8",
      textDanhGia: "(11 đánh giá)",
      destination: "Indonesia",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietjet Air",
      category: "Ngắm cảnh",
    },
    {
      id: 56,
      h1: "Tour Ngày Giethoorn Hà Lan từ Amsterdam",
      tietKiem: "Tiết Kiệm 10%",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "2.506.200 VND",
      giaGoc: "2.824.200 VND",
      image1: favorite,
      image2: halan,
      danhGia: heartFill,
      diemDanhGia: "8.7",
      textDanhGia: "(4 đánh giá)",
      destination: "Hà Lan",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không Vietjet Air",
      category: "Ngắm cảnh",
    },
    {
      id: 57,
      h1: "Tour ngắm hoa anh đào, Busan - 2N1Đ",
      tietKiem: "Tiết Kiệm 15%",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "2.955.300 VND",
      giaGoc: "4.284.200 VND",
      image1: favorite,
      image2: busan,
      danhGia: heartFill,
      diemDanhGia: "9.5",
      textDanhGia: "(17 đánh giá)",
      destination: "Hàn Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Điểm thiên nhiên",
    },
    {
      id: 58,
      h1: "Tour tham quan lâu đài Linderloof & Neuschwanstein",
      tietKiem: "Tiết Kiệm 10%",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "1.886.200 VND",
      giaGoc: "1.624.200 VND",
      image1: favorite,
      image2: germany,
      danhGia: heartFill,
      diemDanhGia: "8.9",
      textDanhGia: "(9 đánh giá)",
      destination: "Đức",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Ngắm cảnh",
    },
    {
      id: 59,
      h1: "Tour cả ngày Sa Mạc Pinnacles New Morcia và Hoa Dại",
      tietKiem: "Tiết Kiệm 10%",
      maTour: "FGH-46284",
      ngayDi: "22/11/2024",
      ngayVe: "24/11/2024",
      gia: "4.106.200 VND",
      giaGoc: "3.924.200 VND",
      image1: favorite,
      image2: uc,
      danhGia: heartFill,
      diemDanhGia: "8.4",
      textDanhGia: "(2 đánh giá)",
      destination: "úc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Hàng không VietNam Airlines",
      category: "Điểm thiên nhiên",
    },
  ];

  const allTours = [...danangs,...dalats,...halongs,...phuquocs,...sapas,...nhatrangs,...hochiminh,
  ];

  // Hàm chuyển giá từ chuỗi sang số
  const parsePrice = (price) => {
    if (typeof price === "number") {
      return price;
    }
    if (typeof price === "string") {
      return parseInt(price.replace(/\D/g, ""), 10);
    }
    return 0;
  };

  // Lọc danh sách tour dựa trên điều kiện tìm kiếm
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      // Lọc dữ liệu theo các tiêu chí
      const filtered = allTours.filter((tour) => {
        const matchesDestination =
          !destination ||
          tour.destination.toLowerCase().includes(destination.toLowerCase());
        const matchesTransport =
          transport === "all" ||
          tour.phuongTien.toLowerCase().includes(transport.toLowerCase());
        const matchesCategory =
          category === "all" ||
          tour.category.toLowerCase().includes(category.toLowerCase());
        const matchesPrice =
          parsePrice(tour.gia) >= priceRange[0] &&
          parsePrice(tour.gia) <= priceRange[1];
        return (
          matchesDestination &&
          matchesTransport &&
          matchesCategory &&
          matchesPrice
        );
      });

      // Xếp theo
      const sortTours = (tours) => {
        if (sapxep === "gia1") {
          return [...tours].sort(
            (a, b) => parsePrice(a.gia) - parsePrice(b.gia)
          );
        }
        if (sapxep === "gia2") {
          return [...tours].sort(
            (a, b) => parsePrice(b.gia) - parsePrice(a.gia)
          );
        }
        if (sapxep === "gia3") {
          return [...tours].sort((a, b) => b.diemDanhGia - a.diemDanhGia);
        }
        return tours;
      };

      setFilteredTours(sortTours(filtered));
      setCurrentPage(1);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Dọn dẹp timer khi dependencies thay đổi
  }, [destination, transport, category, priceRange, sapxep]);

  // Tính toán số trang
  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);

  // Phân trang: lấy ra danh sách các tour thuộc trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const toursToDisplay = filteredTours.slice(startIndex, endIndex);

  // Các hàm handle khi nhấn nút phân trang
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  //Yêu thích
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="searchItemContainer">
      {isLoading ? (
        <div className="loadingContainer">
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={index} className="skeletonCard"></div>
          ))}
        </div>
      ) : toursToDisplay.length > 0 ? (
        toursToDisplay.map((tour, index) => (
          <div key={index} className="seList">
            <div className="seListCard" key={tour.id}>
              <div className="seListItem">
                {/* ------ */}
                <div className="seTietkiem">{tour.tietKiem}</div>
                <img
                  src={isFavorite(tour.id) ? favFill : fav}
                  alt="Favorite"
                  className="seFavorite"
                  onClick={() => handleFavoriteClick(tour)}
                />
                <img src={tour.image2} alt={tour.h1} className="seListImg" />
                {/* ------ */}
                <div className="seListTitles">
                  <div className="seH1" onClick={handleSee}>
                    {tour.h1}
                  </div>
                  <div className="t" onClick={handleSee}>
                    <div className="seNgayDi">
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="iconTitleThongTin"
                      />
                      Khởi hành: <span>{tour.khoiHanh}</span>
                    </div>
                    <div className="seThoiGian">
                      <FontAwesomeIcon
                        icon={faCalendarWeek}
                        className="iconTitleThongTin"
                      />
                      Thời gian: <span>{tour.thoiGian}</span>
                    </div>
                    <div className="sePhuongTien">
                      <FontAwesomeIcon
                        icon={faPlaneUp}
                        className="iconTitleThongTin"
                      />
                      Phương tiện: <span>{tour.phuongTien}</span>
                    </div>
                  </div>
                  <div className="seGia">
                    <p>{tour.giaGoc}</p>
                    <h1>
                      <span>{tour.gia.toLocaleString("vi-VN")}</span>
                    </h1>
                  </div>
                  <div className="seListTitle">
                    <div className="seIcon">
                      <div className="grIconDanhGia">
                        <img
                          className="seIconDanhGia"
                          alt="Rating"
                          src={tour.danhGia}
                        />
                        <div
                          className="seDiemDanhGia"
                          onClick={toggleReviewPopup}
                        >
                          {tour.diemDanhGia}
                        </div>
                      </div>
                      <div
                        className="seTextDanhGia"
                        onClick={toggleReviewPopup}
                      >
                        {tour.textDanhGia}
                      </div>
                    </div>
                    <button className="seCardBtn2" onClick={handleSee}>
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="khongTimThayKetQua">Không tìm thấy kết quả phù hợp.</p>
      )}
      {/* Pagination: điều hướng giữa các trang */}
      {filteredTours.length > toursPerPage && (
        <div className="pagination">
          <button
            className="prevPageBtn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon className="iconPrev" icon={faAngleLeft} />
            Trang trước
          </button>
          <button
            className="nextPageBtn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Trang tiếp
            <FontAwesomeIcon className="iconNext" icon={faAngleRight} />
          </button>
        </div>
      )}
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

export default SearchItem;
