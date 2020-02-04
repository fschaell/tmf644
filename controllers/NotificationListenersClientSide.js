'use strict';

var utils = require('../utils/writer.js');
var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToPartyPrivacyAgreementAttributeValueChangeEvent = function listenToPartyPrivacyAgreementAttributeValueChangeEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyAgreementAttributeValueChangeEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyAgreementCreateEvent = function listenToPartyPrivacyAgreementCreateEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyAgreementCreateEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyAgreementDeleteEvent = function listenToPartyPrivacyAgreementDeleteEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyAgreementDeleteEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyAgreementStatusChangeEvent = function listenToPartyPrivacyAgreementStatusChangeEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyAgreementStatusChangeEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyProfileAttributeValueChangeEvent = function listenToPartyPrivacyProfileAttributeValueChangeEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyProfileAttributeValueChangeEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyProfileCreateEvent = function listenToPartyPrivacyProfileCreateEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyProfileCreateEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyProfileDeleteEvent = function listenToPartyPrivacyProfileDeleteEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyProfileDeleteEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyProfileSpecificationAttributeValueChangeEvent = function listenToPartyPrivacyProfileSpecificationAttributeValueChangeEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyProfileSpecificationAttributeValueChangeEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyProfileSpecificationCreateEvent = function listenToPartyPrivacyProfileSpecificationCreateEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyProfileSpecificationCreateEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyProfileSpecificationDeleteEvent = function listenToPartyPrivacyProfileSpecificationDeleteEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyProfileSpecificationDeleteEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyProfileSpecificationStatusChangeEvent = function listenToPartyPrivacyProfileSpecificationStatusChangeEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyProfileSpecificationStatusChangeEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listenToPartyPrivacyProfileStatusChangeEvent = function listenToPartyPrivacyProfileStatusChangeEvent (req, res, next) {
  var data = req.swagger.params['data'].value;
  NotificationListenersClientSide.listenToPartyPrivacyProfileStatusChangeEvent(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
