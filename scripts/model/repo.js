(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('https://api.github.com/users/apalm112/repos' +
          '?per_page=5' +
          '&sort=updated')
      .done(function(data, message, xhr) {
        repos.all = data;
        console.log('Here is yo .get() response data: ', data);
      })
  // Jeff said put a function call here to fire after .get() returns w/ repo data to append to the DOM
    .done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function (repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
}) (window);
