function generateRandomNumber(){
    const points = new Array(100);
    for (let i = 0; i < 100; i++) {
        const val = points[i] = i + 1;
    }
    const randomNumber = points[Math.floor(Math.random() * points.length)];
    const number = randomNumber;
    return randomNumber;
}

module.exports = {
    withunderscore: function(first, last) {
        let value = generateRandomNumber();
        let firstname = first.slice(0 , 4);
        let lastname = last.slice(0, 4);
        let allnames = [first, last, firstname, lastname];
        let randomfirstname = allnames[Math.floor(Math.random() * allnames.length)];
        let param = [first, last];
        let randomlastname = param [Math.floor(Math.random() * param.length)];
        username = randomfirstname + '_' + randomlastname + value;
        return username;
    },
    withdot: function(first, last){
        let value = generateRandomNumber();
        let firstname = first.slice(0, 4);
        let lastname = last.slice(0, 4);
        let allnames = [first, last, firstname, lastname];
        let randomfirstname = allnames[Math.floor(Math.random() * allnames.length)];
        let param = [first, last];
        let randomlastname = param[Math.floor(Math.random() * param.length)];
        username = randomfirstname + '.' + randomlastname + value;
        return username;
    },
    random: function(first,last){
        let value = generateRandomNumber();
        let randomInBetweens = ['.', '_', '-'];
        let firstname = first.slice(0, 4);
        let lastname = last.slice(0, 4);
        let allnames = [first, last, firstname, lastname];
        let randomfirstname = allnames[Math.floor(Math.random() * allnames.length)];
        let param = [first, last];
        let randomlastname = param[Math.floor(Math.random() * param.length)];
        const oneRandoom = randomInBetweens[Math.floor(Math.random() * randomInBetweens.length)];
        username = randomfirstname + oneRandoom + randomlastname + value;
        return username;
    }
};