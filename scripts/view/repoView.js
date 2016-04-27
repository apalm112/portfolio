(function(module) {

  var repoView = {};

  // Check it out!  It's a helper method cuz it's Not attached to an Object & it's all wrapped up in this IIFE!
  var helperTimeMethod  = function() {
    var $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var reposCompile = Handlebars.compile($('#project-template').html());
  // Might not need this, being done line 12 portfolio.js?

  repoView.index = function() {
  //  method to append to DOM
    helperTimeMethod();
    $('#about ul').append(
      repos.with('name').map(reposCompile)
    );
  };

  module.repoView = repoView;
}) (window);
