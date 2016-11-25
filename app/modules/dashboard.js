angular.module('abMaterial').controller('DashboardCtrl', function ($scope, $mdToast, $mdDialog, RestService) {


    var tableDataService = new RestService('app/data/tabledata.json');
    var imagePath = 'dist/material/avatar2.png';
    $scope.todos = [
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face: imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
    ];

    $scope.tableData = [];
    tableDataService.get({}, function (result) {
        $scope.tableData = result.list;
    });

    $scope.goToPerson = function (person, event) {
        $mdDialog.show(
            $mdDialog.alert()
                .title('Navigating')
                .textContent('Inspect ' + person)
                .ariaLabel('Person inspect demo')
                .ok('Neat!')
                .targetEvent(event)
        );
    };


});


UMaterialApp

    .directive('plotChart', ['$ocLazyLoad', function ($ocLazyLoad) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                var maximum = 60;
                var data = [];

                function getRandomData() {
                    if (data.length) {
                        data = data.slice(1);
                    }
                    while (data.length < maximum) {
                        var previous = data.length ? data[data.length - 1] : 50;
                        var y = previous + Math.random() * 10 - 5;
                        data.push(y < 0 ? 0 : y > 60 ? 60 : y);
                    }
                    var res = [];
                    for (var i = 0; i < data.length; ++i) {
                        res.push([i, data[i]])
                    }
                    return res;
                }

                var options = {
                    series: {
                        shadowSize: 0,
                        lines: {
                            show: false,
                            lineWidth: 0,
                        },
                    },
                    grid: {
                        borderWidth: 0,
                        labelMargin: 10,
                        mouseActiveRadius: 6,
                    },
                    xaxis: {
                        tickDecimals: 0,
                        ticks: false
                    },
                    yaxis: {
                        tickDecimals: 0,
                        ticks: false
                    },
                    legend: {
                        show: false
                    }
                };
                series = [
                    {data: getRandomData(), lines: {show: true, fill: 1}, color: '#EDC240'}
                ];

                var _plot = $.plot($(element), series, options);
                //setInterval(function updateRandom() {
                //    series[0].data = getRandomData();
                //    _plot.setData(series);
                //    _plot.draw();
                //}, 800);

            }
        }
    }])


    .directive('pieChart', ['$ocLazyLoad', function ($ocLazyLoad) {
        return {
            restrict: 'A',
            link: function (scope, element) {

                var data = [
                    {label: "Chrome", data: 30},
                    {label: "Firefox", data: 20},
                    {label: "Safari", data: 40},
                    {label: "IE", data: 5},
                    {label: "Edge", data: 8},
                    {label: "Opera", data: 15},
                    {label: "Google", data: 10},
                    {label: "Other", data: 20}
                ]

                $.plot($(element), data, {
                    series: {
                        pie: {
                            show: !0,
                            innerRadius: .27,
                            shadow: {top: 5, left: 15, alpha: .3},
                            stroke: {width: 0},
                            label: {
                                show: !0, formatter: function (a, b) {
                                    return '<div style="font-size:12px;text-align:center;padding:2px;color:#666;">' + a + "</div>"
                                }
                            },
                            highlight: {opacity: .05}
                        }
                    },
                    grid: {hoverable: !0, clickable: !0},
                    colors: ["#5793f3", "#dd4d79", "#bd3b47", "#dd4444", "#fd9c35", "#fec42c", "#d4df5a", "#5578c2"],
                    legend: {show: !1}
                });

            }
        }
    }])


    .directive('fullCalendar', ['$ocLazyLoad', function ($ocLazyLoad) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                element.fullCalendar({
                    contentHeight: 'auto',
                    theme: true,
                    header: {
                        right: '',
                        center: 'prev, title, next',
                        left: ''
                    },
                    defaultDate: '2016-01-01',
                    editable: true,
                    events: [
                        {
                            title: 'All Day',
                            start: '2016-01-01',
                            className: 'bgc-cyan'
                        },
                        {
                            title: 'Long Event',
                            start: '2016-01-03',
                            end: '2016-01-05',
                            className: 'bgc-orange'
                        },
                        {
                            id: 999,
                            title: 'Repeat',
                            start: '2016-01-18',
                            className: 'bgc-lightgreen'
                        },
                        {
                            id: 999,
                            title: 'Repeat',
                            start: '2016-01-16',
                            className: 'bgc-blue'
                        },
                        {
                            title: 'Lunch',
                            start: '2016-01-12',
                            className: 'bgc-gray'
                        },
                        {
                            title: 'Birthday',
                            start: '2016-01-13',
                            className: 'bgc-pink'
                        },
                        {
                            title: 'Google',
                            url: 'http://google.com/',
                            start: '2016-01-28',
                            className: 'bgc-red'
                        }
                    ]
                });
            }
        }
    }])

    .directive('sparklineLine', ['$ocLazyLoad', function ($ocLazyLoad) {


        return {
            restrict: 'A',
            link: function (scope, element) {

                $ocLazyLoad.load([
                    'app/addons/bower_components/sparklines/index.js']).then(function () {
                    function sparkLineLine(selector, values, width, height, lineColor, fillColor, lineWidth, maxSpotColor, minSpotColor, spotColor, spotRadius, hSpotColor, hLineColor) {
                        $(selector).sparkline(values, {
                            type: 'line',
                            width: width,
                            height: height,
                            lineColor: lineColor,
                            fillColor: fillColor,
                            lineWidth: lineWidth,
                            maxSpotColor: maxSpotColor,
                            minSpotColor: minSpotColor,
                            spotColor: spotColor,
                            spotRadius: spotRadius,
                            highlightSpotColor: hSpotColor,
                            highlightLineColor: hLineColor
                        });
                    }

                    sparkLineLine('.stats-line', [1, 4, 3, 5, 6, 7, 9, 4, 3, 1, 8, 5], 260, 82, '#fff', 'rgba(0,0,0,0)', 1.25, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 3, '#fff', 'rgba(255,255,255,0.4)');
                    sparkLineLine('.stats-line-2', [9, 3, 6, 4, 7, 7, 7, 6, 5, 5, 4, 9, 5, 6], 260, 82, '#fff', 'rgba(0,0,0,0)', 1.25, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 3, '#fff', 'rgba(255,255,255,0.4)');
                });

            }
        }
    }])
