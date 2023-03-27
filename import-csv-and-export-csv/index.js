/**
 * Trong mã trên, chúng ta đọc file CSV ban đầu bằng cách sử dụng phương thức createReadStream() của module fs,
 * sau đó sử dụng module csv-parser để phân tích dữ liệu từng dòng trong file CSV. Trong hàm xử lý dữ liệu on('data'),
 * chúng ta biến đổi dữ liệu và thêm nó vào mảng data. Cuối cùng, chúng ta tạo file CSV mới bằng cách sử dụng module csv-writer và ghi dữ liệu vào file đó.
 */

const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Tên file CSV ban đầu
const inputFileName = 'input.csv';

// Tên file CSV mới
const outputFileName = 'output.csv';

// Khai báo mảng chứa dữ liệu mới
let data = [];

// Đọc file CSV ban đầu và biến đổi dữ liệu
fs.createReadStream(inputFileName)
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
        // Biến đổi dữ liệu tại đây
        const transformedRow = {
            name: row['Tên'],
            age: parseInt(row['Tuổi']),
            email: row['Email'].toLowerCase()
        };

        // Thêm dữ liệu mới vào mảng
        data.push(transformedRow);
    })
    .on('end', () => {
        // Tạo file CSV mới và ghi dữ liệu vào
        const csvWriter = createCsvWriter({
            path: outputFileName,
            header: [
                { id: 'name', title: 'Tên' },
                { id: 'age', title: 'Tuổi' },
                { id: 'email', title: 'Email' }
            ]
        });
        csvWriter.writeRecords(data)
            .then(() => console.log(`Đã xuất file ${outputFileName}`));
    });