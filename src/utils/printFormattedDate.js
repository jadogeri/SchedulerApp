const {getMonthText} = require("./getMonthText");


const printFormattedDate = ()=>{

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = getMonthText(String(today.getMonth() + 1).padStart(2, '0')); // Months are 0-indexed
    const year = today.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    console.log("program ran at ",formattedDate)

}

module.exports = {printFormattedDate}