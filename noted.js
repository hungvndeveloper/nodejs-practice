/*
 Để giải thích rõ hơn về cách lệnh đồng bộ và bất đồng bộ hoạt động trong Javascript,
 ta có thể sử dụng ví dụ về việc tải nội dung của một trang web từ server bằng Javascript.
 
 Giả sử ta có một trang web cần tải dữ liệu từ server để hiển thị cho người dùng.
 Ta có thể sử dụng các kỹ thuật bất đồng bộ như AJAX hoặc Fetch API để tải dữ liệu này.
*/
// Ví dụ:

console.log("Start loading data...");

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log("Data loaded:", data);
    // Xử lý dữ liệu ở đây
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });

console.log("Finish loading data...");

/*
 Trong ví dụ này, ta sử dụng phương thức fetch() để tải nội dung từ URL "https://api.example.com/data".
 Hàm fetch() trả về một Promise, cho phép ta thực hiện các xử lý bất đồng bộ để xử lý nội dung tải về.

 Sau khi gọi fetch(), lệnh console.log("Finish loading data...") sẽ được thực hiện ngay lập tức, trước khi dữ liệu từ server được tải về.
 Sau đó, khi dữ liệu được tải về thành công, hàm then() được gọi để xử lý dữ liệu và in ra thông tin của dữ liệu đó.

 Như vậy, ta thấy rằng lệnh đồng bộ và lệnh bất đồng bộ trong Javascript hoạt động khác nhau.
 Lệnh đồng bộ sẽ được thực hiện ngay lập tức và ngăn chặn các lệnh bất đồng bộ khác được thực hiện cho đến khi lệnh đó hoàn tất.
 Trong khi đó, lệnh bất đồng bộ sẽ được thực hiện trong nền và không chặn các lệnh đồng bộ khác.
*/

/*
 tôi muốn lệnh console.log("Finish loading data...") được thực hiện sau lệnh fetch trong ví dụ trên được không
 Trong ví dụ trên, lệnh console.log("Finish loading data...") sẽ được thực hiện ngay lập tức, trước khi dữ liệu từ server được tải về, vì đó là một lệnh đồng bộ.

 Nếu bạn muốn lệnh console.log("Finish loading data...") được thực hiện sau khi dữ liệu từ server được tải về, bạn có thể đặt nó trong hàm then() của Promise như sau:
*/
console.log("Start loading data...");

fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => {
    console.log("Data loaded:", data);
    // Xử lý dữ liệu ở đây
    console.log("Finish loading data...");
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });

/*
 Khi dữ liệu từ server được tải về thành công, hàm then() sẽ được gọi để xử lý dữ liệu và in ra thông tin của dữ liệu đó.
 Khi xử lý xong, ta có thể đặt lệnh console.log("Finish loading data...")
 trong hàm then() này để đảm bảo nó được thực hiện sau khi dữ liệu đã được tải về.
*/