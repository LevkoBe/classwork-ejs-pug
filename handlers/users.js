const { User } = require('../models');

function saveUserInDatabase(name, lastname, email, password) {
    const user = new User({ name: name, lastname: lastname, email: email, password: password});
    return user.save();
}


 async function updateUserInDatabase(id, userData) {
    try {
        return await User.findOneAndUpdate({ _id: id }, { $set: userData });
    } catch (error) {
        console.error('error', error);
        return false;
    }
}

 async function updateUserfieldInDatabase(id, updatedFields) {
    try {
        return await User.findOneAndUpdate({ _id: id }, { $set: updatedFields });
    } catch (error) {
        console.error('error', error);
        return false;
    }
}

async function deleteUserInDatabase(id) {
    const user = await User.deleteOne({ _id: id });
    return user.save();
}

module.exports = {
    saveUserInDatabase: saveUserInDatabase,
    updateUserInDatabase,
    deleteUserInDatabase,
    updateUserfieldInDatabase,
};