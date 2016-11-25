angular.module('abMaterial').controller('ProfileCtrl', function ($scope, $mdToast, $mdDialog) {

    $scope.people = [
        {name: 'Janet Perkins', newMessage: true},
        {name: 'Mary Johnson', newMessage: false},
        {name: 'Peter Carlsson', newMessage: false},
        {name: 'Alexander Bailey', newMessage: true},
        {name: 'Loretta Morrisonz', newMessage: true},
        {name: 'Marilyn Thomas', newMessage: false},
        {name: 'Juan Sims', newMessage: true},
        {name: 'Maureen Jenkins ', newMessage: false},
        {name: 'Tomothy Roberts', newMessage: false},
        {name: 'Billie Dunn ', newMessage: false}

    ];

    $scope.gotoMenu = function (ev) {

    };

    $scope.photos = [
        {'img':1,'type':'baby'},
        {'img':2,'type':'web'},
        {'img':3,'type':'web'},
        {'img':4,'type':'grils'},
        {'img':5,'type':'web'},
        {'img':6,'type':'web'},
        {'img':7,'type':'grils'},
        {'img':8,'type':'things'},
        {'img':9,'type':'things'},
        {'img':10,'type':'grils'},
        {'img':11,'type':'grils'},
        {'img':12,'type':'grils'},
        {'img':13,'type':'baby'},
        {'img':14,'type':'grils'},
        {'img':15,'type':'grils'},
        {'img':16,'type':'web'},
        {'img':17,'type':'grils'},
        {'img':18,'type':'web'},
        {'img':19,'type':'baby'},
        {'img':20,'type':'grils'},
        {'img':21,'type':'grils'},
        {'img':22,'type':'baby'},
        {'img':23,'type':'things'},
    ];
    $scope.works = [
        {'img':1,'type':'web'},
        {'img':2,'type':'card'},
        {'img':3,'type':'graphic'},
        {'img':4,'type':'web'},
        {'img':5,'type':'card'},
        {'img':6,'type':'graphic'},
        {'img':7,'type':'card'},
        {'img':8,'type':'web'},
        {'img':9,'type':'graphic'},
        {'img':10,'type':'web'},
        {'img':11,'type':'graphic'},
        {'img':12,'type':'card'},
    ]

    $scope.msgs = [
        {
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: "he titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple req"
        },
        {
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well"
        },
        {
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language:"
        },
        {
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        }
    ];


    $('#Photos').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

});
