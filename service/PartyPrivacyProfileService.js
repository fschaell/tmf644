'use strict';


/**
 * Creates a PartyPrivacyProfile
 * This operation creates a PartyPrivacyProfile entity.
 *
 * partyPrivacyProfile PartyPrivacyProfile_Create The PartyPrivacyProfile to be created
 * returns PartyPrivacyProfile
 **/
exports.createPartyPrivacyProfile = function(partyPrivacyProfile) {
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
  "agreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "applicableForParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "agreedByParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "description" : "description",
  "partyPrivacyProfileSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@baseType" : "@baseType",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
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
 * Deletes a PartyPrivacyProfile
 * This operation deletes a PartyPrivacyProfile entity.
 *
 * id String Identifier of the PartyPrivacyProfile
 * no response value expected for this operation
 **/
exports.deletePartyPrivacyProfile = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find PartyPrivacyProfile objects
 * This operation list or find PartyPrivacyProfile entities
 *
 * fields String Comma-separated properties to be provided in response (optional)
 * offset Integer Requested index for start of resources to be provided in response (optional)
 * limit Integer Requested number of resources to be provided in response (optional)
 * returns List
 **/
exports.listPartyPrivacyProfile = function(fields,offset,limit) {
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
  "agreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "applicableForParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "agreedByParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "description" : "description",
  "partyPrivacyProfileSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@baseType" : "@baseType",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
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
  "agreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "applicableForParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "agreedByParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "description" : "description",
  "partyPrivacyProfileSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@baseType" : "@baseType",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
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
 * Updates partially a PartyPrivacyProfile
 * This operation updates partially a PartyPrivacyProfile entity.
 *
 * id String Identifier of the PartyPrivacyProfile
 * partyPrivacyProfile PartyPrivacyProfile_Update The PartyPrivacyProfile to be updated
 * returns PartyPrivacyProfile
 **/
exports.patchPartyPrivacyProfile = function(id,partyPrivacyProfile) {
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
  "agreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "applicableForParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "agreedByParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "description" : "description",
  "partyPrivacyProfileSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@baseType" : "@baseType",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
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
 * Retrieves a PartyPrivacyProfile by ID
 * This operation retrieves a PartyPrivacyProfile entity. Attribute selection is enabled for all first level attributes.
 *
 * id String Identifier of the PartyPrivacyProfile
 * fields String Comma-separated properties to provide in response (optional)
 * returns PartyPrivacyProfile
 **/
exports.retrievePartyPrivacyProfile = function(id,fields) {
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
  "agreement" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "applicableForParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "agreedByParty" : {
    "@referredType" : "@referredType",
    "role" : "role",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "description" : "description",
  "partyPrivacyProfileSpecification" : {
    "@referredType" : "@referredType",
    "@baseType" : "@baseType",
    "@type" : "@type",
    "name" : "name",
    "id" : "id",
    "href" : "href",
    "@schemaLocation" : "http://example.com/aeiou"
  },
  "creationDate" : "2000-01-23T04:56:07.000+00:00",
  "@baseType" : "@baseType",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

