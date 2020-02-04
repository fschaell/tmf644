'use strict';

var utils = require('../utils/writer.js');
var PartyPrivacyProfileSpecification = require('../service/PartyPrivacyProfileSpecificationService');

module.exports.createPartyPrivacyProfileSpecification = function createPartyPrivacyProfileSpecification (req, res, next) {
  var partyPrivacyProfileSpecification = req.swagger.params['partyPrivacyProfileSpecification'].value;
  PartyPrivacyProfileSpecification.createPartyPrivacyProfileSpecification(partyPrivacyProfileSpecification)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePartyPrivacyProfileSpecification = function deletePartyPrivacyProfileSpecification (req, res, next) {
  var id = req.swagger.params['id'].value;
  PartyPrivacyProfileSpecification.deletePartyPrivacyProfileSpecification(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listPartyPrivacyProfileSpecification = function listPartyPrivacyProfileSpecification (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  PartyPrivacyProfileSpecification.listPartyPrivacyProfileSpecification(fields,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchPartyPrivacyProfileSpecification = function patchPartyPrivacyProfileSpecification (req, res, next) {
  var id = req.swagger.params['id'].value;
  var partyPrivacyProfileSpecification = req.swagger.params['partyPrivacyProfileSpecification'].value;
  PartyPrivacyProfileSpecification.patchPartyPrivacyProfileSpecification(id,partyPrivacyProfileSpecification)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePartyPrivacyProfileSpecification = function retrievePartyPrivacyProfileSpecification (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  PartyPrivacyProfileSpecification.retrievePartyPrivacyProfileSpecification(id,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
