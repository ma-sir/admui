angular.module('abMaterial').controller('InboxCtrl', function (filterFilter, $scope, $mdToast, $mdDialog, RestService, $q, $log) {



    $scope.action='';


    var colors = {info: '#5bc0de', success: '#5cb85c', default: '#777', warning: '#f0ad4e', danger: '#d9534f'};

    $scope.labels = [
        {text:'company',color:colors.info},
        {text:'friends',color:colors.danger},
        {text:'family',color:colors.default},
        {text:'labels 1',color:colors.warning},
        {text:'labels 2',color:colors.success}
    ];

    var me=this;
    me.inboxItems = [
        {
            avatar: 'avatar1.jpg',
            from: 'Min Li Chan',
            title: "Brunch this weekend",
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.info,
                    text: 'company'
                }, {
                    color: colors.success,
                    text: 'labels 2'
                }

            ],
            unread: true
        },

        {
            avatar: 'avatar2.jpg',
            from: 'Janet Perkins',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.danger,
                    text: 'friends'
                }
            ],
            unread: true
        },

        {
            avatar: 'avatar3.jpg',
            from: 'Mary Johnson',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.danger,
                    text: 'friends'
                },
                {
                    color: colors.default,
                    text: 'family'
                }, {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: true
        },

        {
            avatar: 'avatar3.png',
            from: 'Peter Carlsson',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: true
        },

        {
            avatar: 'avatar4.png',
            from: 'John Deo',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.danger,
                    text: 'friends'
                },{
                    color: colors.success,
                    text: 'labels 2'
                }, {
                    color: colors.default,
                    text: 'labels 1'
                }
            ],
            unread: true
        },{
            avatar: 'avatar1.jpg',
            from: 'Min Li Chan',
            title: "Brunch this weekend",
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.info,
                    text: 'company'
                }, {
                    color: colors.success,
                    text: 'labels 2'
                }

            ],
            unread: false
        },

        {
            avatar: 'avatar2.jpg',
            from: 'Janet Perkins',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.danger,
                    text: 'friends'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar3.jpg',
            from: 'Mary Johnson',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.default,
                    text: 'family'
                }, {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar3.png',
            from: 'Peter Carlsson',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar4.png',
            from: 'John Deo',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.success,
                    text: 'labels 2'
                }, {
                    color: colors.default,
                    text: 'labels 1'
                }
            ],
            unread: false
        },{
            avatar: 'avatar1.jpg',
            from: 'Min Li Chan',
            title: "Brunch this weekend",
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.info,
                    text: 'company'
                }, {
                    color: colors.success,
                    text: 'labels 2'
                }

            ],
            unread: false
        },

        {
            avatar: 'avatar2.jpg',
            from: 'Janet Perkins',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.danger,
                    text: 'friends'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar3.jpg',
            from: 'Mary Johnson',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.default,
                    text: 'family'
                }, {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar3.png',
            from: 'Peter Carlsson',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar4.png',
            from: 'John Deo',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.success,
                    text: 'labels 2'
                }, {
                    color: colors.default,
                    text: 'labels 1'
                }
            ],
            unread: false
        },{
            avatar: 'avatar1.jpg',
            from: 'Min Li Chan',
            title: "Brunch this weekend",
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.info,
                    text: 'company'
                }, {
                    color: colors.success,
                    text: 'labels 2'
                }

            ],
            unread: false
        },

        {
            avatar: 'avatar2.jpg',
            from: 'Janet Perkins',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.danger,
                    text: 'friends'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar3.jpg',
            from: 'Mary Johnson',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.default,
                    text: 'family'
                }, {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar3.png',
            from: 'Peter Carlsson',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar4.png',
            from: 'John Deo',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.success,
                    text: 'labels 2'
                }, {
                    color: colors.default,
                    text: 'labels 1'
                }
            ],
            unread: false
        },{
            avatar: 'avatar1.jpg',
            from: 'Min Li Chan',
            title: "Brunch this weekend",
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.info,
                    text: 'company'
                }, {
                    color: colors.success,
                    text: 'labels 2'
                }

            ],
            unread: false
        },

        {
            avatar: 'avatar2.jpg',
            from: 'Janet Perkins',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.danger,
                    text: 'friends'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar3.jpg',
            from: 'Mary Johnson',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.default,
                    text: 'family'
                }, {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: false
        },

        {
            avatar: 'avatar3.png',
            from: 'Peter Carlsson',
            title: 'Hi Perkins, How are you?',
            desc: 'Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '07:23 AM',
            labels: [
                {
                    color: colors.warning,
                    text: 'labels 1'
                }
            ],
            unread: false,
            trash:true
        },

        {
            avatar: 'avatar4.png',
            from: 'John Deo',
            title: 'Brunch this weekend',
            desc: "I'll be in your neighborhood doing errands",
            time: '07:23 AM',
            labels: [
                {
                    color: colors.success,
                    text: 'labels 2'
                }, {
                    color: colors.default,
                    text: 'labels 1'
                }
            ],
            unread: false,
            trash:true
        }

    ];



    $scope.pageSize = 10;
    $scope.currentPage = 1;
    $scope.inbox = me.inboxItems;

    $scope.navigateTo = function(search, action){
        $scope.action=action;
        $scope.inbox = filterFilter(me.inboxItems,search);
    };


});
