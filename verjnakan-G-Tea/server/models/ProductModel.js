import {Sequelize} from "sequelize";
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const  Products = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
    imgBig:{
        type: DataTypes.TEXT
    },
    img_1:{
        type: DataTypes.TEXT
    },
    img_2:{
        type: DataTypes.TEXT
    },
    img_3:{
        type: DataTypes.TEXT
    },
    name:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.INTEGER
    },
    brand:{
        type: DataTypes.STRING
    },
    model:{
        type: DataTypes.STRING
    },
    cpu_model:{
        type: DataTypes.STRING
    },
    model_ram:{
        type: DataTypes.STRING
    },
    ram_size:{
        type: DataTypes.STRING
    },
    graphic_card:{
        type: DataTypes.STRING
    },
    graphic_card_size:{
        type: DataTypes.STRING
    },
    hard_disk:{
        type: DataTypes.STRING
    },
    product_description:{
        type: DataTypes.STRING
    },
    oc:{
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
});

export default Products