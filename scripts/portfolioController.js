(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    Project.fetchAll(portfolioView.initIndexPage);

    $('.main-nav').on('click', '.tab', function(e) {
      e.preventDefault();
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.main-nav .tab:first').click();

  /*  $('').hide();
    $('').show();*/

  };


  module.portfolioController = portfolioController;
})(window);
