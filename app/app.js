var UMaterialApp = angular.module('admUI', [
    'ngAnimate',
    'ngMaterial',
    'ngRoute',
    'ngMessages',
    'ngAria',
    'ngMaterial',
    'oc.lazyLoad',
    'ui.bootstrap',
    'chieffancypants.loadingBar'
]);


UMaterialApp.config(function ($routeProvider, $mdThemingProvider, cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;

    $mdThemingProvider.theme('yellow')
        .primaryPalette('yellow');
    $mdThemingProvider.theme('bluegrey')
        .primaryPalette('blue-grey');
    $mdThemingProvider.theme('teal')
        .primaryPalette('teal');
    $mdThemingProvider.theme('grey')
        .primaryPalette('grey');
    $mdThemingProvider.theme('green')
        .primaryPalette('green');
    $mdThemingProvider.theme('orange')
        .primaryPalette('orange');
    $mdThemingProvider.theme('blue')
        .primaryPalette('blue');
    $mdThemingProvider.theme('purple')
        .primaryPalette('purple');
    $mdThemingProvider.theme('red')
        .primaryPalette('red');
    $mdThemingProvider.theme('pink')
        .primaryPalette('pink');
    $mdThemingProvider.theme('indigo')
        .primaryPalette('indigo');


    $mdThemingProvider.alwaysWatchTheme(true);
    $mdThemingProvider.setDefaultTheme('blue');


});

UMaterialApp.controller('UMaterialCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $timeout, cfpLoadingBar) {

    var me = this;

    cfpLoadingBar.start();


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        angular.element('html').addClass('ismobile');
    }

    $scope.appCfg = {
        title: 'AmdUI',
        loading: false,
        specialTheme: '',
        currentTheme: localStorage.getItem('app_current_theme') || 'blue',  //default theme
        isFullScreen: localStorage.getItem('app_full_screen') || '0',
        currentLayout: localStorage.getItem('app_current_layout') || '1',
        footerEnabled: localStorage.getItem('app_footer_enabled') || '1',
        openInsetTab: localStorage.getItem('app_open_inset_tab') || '1',
        sidebarToggle: false,
        themeList: [
            'yellow',
            'bluegrey',
            'teal',
            'grey',
            'green',
            'orange',
            'blue',
            'purple',
            'red',
            'pink',
            'indigo'
        ],
        fullScreen: function () {
            if ($scope.appCfg.isFullScreen == '1') {
                $scope.appCfg.isFullScreen = '0';
                $scope.appCfg.currentLayout = '1';
                $scope.appCfg.sidebarToggle = true;
                $scope.appCfg.footerEnabled = '1';
            } else {
                $scope.appCfg.isFullScreen = '1';
                $scope.appCfg.currentLayout = '0';
                $scope.appCfg.sidebarToggle = false;
                $scope.appCfg.footerEnabled = '0';
                $scope.appCfg.openInsetTab = '1';
            }
        },

        closeSidebar: function (e) {
            $scope.appCfg.sidebarToggle = false;
        },

        switchTheme: function (color) {
            $scope.appCfg.currentTheme = color;
            localStorage.setItem('app_current_theme', color);
        },

        mainMenu: MainMenuConfig

    };

    $scope.gotoUrl = function (url) {
        window.location.href = url;
    }

    $scope.$watchGroup(['appCfg.currentLayout', 'appCfg.footerEnabled', 'appCfg.isFullScreen', 'appCfg.openInsetTab'], function (newValues, oldValues, scope) {
        localStorage.setItem('app_current_layout', newValues[0]);
        localStorage.setItem('app_footer_enabled', newValues[1]);
        localStorage.setItem('app_full_screen', newValues[2]);
        localStorage.setItem('app_open_inset_tab', newValues[3]);
        if (newValues[3] != oldValues[3]) {
            window.location.href = '#';
        }
    });

    me.tabManager = TabManager;

    $scope.PAGEURL = '';

    $scope.$watch(function pathWatch() {
        return $location.$$url;
    }, function pathWatchAction(path) {
        if (path.base != '#') {
            var search = $location.search();
            var _path = search.url, title = search.title, theme = search.theme || '', icon = search.icon, hash = '#/?url=' + _path + '&title=' + title;
            if (!icon)icon = "bookmark-outline";
            if (_path && title && $scope.appCfg.openInsetTab == 1) {
                me.tabManager.addTab(_path, title, icon, hash, theme);
            } else if ($scope.appCfg.openInsetTab != 1 && _path) {
                $scope.PAGEURL = _path;
                if (theme) {
                    $scope.appCfg.specialTheme = theme;
                } else {
                    $scope.appCfg.specialTheme = '';
                }
            }
        }
    });

    $scope.$watch(
        function watchIndex() {
            return (me.tabManager.TABS.length + me.tabManager.SELECTEDINDEX);
        },
        function (current, old) {
            if ($scope.PAGEURL) return;
            var tab = me.tabManager.TABS[me.tabManager.SELECTEDINDEX];
            $timeout(function () {
                if (tab && tab.theme) {
                    $scope.appCfg.specialTheme = tab.theme;
                } else {
                    $scope.appCfg.specialTheme = '';
                }
            }, 350);
        });


}).controller('HeaderCtrl', function ($scope, $mdToast, $mdSidenav, $routeParams, $location, $timeout) {

    $scope.header_search_open = false;

    $scope.closeHeaderSearch = function () {
        $('.search-widget input').val('');
        $scope.header_search_open = false;
    };

    $scope.openHeaderSearch = function (ev) {
        $scope.header_search_open = true;
        $timeout(function () {
            $('.search-widget input').focus();
        }, 300)
    };

    $scope.toggleRight = function () {
        $mdSidenav('right')
            .toggle();
    }


}).controller('SidebarRCtrl', function ($scope, $mdToast, $mdSidenav, $routeParams, $location, $mdDialog) {

    $scope.toppings = [
        {name: 'Pepperoni', wanted: true},
        {name: 'Sausage', wanted: false},
        {name: 'Black Olives', wanted: true},
        {name: 'Green Peppers', wanted: false}
    ];
    $scope.settings = [
        {name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true},
        {name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false},
    ];

    $scope.people = [
        {name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true},
        {name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false},
        {name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false}
    ];


    $scope.navigateTo = function (action, event) {

    }


});


angular.element(document).ready(function () {
    angular.bootstrap(document, ['admUI']);
});
