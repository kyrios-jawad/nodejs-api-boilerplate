const bcrypt = require('bcrypt');

const common = {};
common.passwordEncrpt = async function (password) {
    const passencrpt = await bcrypt.genSalt(10);
    return password= await bcrypt.hash(password, passencrpt);
}

module.exports = common;