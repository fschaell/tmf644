'use strict';


/**
 * Creates a PartyPrivacyProfileSpecification
 * This operation creates a PartyPrivacyProfileSpecification entity.
 *
 * partyPrivacyProfileSpecification PartyPrivacyProfileSpecification_Create The PartyPrivacyProfileSpecification to be created
 * returns PartyPrivacyProfileSpecification
 **/
exports.createPartyPrivacyProfileSpecification = function(partyPrivacyProfileSpecification) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "partyPrivacyProfileSpecCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  } ],
  "description" : "description",
  "applicableRole" : [ {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
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
 * Deletes a PartyPrivacyProfileSpecification
 * This operation deletes a PartyPrivacyProfileSpecification entity.
 *
 * id String Identifier of the PartyPrivacyProfileSpecification
 * no response value expected for this operation
 **/
exports.deletePartyPrivacyProfileSpecification = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List or find PartyPrivacyProfileSpecification objects
 * This operation list or find PartyPrivacyProfileSpecification entities
 *
 * fields String Comma-separated properties to be provided in response (optional)
 * offset Integer Requested index for start of resources to be provided in response (optional)
 * limit Integer Requested number of resources to be provided in response (optional)
 * returns List
 **/
exports.listPartyPrivacyProfileSpecification = function(fields,offset,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "partyPrivacyProfileSpecCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  } ],
  "description" : "description",
  "applicableRole" : [ {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "id" : "id",
  "href" : "href",
  "@schemaLocation" : "http://example.com/aeiou",
  "status" : "status"
}, {
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
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "partyPrivacyProfileSpecCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  } ],
  "description" : "description",
  "applicableRole" : [ {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
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
 * Updates partially a PartyPrivacyProfileSpecification
 * This operation updates partially a PartyPrivacyProfileSpecification entity.
 *
 * id String Identifier of the PartyPrivacyProfileSpecification
 * partyPrivacyProfileSpecification PartyPrivacyProfileSpecification_Update The PartyPrivacyProfileSpecification to be updated
 * returns PartyPrivacyProfileSpecification
 **/
exports.patchPartyPrivacyProfileSpecification = function(id,partyPrivacyProfileSpecification) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "partyPrivacyProfileSpecCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  } ],
  "description" : "description",
  "applicableRole" : [ {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
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
 * Retrieves a PartyPrivacyProfileSpecification by ID
 * This operation retrieves a PartyPrivacyProfileSpecification entity. Attribute selection is enabled for all first level attributes.
 *
 * id String Identifier of the PartyPrivacyProfileSpecification
 * fields String Comma-separated properties to provide in response (optional)
 * returns PartyPrivacyProfileSpecification
 **/
exports.retrievePartyPrivacyProfileSpecification = function(id,fields) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
  "validFor" : {
    "startDateTime" : "2000-01-23T04:56:07.000+00:00",
    "endDateTime" : "2000-01-23T04:56:07.000+00:00"
  },
  "@type" : "@type",
  "partyPrivacyProfileSpecCharacteristic" : [ {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  }, {
    "@baseType" : "@baseType",
    "privacyUsagePurpose" : "privacyUsagePurpose",
    "allowedRole" : [ {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "validFor" : {
      "startDateTime" : "2000-01-23T04:56:07.000+00:00",
      "endDateTime" : "2000-01-23T04:56:07.000+00:00"
    },
    "@type" : "@type",
    "name" : "name",
    "criticalityLevel" : "criticalityLevel",
    "description" : "description",
    "id" : "id",
    "partyPrivacyProfileSpecCharacteristicValue" : [ {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    }, {
      "rangeInterval" : "rangeInterval",
      "isDefault" : true,
      "regex" : "regex",
      "valueTo" : 6,
      "unitOfMeasure" : "unitOfMeasure",
      "@baseType" : "@baseType",
      "validFor" : {
        "startDateTime" : "2000-01-23T04:56:07.000+00:00",
        "endDateTime" : "2000-01-23T04:56:07.000+00:00"
      },
      "@type" : "@type",
      "valueType" : "valueType",
      "@schemaLocation" : "http://example.com/aeiou",
      "value" : { },
      "valueFrom" : 0
    } ],
    "@schemaLocation" : "http://example.com/aeiou",
    "privacyType" : "privacyType"
  } ],
  "description" : "description",
  "applicableRole" : [ {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  }, {
    "@baseType" : "@baseType",
    "agreementSpecification" : [ {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    }, {
      "@referredType" : "@referredType",
      "@baseType" : "@baseType",
      "@type" : "@type",
      "name" : "name",
      "description" : "description",
      "id" : "id",
      "href" : "href",
      "@schemaLocation" : "http://example.com/aeiou"
    } ],
    "@type" : "@type",
    "name" : "name",
    "description" : "description",
    "@schemaLocation" : "http://example.com/aeiou"
  } ],
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
  "version" : "version",
  "@baseType" : "@baseType",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
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

