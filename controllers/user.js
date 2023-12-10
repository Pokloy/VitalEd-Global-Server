const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");



module.exports.usergetProfile = (req, res) => {

    return User.findById(req.user.id)
    .then(result => {
        return res.send(result);
    })
    .catch(err => res.send(err))
};


module.exports.getSpecificUser = async (req, res) => {
    const userId = req.params.userId;
    try{
        const userInfo = await User.findById(userId)

        return res.send(userInfo);
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred while updating the user role' });
    }
}





module.exports.userLogin = async (req, res) => {
    try {
        const result = await User.findOne({ username: req.body.username });

        if (result == null) {
            return res.send("Authentication failed");
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);

        if (isPasswordCorrect) {
            return res.send({ 
                access: auth.createAccessToken(result),
                _id:result._id,
                isAdmin: result.isAdmin
            });
        } else {
            return res.send("Authentication failed");
        }
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred while updating the user role' });
    }
}


module.exports.addUser = async (req, res) => {
	let newUser = new User({
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password, 10)
	})

	try {
		await newUser.save();
		return res.status(200).send(true);
	} catch (error) {
    console.error("Error adding new User:", error);
    return res.status(500).send("Error adding new User: " + error.message);
	}

}



module.exports.showUsers = async (req, res) => {
	try{
		const users = await User.find({});
		return res.status(200).send(users)
	} catch (error) {
	    console.error("Error retrieving users:", error);
    	return res.status(500).send("Error retrieving users: " + error.message);
	}
}



module.exports.deleteUser = async (req, res) => {
	const userId = req.params.userId;

	try {
		await User.findByIdAndDelete(userId);
		return res.status(200).send(true);
	} catch (error) {
	 	console.error("Error deleting users:", error);
    	return res.status(500).send("Error deleting users: " + error.message);
	}
}



module.exports.updateUser = async (req, res) => {
    const userId = req.params.userId;
    const { username, password } = req.body;

    try {
        if (!username) {
            return res.status(400).send("Empty username field");
        }

        const userInfo = await User.findById({ _id: userId });

        // Update username if not empty
        userInfo.username = username.trim() || userInfo.username;

        // Update password if provided
        if (password) {
            userInfo.password = bcrypt.hashSync(password.trim(), 10);
        }

        console.log('User Data Updated');
        await userInfo.save();

        return res.status(200).send(true);
    } catch (error) {
        console.error("Error updating data to Home:", error);
        return res.status(500).send("Error updating data to Home: " + error.message);
    }
};

