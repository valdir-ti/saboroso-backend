'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('contacts', {

    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    message: {
      type: Sequelize.TEXT
    },
    register: {
      type: Sequelize.DATE,
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }


  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('contacts')
};