const config           = require('../dbconfig');
        sql            = require('../mysql');


const getCustomers = async() => {
    try {
        let pool = await sql.connect(config);
        let customer = pool.request().Query("SELECT* from customers")
        console.log(customer);
        return customer;
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {
    getCustomers
}