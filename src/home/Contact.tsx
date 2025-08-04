import { FaPhoneAlt } from "react-icons/fa"; // Import icon điện thoại từ react-icons (bạn cần cài đặt)
import "./Contact.css"; // Giả sử bạn có file CSS này để định kiểu

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <p className="contact-title">
          LIÊN HỆ DỊCH VỤ VỆ SINH HÀNG ĐẦU TẠI ĐÀ NẴNG
        </p>
        <div className="contact-details">
          <p className="contact-person">
            <FaPhoneAlt className="contact-icon" /> Ms NHƯ:{" "}
            <a href="tel:0912396747">0799140355</a>
          </p>
          <p className="contact-person">
            <FaPhoneAlt className="contact-icon" /> Mr HƯNG:{" "}
            <a href="tel:0989225989">0903540585</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
