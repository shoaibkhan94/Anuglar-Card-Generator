/**
 * Created by shoaibk on 27/7/16.
 */
(function(){
    var app=angular.module('myApp',[]);
    app.controller('BusinessCardController', function(){
        this.user={
            name:'John Doe',
            about:'Hi! I am John. A Passionate Coder and a voracious Reader.',
            occupation:'Software Developer',
            email:'johnDoe@example.org',
            contact:'+9112345678'
        };
    });


})();