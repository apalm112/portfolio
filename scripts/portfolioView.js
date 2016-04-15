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

portfolioView.initNewProjectPage = function() {
  $('.tab-content').show();
  $('#export-field').hide();
  $('#project-json').on('focus', function() {
    $(this).select();
  });

  $('#new-form').on('change', 'input',
'textarea', portfolioView.create);
};

portfolioView.create = function() {
  $('#project-preview').empty();

  var formProject = new Project( {
    title: $('project-title').val(),
    updatedOn: $('#project-updatedOn:checked').length ? new Date() : null
  });

  $('#project-preview').append(formProject.toHtml());

  $('pre code').each(function(index, block){
    hljs.highlightBlock(block);
  });

  $('#export-field').show();
  $('#project-json').val(JSON.stringify(fformProject) + ',');
};


projectView.initIndexPage = function() {
  projectView.handleMainNav();
};
