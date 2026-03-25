import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../database/database.js'

const Link = sequelize.define('Link',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    shortCode:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    originalURL:{
        type: DataTypes.TEXT,
        allowNull:false,
        validate:{
            isUrl: true
        }
    },
    clicks:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull:false
    }

})