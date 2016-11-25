angular.module('abMaterial').controller('ProgressCtrl', function ($scope, $mdToast, $mdDialog, RestService, $ocLazyLoad, $timeout, $q, $log, $interval) {

    var self = this, j = 0, counter = 0;
    self.modes = [];
    self.activated = true;
    self.determinateValue = 30;
    /**
     * Turn off or on the 5 themed loaders
     */
    self.toggleActivation = function () {
        if (!self.activated) self.modes = [];
        if (self.activated) j = counter = 0;
    };
    // Iterate every 100ms, non-stop
    $interval(function () {
        // Increment the Determinate loader
        self.determinateValue += 1;
        if (self.determinateValue > 100) {
            self.determinateValue = 30;
        }
        // Incrementally start animation the five (5) Indeterminate,
        // themed progress circular bars
        if ((j < 5) && !self.modes[j] && self.activated) {
            self.modes[j] = 'indeterminate';
        }
        if (counter++ % 4 == 0) j++;
    }, 100, 0, true);


});


angular.module('abMaterial').controller('ProgressCtrl2', function ($scope, $mdToast, $mdDialog, RestService, $ocLazyLoad, $timeout, $q, $log, $interval) {

        var self = this, j= 0, counter = 0;
        self.mode = 'query';
        self.activated = true;
        self.determinateValue = 30;
        self.determinateValue2 = 30;
        self.modes = [ ];
        /**
         * Turn off or on the 5 themed loaders
         */
        self.toggleActivation = function() {
            if ( !self.activated ) self.modes = [ ];
            if (  self.activated ) {
                j = counter = 0;
                self.determinateValue = 30;
                self.determinateValue2 = 30;
            }
        };
        $interval(function() {
            self.determinateValue += 1;
            self.determinateValue2 += 1.5;
            if (self.determinateValue > 100) self.determinateValue = 30;
            if (self.determinateValue2 > 100) self.determinateValue2 = 30;
            // Incrementally start animation the five (5) Indeterminate,
            // themed progress circular bars
            if ( (j < 2) && !self.modes[j] && self.activated ) {
                self.modes[j] = (j==0) ? 'buffer' : 'query';
            }
            if ( counter++ % 4 == 0 ) j++;
            // Show the indicator in the "Used within Containers" after 200ms delay
            if ( j == 2 ) self.contained = "indeterminate";
        }, 100, 0, true);
        $interval(function() {
            self.mode = (self.mode == 'query' ? 'determinate' : 'query');
        }, 7200, 0, true);

    });
