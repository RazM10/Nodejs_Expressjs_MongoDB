const express = require('express');
const router = express.Router();
const User = require('../models/Users');

//get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
    // res.send('We are on users home');
});

//get a specific user
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.send(user);
    } catch (error) {
        res.send({ message: error });
    }
});



//create a user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    });
    // res.json(user);
    // console.log(user);

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.json({ message: error });
    }
});



//update a user
router.put('/:userId', async (req, res) => {
    try {
        const updateUser = await User.updateOne(
            { _id: req.params.userId },
            { $set: { address: req.body.address } }
        );
        res.send(updateUser);
    } catch (error) {
        res.send(error);
    }
});



//Delete a user
router.delete('/:userId', async (req, res) => {
    try {
        const removeUser = await User.deleteOne(
            { _id: req.params.userId }
        );
        res.send(removeUser);
    } catch (error) {
        res.send({ message: error });
    }
});

router.delete('/deleteMany/:userIds', async (req, res) => {
    var idString = req.params.userIds;
    var ids = idString.split("-");
    // res.send(ids);
    try {
        const removedUsers = await User.deleteMany(
            { _id: { $in: ids } }
        );
        res.send(removedUsers);
    } catch (error) {
        res.send({ message: error });
    }

});


module.exports = router;