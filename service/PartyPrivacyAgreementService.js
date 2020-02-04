'use strict';


/**
 * Creates a PartyPrivacyAgreement
 * This operation creates a PartyPrivacyAgreement entity.
 *
 * partyPrivacyAgreement PartyPrivacyAgreement_Create The PartyPrivacyAgreement to be created
 * returns PartyPrivacyAgreement
 **/
exports.createPartyPrivacyAgreement = function(partyPrivacyAgreement) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "partyPrivacyProfileCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "agreementType" : "agreementType",
  "agreementPeriod" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "associatedAgreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "documentNumber" : 0,
  "agreementSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "@type" : "@type",
  "description" : "description",
  "version" : "version",
  "initialDate" : "2000-01-23T04:56:07.000+00:00",
  "characteristic" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "engagedPartyRole" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "agreementAuthorization" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "partyPrivacyProfile" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "name" : "name",
  "statementOfIntent" : "statementOfIntent",
  "completionDate" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "agreementItem" : [ {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a PartyPrivacyAgreement
 * This operation deletes a PartyPrivacyAgreement entity.
 *
 * id String Identifier of the PartyPrivacyAgreement
 * no response value expected for this operation
 **/
exports.deletePartyPrivacyAgreement = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find PartyPrivacyAgreement objects
 * This operation list or find PartyPrivacyAgreement entities
 *
 * fields String Comma-separated properties to be provided in response (optional)
 * offset Integer Requested index for start of resources to be provided in response (optional)
 * limit Integer Requested number of resources to be provided in response (optional)
 * returns List
 **/
exports.listPartyPrivacyAgreement = function(fields,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "partyPrivacyProfileCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "agreementType" : "agreementType",
  "agreementPeriod" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "associatedAgreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "documentNumber" : 0,
  "agreementSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "@type" : "@type",
  "description" : "description",
  "version" : "version",
  "initialDate" : "2000-01-23T04:56:07.000+00:00",
  "characteristic" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "engagedPartyRole" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "agreementAuthorization" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "partyPrivacyProfile" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "name" : "name",
  "statementOfIntent" : "statementOfIntent",
  "completionDate" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "agreementItem" : [ {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "status" : "status"
}, {
  "partyPrivacyProfileCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "agreementType" : "agreementType",
  "agreementPeriod" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "associatedAgreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "documentNumber" : 0,
  "agreementSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "@type" : "@type",
  "description" : "description",
  "version" : "version",
  "initialDate" : "2000-01-23T04:56:07.000+00:00",
  "characteristic" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "engagedPartyRole" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "agreementAuthorization" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "partyPrivacyProfile" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "name" : "name",
  "statementOfIntent" : "statementOfIntent",
  "completionDate" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "agreementItem" : [ {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "status" : "status"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates partially a PartyPrivacyAgreement
 * This operation updates partially a PartyPrivacyAgreement entity.
 *
 * id String Identifier of the PartyPrivacyAgreement
 * partyPrivacyAgreement PartyPrivacyAgreement_Update The PartyPrivacyAgreement to be updated
 * returns PartyPrivacyAgreement
 **/
exports.patchPartyPrivacyAgreement = function(id,partyPrivacyAgreement) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "partyPrivacyProfileCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "agreementType" : "agreementType",
  "agreementPeriod" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "associatedAgreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "documentNumber" : 0,
  "agreementSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "@type" : "@type",
  "description" : "description",
  "version" : "version",
  "initialDate" : "2000-01-23T04:56:07.000+00:00",
  "characteristic" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "engagedPartyRole" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "agreementAuthorization" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "partyPrivacyProfile" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "name" : "name",
  "statementOfIntent" : "statementOfIntent",
  "completionDate" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "agreementItem" : [ {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a PartyPrivacyAgreement by ID
 * This operation retrieves a PartyPrivacyAgreement entity. Attribute selection is enabled for all first level attributes.
 *
 * id String Identifier of the PartyPrivacyAgreement
 * fields String Comma-separated properties to provide in response (optional)
 * returns PartyPrivacyAgreement
 **/
exports.retrievePartyPrivacyAgreement = function(id,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "partyPrivacyProfileCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "id" : "id",
    "relatedParty" : [ {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "role" : "role",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "agreementType" : "agreementType",
  "agreementPeriod" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "associatedAgreement" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "documentNumber" : 0,
  "agreementSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "@type" : "@type",
  "description" : "description",
  "version" : "version",
  "initialDate" : "2000-01-23T04:56:07.000+00:00",
  "characteristic" : [ {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  }, {
    "@baseType" : "@baseType",
    "@type" : "@type",
    "valueType" : "valueType",
    "name" : "name",
    "@schemaLocation" : "http://example.com/aeiou",
    "value" : { }
  } ],
  "engagedPartyRole" : [ {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "agreementAuthorization" : [ {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "date" : "2000-01-23T04:56:07.000+00:00",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "signatureRepresentation" : "signatureRepresentation",
    "state" : "state",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "partyPrivacyProfile" : [ {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "@baseType" : "@baseType",
  "name" : "name",
  "statementOfIntent" : "statementOfIntent",
  "completionDate" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "agreementItem" : [ {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "termOrCondition" : [ {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "description" : "description",
      "id" : "id",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "product" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@baseType" : "@baseType",
    "productOffering" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

