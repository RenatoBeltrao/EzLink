import {randomBytes} from 'crypto'
import { Sequelize } from 'sequelize'
import 'dotenv/config'

const sequelize = new Sequelize
(
    process.env.database,
    process.env.username,
    process.env.password,
    {
    host: "localhost",
    dialect:"postgres",
    port: process.env.port
})

