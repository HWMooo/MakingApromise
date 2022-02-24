const {skateLine, doesALine, fallsOver, waitingToFilm} = require('./index');


const skaters = ["Jabby", "Marcus", "Mills", "Ben", "Moe"]

function triesLine(skaters){
    console.log(`\n${skaters} starts a line`)

    skateLine().then(res => doesALine(res, skaters)).catch(err => fallsOver(err, skaters));

}


for (let s of skaters){
    waitingToFilm(s, 'kickflip');
    triesLine(s);
    
}

module.exports = {triesLine}