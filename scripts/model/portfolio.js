(function(module) {
  function Project (repos) {
    // constructor function for github repos to be displayed
    Object.keys(repos).forEach(function(arr, curr, idx) {
      this[arr] = repos[arr];
    }, this);
  }

  Project.all = [];

  Project.prototype.toHtml = function () {
    var $source = $('#project-template').html();  // appends data to Handlebars project-template.
    var template = Handlebars.compile($source);
    return template(this);
  };

  Project.loadAll = function(data) {
    Project.all.map(function(proj) {
      return Project.all.push(new Project(proj));
      console.log('here is duh loadAll method working!');
    });
  };

  Project.countRepos = function(callback) {
    return Project.all.map(function(title) {
      console.log(title);
      return title;
    });
    return Project.all.reduce(function(title, cur) {
      if (title[cur] = cur + cur) {
        title.push(cur);
      }
      return title;
    }, []);
  };

  module.Project = Project;
} (window));
