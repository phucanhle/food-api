## Food API - ReadMe

**Chào mừng đến với Food API!**

Food API là một API RESTful được thiết kế để cung cấp thông tin về thực phẩm. API này cung cấp các tính năng như:

-   **Tìm kiếm công thức nấu ăn:** Tìm kiếm công thức nấu ăn dựa trên thành phần, loại thực phẩm, kiểu chế biến, v.v.
-   **Xem thông tin chi tiết của công thức nấu ăn:** Nhận thông tin chi tiết về một công thức nấu ăn cụ thể, bao gồm danh sách thành phần, hướng dẫn, thời gian nấu, hình ảnh, v.v.
-   **Thêm/xóa/cập nhật công thức nấu ăn:** Người dùng có thể thêm, xóa hoặc cập nhật các công thức nấu ăn của riêng họ.
-   **Lưu trữ công thức nấu ăn:** Người dùng có thể lưu trữ các công thức nấu ăn yêu thích của họ để truy cập dễ dàng.
-   **Đánh giá công thức nấu ăn:** Người dùng có thể đánh giá các công thức nấu ăn để giúp người khác đưa ra lựa chọn.

**Yêu cầu:**

-   Node.js và npm (hoặc yarn)

**Hướng dẫn cài đặt:**

1. **Clone repository:**

    ```bash
    git clone https://github.com/phucanhle/food-api.git
    ```

2. **Cài đặt các dependency:**

    ```bash
    cd food-api
    npm install
    ```

3. **Cấu hình tệp .env:**

    - Tạo một tệp .env trong thư mục gốc của dự án.
    - Thêm các biến môi trường sau:
        ```
        PORT=3000
        URI_MONGODB=mongodb://localhost:27017/food-api
        ```

4. **Khởi chạy ứng dụng:**
    ```bash
    npm start
    ```

**Cách sử dụng:**

-   **Kiểm tra API:** API hiện đang chạy trên `http://localhost:3000`.
-   **Tài liệu API:** Tài liệu API được cung cấp tại [your_api_endpoint] (thay thế `your_api_endpoint` bằng URL API của bạn).
-   **Ví dụ:**
    -   **Lấy danh sách công thức nấu ăn:**
        ```
        GET /api/foods
        ```
    -   **Lấy thông tin chi tiết về một công thức nấu ăn:**
        ```
        GET /api/foods/{recipeId}
        ```
    -   **Thêm một công thức nấu ăn mới:**
        ```
        POST /api/foods
        ```

**Liên hệ:**

-   **Email:** lephucanh2601@gmail.com

**Góp ý:**

Chúng tôi rất hoan nghênh các đóng góp! Vui lòng tạo một pull request nếu bạn có bất kỳ đề xuất nào hoặc muốn sửa lỗi.
