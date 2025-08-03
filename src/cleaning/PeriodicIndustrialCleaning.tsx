import React from "react";
import { Link } from "react-router-dom";
import cauthang from "../assets/file/cauthang2.jpg";
import hang from "../assets/file/hang.jpg";
import khach1 from "../assets/file/khach.jpg";
import lang from "../assets/file/lang.jpg";
import rap from "../assets/file/rap.jpg";
import "./PeriodicIndustrialCleaning.css"; // Import the CSS file
// No specific props are defined for this component, so we can use React.FC<object> or just React.FC
const PeriodicIndustrialCleaning: React.FC = () => {
  return (
    <div>
      <div className="breadcrumb-section-peri">
        <div className="breadcrumb-content-peri">
          <h2>Dịch Vụ Vệ Sinh Định Kỳ</h2>
          <p>
            <span className="home-icon">🏠</span>
            <Link to="/">Trang chủ</Link> / Dịch Vụ Vệ Sinh Định Kỳ
          </p>
        </div>
      </div>
      <div className="periodic-industrial-cleaning-container">
        <p>
          Một môi trường làm việc sạch sẽ, gọn gàng và thông thoáng không chỉ
          nâng cao hiệu suất lao động mà còn góp phần xây dựng hình ảnh chuyên
          nghiệp cho doanh nghiệp. Tuy nhiên, việc duy trì vệ sinh văn phòng
          thường xuyên đòi hỏi nguồn nhân lực, thời gian và thiết bị chuyên
          dụng. Dịch vụ vệ sinh văn phòng, công ty ra đời như một giải pháp tối
          ưu giúp các tổ chức duy trì không gian làm việc sạch sẽ, ngăn nắp, đảm
          bảo sức khỏe nhân viên và nâng tầm thương hiệu.
        </p>

        <h2 className="periodic-industrial-cleaning-heading">
          Dịch vụ vệ sinh văn phòng là gì?
        </h2>

        <p>
          Dịch vụ vệ sinh văn phòng là hình thức cung cấp nhân lực và thiết bị
          làm sạch chuyên nghiệp cho không gian làm việc của các doanh nghiệp,
          công ty, tổ chức. Tùy theo nhu cầu cụ thể, khách hàng có thể lựa chọn
          vệ sinh hàng ngày, định kỳ theo tuần/tháng, hoặc tổng vệ sinh toàn bộ
          văn phòng theo từng đợt.
        </p>

        <p>
          Dịch vụ này phù hợp với mọi mô hình kinh doanh nghiệp – từ văn phòng
          nhỏ và chục mét vuông đến các tòa nhà công ty lớn hàng nghìn mét vuông
          – và được thiết kế linh hoạt để không làm gián đoạn hoạt động của nhân
          viên.
        </p>

        <div className="periodic-industrial-cleaning-image-gallery">
          {/*
          In a real application, you'd likely map over an array of image data
          For now, placeholders are fine. Make sure to include alt text for accessibility.
        */}
          <img src={khach1} alt="Vệ sinh văn phòng" />
          <img src={hang} alt="Vệ sinh văn phòng" />
          <img src={rap} />
          <img src={cauthang} alt="Vệ sinh văn phòng" />
          <img src={lang} alt="Vệ sinh văn phòng" />
        </div>

        {/* New section: Lợi ích khi sử dụng dịch vụ vệ sinh văn phòng chuyên nghiệp */}
        <div className="periodic-industrial-cleaning-benefits-section">
          <h2 className="periodic-industrial-cleaning-heading benefit-heading">
            Lợi ích khi sử dụng dịch vụ vệ sinh văn phòng chuyên nghiệp
          </h2>

          <div className="benefit-item">
            <h3 className="benefit-title">
              1. Duy trì môi trường làm việc sạch sẽ, thoáng đãng
            </h3>
            <p>
              Một không gian làm việc sạch sẽ giúp cải thiện tinh thần, tăng khả
              năng tập trung và nâng cao hiệu suất công việc. Đồng thời, loại bỏ
              vi khuẩn, bụi mịn, nấm mốc – những yếu tố ảnh hưởng trực tiếp đến
              sức khỏe nhân viên.
            </p>
          </div>

          <div className="benefit-item">
            <h3 className="benefit-title">
              2. Tăng giá trị thương hiệu trong mắt đối tác, khách hàng
            </h3>
            <p>
              Văn phòng là "bộ mặt" của công ty. Một nơi làm việc gọn gàng,
              chuyên nghiệp sẽ tạo ấn tượng tích cực đối với khách hàng, đối tác
              khi đến làm việc hoặc tham quan.
            </p>
          </div>

          <div className="benefit-item">
            <h3 className="benefit-title">
              3. Tiết kiệm chi phí và thời gian quản lý
            </h3>
            <p>
              Thay vì duy trì đội ngũ vệ sinh nội bộ, doanh nghiệp có thể thuê
              dịch vụ ngoài với chi phí tối ưu hơn, không tốn kém chi phí tuyển
              dụng, đào tạo, bảo hiểm hay mua sắm thiết bị. Đồng thời, đơn vị
              dịch vụ sẽ tự quản lý nhân sự và chịu trách nhiệm hoàn toàn về
              chất lượng công việc.
            </p>
          </div>

          <div className="benefit-item">
            <h3 className="benefit-title">
              4. Sử dụng thiết bị hiện đại, hóa chất an toàn
            </h3>
            <p>
              Các công ty vệ sinh chuyên nghiệp sử dụng máy hút bụi công nghiệp,
              máy đánh sàn, cây lau chuyên dụng, cùng hóa chất thân thiện môi
              trường, an toàn cho sức khỏe và không gây hại nội thất văn phòng.
            </p>
          </div>
        </div>
        {/* End of new section */}

        <div className="periodic-industrial-cleaning-items-section">
          <h2 className="periodic-industrial-cleaning-heading items-heading">
            Các hạng mục vệ sinh văn phòng phổ biến
          </h2>
          <p>
            Tùy vào quy mô, bố trí và nhu cầu của từng doanh nghiệp, các hạng
            mục vệ sinh bao gồm:
          </p>
          <ul className="cleaning-items-list">
            <li>
              <strong>Vệ sinh sàn:</strong> hút bụi, lau chùi sàn gạch, gỗ, thảm
            </li>
            <li>
              <strong>Vệ sinh bàn làm việc, ghế, kệ, tủ tài liệu</strong>
            </li>
            <li>
              <strong>Lau kính trong và kính mặt ngoài</strong> (nếu có)
            </li>
            <li>
              <strong>Vệ sinh khu vực lễ tân, hành lang, phòng họp</strong>
            </li>
            <li>
              <strong>Vệ sinh nhà vệ sinh,</strong> bổ sung giấy, xà phòng rửa
              tay
            </li>
            <li>
              <strong>Dọn dẹp khu vực bếp, pantry, phòng ăn</strong>
            </li>
            <li>
              <strong>Thu gom và phân loại rác thải</strong>
            </li>
            <li>
              <strong>Khử mùi, khử trùng văn phòng định kỳ</strong>
            </li>
          </ul>
          <p>
            Ngoài ra, khách hàng có thể yêu cầu thêm các dịch vụ: giặt thảm,
            giặt ghế sofa, tổng vệ sinh theo quý, vệ sinh sau sửa chữa,...
          </p>
        </div>
        <div className="periodic-industrial-cleaning-process-section">
          <h2 className="periodic-industrial-cleaning-heading process-heading">
            Quy trình vệ sinh văn phòng chuyên nghiệp
          </h2>
          <ol className="process-list">
            <li>
              <h3 className="process-step-title">
                1. Tiếp nhận thông tin và khảo sát thực tế:
              </h3>
              <p>Đánh giá diện tích, số lượng khu vực và yêu cầu cụ thể.</p>
            </li>
            <li>
              <h3 className="process-step-title">
                2. Tư vấn gói dịch vụ phù hợp và báo giá minh bạch
              </h3>
            </li>
            <li>
              <h3 className="process-step-title">3. Ký hợp đồng dịch vụ</h3>
            </li>
            <li>
              <h3 className="process-step-title">
                4. Triển khai vệ sinh theo đúng lịch trình:
              </h3>
              <p>Sử dụng máy móc, hóa chất và nhân sự đúng theo tiêu chuẩn.</p>
            </li>
            <li>
              <h3 className="process-step-title">
                5. Giám sát và kiểm tra định kỳ:
              </h3>
              <p>Đảm bảo chất lượng vệ sinh ổn định.</p>
            </li>
            <li>
              <h3 className="process-step-title">
                6. Bảo hành và điều chỉnh nếu có phát sinh từ phía khách hàng
              </h3>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PeriodicIndustrialCleaning;
