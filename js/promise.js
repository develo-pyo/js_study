//using callback
var callApi1 = function(successCallback, failCallback){
  $.post('/user.do', $("#parameter").serialize())
  .done(function(response){
         callback(response);
    })
  .fail(function(xhr, status, err){
         failCallback(err);                    
  });
}

//on button click (callback)
callApi1(function(data){
            alert("this is successCallback!");
            if(data.alertMssage !== undefined){
              alert(data.alertMssage);
            }
      },
      function(err){
          alert("this is failCallback!");
          alert(err);
      });  



//using promise
var callApi2 = function(){
  return new Promise(function(resolve, reject){
                              $.post('/user.do', $("#parameter").serialize())
                                 .done((response)=>resolve(response))
                                 .fail((xhr, status, err)=>reject(err));
                             });
}

//on button click (promise)
callApi2().then(function(data){
          alert("this is successCallback!");
          if(data.alertMssage !== undefined){
            alert(data.alertMssage);
          }
        }).catch(function(err){
            alert("this is failCallback!");
            alert("failed!");
        }); 

