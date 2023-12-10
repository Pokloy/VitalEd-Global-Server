const ForSchools = require("../models/ForSchools");

module.exports.addForSchools = async (req, res) => {
	
	let newForSchools = new ForSchools({
		fsSubHead: req.body.fsSubHead,
		fsBenefitsImage: req.body.fsBenefitsImage,
		fsBenefitsSentence: req.body.fsBenefitsSentence
	})

	try {
		await newForSchools.save();
		return res.status(200).send(true);
	} catch (error) {
    console.error("Error adding data to For Schools:", error);
    return res.status(500).send("Error adding data to For Schools: " + error.message);
	}
}






module.exports.showForSchools = async (req, res) => {
  try {
    const allForSchools = await ForSchools.find({});
    // const fsSubHeads = allForSchools.map((school) => school.fsSubHead);
    return res.status(200).send(allForSchools);
  } catch (error) {
    console.error("Error showing data for Schools:", error);
    return res.status(500).send("Error showing data for Schools: " + error.message);
  }
}



module.exports.updateForSchools = async (req, res) => {
    const { fsSubHead, fsBenefitsImage, fsBenefitsSentence } = req.body;
     const forSchoolsId = req.params.forSchoolsId;

    try {

        const forSchoolsInfo = await ForSchools.findById({ _id: forSchoolsId });

        forSchoolsInfo.fsSubHead = fsSubHead || forSchoolsInfo.fsSubHead;
        forSchoolsInfo.fsBenefitsImage = fsBenefitsImage || forSchoolsInfo.fsBenefitsImage;
        forSchoolsInfo.fsBenefitsSentence = fsBenefitsSentence || forSchoolsInfo.fsBenefitsSentence;

        forSchoolsInfo.save();
        return res.status(200).send(true);

    } catch (error) {
        console.error("Error updating data to For Teachers:", error);
        return res.status(500).send(false);
    }
};



module.exports.deleteForSchools = async (req, res) => {
	 const forSchoolsId = req.params.forSchoolsId;

	try {
		await ForSchools.findByIdAndDelete(forSchoolsId);
		return res.status(200).send(true);
	} catch (error) {
	 	console.error("Error deleting for schools data:", error);
    	return res.status(500).send("Error deleting for schools data: " + error.message);
	}
}