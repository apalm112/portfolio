(function(module) {
  var portfolioViewController = {};

  portfolioViewController.index = function() {
    // Trying two statements below, not working so far
    $('#about').hide();
    $('#projects').show();
    repos.requestRepos(repoView.index); // executes callback for .get() to Github
  };

  module.portfolioViewController = portfolioViewController;
})(window);
