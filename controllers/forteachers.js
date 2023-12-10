const ForTeachers = require("../models/ForTeachers");





module.exports.addForTeachers = async (req, res) => {
	let newForTeachers = new ForTeachers({
		ftSubHead: req.body.ftSubHead,
		ftBelowSubHead: req.body.ftBelowSubHead,
		ftBenefitsSentence: req.body.ftBenefitsSentence,
		ftBenefitsImage: req.body.ftBenefitsImage
	})

	try {
		await newForTeachers.save();
		return res.status(200).send(true);
	} catch (error) {
    console.error("Error adding data to Home:", error);
    return res.status(500).send("Error adding data to Home: " + error.message);
	}

}


module.exports.showForTeachers = async (req, res) => {
	try{
		const allForTeachers = await ForTeachers.find({});
		return res.status(200).send(allForTeachers);
 	} catch (error) {
	 	console.error("Error retrieving active products:", error);
    	return res.status(500).send("Error retrieving active products: " + error.message);
	}
}


module.exports.updateForTeachers = async (req, res) => {
    const { ftSubHead, ftBelowSubHead, ftBenefitsSentence, ftBenefitsImage  } = req.body;
     const forTeachersId = req.params.forTeachersId;

    try {

        const forTeachersInfo = await ForTeachers.findById({ _id: forTeachersId });

        // Update fields if they're not empty
        forTeachersInfo.ftSubHead = ftSubHead || forTeachersInfo.ftSubHead;
        forTeachersInfo.ftBelowSubHead = ftBelowSubHead || forTeachersInfo.ftBelowSubHead;
        forTeachersInfo.ftBenefitsSentence = ftBenefitsSentence || forTeachersInfo.ftBenefitsSentence;
        forTeachersInfo.ftBenefitsImage = ftBenefitsImage || forTeachersInfo.ftBenefitsImage;


		forTeachersInfo.save();
        return res.status(200).send(true);


    } catch (error) {
        console.error("Error updating data to Home:", error);
        return res.status(500).send(false);
    }
};



module.exports.deleteForTeachers = async (req, res) => {
	 const forTeachersId = req.params.forTeachersId;

	try {
		await ForTeachers.findByIdAndDelete(forTeachersId);
		return res.status(200).send(true);
	} catch (error) {
	 	console.error("Error retrieving active products:", error);
    	return res.status(500).send("Error retrieving active products: " + error.message);
	}
}