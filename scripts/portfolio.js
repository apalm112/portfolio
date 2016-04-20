(function(module) {
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
          portfolioView.initIndexPage();
        } else {
          $.getJSON('data/projects.json', function(data) {
            Project.loadAll(data);
            localStorage.projects = JSON.stringify(data);
            localStorage.eTag = eTag;
            callback();
          });
        }
      //  console.log(eTag);  // can remove this line
      }
    }
    );
  };

  Project.countRepos = function(callback) {
    return Project.all.map(function(title) {
      console.log(title);
      return Project.title;
    });
    /*return Project.all.reduce(function(title, cur) {
      console.log(title);
      if (title.indexOf(cur) === -1) {
        title.push(cur);
      }
      return title;
    }, []);*/
  };


  module.Project = Project;
} (window));
