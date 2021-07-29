// const JWTSECRET = process.env.JWTSECRET;
// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;
const SERVER=process.env.SERVER;

module.exports = {
    // jwtSecret: JWTSECRET,
    mongodburi: 'mongodb://'+SERVER+':27017/VeggieBasket'
};