// ..........................................................
// The Handlers for the REST endpoints
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
var log = require("ringo/logging").getLogger(module.id);

/**
 * -- Task [CRUD] --
 * This represents a collection of endpoints to perform CRUD on a single Task
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @param {ID}            The ID of the Task
 * @returns {Object}      The Hash containing the Task's properties
 */
exports.task = {

 GET: function(req, id) {
   return Response.json(models.Task.get(id));
 },

 POST: function(req, id) {
   var task, json = req.input.read().decodeToString(req.charset || "utf-8");
   if (id) {
     task = models.TaskHelper.update(id, req.params, JSON.parse(json));
     return Response.json(task);
   }
   else {
     task = models.TaskHelper.create(req.params, JSON.parse(json));
     return {
       status: 201,
       headers: {'Content-Type': 'application/json'},
       body: [JSON.stringify(task)]
     };
   }
 },

 PUT: function(req, id) {
   // TODO Implement this method
 },

 DELETE: function(req, id) {
   models.TaskHelper.destroy(id, req.params);
 }

};

/**
 * -- User [CRUD] --
 * This represents a collection of endpoints to perform CRUD on a single User
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @param {ID}            The ID of the User
 * @returns {Object}      The Hash containing the User's properties
 */
exports.user = {

 GET: function(req, id) {
   if (req.params.loginName && req.params.password !== '') {
     var loginName = req.params.loginName.replace(/\'/g,"").trim();
     var user = models.User.query().equals('loginName', loginName).select()
     return Response.json(user);
   }
   else if (req.params.loginName && req.params.password === '') {
     var user = models.User.query().equals('loginName', 'JH2').select()
     return Response.json(user);
   }
   else if (id) {
     return Response.json(models.User.get(id));
   }
   else {
     return {
       status: 403,
       body: ['Not Authorized']
     };
   }
 },

 POST: function(req, id) {
   var user, json = req.input.read().decodeToString(req.charset || "utf-8");
   if (id) {
     user = models.UserHelper.update(id, req.params, JSON.parse(json));
     return Response.json(user);
   }
   else {
     user = models.UserHelper.create(req.params, JSON.parse(json));
     return {
       status: 201,
       headers: {'Content-Type': 'application/json'},
       body: [JSON.stringify(user)]
     };
   }
 },

 PUT: function(req, id) {
   // TODO Implement this method
 },

 DELETE: function(req, id) {
   models.UserHelper.destroy(id, req.params);
 }

};

/**
 * -- Project [CRUD] --
 * This represents a collection of endpoints to perform CRUD on a single Project
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @param {ID}            The ID of the Project
 * @returns {Object}      The Hash containing the Project's properties
 */
exports.project = {

 GET: function(req, id) {
   return Response.json(models.Project.get(id));
 },

 POST: function(req, id) {
   var project, json = req.input.read().decodeToString(req.charset || "utf-8");
   if (id) {
     project = models.ProjectHelper.update(id, req.params, JSON.parse(json));
     return Response.json(project);
   }
   else {
     project = models.ProjectHelper.create(req.params, JSON.parse(json));
     return {
       status: 201,
       headers: {'Content-Type': 'application/json'},
       body: [JSON.stringify(project)]
     };
   }
 },

 PUT: function(req, id) {
   // TODO Implement this method
 },

 DELETE: function(req, id) {
   models.ProjectHelper.destroy(id, req.params);
 }

};

/**
 * -- Watch [CRUD] --
 * This represents a collection of endpoints to perform CRUD on a single Watch
 *
 * @param {Request}       The Request object from the JSGI webapp
 * @param {ID}            The ID of the Watch
 * @returns {Object}      The Hash containing the Watch's properties
 */
exports.watch = {

 GET: function(req, id) {
   return Response.json(models.Watch.get(id));
 },

 POST: function(req, id) {
   var watch, json = req.input.read().decodeToString(req.charset || "utf-8");
   if (id) {
     watch = models.WatchHelper.update(id, req.params, JSON.parse(json));
     return Response.json(watch);
   }
   else {
     watch = models.WatchHelper.create(req.params, JSON.parse(json));
     return {
       status: 201,
       headers: {'Content-Type': 'application/json'},
       body: [JSON.stringify(watch)]
     };     
   }
 },

 PUT: function(req, id) {
   // TODO Implement this method
 },

 DELETE: function(req, id) {
   models.WatchHelper.destroy(id, req.params);
 }

};
