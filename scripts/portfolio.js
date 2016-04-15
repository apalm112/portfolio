var githubRepos = [];

function Project (repos) {
  // constructor function for github repos to be displayed
  this.title = repos.title;
  this.updatedOn = repos.updatedOn;
  this.course = repos.course;
}

Project.prototype.toHtml = function () {
  var $source = $('#project-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

projects.forEach(function(proj) {
  githubRepos.push(new Project(proj));
});

githubRepos.forEach(function(a) {
  $('#project-placeholder').append(a.toHtml());
});
