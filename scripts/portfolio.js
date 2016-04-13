var projects = [];

function Project (repos) {
  // constructor function for github repos to be displayed
  this.title = repos.title;
  this.updatedOn = repos.updatedOn;
  this.body = repos.body;
}

Project.prototype.toHtml = function () {
  var $newProject = $('article.template').clone();

  $newProject.attr('data-title', this.title);
  $newProject.attr('data-updatedOn', this.updatedOn);
  $newProject.attr('data-body', this.body);

  $newArticle.find('time[pubdate]').attr('title', this.updatedOn);
  $newArticle.find('section.article-body').html(this.body);
  $newArticle.find('header h2').text(this.title);

  $newArticle.removeClass('template');

  return $newArticle;
};
