# happner-demo

This branch contains the result of having done walkthrough: [01 - The Basics](https://github.com/happner/happner/blob/master/docs/walkthrough/the-basics.md)

### Usage

```bash
git clone https://github.com/happner/happner-demo.git
cd happner-demo
git checkout 01-the-basics
npm install
```

* Run bins `bin/master` and `bin/agent` from this directory so that they can find the `.env` file.
* If you wish to connect agents running on multiple hosts, tailor the `.env` accordingly.
* Charts per hostname/chartname are at [http://MASTER_IP:MASTER_PORT/master/app](http://127.0.0.1:50505/master/app)
* Add more inspectors to `config/agent.js` at will (need to restart agent)
