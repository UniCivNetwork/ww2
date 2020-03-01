//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.jpg";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "USSR vs Nazi Germany RP";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"arrest.jpg",
	"beautiful.jpg",
	"citadael.jpg",
	"militia.jpg",
	"overworld.jpg",
	"program.jpg",
	"protect.jpg",
	"remove.jpg",
	"seven.jpg",
	"spear.jpg",
	"stalker.jpg",
	"strength.jpg",
	"stun.jpg",
	"transhuman.jpg",
	"winter.jpg",
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = false;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = false;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "funkerlied.ogg", name: "Funkerlied - German Radio Operators Song"},
	{ogg: "letsgo.ogg", name: "Let's Go - Red Army Choir"},
	{ogg: "myarmy.ogg", name: "My Army - Red Army Choir"},
	{ogg: "slavianka.ogg", name: "Farewell of Slavianka - Red Army Choir"},
	{ogg: "westerwald.ogg", name: "Song of the Westerwald"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = false;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 0;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = false;

// Enter your custom messages below
var l_messages = [
	"Welcome.. welcome to city 17",
	"If I had known you would've come right up to my office i wouldnt have bothered looking for you in the first place.",
	"Tell me doctor freeman if you can.. you've destroyed so much.. what is it that you have created?",
	"Be wise.. Be safe.. be aware",
	"Are we to model ourselves on the trilobyte?",
	"Civic deeds will not go unrewarded and contrariwaise, complicity with his cause will not go unpunished.",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
