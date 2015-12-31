require('dotenv').load();

module.exports = {

  // Allow default name
  // name: 'agent',

  datalayer: {
    port: 0,         // Listen at random port (allows more than one agent instance per host)
    persist: false,  // No storage
    secure: false,   // Secure? (later)
  },

  // Agent connects to MasterNode

  endpoints: {
    'MasterNode': {
      config: {
        host: process.env.MASTER_IP,
        port: process.env.MASTER_PORT,
        // // Secure? (later)
        // username: '',
        // password: '',
      }
    }
  },

  components: {
    'agent': {
      startMethod: 'start',
      stopMethod: 'stop',
      inspectors: {

        // keeping these inspectors as selfcontained "lambdas" 
        // means they could conceivably be configured on the
        // master, and dynamically propagated on change to 
        // all agents (with eval on the agent (unfortunately?)) 

        'load/average-1': {
          interval: 1000,
          fn: function(callback) {
            var os = require('os');
            callback(null, os.loadavg()[0]);
          }
        },
        // 'load/average-5': {
        //   interval: 1000,
        //   fn: function(callback) {
        //     var os = require('os');
        //     callback(null, os.loadavg()[1]);
        //   }
        // },
        // 'load/average-15': {
        //   interval: 1000,
        //   fn: function(callback) {
        //     var os = require('os');
        //     callback(null, os.loadavg()[2]);
        //   }
        // },
        'memory/percent-free': {
          interval: 1000,
          fn: function(callback) {
            var os = require('os');
            var total = os.totalmem();
            var free = os.freemem();
            var percent = Math.round(free / total * 100 * 1000) / 1000; // to 3 decimal places
            callback(null, percent);
          }
        }
      }
    }
  }

}
