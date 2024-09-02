// require('dotenv').config();

const { defineConfig } = require('cypress');
const { configurePlugin } = require('cypress-mongodb');

module.exports = defineConfig({
  env: {
    mongodb: {
      uri: process.env.DATABASE_URL || require('./cypress.env.json').DATABASE_URL,
      database: process.env.MONGODB_DATABASE || require('./cypress.env.json').MONGODB_DATABASE,
      collection: process.env.MONGODB_COLLECTION || require('./cypress.env.json').MONGODB_COLLECTION
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin(on)
    },
  },
});
