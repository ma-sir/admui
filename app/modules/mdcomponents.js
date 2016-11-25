angular.module('abMaterial').controller('MDComponentsCtrl_base', function ($scope, $mdToast, $mdDialog, RestService, $ocLazyLoad, $timeout, $q, $log, $document) {



});


angular.module('abMaterial').controller('MDComponentsCtrl', function ($scope, $mdToast, $mdDialog, RestService, $ocLazyLoad, $timeout, $q, $log, $document) {

    var self = this;
    self.simulateQuery = false;
    self.isDisabled = false;
    // list of `state` value/display objects
    self.states = loadAll();
    self.querySearch = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;
    self.newState = newState;
    function newState(state) {
        alert("Sorry! You'll need to create a Constituion for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : self.states,
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
        return allStates.split(/, +/g).map(function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }
});


angular.module('abMaterial').controller('MDComponentsCtrl_autotmp', function ($scope, $mdToast, $mdDialog, RestService, $ocLazyLoad, $timeout, $q, $log, $document) {
        var self = this;
        self.simulateQuery = false;
        self.isDisabled    = false;
        self.repos         = loadAll();
        self.querySearch   = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange   = searchTextChange;
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for repos... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch (query) {
            var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }
        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }
        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }
        /**
         * Build `components` list of key/value pairs
         */
        function loadAll() {
            var repos = [
                {
                    'name'      : 'Angular 1',
                    'url'       : 'https://github.com/angular/angular.js',
                    'watchers'  : '3,623',
                    'forks'     : '16,175',
                },
                {
                    'name'      : 'Angular 2',
                    'url'       : 'https://github.com/angular/angular',
                    'watchers'  : '469',
                    'forks'     : '760',
                },
                {
                    'name'      : 'Angular Material',
                    'url'       : 'https://github.com/angular/material',
                    'watchers'  : '727',
                    'forks'     : '1,241',
                },
                {
                    'name'      : 'Bower Material',
                    'url'       : 'https://github.com/angular/bower-material',
                    'watchers'  : '42',
                    'forks'     : '84',
                },
                {
                    'name'      : 'Material Start',
                    'url'       : 'https://github.com/angular/material-start',
                    'watchers'  : '81',
                    'forks'     : '303',
                }
            ];
            return repos.map( function (repo) {
                repo.value = repo.name.toLowerCase();
                return repo;
            });
        }
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(item) {
                return (item.value.indexOf(lowercaseQuery) === 0);
            };
        }
});




angular.module('abMaterial').controller('MDComponentsCtrl_chips', function ($scope, $mdToast, $mdDialog, RestService, $ocLazyLoad, $timeout, $q, $log, $document) {

            var self = this;
            self.readonly = false;
            self.selectedItem = null;
            self.searchText = null;
            self.querySearch = querySearch;
            self.vegetables = loadVegetables();
            self.selectedVegetables = [];
            self.numberChips = [];
            self.numberChips2 = [];
            self.numberBuffer = '';
            self.autocompleteDemoRequireMatch = true;
            self.transformChip = transformChip;
            /**
             * Return the proper object when the append is called.
             */
            function transformChip(chip) {
                // If it is an object, it's already a known chip
                if (angular.isObject(chip)) {
                    return chip;
                }
                // Otherwise, create a new one
                return { name: chip, type: 'new' }
            }
            /**
             * Search for vegetables.
             */
            function querySearch (query) {
                var results = query ? self.vegetables.filter(createFilterFor(query)) : self.vegetables;
                return results;
            }
            /**
             * Create filter function for a query string
             */
            function createFilterFor(query) {
                var lowercaseQuery = angular.lowercase(query);
                return function filterFn(vegetable) {
                    return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
                        (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
                };
            }
            function loadVegetables() {
                var veggies = [
                    {
                        'name': 'Aroccoli',
                        'type': 'Brassica'
                    }, {
                        'name': 'Broccoli',
                        'type': 'Brassica'
                    },
                    {
                        'name': 'Cabbage',
                        'type': 'Brassica'
                    },
                    {
                        'name': 'Carrot',
                        'type': 'Umbelliferous'
                    },
                    {
                        'name': 'Lettuce',
                        'type': 'Composite'
                    },
                    {
                        'name': 'Spinach',
                        'type': 'Goosefoot'
                    }
                ];
                return veggies.map(function (veg) {
                    veg._lowername = veg.name.toLowerCase();
                    veg._lowertype = veg.type.toLowerCase();
                    return veg;
                });
            }
    });



angular.module('abMaterial').controller('MDComponentsCtrl_datepicker', function ($scope, $mdToast, $mdDialog, RestService, $ocLazyLoad, $timeout, $q, $log, $document) {

    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
});


angular.module('abMaterial').controller('MDComponentsCtrl_others', function ($scope, $mdToast, $mdDialog, RestService, $ocLazyLoad, $timeout, $q, $log, $document) {

      $scope.sizes = [
          "small (12-inch)",
          "medium (14-inch)",
          "large (16-inch)",
          "insane (42-inch)"
      ];
      $scope.toppings = [
        { category: 'meat', name: 'Pepperoni' },
        { category: 'meat', name: 'Sausage' },
        { category: 'meat', name: 'Ground Beef' },
        { category: 'meat', name: 'Bacon' },
        { category: 'veg', name: 'Mushrooms' },
        { category: 'veg', name: 'Onion' },
        { category: 'veg', name: 'Green Pepper' },
        { category: 'veg', name: 'Green Olives' }
      ];
      $scope.rating00 = 30;
      $scope.rating01 = 20;
      $scope.rating02 = 40;
      $scope.rating1 = 3;
      $scope.rating2 = 2;
      $scope.rating3 = 4;
      $scope.disabled1 = 10;
      $scope.disabled2 = 70;

      $scope.data = {
        cb1: true,
        cb4: true,
        cb5: false
      };
      $scope.message = 'false';
      $scope.onChange = function(cbState) {
      	$scope.message = cbState;
      };

      $scope.items = [1,2,3];
     $scope.selected = [];
     $scope.toggle = function (item, list) {
       var idx = list.indexOf(item);
       if (idx > -1) list.splice(idx, 1);
       else list.push(item);
     };
     $scope.exists = function (item, list) {
       return list.indexOf(item) > -1;
     };

     $scope.showHints = true;

});
