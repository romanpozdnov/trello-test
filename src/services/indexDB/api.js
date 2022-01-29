import Localbase from "localbase";

import { ORDER_TYPES } from "../../constants/layout";

class API {
  constructor(baseName) {
    this.db = new Localbase(baseName);
    this.db.config.debug = true;
  }

  async createDocument(collectionName, document) {
    return await this.db.collection(collectionName).add(document);
  }

  async getDocument(collectionName, documentId) {
    return await this.db
      .collection(collectionName)
      .doc({ id: documentId })
      .get();
  }

  async updateDocument(collectionName, documentId, data) {
    return await this.db
      .collection(collectionName)
      .doc({ id: documentId })
      .update(data);
  }

  async overwriteDocument(collectionName, documentId, newDocument) {
    return await this.db
      .collection(collectionName)
      .doc({ id: documentId })
      .set(newDocument);
  }

  async deleteDocument(collectionName, documentId) {
    return await this.db
      .collection(collectionName)
      .doc({ id: documentId })
      .delete();
  }

  async getCollection(collectionName) {
    return await this.db.collection(collectionName).get();
  }

  async getSortedCollection(
    collectionName,
    orderBy,
    orderType = ORDER_TYPES.ascending
  ) {
    return await this.db
      .collection(collectionName)
      .orderBy(orderBy, orderType)
      .get();
  }

  async getLimitedCollection(
    collectionName,
    orderBy,
    orderType = ORDER_TYPES.ascending,
    limit
  ) {
    this.db
      .collection(collectionName)
      .orderBy(orderBy, orderType)
      .limit(limit)
      .get();
  }

  async overwriteCollection(collectionName, newCollection) {
    return await this.db.collection(collectionName).set(newCollection);
  }

  async deleteCollection(collectionName) {
    return await this.db.collection(collectionName).delete();
  }

  async deleteDatabase() {
    return await this.db.delete();
  }
}

export default API;
