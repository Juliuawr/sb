
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-safearea.safearea",
          "file": "plugins/cordova-plugin-safearea/www/safearea.js",
          "pluginId": "cordova-plugin-safearea",
        "clobbers": [
          "window.plugins.safearea"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-safearea": "1.0.1"
    };
    // BOTTOM OF METADATA
    });
    