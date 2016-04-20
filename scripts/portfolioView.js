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

    var template = Handlebars.compile($('#repo-template').text());


    $('.repo-count').append(template());

    $('#repo-template .repo').text(Project.all.title);
    $('#repo-template .count').text(Project.countRepos());
  };

  module.portfolioView = portfolioView;
}(window));
