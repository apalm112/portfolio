(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  };

  module.portfolioController = portfolioController;
})(window);
