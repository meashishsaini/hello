/**
 * A basic Hello World function
 * @param {string} name Who you're saying hello to
 * @returns {string}
 */
module.exports = async (name = "universe", context) => {
    return `hello ${name}`;
};
