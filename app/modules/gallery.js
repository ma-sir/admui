angular.module('abMaterial').controller('GalleryCtrl', function ($scope, $mdToast, $mdDialog, RestService, $q, $log) {

    $scope.imgHeight = 150;

    $scope.photos = [
        {'img':13,'type':'baby'},
        {'img':1,'type':'baby'},
        {'img':2,'type':'web'},
        {'img':3,'type':'web'},
        {'img':11,'type':'grils'},
        {'img':4,'type':'grils'},
        {'img':5,'type':'grils'},
        {'img':10,'type':'grils'},
        {'img':6,'type':'grils'},
        {'img':25,'type':'grils'},
        {'img':7,'type':'grils'},
        {'img':8,'type':'things'},
        {'img':9,'type':'things'},
        {'img':10,'type':'grils'},
        {'img':11,'type':'grils'},
        {'img':4,'type':'grils'},
        {'img':12,'type':'grils'},
        {'img':13,'type':'baby'},
        {'img':14,'type':'grils'},
        {'img':15,'type':'grils'},
        {'img':16,'type':'web'},
        {'img':24,'type':'things'},
        {'img':17,'type':'grils'},
        {'img':18,'type':'grils'},
        {'img':35,'type':'things'},
        {'img':19,'type':'baby'},
        {'img':20,'type':'grils'},
        {'img':21,'type':'grils'},
        {'img':31,'type':'grils'},
        {'img':22,'type':'baby'},
        {'img':23,'type':'things'},
        {'img':24,'type':'things'},
        {'img':25,'type':'grils'},
        {'img':26,'type':'things'},
        {'img':46,'type':'things'},
        {'img':27,'type':'grils'},
        {'img':28,'type':'things'},
        {'img':29,'type':'baby'},
        {'img':30,'type':'things'},
        {'img':31,'type':'grils'},
        {'img':32,'type':'things'},
        {'img':33,'type':'things'},
        {'img':34,'type':'grils'},
        {'img':44,'type':'things'},
        {'img':35,'type':'things'},
        {'img':36,'type':'baby'},
        {'img':37,'type':'things'},
        {'img':38,'type':'baby'},
        {'img':16,'type':'web'},
        {'img':39,'type':'things'},
        {'img':40,'type':'things'},
        {'img':41,'type':'things'},
        {'img':42,'type':'grils'},
        {'img':43,'type':'things'},
        {'img':44,'type':'things'},
        {'img':45,'type':'things'},
        {'img':46,'type':'things'},
        {'img':47,'type':'grils'},
        {'img':48,'type':'things'},
        {'img':18,'type':'grils'},
        {'img':49,'type':'baby'},
        {'img':50,'type':'things'},
        {'img':45,'type':'things'},
        {'img':51,'type':'baby'},
    ];

    $('.gallery-group').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });


});
