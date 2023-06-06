/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	optimizeFonts: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},

	// Update here your access credential
	env: {
		JWT_SECRET: "asdfghjklnbvcxzqwertyuiopmkioprewqasderfgnujm",
		AWS_SES_USER: "<Update here AWS_SES_USER>",
		AWS_SES_PASSWORD: "<Update here AWS_SES_PASSWORD>",
		CLOUD_NAME: "<Update here CLOUD_NAME>",
		UPLOAD_PRESETS: "<Update here UPLOAD_PRESETS>",
		CLOUDINARY_URL:
			"<Update here CLOUDINARY_URL>",
		CLOUDINARY_VIDEO_URL:
			"<Update here CLOUDINARY_VIDEO_URL>",
		CLOUDINARY_ZIP_URL:
			"<Update here CLOUDINARY_ZIP_URL>",
		STRIPE_SECRET_KEY: "<Update here STRIPE_SECRET_KEY>",
		STRIPE_PUBLISHABLE_KEY: "<Update here STRIPE_PUBLISHABLE_KEY>",
	},
};

module.exports = nextConfig;
