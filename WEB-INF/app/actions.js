// ..........................................................
// The Main Entry Point for all API requests
// ..........................................................

/**
 * @author Josh Holt
 * @version 0.1.0
 * @since   0.1.0
 */
 
/**
 * Module Dependencies
 */
var {Response} = require('ringo/webapp/response');
var models     = require('./model');
var handlers   = require('./handlers');

exports.index = function (req) {
  return Response.skin(module.resolve('skins/index.md.html'), {
      title: "Tingo...",
  });
};

/**
 * -- All Records --
 * This endpoint will return a Hash with an array for
 * each model type
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @returns {Object}      The Hash containing an array for each record type
 */
exports.all = function(req) {
  var result = {
    id: 'allRecords',
    result: {
      users: models.User.all() || [],
      tasks: models.Task.all() || [],
      projects: models.Project.all() || [],
      watches:  models.Watch.all() || []
    },
    errors: null
  };
  return Response.json(result);
};

/**
 * -- All Tasks --
 * This endpoint will return an array of all Tasks in the DB
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @returns {Array}       The Array containing all Tasks in the DB
 */
exports.tasks = function(req) {
  return Response.json(models.Task.all() || []);
};

/**
 * -- All Users --
 * This endpoint will return an array of all Users in the DB
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @returns {Array}       The Array containing all Users in the DB
 */
exports.users = function(req) {
  return Response.json(models.User.all() || []);
};

/**
 * -- All Projects --
 * This endpoint will return an array of all Projects in the DB
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @returns {Array}       The Array containing all Projects in the DB
 */
exports.projects = function(req) {
  return Response.json(models.Project.all() || []);
};

/**
 * -- All Watches --
 * This endpoint will return an array of all Watches in the DB
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @returns {Array}       The Array containing all Watches in the DB
 */
exports.watches = function(req) {
  return Response.json(models.Watch.all() || []);
};

/**
 * -- User [CRUD] --
 * This represents a collection of endpoints to perform CRUD on a single User
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @param {ID}            The ID of the User
 * @returns {Object}      The Hash containing the User's properties
 */
exports.user = handlers.user;

/**
 * -- Project [CRUD] --
 * This represents a collection of endpoints to perform CRUD on a single Project
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @param {ID}            The ID of the Project
 * @returns {Object}      The Hash containing the Project's properties
 */
exports.project = handlers.project;

/**
 * -- Task [CRUD] --
 * This represents a collection of endpoints to perform CRUD on a single Task
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @param {ID}            The ID of the Task
 * @returns {Object}      The Hash containing the Task's properties
 */
exports.task = handlers.task;

/**
 * -- Watch [CRUD] --
 * This represents a collection of endpoints to perform CRUD on a single Watch
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @param {ID}            The ID of the Watch
 * @returns {Object}      The Hash containing the Watch's properties
 */
exports.watch = handlers.watch;
