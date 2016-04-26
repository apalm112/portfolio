(function(module) {
  var repos = {};

  repos.all = [];

  repos.initIndex = function() {
    $.ajax({
      url: 'https://api.github.com/users/apalm112/repos' +
           '?per_page=12' +
           '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        repos.all = data;
      }
    });
    callback();
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
}) (window);
