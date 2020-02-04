'use strict';

var utils = require('../utils/writer.js');
var PartyPrivacyAgreement = require('../service/PartyPrivacyAgreementService');

module.exports.createPartyPrivacyAgreement = function createPartyPrivacyAgreement (req, res, next) {
  var partyPrivacyAgreement = req.swagger.params['partyPrivacyAgreement'].value;
  PartyPrivacyAgreement.createPartyPrivacyAgreement(partyPrivacyAgreement)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePartyPrivacyAgreement = function deletePartyPrivacyAgreement (req, res, next) {
  var id = req.swagger.params['id'].value;
  PartyPrivacyAgreement.deletePartyPrivacyAgreement(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listPartyPrivacyAgreement = function listPartyPrivacyAgreement (req, res, next) {
  var fields = req.swagger.params['fields'].value;
  var offset = req.swagger.params['offset'].value;
  var limit = req.swagger.params['limit'].value;
  PartyPrivacyAgreement.listPartyPrivacyAgreement(fields,offset,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchPartyPrivacyAgreement = function patchPartyPrivacyAgreement (req, res, next) {
  var id = req.swagger.params['id'].value;
  var partyPrivacyAgreement = req.swagger.params['partyPrivacyAgreement'].value;
  PartyPrivacyAgreement.patchPartyPrivacyAgreement(id,partyPrivacyAgreement)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePartyPrivacyAgreement = function retrievePartyPrivacyAgreement (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  PartyPrivacyAgreement.retrievePartyPrivacyAgreement(id,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
