import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./reviewPopup.css"; 
import heartFill from "../../assets/img/logo/heartFill.png";
import st from "../../assets/img/anhDaiDien/mtp.jpg";
import ht2 from "../../assets/img/anhDaiDien/ht2.jpg";
import pl from "../../assets/img/anhDaiDien/pl.jpg";
const ReviewPopup = ({ isVisible, togglePopup }) => {
  const reviews = [
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
      name: "Nguyen Phuong Ly",
      rating: "10.0/10",
      daysAgo: 4,
      review:
        "Tour rất ổn. Tuy có hơi gấp một chút nhưng mình thông cảm được. Có mấy người cùng tour xếp hàng sau mình chưa kịp đi Seawalking đã bị kêu lên không được đi nữa nên họ khá buồn. Mình may mắn thay đồ nhanh nên đi kịp. Chắc chắn Seawalking là điểm nhấn của tour rồi.",
      likes: 78,
    },
    {
      id: 3,
      avatar: ht2, 
      name: "Tran Minh Hieu",
      rating: "9.5/10",
      daysAgo: 15,
      review:
        "Hướng dẫn viên vui tính nhiệt tình, đồ ăn ngon, phương tiện di chuyển an toàn, đưa đón tận nơi, rất ok nha.",
      likes: 45,
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="reviewPopupOverlay" onClick={togglePopup}>
      <div
        className="reviewPopup"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          className="closePopupButton"
          onClick={togglePopup} 
        >
          &times;
        </button>
        <h2>Đánh giá của du khách</h2>
        <div className="scrollInside">
          <div className="reviewsList">
            {reviews.map((review) => (
              <div className="reviewItem" key={review.id}>
                <div className="reviewHeader">
                  <div className="rvh">
                    <img
                      alt="Avatar"
                      className="avatarImage"
                      src={review.avatar} 
                    />
                    <span className="reviewerName">{review.name}</span>
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
  );
};

ReviewPopup.propTypes = {
  isVisible: PropTypes.bool.isRequired, 
  togglePopup: PropTypes.func.isRequired,
};

export default ReviewPopup;
