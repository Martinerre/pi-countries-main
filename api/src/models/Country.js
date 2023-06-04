const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 's/d'
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    suborigin: {
      type: DataTypes.STRING,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 's/d'
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, { timestamps: false });
};
