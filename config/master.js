require('dotenv').load();

module.exports = {

  // This name will be used when attaching other nodes to this one.
  name: 'MasterNode',

  // Datalayer and network layer are the same thing.
  datalayer: {
    host: process.env.MASTER_IP,
    port: process.env.MASTER_PORT,
    persist: true,     // Store data in default nedb file
    secure: false,     // Secure? (later)
  },


  // // modules only necessary upon deviation from default
  // // https://github.com/happner/happner/blob/master/docs/configuration.md#module-config
  // modules: {
  //   'master': {
  //     path: 'to/alternative/location'
  //   }
  // },

  // Include master as component
  // It assumes that 'master' is an installed node_module which exports 1 class
  components: {
    'master': {
      startMethod: 'start',
      stopMethod: 'stop',

      web: {
        routes: {
          // serves static content in node_modules/master/widget at http://.../master/widget
          'app': 'static'
        }
      }
    }
  }

}
