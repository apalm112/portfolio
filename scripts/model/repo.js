(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('https://api.github.com/users/apalm112/repos' +
          '?per_page=5' +
          '&sort=updated')
      .done(function(data) {
      //  debugger;
        repos.all = data;
        console.log('Here is yo .get() response data: ', data);
      });
    //repoView.index();
  //  portfolioView.initIndexPage(); <---this callback literally does nothing.
  };

  repos.with = function(attr) {
    return repos.all.filter(function (repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
}) (window);
