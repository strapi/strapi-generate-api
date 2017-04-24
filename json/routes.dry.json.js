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
    'policies': []
  };

  newRoutes['routes']['GET /' + scope.id + '/:id'] = {
    'controller': scope.globalID,
    'action': 'findOne',
    'policies': []
  };

  newRoutes['routes']['POST /' + scope.id] = {
    'controller': scope.globalID,
    'action': 'create',
    'policies': []
  };

  newRoutes['routes']['PUT /' + scope.id + '/:id'] = {
    'controller': scope.globalID,
    'action': 'update',
    'policies': []
  };

  newRoutes['routes']['DELETE /' + scope.id + '/:id'] = {
    'controller': scope.globalID,
    'action': 'destroy',
    'policies': []
  };

  return newRoutes;
};
