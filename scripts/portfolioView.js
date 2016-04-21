//View object to hold functions for dynamic updates & project related event handlers.
(function(module) {
  var portfolioView = {};

  portfolioView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('.main-nav .tab:first').click();
  };

  $(function() {
    portfolioView.handleMainNav();
  });

  portfolioView.initIndexPage = function() {
    Project.all.forEach(function(proj) {
      $('#projects').append(proj.toHtml());
    });

    // appends li Number of Repos
    var template = Handlebars.compile($('#repo-template').text());
    $('.repo-count').append(template());

    // project objects show up in console
    $('#repo-template .count').text(Project.countRepos());
    $('#repo-template .repo').text(Project.all.title);

  };

  module.portfolioView = portfolioView;
}(window));
