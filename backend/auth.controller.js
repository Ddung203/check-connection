import mysql from "mysql2";

const check = async (req, res) => {
  const config = {
    host: req.fields.host,
    user: req.fields.user,
    password: req.fields.password,
    port: req.fields.port,
    database: req.fields.database,
  };
  const myDB = await mysql.createPool(config);
  try {
    await myDB.promise().query("SELECT 1");
    console.log("Kết nối đến cơ sở dữ liệu thành công");
    return res.status(200).json({
      statusCode: 200,
      message: "Kết nối đến cơ sở dữ liệu thành công!",
      config,
    });
  } catch (error) {
    return res.status(200).json({
      statusCode: 200,
      message: "Kết nối đến cơ sở dữ liệu thất bại!",
      error,
    });
  }
};

export { check };
