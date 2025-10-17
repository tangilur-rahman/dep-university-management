// external modules
const express = require("express");

// sub-router
const customize = express.Router();

// internal modules
const {
	loginPageBackgroundImgChange,
	mainLogoChange,
	createColorDocu,
	getAllColors,
	updateColors
} = require("../controllers/customizeController");

const {
	loginPageBgImgChangeHandler,
	mainLogoChangeHandler
} = require("../Config/multerManager");

const {
	deleteLoginPageBgImg,
	deleteMainLogo
} = require("./../Config/deleteManager");

// for login-page background-img changing
const uploadLoginPageBgImg = loginPageBgImgChangeHandler("file");

customize.put(
	"/login-background-img",
	deleteLoginPageBgImg,
	uploadLoginPageBgImg.single("file"),
	loginPageBackgroundImgChange
);

// for main-logo changing
const uploadMainLogo = mainLogoChangeHandler("file");

customize.put(
	"/main-logo",
	deleteMainLogo,
	uploadMainLogo.single("file"),
	mainLogoChange
);

// for creating color document if not exist
customize.get("/create-project-colors-docu", createColorDocu);

// for getting all project's colors
customize.get("/get-project-colors", getAllColors);

// for updating colors
customize.put("/update-project-colors", updateColors);

module.exports = customize;
