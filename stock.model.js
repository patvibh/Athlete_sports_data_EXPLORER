const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    const Stock = sequelize.define("stock", {
        SYMBOL: {
            type: Sequelize.STRING
        },
        SERIES: {
            type: Sequelize.STRING
        },
        OPEN: {
            type: Sequelize.DECIMAL
        },
        HIGH: {
            type: Sequelize.DECIMAL
        }, 
        LOW: {
            type: Sequelize.DECIMAL
        },
        CLOSE: {
            type: Sequelize.DECIMAL
        },
        TIMESTAMP: {
            type: Sequelize.DATE
        },
        ISIN: {
            type: Sequelize.STRING
        }
    });
    return Stock;
}