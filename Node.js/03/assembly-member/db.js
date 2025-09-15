import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', user: 'root', password: '1234', 
  database: 'mydb', port: 3306,
  waitForConnections: true, connectionLimit: 10,
})

export const getListAll = async () => {
  try {
    const [rows] = 
      await pool.query(
        `SELECT * 
           FROM assembly_member
          ORDER BY row_num ASC
          LIMIT 0, 50`);
    return rows;
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
};

export const getListByUnit = async (value) => {
  try {
    const [rows] = 
      await pool.query(
        `SELECT * 
           FROM assembly_member
          WHERE sch_unit_cd LIKE CONCAT('%', ?, '%')`
      , [value]); // > ? 부분에 들어갈 값 : [value] 
    return rows;
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
};

export const getListByName = async (value) => {
  try {
    const [rows] = 
      await pool.query(
        `SELECT * 
           FROM assembly_member
          WHERE hg_nm LIKE CONCAT('%', ?, '%')`
      , [value]);
    return rows;
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
};

export const getListByDistrict = async (value) => {
  try {
    const [rows] = 
      await pool.query(
        `SELECT * 
           FROM assembly_member
          WHERE orig_nm LIKE CONCAT('%', ?, '%')`
      , [value]);
    return rows;
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
};