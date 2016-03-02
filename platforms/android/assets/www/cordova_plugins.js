cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.wikitude.phonegap.WikitudePlugin/www/WikitudePlugin.js",
        "id": "com.wikitude.phonegap.WikitudePlugin.WikitudePlugin",
        "clobbers": [
            "WikitudePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.wikitude.phonegap.WikitudePlugin": "5.1.1"
};
// BOTTOM OF METADATA
});