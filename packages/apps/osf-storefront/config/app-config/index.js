module.exports = {
    // Values to add to the client state
    "configRepositoryState": {
      "client-state-value-1": 1,
      "client-state-value-2": [1000, 2000, 3000],
      "client-state-value-3": {
        "pizza": "cheese",
        "topping": ["olives"]
      }
    },
    // Top-Level Custom Properties
    "example-top-level-property-string": "sample-value",
    "example-top-level-property-array": ["string-1", "string-2"],
    "example-top-level-property-object": {
      "object-key-a": "nested-object-string",
      "object-key-b": [ "value-1", "value-2"],
      "object-key-c": { "arg1": 1, "arg2": 2 }
    },
    
  // Merged with above when --live flag is turned on
  "liveConfigurations": {
    "example-top-level-property-string": "override-sample-value",
    "configRepositoryState": {
      "client-state-value-1": 777,
      "client-state-live-value": "in client state when live flag is turned on"
    }
  },
  "appContextConfigurations": {
    // will be merged with top-level properties when --appContext development or ENV_TYPE=DEV
    "development": {
      "example-top-level-property-string": "sample-value-development",
      "configRepositoryState": {
        "client-state-value-1": 333
      },
      // Merged with above when --live flag is turned on
      "liveConfigurations": {
        "example-top-level-property-string": "override-sample-value-development-live"
      }
    },
    // will be merged with top-level properties when --appContext test or ENV_TYPE=TST
    "test": {
      "example-top-level-property-string": "sample-value-test",
      "configRepositoryState": {
        "client-state-value-1": 444
      },
      // Merged with above when --live flag is turned on
      "liveConfigurations": {
        "example-top-level-property-string": "override-sample-value-test-live"
      }
    },
    // will be merged with top-level properties when --appContext test or ENV_TYPE=PRD
    "production": {
      "example-top-level-property-string": "sample-value-production",
      "configRepositoryState": {
        "client-state-value-1": 555
      },
      // Merged with above when --live flag is turned on
      "liveConfigurations": {
        "example-top-level-property-string": "override-sample-value-production-live"
      }
    }
  }
  };