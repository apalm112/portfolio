(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    Project.fetchAll(portfolioView.initIndexPage);
  };


  module.portfolioController = portfolioController;
})(window);
