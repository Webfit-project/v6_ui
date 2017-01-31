goog.provide('app.WhatsnewController');
goog.provide('app.WhatsnewDirective');

goog.require('app');


/**
 * Directive managing the news.
 * @return {angular.Directive} The directive specs.
 * @ngInject
 */
app.WhatsnewDirective = function() {
  return {
    restrict: 'AE',
    scope: {},
    controller: 'appWhatsnewController',
    controllerAs: 'wCtrl',
    bindToController: true
  };
};

app.module.directive('appWhatsnew', app.WhatsnewDirective);

/**
 * @param {!angular.Scope} $scope Scope.
 * @param {angular.$http} $http
 * @param {angular.$compile} $compile Angular compile service.
 * @param {app.Alerts} appAlerts
 * @constructor
 * @struct
 * @ngInject
 */
app.WhatsnewController = function($scope, $http, $compile, appAlerts) {

  /**
   * @type {app.Alerts}
   * @private
   */
  this.alerts_ = appAlerts;

  this.tableParams = new NgTableParams({}, {
    getData: function(params) {
      // ajax request to api
      var url = '/whatsnewdata'
      return Api.get(params.url()).$promise.then(function(data) {
        params.total(data.inlineCount); // recal. page nav controls
        return data.results;
      });
    }
  });


  /**
   * An authenticated request is made to the ui server to get the latest updates
   * as rendered HTML (profiles can be marked as non-public).
   */
  var url = '/whatsnewdata';
  var promise = $http.get(url);
  promise.catch(function(response) {
    this.alerts_.addErrorWithMsg(
      this.alerts_.gettext('An error occured while loading latest changes'),
      response);
  }.bind(this));
  promise.then(function(response) {
    var element = angular.element('#whatsnew');
    element.html(response['data']);
    $compile(element.contents())($scope.$parent);
  }.bind(this));
};

app.WhatsnewController.prototype.redraw = function(event) {



};

app.module.controller('appWhatsnewController', app.WhatsnewController);
