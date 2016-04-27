(function(module) {
  var aboutController = {};

  aboutController.index = function(callback) {
    $('#projects').hide();
    $('#about').show();

    //  callback();  for class-12
  };

  module.aboutController = aboutController;
})(window);
