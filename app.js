/**
 * Created by shoaibk on 27/7/16.
 */
(function(){
    var app=angular.module('myApp',[]);

    app.controller('BusinessCardController', function(){
        this.user={name:'',
            address:'',
            occupation:'',
            email:'',
            contact:'',
            color1: '#c0c0c0',
            color2: 'white',
            textcolor1: '#287cc2',
            textcolor2: '#666'
        };
        /*this.user={
            name:'John Doe',
            about:'Hi! I am John. A Passionate Coder and a voracious Reader.',
            occupation:'Software Developer',
            email:'johnDoe@example.org',
            contact:'+9112345678'
        };*/
    });


})();