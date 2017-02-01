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
    scope: true,
    controller: 'appWhatsnewController as wCtrl',
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
 * @suppress {checkTypes}
 */
app.WhatsnewController = function($scope, $http, $compile, $resource, appAlerts, NgTableParams) {

  // this.simplelist = [{"document": {"summary": null, "description": null, "document_id": 826224, "title": "asfasfasfas"}, "version_id": 1302526, "lang": "en", "comment": "creation", "written_at": "2017-01-24T15:00:57.852404+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826223, "title": "test arc with images"}, "version_id": 1302525, "lang": "en", "comment": "creation", "written_at": "2017-01-24T14:59:34.174419+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": "## Rocher\r\nDalles raides et compactes, voies propres et vari\u00e9es.\r\nLes voies faciles dans le 4 ne sont pas pour autant si v\u00e9g\u00e9tatives.\r\n\r\n## Grimpe\r\nLes voies ne sont pas tr\u00e8s contis, en g\u00e9n\u00e9ral la cotation indique la difficult\u00e9 max qui se concentre en g\u00e9n\u00e9ral sur quelques pas.\r\n\r\n## \u00c9quipement\r\nAu top. Broches ou spits. Relais cha\u00een\u00e9s avec maillon rapide.\r\nRemarque vs topo de 2000 : Les voies 21 \u00e0 23 ont \u00e9t\u00e9 spitt\u00e9es.\n## Descente des voies\nRappels et moulinettes.\n## Remarques\nA \u00e9viter en plein \u00e9t\u00e9 (chaleur)\n## Bibliographie et webographie\nTopo escalade en Minervois, \u00e9dition 2000\r\nTopo remis \u00e0 jour en 2014.", "document_id": 688819, "title": "Notre-Dame du Cros - Secteur Gendarme"}, "version_id": 1302524, "lang": "fr", "comment": "", "written_at": "2017-01-24T13:42:46.551267+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 824872, "title": "1\u00e8re salle d'escalade de Suisse"}, "version_id": 1302523, "lang": "fr", "comment": "", "written_at": "2017-01-24T11:11:53.396392+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 824872, "title": "1\u00e8re salle d'escalade de Suisse"}, "version_id": 1302522, "lang": "fr", "comment": "", "written_at": "2017-01-24T11:07:02.597161+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 824872, "title": "1\u00e8re salle d'escalade de Suisse"}, "version_id": 1302521, "lang": "fr", "comment": "", "written_at": "2017-01-24T11:04:26.925079+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 824872, "title": "1\u00e8re salle d'escalade de Suisse"}, "version_id": 1302520, "lang": "fr", "comment": "", "written_at": "2017-01-24T11:03:10.993628+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826219, "title": "Mont Turia : Face N"}, "version_id": 1302519, "lang": "en", "comment": "creation", "written_at": "2017-01-23T09:36:40.420109+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826214, "title": "Mont Blanc : Tournette spur"}, "version_id": 1302517, "lang": "en", "comment": "creation", "written_at": "2017-01-20T15:31:48.492333+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 824872, "title": "1\u00e8re salle d'escalade de Suisse"}, "version_id": 1302516, "lang": "fr", "comment": "", "written_at": "2017-01-20T14:53:17.648209+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 824872, "title": "1\u00e8re salle d'escalade de Suisse"}, "version_id": 1302515, "lang": "fr", "comment": "", "written_at": "2017-01-20T14:52:25.574396+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 824872, "title": "1\u00e8re salle d'escalade de Suisse"}, "version_id": 1302514, "lang": "fr", "comment": "", "written_at": "2017-01-20T14:23:54.970820+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 824839, "title": "Clapeyto"}, "version_id": 1302513, "lang": "fr", "comment": "", "written_at": "2017-01-20T14:18:02.188590+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826212, "title": "Mont Charvatton : Tommy"}, "version_id": 1302511, "lang": "en", "comment": "creation", "written_at": "2017-01-20T10:25:00.623358+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": "sdgads", "description": null, "document_id": 826211, "title": "muj clanek"}, "version_id": 1302510, "lang": "en", "comment": "creation", "written_at": "2017-01-19T15:31:56.096185+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826210, "title": "Mont Charvatton : Tommy .... MOJE CESTA"}, "version_id": 1302509, "lang": "en", "comment": "creation", "written_at": "2017-01-19T15:08:21.232755+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826209, "title": "report without waypoint 14 45"}, "version_id": 1302508, "lang": "en", "comment": "creation", "written_at": "2017-01-19T14:45:50.402797+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826208, "title": "CimeGollien 11 07"}, "version_id": 1302505, "lang": "en", "comment": "creation", "written_at": "2017-01-19T11:08:02.655624+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826207, "title": "test invalid GPX 10 40"}, "version_id": 1302504, "lang": "en", "comment": "creation", "written_at": "2017-01-19T10:41:08.293882+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826206, "title": "test invalid GPX geom should work"}, "version_id": 1302503, "lang": "en", "comment": "creation", "written_at": "2017-01-19T09:48:20.537392+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": "dhdshads", "description": "dhdshads", "document_id": 826205, "title": "reoirt 9 08 vice asociaci"}, "version_id": 1302502, "lang": "en", "comment": "creation", "written_at": "2017-01-19T09:10:02.534270+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": null, "document_id": 826204, "title": "test 09 05"}, "version_id": 1302501, "lang": "en", "comment": "creation", "written_at": "2017-01-19T09:06:16.920121+01:00", "user": {"user_id": 811849, "username": "dkocich", "name": "dkocich", "lang": "en", "forum_username": "dkocich"}}, {"document": {"summary": null, "description": "[[articles/822764/fr|Info]]", "document_id": 826203, "title": "Acc\u00e8s p\u00e9destre"}, "version_id": 1302500, "lang": "fr", "comment": "Auto-create climbing site route", "written_at": "2016-11-30T12:05:01.144392+01:00", "user": {"user_id": 2, "username": "Camptocamp-Association", "name": "Camptocamp-Association", "lang": "fr", "forum_username": "Camptocamp-Association"}}, {"document": {"summary": null, "description": "[[articles/822764/fr|Info]]", "document_id": 826202, "title": "Acc\u00e8s p\u00e9destre"}, "version_id": 1302499, "lang": "fr", "comment": "Auto-create climbing site route", "written_at": "2016-11-30T12:05:01.144392+01:00", "user": {"user_id": 2, "username": "Camptocamp-Association", "name": "Camptocamp-Association", "lang": "fr", "forum_username": "Camptocamp-Association"}}, {"document": {"summary": null, "description": "[[articles/822764/fr|Info]]", "document_id": 826201, "title": "Acc\u00e8s p\u00e9destre"}, "version_id": 1302498, "lang": "fr", "comment": "Auto-create climbing site route", "written_at": "2016-11-30T12:05:01.144392+01:00", "user": {"user_id": 2, "username": "Camptocamp-Association", "name": "Camptocamp-Association", "lang": "fr", "forum_username": "Camptocamp-Association"}}];

  this.simplelist = [{
      "id" : 1,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 2,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 3,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 4,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 5,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 6,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 7,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 8,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 1,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 2,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 3,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 4,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 5,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 6,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 7,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 8,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 1,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 2,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 3,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 4,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 5,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 6,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 7,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 8,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 1,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 2,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 3,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 4,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    },
    {
      "id" : 5,
      "primary" : {"name":"John", "age":"20"},
      "secondary" : {"name":"LINDA", "age":"23"}
    },
    {
      "id" : 6,
      "primary" : {"name":"SMITH", "age":"20"},
      "secondary" : {"name":"KATE", "age":"25"}
    },
    {
      "id" : 7,
      "primary" : {"name":"Sandeep", "age":"20"},
      "secondary" : {"name":"Sumanta", "age":"21"}
    },
    {
      "id" : 8,
      "primary" : {"name":"Bapi", "age":"20"},
      "secondary" : {"name":"Tapi", "age":"25"}
    }
  ];


  function demoController(NgTableParams, simpleList) {
    var self = this;
    self.tableParams = new NgTableParams({}, {
      dataset: simpleList
    });
  }
  

  /**
   *     {field: 'user_id', title: 'user_id', show: true},
   * @type {Array}
   * @export
   */
  this.columns = [
    {field: 'version_id', title: 'version_id', show: true},
    {field: 'document_id', title: 'document_id', show: true},
    {field: 'lang', title: 'lang', show: true},
    {field: 'title', title: 'title', show: true},
    {field: 'summary', title: 'summary', show: true},
    {field: 'username', title: 'username', show: true},
    {field: 'comment', title: 'comment', show: true},
    {field: 'written_at', title: 'written_at', show: true}];

  $scope.columns = this.columns;

  /**
   * @type {app.Alerts}
   * @private
   */
  this.alerts_ = appAlerts;

  /**
   * @type {Array}
   * @export
   */
    // lang: 'en',
    // user_id: 811849,
    // username: 'dkocich',
    // document_id: 826224,
    // title: 'asfasfasfas',
    // comment: 'creation',
    // version_id: 1302526,
    // written_at: '2017-01-24T15:00:57.852404+01:00'

  this.dataset = [{
    comment: "creation",
    written_at: "2017-01-24T15:00:57.852404+01:00",
    version_id: 1302526,
    lang: "en",
    document: {
      description: null,
      document_id: 826224,
      summary: null,
      title: "asfasfasfas"
      },
    user: {
      user_id: 811849,
      lang: "en",
      name: "dkocich",
      forum_username: "dkocich",
      username: "dkocich"
      }
    }];

  $scope.dataset = this.dataset;

  //
  // var Api = $resource("/whatsnewdata");
  // this.tableParams = new NgTableParams({}, {});

  this.defaultConfigTableParams = new NgTableParams({}, {data: this.dataset, dataset: this.dataset});

  this.customConfigParams = createUsingFullOptions();

  function createUsingFullOptions() {
    var initialParams = {
      count: 5 // initial page size
    };

    var initialSettings = {
     // initial filter
      filter: {},
      // page size buttons (right set of buttons in demo)
      counts: [],
      // determines the pager buttons (left set of buttons in demo)
      paginationMaxBlocks: 13,
      paginationMinBlocks: 2,
      page: 1, // show first page
      count: 25, // count per page
      dataset: this.dataset,
      data: this.dataset
    };

    return new NgTableParams(initialParams, initialSettings);

  }
    // this.tableParams = new NgTableParams({
    //
    // });

  /**
   * An authenticated request is made to the ui server to get the latest updates
   * as rendered HTML (profiles can be marked as non-public).
   */
  var url = '/whatsnewdata';
  var promise = $http.get(url);
  promise.catch(function(response) {
    this.alerts_.addErrorWithMsg(
      this.alerts_.gettext('An error occured while loading latest changes'), response);
  }.bind(this));
  promise.then(function(response) {
    console.log('dataset start');
    console.log(this.dataset);
    console.log('dataset end');
    console.log('resp start');
    console.log(response.data.documents);
    console.log('resp end');
    // var element = angular.element('#whatsnew');
    this.defaultConfigTableParams.dataset = response.data.documents;
    this.dataset = response.data.documents;
    $scope.dataset = response.data.documents;

    this.defaultConfigTableParams = new NgTableParams({}, {data: this.dataset, dataset: this.dataset});

    console.log('hotovo')
  }.bind(this));

  // app.WhatsnewController.prototype.redraw = function(response) {
  //
  //
  //   console.log(this.dataset);
  //     // page: 1, // show first page
  //     // count: 25, // count per page
  //     // getData: function (response) {
  //     //   console.log(response);
  //     //   this.dataset = response.data.documents;
  //     //   // params.total(50);
  //     //   return response.data.documents;
  //   // }
  // };

};

app.module.controller('appWhatsnewController', app.WhatsnewController);
