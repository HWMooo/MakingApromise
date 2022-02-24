let stamina = 30;






let skateLine = () => new Promise(doALine);

function doesALine(Line, name){
    console.log(`${name} does a ${Line[0]}, then a ${Line[1]} and a ${Line[2]}`)
}

function fallsOver({message}, name){
    console.log(`${name} takes a big ${message}`);
}

function waitingToFilm(name, trick){
    console.log(`${name} is practicing his ${trick}'s.`)
}





function doALine(resolve, reject){
    console.log('camera ready...');
    if(stamina >= 0){
        stamina -= 10;
        console.log('line started...');
        const Line = ['kickflip', 'treflip', 'hardflip'];
        resolve(Line);
    }else{
        const nostamina = {message: 'slam'}
        reject(nostamina);
    }
};

module.exports = {skateLine, doesALine, fallsOver, waitingToFilm }

//so have a skater who has stamina of 30.
//make functions for kickflip, treflip, heelflip and hardflip.
//if stamina is out he falls over.