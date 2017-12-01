const EventEmitter = require('events');
var dataMap = new WeakMap();

class WebSocketServer extends EventEmitter {
    /**
     * 
     * @param {Set<WebSocket>} clients 
     */
    constructor(clients) {
        super();
        dataMap.set(this, clients);
    }

    /** @type {Set<WebSocket>} */
    get clients() {
        return dataMap.get(this);
    }
}

Object.defineProperties(WebSocketServer, {
    'CONNECTING': {
        enumerable: true,
        configurable: false,
        value: 0,
        writable: false
    },
    'OPEN': {
        enumerable: true,
        configurable: false,
        value: 1,
        writable: false
    },
    'CLOSING': {
        enumerable: true,
        configurable: false,
        value: 2,
        writable: false
    },    
    'CLOSED': {
        enumerable: true,
        configurable: false,
        value: 3,
        writable: false
    }
});

module.exports = WebSocketServer;