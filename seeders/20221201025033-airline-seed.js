'use strict';

const fs = require('fs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const file = '../data/airlines.csv';
    const fileText = fs.readFileSync(file).toString();
    const lines = fileText.split('\r\n');

    const header = lines[0];
    const dataLines = lines.slice(1);

    const fieldNames = header.split(',');

    let airlines = [];
    for (let i = 0; i < dataLines.length; i++) {
      let airline = {};
      const data = dataLines[i].split(',');
      for (let j = 0; j < fieldNames.length; j++) {
        const fieldName = fieldNames[j];
        airline[fieldName] = data[j];
      }
      airlines.push(airline);
    }
    console.log(airlines);
    await queryInterface.bulkInsert('airlines', airlines, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
