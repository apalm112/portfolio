var githubRepos = [];

function Project (repos) {
  // constructor function for github repos to be displayed
  this.title = repos.title;
  this.updatedOn = repos.updatedOn;
  this.course = repos.course;
}

Project.prototype.toHtml = function () {
/*  var $newProject = $('article.template').clone();

  $newProject.attr('data-title', this.title);
  $newProject.attr('data-updatedOn', this.updatedOn);


  $newArticle.find('time[pubdate]').attr('title', this.updatedOn);
  $newArticle.find('section.article-body').html(this.body);
  $newArticle.find('header h2').text(this.title);

  $newArticle.removeClass('template');

  return $newArticle;*/

  var $source = $('#project-template').html();
  var template = Handlebars.compile($source);

  return template(this);
};

projects.forEach(function(proj) {
  githubRepos.push(new Project(proj));
});

githubRepos.forEach(function(a) {
  $('#project-placeholder').append(a.toHtml);
});
