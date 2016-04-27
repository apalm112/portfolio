(function(module) {
  var portfolioViewController = {};

  portfolioViewController.index = function() {
    // This does absolutely nothing.  Delete it?
    repos.requestRepos(portfolioView.initIndexPage);
  };

  module.portfolioViewController = portfolioViewController;
})(window);
