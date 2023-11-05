// Create web server
var app = angular.module('app', ['ngRoute', 'ngResource', 'ngAnimate'])
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .when('/members', {
      templateUrl: 'templates/members/index.html',
      controller: 'MembersController'
    })
    .when('/members/:id', {
      templateUrl: 'templates/members/show.html',
      controller: 'MemberController'
    })
    .when('/projects', {
      templateUrl: 'templates/projects/index.html',
      controller: 'ProjectsController'
    })
    .when('/projects/:id', {
      templateUrl: 'templates/projects/show.html',
      controller: 'ProjectController'
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      controller: 'AboutController'
    })
    .otherwise({
      redirectTo: '/'
    })
}])

app.factory('Member', ['$resource', function($resource) {
  return $resource('/api/members/:id', { id: '@id' })
}])

app.factory('Project', ['$resource', function($resource) {
  return $resource('/api/projects/:id', { id: '@id' })
}])

app.controller('HomeController', ['$scope', function($scope) {
  $scope.title = 'Home'
}])

app.controller('MembersController', ['$scope', 'Member', function($scope, Member) {
  $scope.title = 'Members'
  $scope.members = Member.query()
}])

app.controller('MemberController', ['$scope', '$routeParams', 'Member', function($scope, $routeParams, Member) {
  $scope.title = 'Member'
  $scope.member = Member.get({ id: $routeParams.id })
}])

app.controller('ProjectsController', ['$scope', 'Project', function($scope, Project) {
  $scope.title = 'Projects'
  $scope.projects = Project.query()
}])

app.controller('ProjectController', ['$scope', '$routeParams', 'Project', function($scope, $routeParams, Project) {
  $scope.title = 'Project'
  $scope.project = Project.get({ id: $routeParams.id })
}])

app.controller('AboutController', ['$scope', function($scope) {
  $scope.title = 'About'
}])

app.directive('skillsMember', skillsMember)