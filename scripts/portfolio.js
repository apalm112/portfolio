var projects = [];

function Project (repos) {
  // constructor function for github repos to be displayed
  this.title = repos.title;
  this.updatedOn = repos.updatedOn;
  this.body = repos.body;

}
