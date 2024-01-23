saveCatToDB = (name, age) => {
    const Cat = require("../models/Cat")

    const kitty = new Cat({ name: name, age: age});
    kitty.save().then(() => console.log('meowoo'));
}

module.exports = saveCatToDB;