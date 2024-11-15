import Footer from "../../components/footer/Footer";
import GoBackButton from "../../components/goBackBtn/GoBackBtn";
import Navbar from "../../components/navbar/Navbar";
import QrCode from "../../components/qrCode/QrCode";
import "./chiTietTour.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import share from "../../assets/img/logo/share.png";
import heart from "../../assets/img/logo/heartSmall.png";
import phuQuoc5 from "../../assets/img/hinhAnh/phuQuoc5.jpg";
import phuQuoc6 from "../../assets/img/hinhAnh/phuQuoc6.jpg";
import phuQuoc7 from "../../assets/img/hinhAnh/phuQuoc7.jpg";
import phuQuoc8 from "../../assets/img/hinhAnh/phuQuoc8.jpg";
import phuQuoc9 from "../../assets/img/hinhAnh/phuQuoc9.jpg";
import phuQuoc10 from "../../assets/img/hinhAnh/phuQuoc10.jpg";
import csngoctrai from "../../assets/img/hinhAnh/csngoctrai2.jpg";
import vinpearlSafari from "../../assets/img/hinhAnh/vinpearlSafari.jpg";
import captreoHT from "../../assets/img/hinhAnh/capTreoHT.jpg";
import thienDuongGT from "../../assets/img/hinhAnh/ThienDuongGT.jpg";
import duLichPQDN from "../../assets/img/hinhAnh/duLichPQDN.jpg";
import pqTest1 from "../../assets/img/hinhAnh/pqTest1.jpg";
import pqTest2 from "../../assets/img/hinhAnh/pqTest2.jpg";
import pqTest3 from "../../assets/img/hinhAnh/pqTest3.jpg";
import pqTest4 from "../../assets/img/hinhAnh/pqTest4.jpg";
import pqTest5 from "../../assets/img/hinhAnh/pqTest5.jpg";
import st from "../../assets/img/anhDaiDien/mtp.jpg";
import ht2 from "../../assets/img/anhDaiDien/ht2.jpg";
import pl from "../../assets/img/anhDaiDien/pl.jpg";
import heartFill from "../../assets/img/logo/heartFill.png";
import { useLocation } from "react-router-dom";
import {
  faCalendarDays,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
  faPlaneDeparture,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import LazyLoad from "react-lazyload";

const ChiTietTour = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  // -------------đánh giá-------------
  const [isReviewPopupVisible, setReviewPopupVisible] = useState(false);
  const danhGiaData = [
    {
      id: 1,
      avatar: st,
      name: "Nguyen Thanh Tung",
      rating: "9.2/10",
      daysAgo: 7,
      review:
        "Mình chụp được khá nhiều ảnh đẹp. Nhân viên hướng dẫn thân thiện và hiểu biết. Tổng quan mình thấy tour này khá thú vị và hợp lý.",
      likes: 23,
    },
    {
      id: 2,
      avatar: pl,
      name: "Phuong Ly",
      rating: "10.0/10",
      daysAgo: 4,
      review:
        "Tour rất ổn. Tuy có hơi gấp một chút nhưng mình thông cảm được. Có mấy người cùng tour xếp hàng sau mình chưa kịp đi Seawalking đã bị kêu lên không được đi nữa nên họ khá buồn. Mình may mắn thay đồ nhanh nên đi kịp. Chắc chắn Seawalking là điểm nhấn của tour rồi.",
      likes: 78,
    },
    {
      id: 3,
      avatar: ht2,
      name: "Hai Thu Hieu",
      rating: "9.5/10",
      daysAgo: 15,
      review:
        "hướng dẫn viên vui tính nhiệt tình, đồ ăn ngon, phương tiện di chuyển an toàn, đưa đón tận nơi, rất ok nha.",
      likes: 45,
    },
    // Additional sample data objects can be added here
  ];

  const toggleReviewPopup = () => {
    setReviewPopupVisible(!isReviewPopupVisible);
  };

  const handleBuy = () => {
    navigate("/trangDatTour", { state: { destination } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const chuongtrinh = [
    {
      h1: "NGÀY 01: TP. HCM – PHÚ QUỐC (Ăn trưa)",
      p1: `Buổi Sáng: Quý khách tập trung tại sân bay Tân Sơn Nhất,
      làm thủ tục và khởi hành đi Phú Quốc trên chuyến bay VN1823 lúc 8h20,
      VN6101 lúc 8h30, hoặc VN1831 lúc 9h00. Quý khách tự túc ăn sáng.`,
      p2: `Đến Phú Quốc: Đoàn sẽ tham quan trung tâm nuôi cấy ngọc trai, Dinh Cậu và Dinh Bà Thủy Long Thánh Mẫu.`,
      p3: `Buổi Chiều: Du khách tự do khám phá Phú Quốc, tự túc ăn chiều. Nghỉ đêm tại Phú Quốc.`,
      h2: "Lựa chọn (tự túc chi phí tham quan & di chuyển):",
      p4: `-Trải nghiệm cáp treo Hòn Thơm – cáp treo 3 dây vượt biển dài nhất thế giới, ngắm cảnh biển, đảo An Thới từ trên cao.`,
      p5: `-Tham quan Thị trấn Hoàng Hôn (Sunset Town) với các công trình độc đáo như Cầu Hôn, Tháp Đồng Hồ, Quảng trường Con Sò, và Khải Hoàn Môn Gavi.`,
      p6: `-Trải nghiệm show "Kiss of The Sea" với công nghệ Multimedia kết hợp lửa, nước, ánh sáng, pháo hoa, laser và âm nhạc.`,
      img1: csngoctrai,
      h3: `NGÀY 02: PHÚ QUỐC – VINPEARL SAFARI - VINWONDER (Ăn sáng, trưa, chiều)`,
      p7: `Sau bữa sáng,xe đưa đoàn tham quan Vinpearl Safari Phú Quốc – vườn thú hoang dã đầu tiên tại Việt Nam với hơn 130 loài động vật quý hiếm. Tiếp theo, khám phá VinWonder Phú Quốc – công viên chủ đề với 6 phân khu đại diện cho 12 chủ đề từ các nền văn minh và câu chuyện cổ tích nổi tiếng. Đoàn đến Grand World – 
      “Thành phố không ngủ”, tự do tham quan công trình tre, công viên nghệ thuật, và trải nghiệm các hoạt động như bảo tàng Gấu Teddy, thuyền sông Venice, và chương trình Tinh hoa Việt Nam (tự túc chi phí). Nghỉ đêm tại Phú Quốc.`,
      img2: vinpearlSafari,
      h4: `NGÀY 03: PHÚ QUỐC – TPHCM (Ăn sáng, trưa)`,
      p8: `Quý khách tự do tắm biển và nghỉ ngơi tại khách sạn đến giờ trả phòng. Xe đưa quý khách ra sân bay trên đường đi đoàn dừng chân tham quan Vườn tiêu, Nhà thùng làm nước mắm, Lò rượu Sim…Đến sân bay Phú Quốc, 
      đoàn bay về TP.Hồ Chí Minh chuyến bay VN1826 lúc 14h40 hoặc 15h00 hoặc VN1828 lúc 16h30. Kết thúc chương trình (quý khách tự túc phương tiện từ sân bay về lại nhà).`,
      ghichu: `Ghi chú:`,
      p9: `- Điểm tham quan có thể sắp xếp lại cho phù hợp mà vẫn bảo đảm đầy đủ nội dung của từng chương trình.`,
      p10: `- Giờ bay có thể bị thay đổi bởi hãng hàng không`,
    },
  ];

  const chinhsach = [
    {
      h1: `THÔNG TIN HƯỚNG DẪN`,
      p1: `Quy định vé máy bay: Đây là chương trình hợp tác với hãng hàng không Vietnam Airlines nên có một số lưu ý:`,
      p2: `- Giá vé máy bay không bao gồm suất ăn/uống trên máy bay`,
      p3: `- Số lượng khách tối thiểu để tổ chức tour: 10 khách/đoàn`,
      h2: `* Trường hợp hủy vé landtour, quý khách vui lòng thanh toán các khoản sau:`,
      p4: `- Quý khách chuyển đổi tour sang ngày khác và báo trước ngày khởi hành trước 15 ngày sẽ không chịu phí (không áp dụng các tour KS 4-5 sao), nếu trễ hơn sẽ căn cứ theo qui định hủy phạt phía dưới và chỉ được chuyển ngày khởi hành tour 1 lần.`,
      p5: `Hủy vé trong vòng 24 giờ hoặc ngay ngày khởi hành, chịu phạt 100% tiền tour.`,
      p6: `- Sau khi hủy tour, du khách vui lòng đến nhận tiền trong vòng 15 ngày kể từ ngày kết thúc tour. Chúng tôi chỉ thanh toán trong khỏang thời gian nói trên.`,
      img1: pqTest1,
      h3: `* Hành lý và giấy tờ tùy thân:  `,
      p7: `- Du khách mang theo giấy tờ tùy thân còn thời hạn sử dụng: Chứng minh nhân dân / Căn cước công dân hoặc Hộ chiếu. Đối với du khách là Việt kiều, Quốc tế nhập cảnh Việt Nam bằng visa rời, vui lòng mang theo visa khi đăng ký và khi đi tour.`,
      img2: pqTest4,
      h4: `- Tất cả giấy tờ tùy thân mang theo đều phải bản chính`,
      p8: `- Du khách mang theo hành lý gọn nhẹ và phải tự bảo quản hành lý, tiền bạc, tư trang trong suốt thời gian đi du lịch.`,
      ghichu: `* Ghi chú khác:`,
      p9: `- Quý khách có mặt tại điểm đón trước 15 phút.`,
      p10: `Trong trường hợp đến trễ khi xe đã khởi hành; Không làm thủ tục đúng giờ (khi hãng hàng không đã đóng quầy, kết thúc chấp nhận hành khách); Không lên máy bay trước giờ đóng cửa lên máy bay, hoặc hủy tour không báo trước vui lòng chịu phí như ‘hủy vé ngay ngày khởi hành’`,
    },
  ];

  const cauhoi = [
    {
      h1: "1/ Thời điểm du lịch Phú Quốc hợp lý?",
      p1: `Quý khách có thể đi Phú Quốc trong suốt năm. Từ cuối tháng 10 đến giữa tháng 5 năm sau thì Phú Quốc thường không có mưa hoặc rất ít, thời tiết mát mẻ, thuận lợi cho những chuyến đi du lịch, nghỉ dưỡng sau ngày làm việc mệt mỏi.
Để ngắm dòng suối Tranh thơ mộng, suối Đá Bàng hùng vĩ thì hãy đến Phú Quốc từ tháng 6 đến tháng 10.`,
      h2: `2/ Loại hình du lịch mới “Đi bộ dưới đáy biển” tại Bãi Sao là gì?`,
      p4: `Để đi bộ được dưới đáy biển (seawalker), quý khách sẽ đội chiếc mũ lặn theo phong cách phi hành gia. Chiếc mũ này sẽ cung cấp oxi giúp bạn thở được bình thường dưới đáy biển. 
      Tại vùng quy hoạch riêng cho việc này, bạn sẽ cùng với một hướng dẫn viên đi kèm cùng lặn từ từ cho đến khi chạm đáy (khoảng 5 -7m). Một khung cảnh hiện ra trước mắt bạn với vẻ đẹp muôn màu của các loài san hô cùng đàn cá tự nhiên bơi lội.
       Từng bước chân đi bộ trên thảm cát trắng mịn, hai bên lối đi là những rặn san hô theo dòng hải lưu đong đưa, cùng những đàn cá tung tăng bơi lội.`,
      img1: pqTest3,
      h3: `3/ Tôi không biết bơi có tham gia Seawalker được không ?`,
      p7: `Quý khách không biết bơi vẫn tham gia được. Vì seawalker có tất cả các biện pháp bảo đảm an toàn 100% cho khách tham quan. Đội ngũ chuyên viên được đào tạo bài bản và giàu kinh nghiệm 
      thực tế đảm bảo cho du khách có những trải nghiệm tuyệt vời khi đi bộ dưới đáy biển. Không chỉ vậy các bé nhỏ từ 7 tuổi trở lên cũng có thể tham quan gia tour seawalker rồi`,
      img2: pqTest2,
      h4: `4/ Tôi muốn đi tham quan Vinwonders ?`,
      p8: `Quý khách có thể bắt xe bus Vinpearl . Họ sẽ đón khách tại các điểm ở trung tâm Phú Quốc vào 2 khu vui chơi trên.`,
    },
  ];

  const photos = [
    {
      images: phuQuoc5,
    },
    {
      images: phuQuoc6,
    },
    {
      images: phuQuoc7,
    },
    {
      images: phuQuoc8,
    },
    {
      images: phuQuoc9,
    },
    {
      images: phuQuoc10,
    },
  ];

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;
    if (direction === "l") {
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSliderNumber);
  };

  const renderItems = (items) => {
    return items.map((item, index) => (
      <div className="pList2" key={index}>
        <div className="pListItem2">
          <p className="h1">{item.h1}</p>
          <p className="p1">{item.p1}</p>
          <p className="p2">{item.p2}</p>
          <p className="p3">{item.p3}</p>
          <p className="h2">{item.h2}</p>
          <p className="p4">{item.p4}</p>
          <p className="p5">{item.p5}</p>
          <p className="p6">{item.p6}</p>
          <img src={item.img1} alt={item.img1} className="img1" />
          <p className="h3">{item.h3}</p>
          <p className="p7">{item.p7}</p>
          <img src={item.img2} alt={item.img2} className="img2" />
          <p className="h4">{item.h4}</p>
          <p className="p8">{item.p8}</p>
          <p className="ghichu">{item.ghichu}</p>
          <p className="p9">{item.p9}</p>
          <p className="p10">{item.p10}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="Container">
      <Navbar />
      {/* <LazyLoad> */}
        <div className="center1024">
          <div className="sliderText2">
            Du Lịch Phú Quốc - Khám Phá Bắc Đảo - Safari - VinWonder - Grand
            World
          </div>
        </div>
        <img className="sliderIMG" alt="" src={pqTest5} />
      {/* </LazyLoad> */}
      {/* ----------------Icon đóng mở hình ảnh----------------- */}
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[sliderNumber].images}
                alt=""
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        {/* ----------Icon share and fav--------- */}
        <div className="hotelWrapper">
          <div className="iconic">
            <div className="share">
              <img src={share} alt="" className="imgShare" />
              <p>Chia sẻ</p>
            </div>
            <div className="share">
              <img src={heart} alt="" className="imgShare" />
              <p>Yêu thích</p>
            </div>
          </div>
          {/* -------------chia ảnh bố cục-------------- */}
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.images}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              {/* -----------Bảng Thông tin mobile--------------- */}
              <div className="tableContainMobile">
                <div className="grContainTong">
                  <div className="titleThongTinChiTiet">
                    Thông tin tour chi tiết #1
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Khởi hành</div>
                    <div className="columnMobile">12/12/2024</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Mã Tour</div>
                    <div className="columnMobile">BNG-384920</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Giá</div>
                    <div className="giaTienMobile">6.139.000VND</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Giá trẻ em</div>
                    <div className="giaTienMobile">4.639.000VND</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Giá em bé</div>
                    <div className="giaTienMobile">2.132.000VND</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Đặt trước</div>
                    <button className="BtncolumnMobile" onClick={handleBuy}>
                      Mua online
                    </button>
                  </div>
                </div>
                <div className="sa"></div>
                {/* ----------------------------- */}
                <div className="grContainTong2">
                  <div className="titleThongTinChiTiet">
                    Thông tin tour chi tiết #2
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Khởi hành</div>
                    <div className="columnMobile">25/12/2024</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Mã Tour</div>
                    <div className="columnMobile">BNF-928329</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Giá</div>
                    <div className="giaTienMobile">6.139.000VND</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Giá trẻ em</div>
                    <div className="giaTienMobile">4.639.000VND</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Giá em bé</div>
                    <div className="giaTienMobile">2.132.000VND</div>
                  </div>
                  <div className="grContain1">
                    <div className="rowMobile">Đặt trước</div>
                    <button className="BtncolumnMobile" onClick={handleBuy}>
                      Mua online
                    </button>
                  </div>
                </div>
              </div>
              {/* -------------Bảng trên PC------------ */}
              <div className="tableContain">
                <tr className="row1">
                  <div className="m1">
                    <td className="row">Khởi hành</td>
                    <td className="column">12/12/2024</td>
                    <td className="column">25/12/2024</td>
                  </div>
                  <div className="m1">
                    <td className="row">Mã Tour</td>
                    <td className="column">BNG-384920</td>
                    <td className="column">BNF-928329</td>
                  </div>
                  <div className="m1">
                    <td className="row">Giá</td>
                    <td className="giaTien">6.139.000VND</td>
                    <td className="giaTien">6.139.000VND</td>
                  </div>
                  <div className="m1">
                    <td className="row">Giá trẻ em</td>
                    <td className="giaTien">4.639.000VND</td>
                    <td className="giaTien">4.639.000VND</td>
                  </div>
                  <div className="m1">
                    <td className="row">Giá em bé</td>
                    <td className="giaTien">2.132.000VND</td>
                    <td className="giaTien">2.132.000VND</td>
                  </div>
                  <div className="m1">
                    <div className="row">Đặt trước</div>
                    <button className="Btncolumn" onClick={handleBuy}>
                      Mua online
                    </button>
                    <button className="Btncolumn" onClick={handleBuy}>
                      Mua online
                    </button>
                  </div>
                </tr>
              </div>
              {/* ----------Thông tin Tour------------- */}
              <h1 className="hotelTitle">Tour này có gì hấp dẫn ?</h1>
              <p className="hotelDesc">
                <div className="thth">
                  <span>
                    • Khởi hành (thứ 3 hàng tuần): 8/10/2024 , 15/10/2024 ,
                    22/10/2024
                    <br />
                  </span>
                  <span>
                    • Tham quan điểm Vườn tiêu
                    <br />
                  </span>
                  <span>
                    • Tham quan lò chế biến rượu Sim rừng Phú Quốc
                    <br />
                  </span>
                  <span>
                    • Khám phá Vinpearl Safari Phú Quốc – vườn thú hoang dã đầu
                    tiên tại Việt Nam với quy mô 180ha, cùng hơn 130 loài động
                    vật quý hiếm và các chương trình biểu diễn, chụp ảnh với
                    động vật.
                    <br />
                  </span>
                  <span>
                    • Tham quan VinWonder Phú Quốc – công viên chủ đề được chia
                    làm 6 phân khu, tượng trưng cho 6 vùng lãnh địa với 12 chủ
                    đề được lấy cảm hứng từ các nền văn minh nổi tiếng
                    <br />
                  </span>
                </div>
                {/* --------------Btn 3---------------- */}
                <div className="ththt">
                  <button
                    className={`destBtn3 ${activeTab === "1" ? "active" : ""}`}
                    onClick={() => setActiveTab("1")}
                  >
                    Chương trình tour
                  </button>
                  <button
                    className={`destBtn3 ${activeTab === "2" ? "active" : ""}`}
                    onClick={() => setActiveTab("2")}
                  >
                    Chính sách tour
                  </button>
                  <button
                    className={`destBtn3 ${activeTab === "3" ? "active" : ""}`}
                    onClick={() => setActiveTab("3")}
                  >
                    Câu hỏi thường gặp
                  </button>
                  <div
                    className={`content1 ${activeTab === "1" ? "active" : ""}`}
                    id="1"
                  >
                    <div className="grid-container2">
                      {renderItems(chuongtrinh)}
                    </div>
                  </div>
                  <div
                    className={`content1 ${activeTab === "2" ? "active" : ""}`}
                    id="2"
                  >
                    <div className="grid-container2">
                      {renderItems(chinhsach)}
                    </div>
                  </div>
                  <div
                    className={`content1 ${activeTab === "3" ? "active" : ""}`}
                    id="3"
                  >
                    <div className="grid-container2">{renderItems(cauhoi)}</div>
                  </div>
                </div>
              </p>
            </div>
            {/* --------------Bảng thông tin--------------- */}
            <div className="hotelDetailsPrice">
              <div className="zxc">
                <div className="titleLienLac">
                  <h1>Hỗ trợ khách hàng</h1>
                  <div className="hotline">Hotline: 1800 1990</div>
                  <span>Hoặc gửi về mail: info@waventourist.com</span>
                </div>
                {/* ----------------- */}
                <div className="titleThongTin">
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="iconTitleThongTin"
                    />
                    Thời gian: <span>3 ngày 2 đêm</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="iconTitleThongTin"
                    />
                    Điểm xuất phát: <span>Thành phố Hồ Chí Minh</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="iconTitleThongTin"
                    />
                    Điểm đến: <span>Phú Quốc</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faPlaneDeparture}
                      className="iconTitleThongTin"
                    />
                    Phương tiện: <span>Hãng hàng Không Vietnam Airlines</span>
                  </p>
                </div>
                {/* ----------------------------- */}
                <div className="titlecolumn">
                  <h4>Vì sao nên mua tour online?</h4>
                  <div className="ul">
                    <div className="li">An toàn - Bảo mật</div>
                    <div className="li">Tiện lợi, tiết kiệm thời gian</div>
                    <div className="li">Không tính phí giao dịch</div>
                    <div className="li">Giao dịch bảo đảm</div>
                    <div className="li">Nhận thêm ưu đãi</div>
                  </div>
                </div>
              </div>
              {/* ----------------Đánh giá KH----------------- */}
              <div className="danhGiaContain">
                <div className="danhGiaKH">
                  <p>Ấn tượng từ những du khác khác</p>
                  <button
                    className="btnXemDanhGiaKH"
                    onClick={toggleReviewPopup}
                  >
                    Xem tất cả đánh giá
                  </button>
                </div>
                <div className="bangDanhGiaKH">
                  <div className="grDanhGiaKH">
                    <img alt="" className="anhDaiDienKH" src={st} />
                    <div className="grMiniDanhGia">
                      <div className="ten">Nguyen Thanh Tung</div>
                    </div>
                    <img className="iconDanhGia" alt="" src={heartFill} />
                    <div className="diemDanhGia">9.2/10</div>
                  </div>
                  <div className="subDanhGia">Đánh giá cách đây 7 ngày</div>
                  <p className="cursorPClick" onClick={toggleReviewPopup}>
                    Mình chụp được khá nhiều ảnh đẹp. Nhân viên hướng dẫn thân
                    thiện và hiểu biết. Tổng quan mình thấy tour này khá thú vị
                    và hợp lý.
                  </p>
                </div>
              </div>
              {/* ------------popup------------ */}
              {isReviewPopupVisible && (
                <div className="reviewPopupOverlay" onClick={toggleReviewPopup}>
                  <div
                    className="reviewPopup"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="closePopupButton"
                      onClick={toggleReviewPopup}
                    >
                      &times;
                    </button>
                    <h2>Đánh giá của du khách</h2>
                    <div className="scrollInside">
                      <div className="reviewsList">
                        {danhGiaData.map((review) => (
                          <div className="reviewItem" key={review.id}>
                            <div className="reviewHeader">
                              <div className="rvh">
                                <img
                                  alt="Avatar"
                                  className="avatarImage"
                                  src={review.avatar}
                                />
                                <span className="reviewerName">
                                  {review.name}
                                </span>
                              </div>
                              <div className="reviewInfo">
                                <div className="rvf">
                                  <span className="reviewRating">
                                    <img
                                      className="iconReview"
                                      alt=""
                                      src={heartFill}
                                    />
                                    {review.rating}
                                  </span>
                                  <div className="reviewDate">
                                    Đánh giá cách đây {review.daysAgo} ngày
                                  </div>
                                </div>
                                <p className="reviewText">{review.review}</p>
                                <button className="likeButton">
                                  <FontAwesomeIcon
                                    icon={faThumbsUp}
                                    className="iconThumsUp"
                                  />
                                  Thông tin này hữu ích ({review.likes})
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* ----------------Tour liên quan------------------ */}
          <div className="titleTourLienQuan">Tour liên quan</div>
          <div className="tourLienquan">
            <div className="cardTourLienQuan">
              <img className="imgLienQuan" alt="" src={duLichPQDN}></img>
              <div className="titleLienQuan">
                Du lịch Phú Quốc - Cáp treo Hòn Thơm <br />
                Thành Phố Hồ Chí Minh - Phú Quốc
              </div>
              <div className="giaChiTu">
                Giá chỉ từ:
                <br />
                <p>6.539.000 VND</p>
                (3 ngày 2 đêm)
              </div>
              <div className="groupLN">
                <div className="LN">
                  <img className="iconDanhGia" alt="" src={heartFill} />
                  <div className="diemDanhGia">9.2/10</div>
                  <div className="subDG">(27 Đánh giá)</div>
                </div>
                <button className="btnLienQuan">Mua ngay</button>
              </div>
            </div>
            <div className="cardTourLienQuan">
              <img className="imgLienQuan" alt="" src={captreoHT}></img>
              <div className="titleLienQuan">
                Du lịch Phú Quốc - Cáp treo Hòn Thơm <br />
                Thành Phố Hồ Chí Minh - Phú Quốc
              </div>
              <div className="giaChiTu">
                Giá chỉ từ:
                <br />
                <p>6.539.000 VND</p>
                (3 ngày 2 đêm)
              </div>
              <div className="groupLN">
                <div className="LN">
                  <img className="iconDanhGia" alt="" src={heartFill} />
                  <div className="diemDanhGia">9.2/10</div>
                  <div className="subDG">(27 Đánh giá)</div>
                </div>
                <button className="btnLienQuan">Mua ngay</button>
              </div>
            </div>
            <div className="cardTourLienQuan">
              <img className="imgLienQuan" alt="" src={thienDuongGT}></img>
              <div className="titleLienQuan">
                Du lịch Phú Quốc - Cáp treo Hòn Thơm
                <br /> Thành Phố Hồ Chí Minh - Phú Quốc
              </div>
              <div className="giaChiTu">
                Giá chỉ từ:
                <br />
                <p>6.539.000 VND</p>
                (3 ngày 2 đêm)
              </div>
              <div className="groupLN">
                <div className="LN">
                  <img className="iconDanhGia" alt="" src={heartFill} />
                  <div className="diemDanhGia">9.2/10</div>
                  <div className="subDG">(27 Đánh giá)</div>
                </div>
                <button className="btnLienQuan">Mua ngay</button>
              </div>
            </div>
          </div>
        </div>
        <GoBackButton />
        <QrCode />
        <Footer />
      </div>
    </div>
    // </div>
  );
};

export default ChiTietTour;
