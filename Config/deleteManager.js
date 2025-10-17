// external modules
const path = require("path");
let file = require("fs");

// for deleting login-page background-img
const deleteLoginPageBgImg = async (req, res, next) => {
	const getFolder =
		process.env.NODE_ENV !== "production"
			? path.resolve(`../client/public/assets/images/login-background.jpg`)
			: path.resolve(`./build/assets/images/login-background.jpg`);

	await file.unlinkSync(getFolder);
	next();
};

// for deleting project's logo
const deleteMainLogo = async (req, res, next) => {
	const getFolder =
		process.env.NODE_ENV !== "production"
			? path.resolve(`../client/public/assets/logo/main-logo.png`)
			: path.resolve(`./build/assets/logo/main-logo.png`);

	await file.unlinkSync(getFolder);
	next();
};

module.exports = { deleteLoginPageBgImg, deleteMainLogo };
