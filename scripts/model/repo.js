(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('https://api.github.com/users/apalm112/repos' + '?per_page=5' + '&sort=updated')
      .done(function(data) {
        repos.all = data;
        console.log('Here is yo ajax response data: ', data);
      });
    Project.loadAll(repos.data); //  Wrong place for callback?
  };

  repos.with = function(attr) {
    return repos.all.filter(function (repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
}) (window);
