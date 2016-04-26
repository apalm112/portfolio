(function(module) {
  var aboutController = {};

  aboutController.index = function() {
  /*  $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn(); */
    $('#projects').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
