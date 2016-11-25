UMaterialApp
    .directive('changeLayout', function () {
        return {
            restrict: 'A',
            scope: {
                changeLayout: '='
            },
            link: function (scope, element, attr) {
                if (scope.changeLayout === '1') {
                    element.prop('checked', true);
                }
                element.on('change', function () {
                    if (element.is(':checked')) {
                        localStorage.setItem('app_current_layout', 1);
                        scope.$apply(function () {
                            scope.changeLayout = '1';
                        })
                    }
                    else {
                        localStorage.setItem('app_current_layout', 0);
                        scope.$apply(function () {
                            scope.changeLayout = '0';
                        })
                    }
                })
            }
        }
    })
    .directive('toggleSidebar', function () {
        return {
            restrict: 'A',
            scope: {
                modelLeft: '='
            },
            link: function (scope, element, attr) {
                element.on('click', function () {

                    if (element.data('target') === 'mainmenu') {
                        if (scope.modelLeft === false) {
                            scope.$apply(function () {
                                scope.modelLeft = true;
                            })
                        }
                        else {
                            scope.$apply(function () {
                                scope.modelLeft = false;
                            })
                        }
                    }
                })
            }
        }

    })
    .directive('toggleSubmenu', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.click(function () {
                    element.next().slideToggle(200);
                    element.parent().toggleClass('toggled');
                });
            }
        }
    })
    .directive('miniScroll', function () {
        return {
            restrict: 'C',
            link: function (scope, element) {
                if ((element.hasClass('only-mobile') && $('html').hasClass('ismobile')) || !element.hasClass('only-mobile')) {
                    $(element).mCustomScrollbar({
                        theme: 'minimal-dark',
                        scrollInertia: 0,
                        axis:'y',
                        mouseWheel: {
                            enable: true,
                            axis: 'y',
                            preventDefault: true
                        }
                    });
                }
            }
        }
    })
    .directive('bsPopover', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element).popover();
            }
        }
    })
    .directive('viewCode', ['$mdDialog', function ($mdDialog) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
              element.click(function () {
                var e = $(element).parent().find('+ md-card-content');
                var html = e.html();
                 alertcode = $mdDialog.alert()
                   .title('Souce Code')
                   .content(html)
                   .ok('Close');
                 $mdDialog
                     .show( alertcode )
                     .finally(function() {
                       alertcode = undefined;
                     });
              });
            }
        }
    }])
