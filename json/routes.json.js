'use strict';

/**
 * Expose main routes of the generated API
 */

module.exports = function dataForRoutesJSON(scope) {
  const newRoutes = {
    'routes': {}
  };

  newRoutes['routes']['GET /' + scope.id] = {
    'controller': scope.globalID,
    'action': 'find',
    'policies': [
      'isAuthorized'
    ]
  };

  newRoutes['routes']['GET /' + scope.id + '/:id'] = {
    'controller': scope.globalID,
    'action': 'findOne',
    'policies': [
      'isAuthorized'
    ]
  };

  newRoutes['routes']['POST /' + scope.id] = {
    'controller': scope.globalID,
    'action': 'create',
    'policies': [
      'isAuthorized',
      'addDataCreate'
    ]
  };

  newRoutes['routes']['PUT /' + scope.id + '/:id'] = {
    'controller': scope.globalID,
    'action': 'update',
    'policies': [
      'isAuthorized',
      'addDataUpdate'
    ]
  };

  newRoutes['routes']['DELETE /' + scope.id + '/:id'] = {
    'controller': scope.globalID,
    'action': 'destroy',
    'policies': [
      'isAuthorized'
    ]
  };

  newRoutes['routes']['POST /' + scope.id + '/:parentId/:relation'] = {
    'controller': scope.globalID,
    'action': 'add',
    'policies': [
      'isAuthorized',
      'addDataCreate'
    ]
  };

  newRoutes['routes']['DELETE /' + scope.id + '/:parentId/:relation/:id'] = {
    'controller': scope.globalID,
    'action': 'remove',
    'policies': [
      'isAuthorized',
      'addDataUpdate'
    ]
  };

  return newRoutes;
};
