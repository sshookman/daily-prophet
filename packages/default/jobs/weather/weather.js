module.exports = {

    onInit: function(config, dependencies) {
    },

    onRun: function (config, dependencies, jobCallback) {
        var key = config.globalAuth[config.authName].key;
        var url = config.host.replace("{KEY}", key);
        dependencies.easyRequest.HTML(url, function (err, body) {
            if (err) {
                var errMsg = err || "ERROR: Couldn't access the web page at " + config.url;
                jobCallback(errMsg);
            } else {
                jobCallback(null, {news: JSON.parse(body)});
            }
        });
    }
};
