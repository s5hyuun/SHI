import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost', user: 'root', password: '1234',
    database: 'mydb',
    waitForConnections: true, connectionLimit: 10,
});

const leakTest = async () => {
    const connections = [];
    for (let i = 0; i < 200; i++) {
        try {
            connections.push(conn); // 종료하지 않고 배열에 저장만
            console.log(`연결 ${i + 1}번 성공`);
            } catch (e) {
            console.error(`연결 ${i + 1}번 실패:`, e.message);

            break;
        }
    }
};

leakTest();