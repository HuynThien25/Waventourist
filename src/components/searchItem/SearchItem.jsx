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
import "./searchItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCalendarDays,
  faCalendarWeek,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazy-load";

const SearchItem = ({
  destination,
  date,
  options,
  category,
  transport,
  priceRange,
}) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const itemsPerPage = 5; // Số mục trên mỗi trang
  const toursPerPage = 5; // Số lượng tour hiển thị trên mỗi trang

  const handleSee = () => {
    navigate("/chiTietTour", {
      state: { destination, date, options, category, transport, priceRange },
    });
  };
  // -----------đà nẵng------------------
  const danangs = [
    {
      destination: "Đà nẵng",
      h1: "Tour Premium Bà Nà Hills, Đà Nẵng - 1 ngày",
      tietKiem: "Tiết Kiệm 25%",
      gia: 955300,
      giaGoc: "1.284.200 VND",
      image1: favorite,
      image2: banahill,
      danhGia: heartFill,
      diemDanhGia: 9.7,
      textDanhGia: "(27 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà nẵng",
      h1: "Tour chùa Linh Ứng, Ngũ Hành Sơn, Hội An - Nửa ngày",
      tietKiem: "Tiết Kiệm 10%",
      gia: 566200,
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: chuaDN,
      danhGia: heartFill,
      diemDanhGia: 8.7,
      textDanhGia: "(7 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch",
    },
    {
      destination: "Đà nẵng",
      h1: "Tour Cù Lao Chàm - 1 ngày | Khởi hành: Đà Nẵng",
      tietKiem: "Tiết Kiệm 10%",
      gia: 650602,
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: culaocham,
      danhGia: heartFill,
      diemDanhGia: 8.8,
      textDanhGia: "(21 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch",
    },
    {
      destination: "Hội An, Đà Nẵng",
      h1: "Tour Hội An - Đà Nẵng - 2 ngày 1 đêm",
      tietKiem: "Tiết Kiệm 10%",
      gia: 2179000,
      giaGoc: "1.824.200 VND",
      image1: favorite,
      image2: hoianDN,
      danhGia: heartFill,
      diemDanhGia: 8.4,
      textDanhGia: "(7 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà nẵng",
      h1: "Trải nghiệm du lượn trên núi Sơn Trà | Đà Nẵng",
      tietKiem: "Tiết Kiệm 10%",
      gia: 2079300,
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: duluon,
      danhGia: heartFill,
      diemDanhGia: 9.3,
      textDanhGia: "(4 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà nẵng",
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Du Thuyền ngắm Hoàng Hôn trên Sông Hàn",
      gia: 390000,
      giaGoc: "524.200 VND",
      image1: favorite,
      image2: duthuyen,
      danhGia: heartFill,
      diemDanhGia: 8.8,
      textDanhGia: "(17 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà nẵng",
      h1: "Tour ngày | Công Viên Súi Khoáng Nóng Núi Thần Tài",
      tietKiem: "Tiết Kiệm 10%",
      gia: 850000,
      giaGoc: "924.200 VND",
      image1: favorite,
      image2: nuiThanTai,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(23 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà nẵng, Hội An",
      h1: "Tour trải nghiệm thuyền thúng dừa, Hội An - Đà Nẵng",
      tietKiem: "Tiết Kiệm 10%",
      gia: 916200,
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: thuyenThungHA,
      danhGia: heartFill,
      diemDanhGia: 8.8,
      textDanhGia: "(19 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà nẵng, Hội An",
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Ngũ Hành Sơn và Phố Cổ Hội An - Nửa ngày",
      gia: 434000,
      giaGoc: "468.200 VND",
      image1: favorite,
      image2: NHSonVaHoiAn,
      danhGia: heartFill,
      diemDanhGia: 9.3,
      textDanhGia: "(24 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà nẵng",
      h1: "Tour Chơi Golf một ngày từ Đà Nẵng BRG Golf Resort",
      tietKiem: "Tiết Kiệm 10%",
      gia: 3800000,
      giaGoc: "2.824.200",
      image1: favorite,
      image2: choiGolfDN,
      danhGia: heartFill,
      diemDanhGia: 9.4,
      textDanhGia: "(7 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà nẵng",
      h1: "Tour thưởng thức ẩm thực Đà Nẵng bằng Xe Máy",
      tietKiem: "Tiết Kiệm 10%",
      gia: 938000,
      giaGoc: "824.200 VND",
      image1: favorite,
      image2: AmThucDN,
      danhGia: heartFill,
      diemDanhGia: 8.6,
      textDanhGia: "(14 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
  ];
  // ----------đà lạt---------------------
  const dalats = [
    {
      destination: "Đà lạt",
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Khám Phá Đà Lạt thơ mộng - 1 ngày",
      gia: 530000,
      giaGoc: "600.200 VND",
      image1: favorite,
      image2: dalat1,
      danhGia: heartFill,
      diemDanhGia: 9.2,
      textDanhGia: "(7 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà lạt",
      tietKiem: "Tiết Kiệm 10%",
      h1: "Chinh phục Langbiang, thác Datanla và Crazy House",
      gia: 440000,
      giaGoc: "504.200 VND",
      image1: favorite,
      image2: dalat2,
      danhGia: heartFill,
      diemDanhGia: 9.3,
      textDanhGia: "(6 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà lạt",

      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Khám Phá địa điểm mới tại Đà Lạt - 1 ngày",
      gia: 550000,
      giaGoc: "620.200 VND",
      image1: favorite,
      image2: dalat3,
      danhGia: heartFill,
      diemDanhGia: 8.8,
      textDanhGia: "(9 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà lạt",

      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour săn mấy và đón bình minh tại Đà Lạt - Nửa ngày",
      gia: 350000,
      giaGoc: "404.200 VND",
      image1: favorite,
      image2: dalat4,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(19 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà lạt",

      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour chèo thuyền Sup & ăn trưa picnic, Hồ Tuyền Lâm",
      gia: 714000,
      giaGoc: "924.000 VND",
      image1: favorite,
      image2: dalat5,
      danhGia: heartFill,
      diemDanhGia: 8.6,
      textDanhGia: "(8 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch",
    },
    {
      destination: "Đà lạt",

      tietKiem: "Tiết Kiệm 10%",
      h1: "Xe trượt Aipine Coaster Datanla tại Đà Lạt",
      gia: 175000,
      giaGoc: "180.200 VND",
      image1: favorite,
      image2: dalat6,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(17 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Xe du lịch",
    },
    {
      destination: "Đà lạt",
      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé Nông Trại Cún Puppy Farm, Đà Lạt",
      gia: 100000,
      image1: favorite,
      image2: dalat7,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(28 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà lạt",

      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé núi Langbiang, Đà Lạt",
      gia: 50000,
      image1: favorite,
      image2: dalat8,
      danhGia: heartFill,
      diemDanhGia: 8.6,
      textDanhGia: "(14 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà lạt",

      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé khu du lịch rừng thông Núi Voi tại Đà Lạt",
      gia: 180000,
      giaGoc: "190.200 VND",
      image1: favorite,
      image2: dalat9,
      danhGia: heartFill,
      diemDanhGia: 8.5,
      textDanhGia: "(15 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà lạt",

      tietKiem: "Tiết Kiệm 45%",
      h1: "Vé Euro Garden Vườn Châu Âu, Đà Lạt",
      gia: 90000,
      giaGoc: "160.200 VND",
      image1: favorite,
      image2: dalat10,
      danhGia: heartFill,
      diemDanhGia: 8.8,
      textDanhGia: "(17 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Tàu",
    },
    {
      destination: "Đà lạt",

      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé xe buýt 2 tầng Đà Lạt City Sightseeing",
      gia: 120000,
      giaGoc: "130.200 VND",
      image1: favorite,
      image2: dalat11,
      danhGia: heartFill,
      diemDanhGia: 9.7,
      textDanhGia: "(18 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      destination: "Đà lạt",

      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé Fresh Garden Đà Lạt",
      gia: 108000,
      giaGoc: "120.200 VND",
      image1: favorite,
      image2: dalat12,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(11 đánh giá)",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
  ];
  // ---------Hạ Long--------------
  const halongs = [
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Vịnh Hạ Long trên du thuyền 5 sao Cozy Bay",
      gia: 960500,
      giaGoc: "1.065.200 VND",
      image1: favorite,
      image2: halong1,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(19 đánh giá)",
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour vịnh Hạ Long trên du thuyền 5 sao Wego Halong",
      gia: 788000,
      image1: favorite,
      image2: halong2,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(12 đánh giá)",
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Khám vịnh Hạ Long trên du thuyền 5 sao",
      gia: 1125000,
      giaGoc: "1.435.200 VND",
      image1: favorite,
      image2: halong3,
      danhGia: heartFill,
      diemDanhGia: 8.5,
      textDanhGia: "(16 đánh giá)",
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Hạ Long Bay Day Cruise",
      gia: 1044000,
      image1: favorite,
      image2: halong4,
      danhGia: heartFill,
      diemDanhGia: 10.0,
      textDanhGia: "(1 đánh giá)",
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Khám phá vịnh Hạ Long với du thuyền 4 giờ",
      gia: 813500,
      image1: favorite,
      image2: halong5,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(9 đánh giá)",
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 15%",
      h1: "Tour Dragonfly Cruise Vịnh Hạ Long - 1 ngày",
      gia: 687000,
      giaGoc: "787.200 VND",
      image1: favorite,
      image2: halong6,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(18 đánh giá)",
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Khám phá Hạ Long với tour du thuyền Vitory Stande",
      gia: 3123000,
      image1: favorite,
      image2: halong7,
      danhGia: heartFill,
      diemDanhGia: 9.3,
      textDanhGia: "(6 đánh giá)",
      destination: "Hạ long",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
  ];
  // ------------phu quoc--------------------
  const phuquocs = [
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Đi bộ dưới biển Seawalker Phú Quốc Namaste",
      gia: 450000,
      image1: favorite,
      image2: phuquoc1,
      danhGia: heartFill,
      diemDanhGia: 9.0,
      textDanhGia: "(7 đánh giá)",
      destination: "Phú Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 25%",
      h1: "Đi bộ dưới biển Seawalker và khám phá 3 đảo Phú Quốc",
      gia: 1990000,
      giaGoc: "2.494.200 VND",
      image1: favorite,
      image2: phuquoc2,
      danhGia: heartFill,
      diemDanhGia: 8.8,
      textDanhGia: "(17 đánh giá)",
      destination: "Phú Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour khám phá 3 đảo bằng tàu - 1 ngày",
      gia: 605000,
      giaGoc: "650.200",
      image1: favorite,
      image2: phuquoc3,
      danhGia: heartFill,
      diemDanhGia: 8.6,
      textDanhGia: "(7 đánh giá)",
      destination: "Phú Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Vé Vin Wonder Phú Quốc",
      gia: 200000,
      image1: favorite,
      image2: phuquoc4,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(7 đánh giá)",
      destination: "Phú Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
  ];
  // ---------------sapa----------------
  const sapas = [
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Khám phá Sapa - Khởi hành Hà Nội - 3N2Đ|2N1Đ",
      gia: 1879000,
      giaGoc: "1.624.200 VND",
      image1: favorite,
      image2: sapa1,
      danhGia: heartFill,
      diemDanhGia: 8.0,
      textDanhGia: "(7 đánh giá)",
      destination: "Sa pa",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Trekking Sapa (Cát Cát , Lao Chải, Tả Van) - 2N1Đ",
      gia: 2437000,
      giaGoc: "2.500.200 VND",
      image1: favorite,
      image2: sapa2,
      danhGia: heartFill,
      diemDanhGia: 8.0,
      textDanhGia: "(7 đánh giá)",
      destination: "Sa pa",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
  ];
  // -----------------nha trang-------------------
  const nhatrangs = [
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour tham quan đảo Nhà Trang (Lặn ống thở & tiệc nổi)",
      gia: 510000,
      giaGoc: "600.200 VND",
      image1: favorite,
      image2: nhatrang1,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(27 đánh giá)",
      destination: "Nha Trang",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour du thuyền Emperor Cruises trên Vịnh Nha Trang",
      gia: 900000,
      giaGoc: "800.200 VND",
      image1: favorite,
      image2: nhatrang2,
      danhGia: heartFill,
      diemDanhGia: 8.8,
      textDanhGia: "(7 đánh giá)",
      destination: "Nha Trang",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      tietKiem: "Tiết Kiệm 10%",
      h1: "Tour Tham quan địa danh thành phố Nha Trang",
      gia: 584000,
      giaGoc: "615.200 VND",
      image1: favorite,
      image2: nhatrang3,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(17 đánh giá)",
      destination: "Nha Trang",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
  ];
  // --------nước ngoài------------------------
  const hochiminh = [
    {
      h1: "Tour Trung Quốc trọn gói (Phượng Hoàng Cổ Trấn, ...) - 4N3Đ",
      tietKiem: "Tiết Kiệm 10%",
      gia: 10106200,
      giaGoc: "9.924.200 VND",
      image1: favorite,
      image2: china3,
      danhGia: heartFill,
      diemDanhGia: 9.4,
      textDanhGia: "(3 đánh giá)",
      destination: "Trung Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      h1: "Tour Trung Quốc trọn gói (Bắc Kinh, Thượng Hải, Hàng Châu) - 4N3Đ",
      tietKiem: "Tiết Kiệm 10%",
      gia: 13106200,
      giaGoc: "13.924.200 VND",
      image1: favorite,
      image2: china2,
      danhGia: heartFill,
      diemDanhGia: 9.1,
      textDanhGia: "(3 đánh giá)",
      destination: "Trung Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      h1: "Tour Nửa ngày tham quan Cung Điện Versailles",
      tietKiem: "Tiết Kiệm 10%",
      gia: 2316200,
      giaGoc: "2.524.200 VND",
      image1: favorite,
      image2: france2,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(14 đánh giá)",
      destination: "Pháp",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      h1: "Tour ngày Mont-saint-Michael Paris",
      tietKiem: "Tiết Kiệm 10%",
      gia: 3506200,
      giaGoc: "3.324.200 VND",
      image1: favorite,
      image2: france,
      danhGia: heartFill,
      diemDanhGia: 8.7,
      textDanhGia: "(12 đánh giá)",
      destination: "Pháp",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      h1: "Tour Ontabi Núi Phú Sĩ và hồ Kawaguchiko - 9 giờ",
      tietKiem: "Tiết Kiệm 10%",
      gia: 1506200,
      giaGoc: "1.824.200 VND",
      image1: favorite,
      image2: japan,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(7 đánh giá)",
      destination: "Nhật",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      h1: "Tour Bali Nusa Penida Private - 11 giờ",
      tietKiem: "Tiết Kiệm 10%",
      gia: 1106200,
      giaGoc: "1.324.200 VND",
      image1: favorite,
      image2: bali,
      danhGia: heartFill,
      diemDanhGia: 8.8,
      textDanhGia: "(11 đánh giá)",
      destination: "Indo",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      h1: "Tour Ngày Giethoorn Hà Lan từ Amsterdam",
      tietKiem: "Tiết Kiệm 10%",
      gia: 2506200,
      giaGoc: "2.824.200 VND",
      image1: favorite,
      image2: halan,
      danhGia: heartFill,
      diemDanhGia: 8.7,
      textDanhGia: "(4 đánh giá)",
      destination: "Hà Lan",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      h1: "Tour ngắm hoa anh đào, Busan - 2N1Đ",
      tietKiem: "Tiết Kiệm 15%",
      gia: 2955300,
      giaGoc: "4.284.200 VND",
      image1: favorite,
      image2: busan,
      danhGia: heartFill,
      diemDanhGia: 9.5,
      textDanhGia: "(17 đánh giá)",
      destination: "Hàn Quốc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      h1: "Tour tham quan lâu đài Linderloof & Neuschwanstein",
      tietKiem: "Tiết Kiệm 10%",
      gia: 1886200,
      giaGoc: "1.624.200 VND",
      image1: favorite,
      image2: germany,
      danhGia: heartFill,
      diemDanhGia: 8.9,
      textDanhGia: "(9 đánh giá)",
      destination: "Đức",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
    {
      h1: "Tour cả ngày Sa Mạc Pinnacles New Morcia và Hoa Dại",
      tietKiem: "Tiết Kiệm 10%",
      gia: 4106200,
      giaGoc: "3.924.200 VND",
      image1: favorite,
      image2: uc,
      danhGia: heartFill,
      diemDanhGia: 8.4,
      textDanhGia: "(2 đánh giá)",
      destination: "Úc",
      khoiHanh: "15/12/2024 | 15/11/2024",
      thoiGian: "4 ngày 3 đêm",
      phuongTien: "Máy bay",
    },
  ];

  const allTours = [
    ...danangs,
    ...dalats,
    ...halongs,
    ...phuquocs,
    ...sapas,
    ...nhatrangs,
    ...hochiminh,
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
  const filteredTours = allTours.filter((tour) => {
    const matchesDestination =
      !destination ||
      tour.destination.toLowerCase().includes(destination.toLowerCase());
    const matchesTransport =
      transport === "all" ||
      tour.phuongTien.toLowerCase().includes(transport.toLowerCase());
    const tourPrice = parsePrice(tour.gia);
    const matchesPrice =
      tourPrice >= priceRange[0] && tourPrice <= priceRange[1];
    return matchesDestination && matchesTransport && matchesPrice;
  });

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

  // Làm trang luôn nằm ở đầu
  useEffect(() => {
    window.scrollTo(0, 0); // Di chuyển lên đầu trang khi chuyển trang
  }, [currentPage]);

  return (
    <div className="searchItemContainer">
      {filteredTours.length > 0 ? (
        // Phân trang: chỉ hiển thị một số tour trên mỗi trang
        filteredTours
          .slice((currentPage - 1) * toursPerPage, currentPage * toursPerPage)
          .map((tour, index) => (
            <div key={index} className="seList">
              <div className="seListCard" onClick={handleSee}>
                <div className="seListItem">
                  <LazyLoad>
                    <div>
                      <div className="seTietkiem">{tour.tietKiem}</div>
                      <img
                        src={tour.image1}
                        alt="Favorite"
                        className="seFavorite"
                      />
                      <img
                        src={tour.image2}
                        alt={tour.h1}
                        className="seListImg"
                      />
                    </div>
                  </LazyLoad>
                  <div className="seListTitles">
                    <div className="seH1">{tour.h1}</div>
                    <div className="t">
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
                        <span>{tour.gia.toLocaleString("vi-VN")} VND</span>
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
                          <div className="seDiemDanhGia">
                            {tour.diemDanhGia}
                          </div>
                        </div>
                        <div className="seTextDanhGia">{tour.textDanhGia}</div>
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
    </div>
  );
};

export default SearchItem;
