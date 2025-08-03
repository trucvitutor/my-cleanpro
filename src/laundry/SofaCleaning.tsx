import { Link } from "react-router-dom";
import sofa2 from "../assets/file/ghe-truoc-giat.jpg";
import sofa0 from "../assets/file/ghevai.jpg";
import sofa1 from "../assets/home-5.jpg";
import "./SofaCleaning.css"; // Đảm bảo đã import CSS
export const SofaCleaningPage = () => {
  return (
    <div>
      {/* 1. Phần Breadcrumb (Thanh điều hướng) - Giữ nguyên vị trí ở đầu như bạn muốn */}
      <div className="breadcrumb-section-sofa">
        <div className="breadcrumb-content">
          <h2>Dịch Vụ Giặt Ghế Sofa</h2>
          <p>
            <span className="home-icon">🏠</span>
            <Link to="/">Trang chủ</Link> / Dịch Vụ Giặt Ghế Sofa
          </p>
        </div>
      </div>
      <div className="full-sofa-cleaning-layout">
        {/* 2. KHU VỰC NỘI DUNG CHÍNH CỦA TRANG WEB GIẶT GHẾ SOFA (TỔNG HỢP TỪ CẢ HAI ẢNH) */}
        <div className="page-main-content-area">
          {/* --- PHẦN TỪ 'image_79675d.jpg' --- */}
          {/* Banner/Header chính với hình ảnh và số điện thoại */}
          <div className="sofa-main-banner-with-contact">
            <img
              src={sofa0} // Đặt đường dẫn đến ảnh này của bạn
              alt="Giặt Ghế Sofa - 0912.396.747 - Dịch vụ giặt sofa tại Đà Nẵng"
              className="main-sofa-image"
            />
            {/* Văn bản ngay dưới banner: "Dịch vụ giặt sofa tại Đà Nẵng" */}
            <p className="banner-subtext">Dịch vụ giặt sofa tại Đà Nẵng</p>
          </div>

          {/* Đoạn văn bản giới thiệu dịch vụ ngay dưới banner */}
          <div className="intro-text-section">
            <p>
              Sau một thời gian sử dụng ghế sofa bị bẩn màu sắc hoặc hoa tiết
              của sofa không còn như lúc đầu, các vết bẩn có dấu hiệu lan rộng.
              Ghế sofa có mùi ẩm mốc, hoặc mùi hôi khó chịu gây ngứa da khi tiếp
              xúc với sofa. Đây là lúc bạn nên vệ sinh ghế sofa của mình!
            </p>
            <p>
              Thông thường thì từ **từ 2 đến 4 tháng** bạn nên vệ sinh ghế sofa
              **1 lần** để đảm bảo ghế sạch sẽ **an toàn cho người sử dụng**.
              Tuy nhiên, còn tùy theo môi trường (bụi, ẩm) của nơi đặt ghế sofa
              mà bạn có thời gian vệ sinh ghế hợp lý. Chỉ cần bạn nhìn thấy ghế
              bẩn, có mùi hôi, màu sắc ghế thay đổi, thì nên vệ sinh ngay.
            </p>
          </div>

          {/* --- PHẦN TỪ 'image_78f71d.png' và tiếp nối từ 'image_79675d.jpg' --- */}

          {/* Tiêu đề lớn nhất trên cùng của trang Giặt Sofa (từ ảnh cũ hơn) */}
          <div className="top-page-header">
            <h1>
              Giặt Ghế Sofa Tại Đà Nẵng - Dịch Vụ Giặt Ghế Sofa Tại Nhà Uy Tín
            </h1>
            <p>
              Giặt ghế sofa tại Đà Nẵng là một dịch vụ được rất nhiều người quan
              tâm, sử dụng. Bởi ghế sofa vệ sinh phức tạp hơn các loại ghế khác,
              yêu cầu phải có móc, thiết bị vệ sinh, nước giặt chuyên dụng và
              quy trình vệ sinh hợp lý mới đảm bảo sofa giặt sạch nhanh chóng,
              đảm bảo an toàn.
            </p>
          </div>

          {/* Phần Nội dung chi tiết - Mục 1 */}
          <div className="article-section" id="section-1">
            {" "}
            {/* Đổi tên class và thêm id */}
            <h2>1. Khi nào bạn nên giặt ghế sofa?</h2>
            <p>
              Ghế sofa là một món đồ nội thất sử dụng trong phòng khách bắt
              nguồn từ phong cách Phương Tây. Ghế sofa giờ đây trở nên quen
              thuộc với gia đình, văn phòng công ty. Khi chúng dần thay thế
              những mẫu ghế gỗ, ghế inox truyền thống. Sử dụng ghế sofa giúp
              không gian trở nên đẹp và sang trọng hơn.
            </p>
            <p>
              Tuy nhiên ghế sofa không giống như ghế gỗ hoặc ghế inox chỉ cần vệ
              sinh hàng ngày bằng các dụng cụ vệ sinh đơn giản là được. Ghế sofa
              vệ sinh phức tạp hơn, phải có máy chà, máy giặt, nước giặt chuyên
              dụng và quy trình vệ sinh hợp lý mới giúp sofa sạch sẽ, bền đẹp.
            </p>
          </div>

          {/* Phần Nội dung chi tiết - Mục 2: Giá giặt sofa tại Đà Nẵng */}
          <div className="article-section" id="section-2">
            <h2>2. Giá giặt sofa tại Đà Nẵng</h2>
            <p>
              Hiện nay tại Đà Nẵng, có rất nhiều đơn vị cung cấp dịch vụ giặt
              sofa với các mức giá khác nhau. Dưới đây công ty vệ sinh Clean Pro
              xin gửi tới khách hàng bảng giá giặt ghế sofa do Clean Pro cung
              cấp. Lưu ý bảng giá này chỉ mang tính chất tham khảo, giá dịch vụ
              thay đổi theo thời gian, thời điểm khách hàng sử dụng dịch vụ. Vui
              lòng liên hệ vào hotline: **0799140355** để được tư vấn và báo giá
              chính xác nhất!
            </p>
            {/* Bảng giá */}
            <h3 id="section-2-1">
              2.1. Giá giặt sofa mọi chất liệu tại Đà Nẵng
            </h3>
            <table className="price-table">
              <thead>
                <tr>
                  <th>DỊCH VỤ VỆ SINH</th>
                  <th>ĐƠN GIÁ (VND)</th>
                  <th>ĐƠN VỊ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Giặt Ghế Sofa</td>
                  <td>300.000 - 600.000</td>
                  <td>Bộ/Cái</td>
                </tr>
                {/* Thêm các dòng khác nếu có */}
              </tbody>
            </table>
          </div>
          <div className="article-section" id="section-3">
            <h2>3. Giặt ghế sofa mọi chất liệu tại Đà Nẵng</h2>

            {/* Mục 3.1: Vệ sinh sofa vải */}
            <h3 id="section-3-1">3.1. Vệ sinh sofa vải</h3>
            <p>
              Sofa vải thường rất dễ bám bẩn, bụi bặm hoặc các loại nước rất dễ
              thấm và thấm vào lớp vải bọc sofa, sau một thời gian sử dụng sofa
              vải thường có mùi hôi, gặp thời tiết ẩm ướt có thể có hiện tượng,
              ẩm mốc dẫn đến không an toàn cho người sử dụng.
            </p>
            {/* Khối ảnh với hotline */}
            <div className="cleaning-promo-block">
              <div className="image-grid">
                <img src={sofa1} alt="Vệ sinh sofa tại nhà" />
                <img src={sofa2} alt="Dịch vụ vệ sinh công nghiệp" />
              </div>
              <div className="contact-info-overlay">
                <p className="company-name">VỆ SINH CÔNG NGHIỆP Clean Pro</p>
                <p className="hotline">Hotline: 0799140355</p>
                <p className="service-desc">Giặt ghế sofa văn phòng Đà Nẵng</p>
              </div>
            </div>
            <p>
              Mặt khác vệ sinh sofa vải đòi hỏi cần các loại dung dịch tẩy rửa
              phù hợp, an toàn không làm ảnh hưởng đến màu sắc, chất liệu tự
              nhiên của vải. Với những phương pháp giặt khô, giặt nước nóng đảm
              bảo ghế được diệt khuẩn 99%, loại bỏ hoàn toàn mùi hôi ẩm mốc, làm
              sạch các vết bẩn. Clean Pro cam kết giặt sạch mọi loại vết bẩn
              trên ghế sofa vải, đảm bảo không ảnh hưởng đến màu sắc, chất lượng
              của vải bọc.
            </p>
            {/* <p className="read-more-link">
              <span className="bullet-point">•</span>{" "}
              <a href="#">
                Xem thêm: Đồ 3 mẹo vệ sinh sofa vải sạch bong tại nhà
              </a>
            </p> */}

            {/* Mục 3.2: Giặt Ghế Sofa Nhung */}
            <h3 id="section-3-2">3.2. Giặt Ghế Sofa Nhung</h3>
            <p>
              Ghế sofa nhung toát lên vẻ sang trọng và quý phái cho chủ và
              thường có giá trị rất cao. Nhung nếu không được vệ sinh kỹ sẽ
              khiến ghế xuống cấp và đánh mất giá trị vốn có của ghế. Clean Pro
              luôn sử dụng loại dung dịch cao cấp cùng đội ngũ lành nghề để làm
              sạch bộ ghế sofa nhung giá trị của bạn.
            </p>
            {/* Thêm các mục 3.3, 3.4 nếu có nội dung từ ảnh */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SofaCleaningPage;
