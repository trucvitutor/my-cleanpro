import { Link } from "react-router-dom";
import "./MattressCleaning.css"; // Giả sử bạn có file CSS này để định kiểu
const MattressCleaning = () => {
  return (
    <div>
      <div className="breadcrumb-section-rem">
        <div className="breadcrumb-content-rem">
          <h2>Dịch Vụ Giặt rèm , thảm, nệm </h2>
          <p>
            <span className="home-icon">🏠</span>
            <Link to="/">Trang chủ</Link> / Dịch Vụ Giặt rèm , thảm, nệm
          </p>
        </div>
      </div>
      <div className="mattress-cleaning-container">
        <section className="intro-section">
          <p>
            Trong cuộc sống hiện đại, nệm, ghế sofa, rèm cửa và thảm trải sàn
            không chỉ là những vật dụng trang trí mà còn đóng vai trò quan trọng
            trong việc tạo nên sự tiện nghi, ấm cúng và phong cách cho không
            gian sống. Tuy nhiên, sau thời gian dài sử dụng, các vật dụng này dễ
            tích tụ bụi bẩn, vi khuẩn, nấm mốc và mùi hôi – là nguyên nhân tiềm
            ẩn gây dị ứng, ảnh hưởng đến sức khỏe gia đình. Dịch vụ vệ sinh nệm,
            sofa, rèm, thảm chuyên nghiệp chính là giải pháp tối ưu giúp làm
            sạch sâu, khử khuẩn và duy trì độ bền đẹp cho từng món đồ nội thất.
          </p>
        </section>

        <section className="why-clean-section">
          <h2 className="section-title">
            Tại sao cần vệ sinh định kỳ nệm, sofa, rèm, thảm?
          </h2>
          <ol>
            <li>
              <h3 className="reason-title">
                1. Loại bỏ bụi bẩn, vi khuẩn và mùi hôi
              </h3>
              <p>
                Nệm và sofa là nơi tiếp xúc trực tiếp với da mỗi ngày. Trong quá
                trình sử dụng, mồ hôi, tế bào chết, lông thú cưng, bụi bẩn... dễ
                dàng tích tụ sâu bên trong lớp vải và mút. Tương tự, rèm cửa và
                thảm cũng thường xuyên tiếp xúc với không khí, khói bụi, hơi
                ẩm.... Nếu không được làm sạch định kỳ, các vật dụng này trở
                thành ổ vi khuẩn và tác nhân gây dị ứng cho cả gia đình.
              </p>
            </li>
            <li>
              <h3 className="reason-title">2. Tăng tuổi thọ cho nội thất</h3>
              <p>
                Việc vệ sinh đúng cách không chỉ giúp làm sạch mà còn bảo vệ bề
                mặt vải, tránh tình trạng xuống màu, mục vải hoặc bong tróc do
                tích tụ chất bẩn lâu ngày. Nội thất được chăm sóc thường xuyên
                sẽ giữ được vẻ đẹp ban đầu và kéo dài thời gian sử dụng.
              </p>
            </li>
            <li>
              <h3 className="reason-title">
                3. Cải thiện chất lượng không khí
              </h3>
              <p>
                Không khí trong nhà sẽ trở nên trong lành, dễ chịu hơn nếu loại
                bỏ được các nguồn phát tán mùi ẩm mốc, khói bụi từ thảm, rèm,
                sofa hoặc nệm. Điều này đặc biệt quan trọng trong các gia đình
                có trẻ nhỏ, người già hoặc người có cơ địa nhạy cảm.
              </p>
            </li>
          </ol>
        </section>

        <section className="service-details-section">
          <h2 className="section-title">
            Dịch vụ vệ sinh chuyên nghiệp bao gồm những gì?
          </h2>
          <div className="service-category">
            <h3 className="service-category-title">1. Vệ sinh nệm</h3>
            <ul className="service-item-list">
              <li>
                Loại bỏ bụi bẩn, mồ hôi, tế bào chết và mạt bụi bằng máy hút
                chuyên dụng
              </li>
              <li>Phun hóa chất diệt khuẩn, khử mùi an toàn cho da</li>
              <li>
                Giặt khô hoặc giặt hơi nước nóng tùy theo chất liệu và tình
                trạng nệm
              </li>
              <li>Sấy khô nhanh chóng, không gây ẩm mốc</li>
            </ul>
          </div>
          <div className="service-category">
            <h3 className="service-category-title">2. Vệ sinh sofa</h3>
            <ul className="service-item-list">
              <li>
                Áp dụng công nghệ giặt hơi nước nóng hoặc giặt phun hút sâu
              </li>
              <li>Xử lý các vết bẩn cứng đầu như cà phê, mực bút, dầu mỡ...</li>
              <li>Phục hồi màu sắc và mùi hương dễ chịu cho bề mặt ghế</li>
              <li>Phù hợp với mọi chất liệu: nỉ, vải bố, da, giả da...</li>
            </ul>
          </div>
          <div className="service-category">
            <h3 className="service-category-title">3. Vệ sinh rèm cửa</h3>
            <ul className="service-item-list">
              <li>
                Tháo lắp chuyên nghiệp, không làm hư hỏng rèm hoặc phụ kiện
              </li>
              <li>
                Giặt rèm bằng phương pháp phù hợp (giặt máy, giặt hơi nước, giặt
                khô...)
              </li>
              <li>Ủi và treo rèm lại cẩn thận sau khi giặt sạch và sấy khô</li>
            </ul>
          </div>
          <div className="service-category">
            <h3 className="service-category-title">4. Vệ sinh thảm trải sàn</h3>
            <ul className="service-item-list">
              <li>Hút bụi và giặt sâu bằng máy phun hút công nghiệp</li>
              <li>Khử mùi, diệt khuẩn bằng dung dịch chuyên dụng</li>
              <li>Sấy khô nhanh để chống ẩm mốc</li>
              <li>
                Làm sạch theo từng loại chất liệu: thảm len, thảm nỉ, thảm sợi
                tổng hợp, thảm dệt tay,...
              </li>
            </ul>
          </div>
        </section>

        <section className="process-section">
          <h2 className="section-title">Quy trình vệ sinh chuyên nghiệp</h2>
          <ol className="process-list">
            <li>
              <p>
                <strong>1. Tiếp nhận yêu cầu và khảo sát miễn phí:</strong>{" "}
                Khách hàng chỉ cần liên hệ, đơn vị sẽ cử nhân viên đến kiểm tra
                tình trạng thực tế.
              </p>
            </li>
            <li>
              <p>
                <strong>
                  2. Tư vấn phương pháp làm sạch và báo giá chi tiết:
                </strong>{" "}
                Dựa trên số lượng, chất liệu liệu và mức độ bẩn, khách hàng sẽ
                nhận được phương án vệ sinh phù hợp nhất.
              </p>
            </li>
            <li>
              <p>
                <strong>
                  3. Tiến hành vệ sinh tại nhà hoặc mang về xưởng:
                </strong>{" "}
                Tùy vào nhu cầu và điều kiện, dịch vụ được thực hiện tại chỗ
                hoặc tại xưởng với quy trình khép kín.
              </p>
            </li>
            <li>
              <p>
                <strong>4. Kiểm tra và bàn giao kết quả:</strong> Cam kết sạch
                sâu, không còn mùi hôi, vết bẩn, bề mặt mềm mại và thơm mát.
              </p>
            </li>
            <li>
              <p>
                <strong>5. Bảo hành và chăm sóc sau dịch vụ:</strong> Hỗ trợ xử
                lý nếu có phát sinh, nhắc lịch vệ sinh định kỳ.
              </p>
            </li>
          </ol>
        </section>

        {/* Bắt đầu phần nội dung mới từ hình ảnh thứ 5 */}
        <section className="why-choose-us-section">
          <h2 className="section-title">
            Lý do nên chọn dịch vụ vệ sinh chuyên nghiệp
          </h2>
          <ul className="reason-list">
            <li>
              Đội ngũ nhân viên được đào tạo bài bản, lịch sự và có trách nhiệm
            </li>
            <li>
              Sử dụng hóa chất an toàn, có chứng nhận phù hợp với sức khỏe người
              dùng
            </li>
            <li>Trang thiết bị hiện đại, nhập khẩu từ châu Âu, Nhật Bản</li>
            <li>Làm sạch tận gốc, không làm hư hại bề mặt</li>
            <li>Báo giá minh bạch, không phát sinh chi phí ngoài hợp đồng</li>
          </ul>
        </section>

        <section className="frequency-section">
          <h2 className="section-title">Bao lâu nên vệ sinh một lần?</h2>
          <ul className="frequency-list">
            <li>
              <strong>Nệm, sofa:</strong> từ 3 đến 6 tháng/lần
            </li>
            <li>
              <strong>Rèm cửa:</strong> từ 3 đến 6 tháng/lần, tùy vị trí (phòng
              khách, bếp...)
            </li>
            <li>
              <strong>Thảm:</strong> mỗi 1 – 3 tháng/lần, đặc biệt trong khu vực
              đi lại nhiều
            </li>
          </ul>
          <p className="note-text">
            Tần suất vệ sinh có thể thay đổi tùy thuộc vào môi trường sống, mức
            độ sử dụng và số lượng thành viên trong gia đình.
          </p>
        </section>

        <section className="conclusion-section">
          <h2 className="section-title">Kết luận</h2>
          <p>
            Việc chăm sóc và làm sạch các vật dụng như nệm, sofa, rèm, thảm
            không chỉ là vấn đề thẩm mỹ mà còn là yếu tố ảnh hưởng trực tiếp đến
            sức khỏe và chất lượng cuộc sống của gia đình bạn. Dịch vụ vệ sinh
            chuyên nghiệp sẽ giúp bạn tiết kiệm thời gian, công sức và đảm bảo
            hiệu quả vượt trội so với việc làm sạch thủ công. Hãy chủ động đặt
            lịch vệ sinh định kỳ để không gian sống luôn sạch sẽ, thơm mát và an
            toàn.
          </p>
        </section>
        {/* Kết thúc phần nội dung mới từ hình ảnh thứ 5 */}

        <section className="image-section">
          {/* Giả sử bạn sẽ import hình ảnh hoặc sử dụng đường dẫn URL */}
          <img
            src="http://googleusercontent.com/file_content/0"
            alt="Vệ sinh thảm"
            className="cleaning-image"
          />
          {/* Lưu ý: Bạn cần thay '/path/to/your/image_340345.jpg' bằng đường dẫn thực tế của hình ảnh của bạn */}
        </section>
      </div>
    </div>
  );
};

export default MattressCleaning;
