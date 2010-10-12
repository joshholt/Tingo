// ..........................................................
// The Store and Models are defined here 
// This can be broken into smaller modules if you prefer
// ..........................................................

/**
 * @author Josh Holt
 * @version 0.1.0
 * @since   0.1.0
 */
 
/**
 * Module Dependencies
 */
var dates   = require('ringo/utils/dates');
var helpers = require('./helpers');
var store   = exports.store   = require('ringo/storage/googlestore');

/**
 * The definition of the Task Model
 * We are taking advantage of the fact that you can have a schema-less DB
 * Below is the basic Schema (it can evolve)
 *    name             
 *    description      
 *    projectId        
 *    priority         
 *    effort           
 *    submitterId      
 *    assigneeId       
 *    type             
 *    developmentStatus
 *    validation       
 *    createdAt        
 *    updatedAt        
 *    status
 */
var Task = exports.Task = store.defineEntity('Task');

Task.prototype.toString = function() {
  return helpers.format("[Task: %@ (%@, %@, %@)]", 
    this.name, 
    this.type.replace("_",""), 
    this.status.replace("_",""), 
    dates.format(this.updatedAt, 'MM.dd.yyyy'));
};

exports.TaskHelper = {
  
  create: function(options, properties) {
    // TODO -- use the options to determine permissions, etc...
    var task = new Task({
      name:               properties.name               || "_NewTask",
      description:        properties.description        || null,
      projectId:          properties.projectId          || null,
      priority:           properties.priority           || "_Medium",
      effort:             properties.effort             || null,
      submitterId:        properties.submitterId        || null,
      assigneeId:         properties.assigneeId         || null,
      type:               properties.type               || "_Other",
      developmentStatus:  properties.developmentStatus  || "_Planned",
      validation:         properties.validation         || "_Untested",
      createdAt:          properties.createdAt          || new Date(),
      updatedAt:          properties.updatedAt          || new Date(),
      status:             properties.status             || null
    });
    task.save();
    return task;
  },
  
  update: function(id, options, properties) {
    // TODO -- use the options to determine permissions, etc...
  },
  
  destroy: function(id, options) {
    // TODO -- use the options to determine permissions, etc...
  }
   
};

/**
 * The definition of the User Model
 * We are taking advantage of the fact that you can have a schema-less DB
 * Below is the basic Schema (it can evolve)  
 *    name        
 *    loginName   
 *    role        
 *    preferences 
 *    email       
 *    password    
 *    authToken   
 *    createdAt   
 *    updatedAt   
 *    status      
 */
var User  = exports.User  = store.defineEntity('User');

User.prototype.toString = function() {
  return helpers.format("[User: %@ (%@, %@, %@)]", 
    this.name, 
    this.loginName, 
    this.role.replace("_",""), 
    dates.format(this.updatedAt, 'MM.dd.yyyy'));
};

exports.UserHelper = {
  
  create: function(options, properties) {
    // TODO -- use the options to determine permissions, etc...
    var user = new User({
      name:         properties.name         || "_FirstLast",
      loginName:    properties.loginName    || "_Initials",
      role:         properties.role         || "_Developer",
      preferences:  properties.preferences  || JSON.stringify({}),
      email:        properties.email        || null,
      password:     properties.password     || null,
      authToken:    properties.authToken    || null,
      createdAt:    properties.createdAt    || new Date(),
      updatedAt:    properties.updatedAt    || new Date(),
      status:       properties.status       || null
    });
    user.save();
    return user;
  },

  update: function(id, options, properties) {
    // TODO -- use the options to determine permissions, etc...
  },

  destroy: function(id, options) {
    // TODO -- use the options to determine permissions, etc...
  }
  
};

/**
 * The definition of the Project Model
 * We are taking advantage of the fact that you can have a schema-less DB
 * Below is the basic Schema (it can evolve)  
 *    name             
 *    description       
 *    timeLeft          
 *    developmentStatus 
 *    activatedAt       
 *    createdAt         
 *    updatedAt         
 *    status            
 */
var Project = exports.Project = store.defineEntity('Project');

Project.prototype.toString = function() {
  return helpers.format("[Project: %@ (%@, %@, %@)]", 
    this.name, 
    this.timeLeft, 
    this.developmentStatus.replace("_",""), 
    dates.format(this.updatedAt, 'MM.dd.yyyy'));
};

exports.ProjectHelper = {
  
  create: function(options, properties) {
    // TODO -- use the options to determine permissions, etc...
    var project = new Project({
      name:               properties.name               || "_NewProject",
      description:        properties.description        || null,
      timeLeft:           properties.timeLeft           || null,
      developmentStatus:  properties.developmentStatus  || "_Planned",
      activatedAt:        properties.activatedAt        || null,
      createdAt:          properties.createdAt          || new Date(),
      updatedAt:          properties.updatedAt          || new Date(),
      status:             properties.status             || null
    });
    project.save();
    return project;
  },

  update: function(id, options, properties) {
    // TODO -- use the options to determine permissions, etc...
  },

  destroy: function(id, options) {
    // TODO -- use the options to determine permissions, etc...
  }
  
};

/**
 * The definition of the Watch Model
 * We are taking advantage of the fact that you can have a schema-less DB
 * Below is the basic Schema (it can evolve)  
 *    taskId
 *    userId
 *    createdAt
 *    updatedAt
 *    status 
 */
var Watch = exports.Watch = store.defineEntity('Watch');

Watch.prototype.toString = function() {
  return helpers.format("[Watch: (%@, %@, %@)]", 
    this.taskId, 
    this.userId, 
    dates.format(this.updatedAt, 'MM.dd.yyyy'));
};

exports.WatchHelper = {
  
  create: function(options, properties) {
    // TODO -- use the options to determine permissions, etc...
    var watch = new Watch({
      taskId:     properties.taskId     || null,
      userId:     properties.userId     || null,
      createdAt:  properties.createdAt  || new Date(),
      updatedAt:  properties.updatedAt  || new Date(),
      status:     properties.status     || null
    });
    watch.save();
    return watch;
  },

  update: function(id, options, properties) {
    // TODO -- use the options to determine permissions, etc...
  },

  destroy: function(id, options) {
    // TODO -- use the options to determine permissions, etc...
  }
    
};
