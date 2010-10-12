// ..........................................................
// Nifty Helpers
// 

module.exports = {
  format: function (str) {
    var args = arguments,
         idx  = 1;
    return str.replace(/%@([0-9]+)?/g, function(s, argIndex) {
       argIndex = (argIndex) ? parseInt(argIndex,0)-1 : idx++ ;
       s =args[argIndex];
       return ((s===null) ? '(null)' : (s===undefined) ? '' : s).toString(); 
    });
  },
  
  object_extend: function(base, ext) {
    for( var key in ext) {
      if (!ext.hasOwnProperty(key)) continue;
      base[key] = ext[key];
    }
    return base;
  }
};