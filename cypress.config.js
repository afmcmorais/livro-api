const { defineConfig } = require("cypress");

const { configurePlugin } = require('cypress-mongodb');

module.exports = defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb+srv://afmcmorais:230117@livroapi.1jq6a.mongodb.net/LivroApi?retryWrites=true&w=majority&appName=LivroApi',
      database: 'LivroApi',
      collection: 'livros'
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin(on)
    },
  },
});
