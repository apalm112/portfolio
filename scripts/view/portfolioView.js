// View object to hold functions for dynamic updates & project related event handlers.
(function(module) {

  var portfolioView = {};

  portfolioView.initIndexPage = function() {
  /*  Project.all.forEach(function(proj) {  // appends the project-template to the DOM via it's placeholder #projects.
      $('#projects').append(proj.toHtml());
    });

  //   appends li Number of Repos
    var template = Handlebars.compile($('#project-template').text());
    $('#project-placeholder').append(template());

    //  project objects show up in console!!!!  use this for Handlebars template?
    $('#project-template .count').text(Project.countRepos());
    $('#project-template .repo').text(Project.all.title);*/

  };

  module.portfolioView = portfolioView;
})(window);
