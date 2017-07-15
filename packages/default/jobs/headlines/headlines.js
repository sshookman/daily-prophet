module.exports = {

    onInit: function(config, dependencies) {
    },

    onRun: function (config, dependencies, jobCallback) {
        var key = config.globalAuth[config.authName].key;
        dependencies.easyRequest.HTML(config.host + key, function (err, body) {
            if (err) {
                var errMsg = err || "ERROR: Couldn't access the web page at " + config.url;
                jobCallback(errMsg);
            } else {
                jobCallback(null, {news: JSON.parse(body)});
            }
        });
    }
};
