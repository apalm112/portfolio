(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    repos.requestRepos(portfolioView.initIndexPage);
  };

  module.portfolioController = portfolioController;
})(window);
