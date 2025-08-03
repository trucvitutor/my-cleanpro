import { Link } from "react-router-dom";
import nha1 from "../assets/duandathuchien/duan6.jpg";
import phong1 from "../assets/file/phong.jpg";
import tolet1 from "../assets/file/tolet.jpg";
import "../cleaning/HouseCleaning.css"; // Đảm bảo đường dẫn này đúng
const HouseCleaning = () => {
  return (
    <div>
      <div className="breadcrumb-section-house">
        <div className="breadcrumb-content-house">
          <h2>Dịch Vụ Dọn Nhà</h2>
          <p>
            <span className="home-icon">🏠</span>
            <Link to="/">Trang chủ</Link>
            <Link to="/dich-vu-ve-sinh"> / Dịch vụ vệ sinh</Link> / Dịch Vụ Dọn
            Nhà
          </p>
        </div>
      </div>
      <div className="house-cleaning-container">
        <div className="text-section intro-section">
          <p>
            Trong guồng quay bận rộn của cuộc sống hiện đại, việc dành thời gian
            để lau dọn, làm sạch toàn bộ nhà ở hay căn hộ trở thành gánh nặng
            với nhiều người. Đặc biệt với những gia đình sinh sống tại các thành
            phố lớn, không gian sống nhỏ gọn nhưng nhiều vật dụng, góc khuất và
            yêu cầu cao về vệ sinh khiến công việc dọn dẹp không còn đơn giản.
            Dịch vụ vệ sinh nhà ở, căn hộ chính là giải pháp tối ưu, giúp bạn
            tiết kiệm thời gian, bảo vệ sức khỏe và duy trì sự sạch sẽ, thoáng
            mát cho tổ ấm mỗi ngày.
          </p>
        </div>

        <div className="text-section title-section">
          <h2>Dịch vụ vệ sinh nhà ở, căn hộ là gì?</h2>
        </div>

        <div className="text-section description-section">
          <p>
            Đây là hình thức cung cấp nhân viên vệ sinh chuyên nghiệp đến tận
            nơi để dọn dẹp, làm sạch không gian sống theo yêu cầu. Tùy thuộc vào
            nhu cầu và diện tích, khách hàng có thể lựa chọn vệ sinh tổng quát,
            vệ sinh theo khu vực (bếp, toilet, ban công...), hoặc thuê theo giờ,
            theo tuần, theo tháng.
          </p>
          <p>
            Không giống như cách lau dọn thông thường, dịch vụ vệ sinh chuyên
            nghiệp sử dụng thiết bị hiện đại và hóa chất an toàn, đảm bảo xử lý
            triệt để bụi bẩn, dầu mỡ, nấm mốc... ở những vị trí khó tiếp cận như
            gầm giường, khe tủ, quạt trần, máy lạnh,...
          </p>
        </div>

        <div className="image-section">
          <img
            src={nha1} // Ảnh trước
            alt="House Cleaning Service"
          />
        </div>

        {/* --- Start of Lợi ích khi sử dụng dịch vụ vệ sinh nhà ở, căn hộ --- */}
        <div className="benefits-section">
          <h2 className="benefits-title">
            Lợi ích khi sử dụng dịch vụ vệ sinh nhà ở, căn hộ
          </h2>

          <div className="benefit-item">
            <h3 className="benefit-number">1.</h3>
            <div className="benefit-content">
              <h3 className="benefit-heading">
                Tiết kiệm thời gian và công sức
              </h3>
              <p>
                Bạn không cần phải tốn hàng giờ đồng hồ lau chùi, cọ rửa mà vẫn
                có một không gian sạch sẽ, gọn gàng. Đặc biệt hữu ích với gia
                đình có con nhỏ, người lớn tuổi, người đi làm cả ngày hoặc
                thường xuyên đi công tác.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <h3 className="benefit-number">2.</h3>
            <div className="benefit-content">
              <h3 className="benefit-heading">
                Làm sạch toàn diện, đúng kỹ thuật
              </h3>
              <p>
                Nhân viên vệ sinh chuyên nghiệp được đào tạo bài bản, sử dụng
                đúng dụng cụ và hóa chất phù hợp cho từng khu vực như nhà tắm,
                nhà bếp, sàn gỗ, kính cửa sổ, đồ gỗ nội thất.... Nhờ đó, hiệu
                quả làm sạch cao và không gây hư hại đồ dùng.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <h3 className="benefit-number">3.</h3>
            <div className="benefit-content">
              <h3 className="benefit-heading">Bảo vệ sức khỏe cả gia đình</h3>
              <p>
                Không gian sống bám bụi, chứa vi khuẩn là môi trường thuận lợi
                cho các bệnh về hô hấp, da liễu hoặc dị ứng phát triển. Dịch vụ
                vệ sinh giúp loại bỏ nấm mốc, bụi mịn, mùi hôi, mang lại không
                khí trong lành, an toàn cho sức khỏe.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <h3 className="benefit-number">4.</h3>
            <div className="benefit-content">
              <h3 className="benefit-heading">
                Duy trì vẻ đẹp và tuổi thọ nội thất
              </h3>
              <p>
                Vệ sinh định kỳ giúp ngăn chặn tình trạng gỉ sét, ẩm mốc, xuống
                cấp của các vật dụng và thiết bị trong nhà. Đặc biệt với căn hộ
                sử dụng nhiều chất liệu cao cấp như kính, gỗ tự nhiên, đá hoa
                cương, vệ sinh đúng cách sẽ giúp giữ được độ bóng đẹp lâu dài.
              </p>
            </div>
          </div>
        </div>
        {/* --- End of Lợi ích khi sử dụng dịch vụ vệ sinh nhà ở, căn hộ --- */}

        {/* --- Start of Các gói dịch vụ vệ sinh nhà ở, căn hộ phổ biến --- */}
        <div className="service-packages-section">
          <h2 className="service-packages-title">
            Các gói dịch vụ vệ sinh nhà ở, căn hộ phổ biến
          </h2>

          <div className="service-package-item">
            <h3 className="package-number">1.</h3>
            <div className="package-content">
              <h3 className="package-heading">Vệ sinh theo giờ</h3>
              <p>
                Phù hợp cho gia đình muốn dọn dẹp nhanh trong ngày. Nhân viên
                đến trong khung giờ yêu cầu, thực hiện các công việc cơ bản như
                lau sàn, lau bụi, rửa chén, dọn bếp, đổ rác,...
              </p>
            </div>
          </div>

          <div className="service-package-item">
            <h3 className="package-number">2.</h3>
            <div className="package-content">
              <h3 className="package-heading">
                Vệ sinh định kỳ theo tuần hoặc tháng
              </h3>
              <p>
                Đáp ứng nhu cầu duy trì sự sạch sẽ ổn định, thường được thuê cố
                định 1-2 buổi/tuần. Có thể linh hoạt yêu cầu công việc mỗi lần:
                tổng vệ sinh, dọn bếp, giặt rèm, lau cửa kính,...
              </p>
            </div>
          </div>

          <div className="service-package-item">
            <h3 className="package-number">3.</h3>
            <div className="package-content">
              <h3 className="package-heading">
                Vệ sinh tổng quát toàn bộ căn hộ
              </h3>
              <p>
                Phù hợp khi dọn nhà đón Tết, dọn vào ở, chuyển ra ngoài, hoặc
                sau sửa chữa. Bao gồm vệ sinh trần, tường, sàn, cửa, toilet, ban
                công, thiết bị nhà bếp, đèn, quạt, máy lạnh,...
              </p>
            </div>
          </div>

          <div className="service-package-item">
            <h3 className="package-number">4.</h3>
            <div className="package-content">
              <h3 className="package-heading">Vệ sinh nhà sau xây dựng</h3>
              <p>
                Nhà mới xây thường bám bụi xi măng, sơn, keo, vôi vữa. Dịch vụ
                chuyên nghiệp có đầy đủ dụng cụ và hóa chất để xử lý nhanh
                chóng, đảm bảo bàn giao sạch sẽ, sẵn sàng vào ở.
              </p>
            </div>
          </div>

          <div className="image-section service-image-section">
            <img
              src={phong1} // Ảnh từ phần trước
              alt="Popular House Cleaning Services"
            />
          </div>
        </div>
        {/* --- End of Các gói dịch vụ vệ sinh nhà ở, căn hộ phổ biến --- */}

        {/* --- Start of Quy trình thực hiện dịch vụ vệ sinh chuyên nghiệp --- */}
        <div className="process-section">
          <h2 className="process-title">
            Quy trình thực hiện dịch vụ vệ sinh chuyên nghiệp
          </h2>

          <div className="process-step">
            <p className="step-number">1.</p>
            <p className="step-description">
              Tiếp nhận thông tin và khảo sát (nếu cần)
            </p>
          </div>

          <div className="process-step">
            <p className="step-number">2.</p>
            <p className="step-description">
              Tư vấn gói dịch vụ phù hợp, báo giá rõ ràng
            </p>
          </div>

          <div className="process-step">
            <p className="step-number">3.</p>
            <p className="step-description">
              Ký hợp đồng hoặc xác nhận lịch hẹn
            </p>
          </div>

          <div className="process-step">
            <p className="step-number">4.</p>
            <p className="step-description">
              Triển khai vệ sinh đúng thời gian, đúng quy trình
            </p>
          </div>

          <div className="process-step">
            <p className="step-number">5.</p>
            <p className="step-description">
              Nghiệm thu và thanh toán sau khi hoàn tất
            </p>
          </div>

          <div className="process-step">
            <p className="step-number">6.</p>
            <p className="step-description">
              Chính sách bảo hành và chăm sóc sau dịch vụ
            </p>
          </div>
        </div>
        {/* --- End of Quy trình thực hiện dịch vụ vệ sinh chuyên nghiệp --- */}

        {/* --- Start of Tiêu chí lựa chọn đơn vị vệ sinh uy tín --- */}
        <div className="criteria-section">
          <h2 className="criteria-title">
            Tiêu chí lựa chọn đơn vị vệ sinh uy tín
          </h2>

          <ul className="criteria-list">
            <li>Đội ngũ nhân viên thân thiện, có kinh nghiệm và kỹ năng</li>
            <li>Sử dụng dụng cụ, máy móc hiện đại và hóa chất an toàn</li>
            <li>Phản hồi nhanh, hỗ trợ linh hoạt theo yêu cầu</li>
            <li>Báo giá minh bạch, không phát sinh chi phí ngoài hợp đồng</li>
            <li>Có bảo hiểm hoặc cam kết trách nhiệm với đồ dùng, nội thất</li>
          </ul>

          <div className="image-section criteria-image-section">
            <img
              src={tolet1} // Ảnh mới
              alt="Criteria for Reputable Cleaning Service"
            />
          </div>
        </div>
        {/* --- End of Tiêu chí lựa chọn đơn vị vệ sinh uy tín --- */}

        {/* --- Start of New Content: Bao lâu nên vệ sinh nhà ở một lần? --- */}
        <div className="frequency-section">
          <h2 className="frequency-title">
            Bao lâu nên vệ sinh nhà ở một lần?
          </h2>
          <ul className="frequency-list">
            <li>
              Vệ sinh theo giờ: mỗi tuần 1-3 lần tùy theo số lượng thành viên và
              diện tích
            </li>
            <li>Tổng vệ sinh toàn bộ nhà: mỗi 2–3 tháng/lần</li>
            <li>
              Vệ sinh sau xây dựng hoặc sửa chữa: ngay sau khi hoàn thiện công
              trình
            </li>
          </ul>
          <p className="frequency-note">
            Việc lên lịch vệ sinh định kỳ giúp không gian luôn sạch sẽ, tránh
            tích tụ bụi bẩn lâu ngày và giảm áp lực dọn dẹp đột xuất.
          </p>
        </div>
        {/* --- End of New Content --- */}

        {/* --- Start of New Content: Kết luận --- */}
        <div className="conclusion-section">
          <h2 className="conclusion-title">Kết luận</h2>
          <p className="conclusion-text">
            Dịch vụ vệ sinh nhà ở, căn hộ không chỉ giúp bạn giải tỏa gánh nặng
            dọn dẹp mà còn mang đến sự thoải mái, sạch sẽ và thư giãn cho không
            gian sống. Với sự hỗ trợ từ đội ngũ chuyên nghiệp và thiết bị hiện
            đại, bạn có thể yên tâm tận hưởng cuộc sống mà không phải lo lắng về
            việc lau dọn mỗi ngày. Hãy lựa chọn cho mình một đơn vị vệ sinh uy
            tín để tổ ấm trở thành nơi đáng sống, sạch sẽ và tràn đầy năng lượng
            tích cực.
          </p>
        </div>
        {/* --- End of New Content --- */}
      </div>
    </div>
  );
};

export default HouseCleaning;
