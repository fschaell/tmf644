'use strict';

var utils = require('../utils/writer.js');
var PartyPrivacyProfile = require('../service/PartyPrivacyProfileService');

module.exports.createPartyPrivacyProfile = function createPartyPrivacyProfile (req, res, next) {
  var partyPrivacyProfile = req.swagger.params['partyPrivacyProfile'].value;
  PartyPrivacyProfile.createPartyPrivacyProfile(partyPrivacyProfile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePartyPrivacyProfile = function deletePartyPrivacyProfile (req, res, next) {
  var id = req.swagger.params['id'].value;
  PartyPrivacyProfile.deletePartyPrivacyProfile(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listPartyPrivacyProfile = function listPartyPrivacyProfile (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  PartyPrivacyProfile.listPartyPrivacyProfile(fields,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchPartyPrivacyProfile = function patchPartyPrivacyProfile (req, res, next) {
  var id = req.swagger.params['id'].value;
  var partyPrivacyProfile = req.swagger.params['partyPrivacyProfile'].value;
  PartyPrivacyProfile.patchPartyPrivacyProfile(id,partyPrivacyProfile)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePartyPrivacyProfile = function retrievePartyPrivacyProfile (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  PartyPrivacyProfile.retrievePartyPrivacyProfile(id,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
