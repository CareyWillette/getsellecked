// Sets the MongoDB Database options

module.exports = {

  local:
    {
      name: "getselleckedlocal",
      url: "mongodb://localhost/getsellecked_prod",
      port: 27017
    },

  localtest:
    {
      name: "getselleckedlocal_test",
      url: "mongodb://localhost/getsellecked_test",
      port: 27017
    }

};
