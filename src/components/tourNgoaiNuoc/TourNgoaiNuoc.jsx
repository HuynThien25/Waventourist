import "./tourNgoaiNuoc.css";
import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const TourNgoaiNuoc = () => {
  const [activeTab, setActiveTab] = useState("1");
  const navigate = useNavigate();

  const handleWatch = () => {
    navigate("/chiTietTour", { state: {} });
  };

  const danang = [
    {
      h1: "Tour ngắm hoa anh đào, Busan - 2N1Đ",
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
      h1: "Tour Ontabi Núi Phú Sĩ và hồ Kawaguchiko - 9 giờ",
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
      h1: "Tour Bali Nusa Penida Private - 11 giờ",
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
      h1: "Tour Trung Quốc trọn gói (Bắc Kinh, Thượng Hải, Hàng Châu) - 4N3Đ",
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
      h1: "Tour Ngày Giethoorn Hà Lan từ Amsterdam",
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
      h1: "Tour tham quan lâu đài Linderloof & Neuschwanstein",
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
      h1: "Tour ngày Mont-saint-Michael Paris",
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
      h1: "Tour Trung Quốc trọn gói (Phượng Hoàng Cổ Trấn, ...) - 4N3Đ",
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
      h1: "Tour Trung Quốc trọn gói (Bắc Kinh, Thượng Hải, Hàng Châu) - 4N3Đ",
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
      h1: "Tour Ontabi Núi Phú Sĩ và hồ Kawaguchiko - 9 giờ",
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
      h1: "Tour Bali Nusa Penida Private - 11 giờ",
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
      h1: "Tour Ngày Giethoorn Hà Lan từ Amsterdam",
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
      h1: "Tour ngắm hoa anh đào, Busan - 2N1Đ",
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
      h1: "Tour tham quan lâu đài Linderloof & Neuschwanstein",
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
      h1: "Tour cả ngày Sa Mạc Pinnacles New Morcia và Hoa Dại",
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
      h1: "Tour Bali Nusa Penida Private - 11 giờ",
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
      h1: "Tour cả ngày Sa Mạc Pinnacles New Morcia và Hoa Dại",
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
      h1: "Tour Nửa ngày tham quan Cung Điện Versailles",
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
      h1: "Tour ngắm hoa anh đào, Busan - 2N1Đ",
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
      h1: "Tour Ontabi Núi Phú Sĩ và hồ Kawaguchiko - 9 giờ",
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
      h1: "Tour Trung Quốc trọn gói (Bắc Kinh, Thượng Hải, Hàng Châu) - 4N3Đ",
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
      h1: "Tour Ngày Giethoorn Hà Lan từ Amsterdam",
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
      h1: "Tour tham quan lâu đài Linderloof & Neuschwanstein",
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

  const renderItems = (items) => {
    return items.map((item, index) => (
      <LazyLoad>
        <div className="pList2" key={index}>
          <div className="pListCard2" onClick={handleWatch}>
            <div className="pListItem2">
              <div className="tietkiem2">{item.tietKiem}</div>
              <img src={item.image1} alt={item.image1} className="favorite2" />
              <img src={item.image2} alt={item.image2} className="pListImg2" />
              <div className="pListTitles2">
                <h1>{item.h1}</h1>
                <p>{item.giaGoc}</p>
                <h1>
                  <span>{item.gia}</span>
                </h1>
              </div>
              <div className="pListTitle3">
                <div className="grIconDanhGia">
                  <img className="iconDanhGia" alt="" src={item.danhGia} />
                  <div className="diemDanhGia">{item.diemDanhGia}</div>
                </div>
                <div className="textDanhGia">{item.textDanhGia}</div>
                <button className="cardBtn2" onClick={handleWatch}>
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
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
    </div>
  );
};

export default TourNgoaiNuoc;
