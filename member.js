function skillsMember() {
    return {
      restrict: 'E',
      scope: {
        member: '='
      },
      templateUrl: 'templates/members/skills.html'
    }
  }