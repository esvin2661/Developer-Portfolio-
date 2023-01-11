migrate((db) => {
  const collection = new Collection({
    "id": "88d7jsn6b0l4x2a",
    "created": "2023-01-11 01:48:03.430Z",
    "updated": "2023-01-11 01:48:03.430Z",
    "name": "create",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hjblkn9a",
        "name": "field",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("88d7jsn6b0l4x2a");

  return dao.deleteCollection(collection);
})
