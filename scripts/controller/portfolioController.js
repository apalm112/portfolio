(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    $('.main-nav').on('click', '.tab', function(e) {
      e.preventDefault();
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.main-nav .tab:first').click();

    repos.requestRepos(portfolioView.initIndexPage);

  };


  module.portfolioController = portfolioController;
})(window);
