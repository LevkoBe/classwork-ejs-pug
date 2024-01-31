saveCatToDB = (name, age) => {
    return new Promise((resolve, reject) => {
        const Cat = require("../models/Cat");
        const kitty = new Cat({ name: name, age: age });

        kitty.save()
            .then(() => {
                console.log('meowoo');
                resolve();
            })
            .catch((error) => {
                console.error('Error saving cat:', error);
                reject(error);
            });
    });
};

module.exports = saveCatToDB;
