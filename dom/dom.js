(function(){
  var self = this;
  // TODO: if element doesn't exist
  
  function _isObject(obj){
    return typeof obj;
  }

  function _isArray(arr){
    return arr instanceof Array;
  }

  function _getProp(ele){
    switch(ele.nodeName){
      case 'TEXTAREA':
        return 'value';
      default:
        return 'innerHTML';
    }
  }

  function _absorb(obj,args){

    var len = args.length;
    if(!_isObject(obj))
      return obj;
    if(len == 1 && _isObject(args[0]))
      obj = args[0];
    else{
      if(_isArray(obj)){
        // Issue: will cover exist key in obj
        _foreach(args,function(index,value){
          obj[index] = value;
        })
      }else{
        // isObject
        // Issue: will cover exist key in obj
        _foreach(args,function(index,value){
          if(index % 2 == 1)
            obj[args[index-1]] = value;
        })
      }
    }

    return obj;
  }

  function _foreach(obj,func){
    if(_isArray(obj)){
      for(var i = 0, len = obj.length; i<len; i++){
        func(i,obj[i]);
      }
    }else if(_isObject(obj)){
      for(var i in obj){
        func(i,obj[i]);
      }
    }   
  }


  self.withId = function(eleId){
    return document.getElementById(eleId);
  }

  /**
   * write text into element
   */
  self.write = function(){
    var obj = _absorb({},arguments);

    _foreach(obj,function(eleId,value){
      var ele = self.withId(key);
      ele && (ele[_getProp[ele]] = value);
    })
  };

  /**
   * read text from element
   * @param  {String} eleId Element ID
   * @return {String}       text in element
   */
  self.read = function(eleId){
    var ele = self.withId(eleId);
    return ele[_getProp[ele]];
  }

  /**
   * set element display
   * @param  {Array|Object|String} obj     [eleId List] || obj include key:eleId value:display || eleId
   * @param  {String} display display
   */
  self.display = function(obj,display){
    if(_isArray(obj)){
      // Array
      // need the second param
      _foreach(obj,function(index,eleId){
        var ele = self.withId(eleId);
        ele && (ele.style.display = dispaly);
      });
    }else if(_isObject(obj)){
      // Object
      _foreach(obj,function(eleId,display){
        var ele = self.withId(eleId);
        ele && (ele.style.display = display);
      });
    }else{
      // String
      // need the second param
      var ele = self.withId(obj);
      ele && (ele.style.display = display);
    }
  }

  /**
   * set element enable
   * @param  {Array|Object|String} obj     [eleId List] || obj include key:eleId value:display || eleId
   * @param  {boolean} ifAble ifAble
   */
  self.enable = function(obj,ifAble){
    if(_isArray(obj)){
      // Array
      // need the second param
      _foreach(obj,function(index,eleId){
        var ele = self.withId(eleId);
        ele && (ele.disabled = !ifAble);
      });
    }else if(_isObject(obj)){
      // Object
      _foreach(obj,function(eleId,ifAble){
        var ele = self.withId(eleId);
        ele && (ele.disabled = !ifAble);
      });
    }else{
      // String
      // need the second param
      var ele = self.withId(obj);
      ele && (ele.disabled = !ifAble);
    }
  }
}.bind(window.dom = {} ))()