export const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
      "FmsEvent": {
          "type": "object",
          "properties": {
              "db": {
                  "type": "string"
              },
              "op": {
                  "type": "string"
              }
          }
      },
      "FmsFunction": {
          "type": "object",
          "properties": {
              "$code": {
                  "type": "string"
              }
          }
      },
      "FmsUpperNode": {
          "type": "object",
          "properties": {
              "key": {
                  "type": "string"
              }
          }
      },
      "FmsActions": {
          "type": "object",
          "properties": {
              "create": {
                  "type": "string"
              },
              "delete": {
                  "type": "string"
              },
              "download": {
                  "type": "string"
              },
              "read": {
                  "type": "string"
              },
              "save": {
                  "type": "string"
              },
              "upload": {
                  "type": "string"
              }
          }
      },
      "Map": {
          "type": "object"
      }
  },
  "type": "object",
  "properties": {
      "_id": {
          "$ref": "#/definitions/Map"
      },
      "accessControlLevelTwo": {
          "type": "object",
          "properties": {
              "db": {
                  "type": "string"
              },
              "func": {
                  "$ref": "#/definitions/FmsFunction"
              },
              "onUserRole": {
                  "type": "string"
              }
          }
      },
      "accesscontrol": {
          "type": "array",
          "items": {
              "type": "string"
          }
      },
      "actions": {
         "$ref": "#/definitions/FmsActions"
      },
      "anotherEimzaColletionKey": {
          "type": "string"
      },
      "autosetFields": {
          "$ref": "#/definitions/Map"
      },
      "cacheKey": {
          "type": "array",
          "items": {
              "type": "string"
          }
      },
      "calculateCollection": {
          "type": "string"
      },
      "calculateQuery": {
          "$ref": "#/definitions/FmsFunction"
      },
      "collection": {
          "type": "string"
      },
      "constraintItems": {
          "type": "object",
          "properties": {
              "collection": {
                  "type": "string"
              },
              "db": {
                  "type": "string"
              },
              "query": {
                  "type": "object",
                  "properties": {
                      "$code": {
                          "$ref": "#/definitions/FmsFunction"
                      },
                      "$where": {
                          "type": "string"
                      },
                      "forms": {
                          "type": "string"
                      },
                      "relations": {
                          "type": "object",
                          "properties": {
                              "$regex": {
                                  "type": "string"
                              }
                          }
                      }
                  }
              }
          }
      },
      "controlCollection": {
          "type": "string"
      },
      "currentRendered": {
          "$ref": "#/definitions/FmsFunction"
      },
      "db": {
          "type": "string"
      },
      "defaultCurrentQuery": {
          "$ref": "#/definitions/FmsFunction"
      },
      "defaultHistoryQuery": {
          "$ref": "#/definitions/FmsFunction"
      },
      "defaultSortField": {
          "type": "string"
      },
      "dimension": {
          "$comment": "0:PAGE,1:TABLE,2:PIVOT",
          "type": "string",
          "enum": ["PAGE", "TABLE", "PIVOT"]
      },
      "disabled": {
          "type": "boolean"
      },
      "enabled": {
          "type": "boolean"
      },
      "esignEmailBccRecipients": {
          "type": "string"
      },
      "esignEmailToRecipients": {
          "$ref": "#/definitions/FmsFunction"
      },
      "eventFormSelection": {
          "$ref": "#/definitions/FmsEvent"
      },
      "eventPostDelete": {
          "$ref": "#/definitions/FmsEvent"
      },
      "eventPostSave": {
          "$ref": "#/definitions/FmsEvent"
      },
      "eventPreSave": {
          "$ref": "#/definitions/FmsEvent"
      },
      "events": {
          "type": "array",
          "items": {
              "$ref": "#/definitions/FmsEvent"
          }
      },
      "fields": {
          "$ref": "#/definitions/Map"
      },
      "fieldsRow": {
          "type": "string"
      },
      "form": {
          "type": "string"
      },
      "formType": {
          "type": "string",
          "enum": ["YetkiBelgeleri_java", "DayanakVarliklari_java"]
      },
      "forms": {
          "type": "string"
      },
      "funcNote": {
          "type": "string"
      },
      "group": {
          "type": "string"
      },
      "handsonColWidths": {
          "type": "number"
      },
      "handsonRowHeaderWidth": {
          "type": "number"
      },
      "historyPosition": {
          "type": "string",
          "enum": ["ONE", "TWO"]
      },
      "historyRendered": {
          "type": "boolean"
      },
      "key": {
          "type": "string",
          "maxLength": 100
      },
      "member": {
          "type": "string"
      },
      "menuOrder": {
          "type": "number"
      },
      "myNamedQueries": {
          "$ref": "#/definitions/Map"
      },
      "name": {
          "type": "string"
      },
      "oneToMany": {
          "type": "string"
      },
      "postSave": {
          "type": "object",
          "properties": {
              "action": {
                  "type": "string"
              },
              "cacheQuery": {
                  "type": "object",
                  "properties": {
                      "collection": {
                          "type": "string"
                      },
                      "db": {
                          "type": "string"
                      },
                      "relations": {
                          "type": "boolean"
                      }
                  }
              },
              "type": {
                  "type": "string"
              }
          }
      },
      "projectKey": {
          "type": "string"
      },
      "readOnlyNote": {
          "type": "string"
      },
      "searchForm": {
          "type": "string"
      },
      "shortName": {
          "type": "string"
      },
      "shouldAskForVersion": {
          "type": "boolean"
      },
      "showHistory": {
          "type": "boolean"
      },
      "snapshotCollection": {
          "type": "string"
      },
      "type": {
          "type": "string",
          "enum": ["node", "website"]
      },
      "upperNodes": {
          "$ref": "#/definitions/FmsUpperNode"
      },
      "userConstantNote": {
          "type": "string"
      },
      "userConstantNoteList": {
          "type": "array",
          "items": {
              "type": "string"
          }
      },
      "userNote": {
          "type": "string"
      },
      "versionCollection": {
          "type": "string"
      }
  },

  "anyOf": [
      {
          "properties": {
              "type": {
                  "enum": ["node"]
              }
          },
          "required": ["key", "db", "collection", "forms", "name", "accesscontrol", "type", "menuOrder"]
      },
      {
          "properties": {
              "type": {
                  "enum": ["website"]
              }
          },
          "required": ["key", "db", "collection", "forms", "name", "accesscontrol", "type", "menuOrder", "upperNodes"]
      }
  ],

  "additionalProperties": false
};
