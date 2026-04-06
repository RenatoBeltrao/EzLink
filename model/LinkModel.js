import { Sequelize, DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'

export const Link = sequelize.define('Link',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    shortCode:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    Url:{
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
    

},{
    timestamps: true,
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
})