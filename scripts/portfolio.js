function Project (repos) {
  // constructor function for github repos to be displayed
  this.title = repos.title;
  this.updatedOn = repos.updatedOn;
  this.course = repos.course;
}

Project.all = []

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

Project.fetchAll = function() {
  $.ajax({
    type: 'HEAD',
    url: 'data/projects.json',
    success: function (data, message, xhr) {
      var eTag = xhr.getResponseHeader('eTag');
      if (eTag === localStorage.eTag) {
        Project.
      };

    }
  });
};
