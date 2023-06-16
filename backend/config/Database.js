import { Sequelize } from "sequelize";

const db = new Sequelize("auth_mern", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export default db;