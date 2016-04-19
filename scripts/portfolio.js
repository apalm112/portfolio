function Project (repos) {
  // constructor function for github repos to be displayed
  this.title = repos.title;
  this.updatedOn = repos.updatedOn;
  this.course = repos.course;
}

Project.all = [];

Project.prototype.toHtml = function () {
  var $source = $('#project-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

Project.loadAll = function(dataPassedIn) {

  dataPassedIn.forEach(function(proj) {
    Project.all.push(new Project(proj));
  });
};

Project.forEach(function(a) {
  $('#project-placeholder').append(a.toHtml());
});

Project.fetchAll = function() {
  $.ajax({
    type: 'GET',
    url: 'data/projects.json',
    success: function (data, message, xhr) {
      var eTag = xhr.getResponseHeader('eTag');
      if (eTag === localStorage.eTag) {
        Project.loadAll(JSON.parse(localStorage.projects));
        portfolioView.initIndexPage();
      } else {
        $.getJSON('data/projects.json', function(data) {
          Project.loadAll(data);
          localStorage.projects.json = JSON.stringify(data);
          localStorage.eTag = eTag;
          portfolioView.initIndexPage();
        });
      }
    }
  }
  );
};
