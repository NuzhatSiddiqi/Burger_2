// module.exports = function (sequelize, DataTypes) {
//     const Burger = sequelize.define("Burger", {
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         devoured: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false
//         },
//             classMethods: {
//                 associate: (models) => {
//                     Burger.hasOne(models.Customer, {as: 'buyer'})
//                 }
//             }

//     })

//     // Burger.associate = (models) => {
//     //     Burger.hasOne(models.Customer, {as: 'buyer'})
//     // };
//     return Burger;
// };

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define(
    "Burger",
    {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Burger.hasOne(models.Customer, { foreignKey: "id" });
        }
      }
    }
  );

  Burger.associate = function(models) {
    Burger.hasOne(models.Customer, { foreignKey: "id" });
  };

  return Burger;
};

// Burger.associate = (models) => {
//           Burger.hasOne(models.Customer, {as: 'buyer'})
//     // };
//     return Burger;
// };
