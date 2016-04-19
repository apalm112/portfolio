//View object to hold functions for dynamic updates & project related event handlers.
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
};
