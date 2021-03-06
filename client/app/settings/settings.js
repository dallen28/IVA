'use strict';

angular.module('IVA_App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/settings/devices', {
        templateUrl: 'app/settings/devices/devices.html',
        controller: 'DevicesCtrl',
        authenticate: true
      })
      .when('/settings/sensors', {
        templateUrl: 'app/settings/sensors/sensors.html',
        controller: 'SensorsController',
        authenticate: true
      })
      .when('/settings/sensors/:id', {
        templateUrl: 'app/settings/sensors/sensor.html',
        controller: 'SensorsController',
        authenticate: true
      })
      .when('/settings/collections', {
        templateUrl: 'app/settings/collections/collections.html',
        controller: 'CollectionController',
        authenticate: true
      })
      .when('/settings/collections/:id', {
        templateUrl: 'app/settings/collections/collection.html',
        controller: 'CollectionController',
        authenticate: true
      })
      .when('/settings', {
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });





//$stateProvider.state('posts', {
//  url: '/posts/{id}',
//  templateUrl: '/posts.html',
//  controller: 'PostsCtrl',
//  resolve: {
//    post: ['$stateParams', 'posts', function($stateParams, posts) {
//      return posts.get($stateParams.id);
//    }]
//  }
