---
layout: post
title:  websocket 发送消息列队
date:   2018-11-9 12:22:33 +0800
categories: [websocket ] 
tag: [websocket ] 
---
* content
{:toc}

没open就放入列队,直到open一起发送

(function(nameSpace) {
  function createMethod(method, options, stateCallback) {
    var that = this;
    this[method] = function() {
      if (stateCallback && stateCallback.apply) {
        stateCallback(method);
      }
      console.info(method);
      if (options[method] && options[method].apply) {
        options[method].apply(that, arguments);
      }
    };
  }

  function SocketWrapper(options) {
    var ws,
      events = ['onopen', 'onmessage', 'onclose', 'onerror'],
      i, len, prop = {
        opened: false,
        closed: false,
        error: false
      },
      method;

    if (typeof options === 'undefined' || !options) {
      throw 'ArgumentException: please add default constructor options';
    }
    
    this.queue = [];
    
    this.onEventTrigger = function(eventName) {
      var i, len;
      if (eventName === 'onopen') {
        prop.opened = true;
        prop.closed = false;
        // openend send queue
        if (this.queue.length > 0) {
          for (i = this.queue.length; --i >= 0;) {
            this.send.apply(this, this.queue[0]);
            this.queue.splice(0, 1);
          }
        }
      }
      if (eventName === 'onerror') {
        prop.error = true;
      }
      if (eventName === 'onclosed') {
        prop.opened = false;
        prop.closed = true;
      }
    };

    this.init = function() {
      var cb = this.onEventTrigger.bind(this);
      ws = new WebSocket(options.url);

      for (i = 0; i < events.length; i++) {
        method = events[i];
        createMethod.apply(ws, [method, options, cb]);
      }
    };

    this.send = function() {
      if (prop.closed) {
        throw 'InvalidOperation: Cannot send messages to a closed Websocket!';
      }
      if (!prop.opened) {
        this.queue.push(arguments);
      } else {
        ws.send.apply(ws, arguments);
      }
    };
    
    this.init();
    return this;
  }

  window.SocketWrapper = SocketWrapper;
}(window));

var socket = new window.SocketWrapper({
  url: 'ws://127.0.0.1:1805',
  onopen: function() {
    this.send('message', 'hi');
  },
  onmessage: function() {
    console.log(arguments);
  },
  onclose: function() {
    socket = null;
  },
  onerror: function() {
    console.log('error occured, oh no!');
    console.error(arguments);
  }
});
socket.send('i am message send to soon, but since i check the state of the ws object, i will be queued and send when appropriate');