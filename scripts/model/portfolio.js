(function(module) {
  function Project (repos) {
    // constructor function for github repos to be displayed
    Object.keys(repos).forEach(function(arr, curr, idx) {
      this[arr] = repos[arr];
    }, this);
  }

  Project.all = [];

  Project.prototype.toHtml = function () {
    var $source = $('#project-template').html();
    var template = Handlebars.compile($source);
    return template(this);
  };

  Project.loadAll = function(dataPassedIn) {
    //DONE: change .forEach() to FP method
    dataPassedIn.filter(function(proj) {
      Project.all.push(new Project(proj));
    });
  };

  /* below function not needed? */
  /*Project.forEach(function(a) {
    $('#project-placeholder').append(a.toHtml());
  });*/

  Project.fetchAll = function(callback) {
    $.ajax({
      type: 'HEAD',
      url: 'data/projects.json',
      success: function (data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if (eTag === localStorage.eTag) {
          Project.loadAll(JSON.parse(localStorage.projects));
          callback();
        } else {
          $.getJSON('data/projects.json', function(data) {
            Project.loadAll(data);
            localStorage.projects = JSON.stringify(data);
            localStorage.eTag = eTag;
            callback();
          });
        }
      }
    }
    );
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
