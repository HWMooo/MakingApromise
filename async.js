const {skateLine, doesALine, fallsOver, waitingToFilm} = require('./index');
//const {triesLine} = require('./thencatch');


const skaters = ["Jabby", "Marcus", "Mills", "Ben", "Moe"]

async function triesLine(skater){
    try {
        console.log(`\n${skaters} starts a line`)
        const tryLine = await skateLine();
        doesALine(tryLine, skater)
    } catch (err) {
        fallsOver(err, skater)
    }
}

for (let s of skaters){
    waitingToFilm(s, 'tre flip');
    triesLine(s);
}