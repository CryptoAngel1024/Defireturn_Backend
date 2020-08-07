const ENVIRONMENT = process.env?.ENVIRONMENT || "dev";

const CONFIG = require(`./config/config.${ENVIRONMENT}.json`);


console.log(CONFIG)

module.exports = { CONFIG, ENVIRONMENT };
