const schedule = require("node-schedule");
const { printFormattedDate } = require("./src/utils/printFormattedDate");

/*
const second_job = schedule.scheduleJob("* * * * * *",()=>{
    printFormattedDate();
});
*/

const job = schedule.scheduleJob('0 0 * * *', function() {
    console.log('This job runs at midnight every day!');
    printFormattedDate();

  });