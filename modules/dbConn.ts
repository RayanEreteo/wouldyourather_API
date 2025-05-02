import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  db: process.env.DB_NAME,
};

const connection = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  port: Number(process.env.DB_PORT),
  password: dbConfig.password,
  database: dbConfig.db,
});

export default connection;
export const connectToDatabase = async () => {
  try {
    await connection.getConnection();
    console.log( "\u001b[1;32m");
    console.log('Connected to the database successfully!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};