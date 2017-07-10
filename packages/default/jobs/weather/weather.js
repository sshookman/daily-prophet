module.exports = {

    onInit: function(config, dependencies) {
    },

    onRun: function (config, dependencies, jobCallback) {
        var url = config.host.replace("{KEY}", config.key);
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
