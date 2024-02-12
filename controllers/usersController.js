const { saveUserInDatabase, updateUserInDatabase, updateUserfieldInDatabase } = require('../handlers/users');
const { User } = require("../models");


async function getUserListController(req, res) {
    try {
        const users = await User.find();
        res.render('users-list', { qty: users.length, users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getUserByIdController(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({ _id: userId });
        if (!user) { throw new Error; }
        res.render('user-profile', { user: user});
    } catch (error) {
        res.status(500).render('error', {message: `Error fetching the user with ID ${userId}`, status: 500});
    }
}

function getUserFormController(req, res) {
    res.render('create-user-form');
}
async function getUserUpdateFormController(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({ _id: userId });
        res.render('update-user-form', {user: user});
    } catch (error) {
        console.error('Error fetching user to update:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function postUserController(req, res) {
    const userName = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    saveUserInDatabase(userName, lastname, email, password)
        .then((user) => res.render('user-profile', {user: user})) // or res.redirect(`users/{user._id}`)
        .catch(() => res.send('user NOT created'));
}

function putUserController(req, res) {
    const userId = req.params.id;
    const userObj = {};
    console.log(req.body);
    userObj.name = req.body.name;
    userObj.lastname = req.body.lastname;
    userObj.email = req.body.email;
    userObj.password = req.body.password;
    updateUserInDatabase(userId, userObj)
        .then(() => res.redirect(`/users/${userId}`))
        .catch(() => res.send('user NOT updated'));
}

async function patchUserController(req, res) {
    const userId = req.params.id;
    const user = await User.findOne({_id: userId});
    console.log(req.body);
    let updatedFields = {};
    if (req.body.name !== user.name) {
        updatedFields.name = req.body.name;
    }
    if (req.body.lastname!== user.lastname) {
        updatedFields.lastname = req.body.lastname;
    }
    if (req.body.email!== user.email) {
        updatedFields.email = req.body.email;
    }
    if (req.body.password!== user.password) {
        updatedFields.password = req.body.password;
    }
    updateUserfieldInDatabase(userId, updatedFields)
        .then(() => res.redirect(`/users/${userId}`))
        .catch(() => res.send('user NOT updated'));
}

async function deleteUserController(req, res) {
    const userId = req.params.id;
    await User.deleteOne({ _id: userId });
    res.send('<span>user was deleted</span>');
}

module.exports = {
    getUserListController,
    getUserByIdController,
    getUserFormController,
    postUserController,
    putUserController,
    deleteUserController,
    getUserUpdateFormController,
    patchUserController,
};