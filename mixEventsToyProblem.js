//How do we want mixEvents to work?
//We want the original object to be returned after extending it
//If obj.trigger is called with additional arguments, pass in listeners
//We don't have to remove events

var mixEvents = function (obj) {
  var events = {};


  obj.trigger = function (event) {
    if(events[event]) {

      var args = Array.prototype.slice.call(arguments, 1)
      console.log(args);

      events[event].forEach(function (callback) {
        //arguments can also be easily passed now
        callback.apply(obj, args);
      });

    };

  }


  

  obj.on = function (event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
    
  };

  return obj;
};