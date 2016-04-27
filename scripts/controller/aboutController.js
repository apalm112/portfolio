(function(module) {
  var aboutController = {};

  aboutController.index = function(callback) {
    $('#projects').hide();
    $('#about').show();

  //  callbackHere();
  };

  module.aboutController = aboutController;
})(window);
