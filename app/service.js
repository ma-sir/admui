UMaterialApp

    .factory('RestService', ['$http', function($http) {
        var RestService = function (url) {
            this.setURL(url);
            this.get = function (conf, callback) {
                this.http('GET', conf, callback);
            };
            this.create = function (conf, callback) {
                this.http('POST', conf, callback);
            };
            this.update = function (conf, callback) {
                this.http('PUT', conf, callback);
            };
            this.delete = function (conf, callback) {
                this.http('DELETE', conf, callback);
            };
        };

        RestService.prototype = {
            constructor: RestService,
            setURL: function (url) {
                this.url = url;
            },
            getURL: function () {
                return this.url;
            },

            http: function (method, conf, callback) {
                var url = this.url;
                if (conf.urlData)url = url + conf.urlData;
                conf.headers = conf.headers || {'Content-Type': 'application/text'};
                $http({method: method, url: url, params: conf.params, data: conf.data, headers: conf.headers}).
                success(function (data, status) {
                    callback(data, status);
                });
            }
        };


        return RestService;
    }])

