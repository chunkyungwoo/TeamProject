import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_fishs extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    home: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(125),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_fishs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "isbn" },
        ]
      },
    ]
  });
  }
}
