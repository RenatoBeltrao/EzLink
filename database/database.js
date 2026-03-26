import {randomBytes} from 'crypto'
import { Sequelize } from 'sequelize'
import 'dotenv/config'

export const sequelize = new Sequelize
(
    process.env.database_db,
    process.env.username_db,
    process.env.password_db,
    {
    host: "localhost",
    dialect:"postgres",
    port: Number(process.env.port_db)
})

