const Home = require("../models/Home");





module.exports.addHome = async (req, res) => {
	let newHome = new Home({
		homeHead: req.body.homeHead,
		missionSubHead: req.body.missionSubHead,
		isActive: true
	})

	try {
		await newHome.save();
		return res.status(200).send(true);
	} catch (error) {
    console.error("Error adding data to Home:", error);
    return res.status(500).send("Error adding data to Home: " + error.message);
	}

}

module.exports.updateHome = async (req, res) => {
    const { homeHead, missionSubHead } = req.body;
    const homeId = req.params.homeId;

    try {

        const homeInfo = await Home.findById({ _id: homeId });

        // Update fields if they're not empty
        homeInfo.homeHead = homeHead || homeInfo.homeHead;
        homeInfo.missionSubHead = missionSubHead || homeInfo.missionSubHead;

        homeInfo.save();
        
        return res.status(200).send(true);
    } catch (error) {
        console.error("Error updating data to Home:", error);
        return res.status(500).send(false);
    }
};

module.exports.showHome = async (req, res) => {
	try{
		const homeInfo = await Home.find({});
		return res.status(200).send(homeInfo);
	} catch (error) {
	 	console.error("Error retrieving active products:", error);
    	return res.status(500).send("Error retrieving active products: " + error.message);
	}
}


module.exports.deleteHome = async (req, res) => {
	const defaultId = '657089e593647f4516338258';

	try {
		await Home.findByIdAndDelete(defaultId);
		return res.status(200).send(true);
	} catch (error) {
	 	console.error("Error retrieving active products:", error);
    	return res.status(500).send("Error retrieving active products: " + error.message);
	}
}