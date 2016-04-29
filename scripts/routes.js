page('/', /*portfolioController.loadAll,*/ portfolioController.index);  // home page
page('/about', aboutController.index);  // about page
page('/projects', portfolioViewController.index);  // project page for github repos

page();  // method call
