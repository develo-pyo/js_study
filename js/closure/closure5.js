
// closure 실수 사례
// function showHelp(help) {
//     document.getElementById('help').innerHTML = help;
//   }
  
// function setupHelp() {
//     var helpText = [
//             {'id': 'email', 'help': 'Your e-mail address'},
//             {'id': 'name', 'help': 'Your full name'},
//             {'id': 'age', 'help': 'Your age (you must be over 16)'}
//         ];

//     for (var i = 0; i < helpText.length; i++) {
//         var item = helpText[i];
//         //item 이 항상 age
//         document.getElementById(item.id).onfocus = function() {
//             showHelp(item.help);
//         }
//     }
// }
  
// setupHelp(); 


//잘못된 위의 코드를 수정 방법 1 : 콜백 사용
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
  }
  
  function makeHelpCallback(help) {
    return function() {
      showHelp(help);
    };
  }
  
  function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
      ];
  
    for (var i = 0; i < helpText.length; i++) {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
  }
  
  setupHelp(); 


//잘못된 위의 코드를 수정 방법 2 : 익명함수 사용
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}
  
function makeHelpCallback(help) {
    return function() {
      showHelp(help);
    };
}
  
function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

    for (var i = 0; i < helpText.length; i++) {
        (function(){
            var item = helpText[i];
            document.getElementById(item.id).onfocus = function(){
                showHelp(item.help);
            }
        })();
    }
}
  
  

//잘못된 위의 코드를 수정 방법 3 : let 사용
function showHelp(help) {
    document.getElementById('help').innerHTML = help;
}

function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
        ];

    for (var i = 0; i < helpText.length; i++) {
        let item = helpText[i];
        document.getElementById(item.id).onfocus = function() {
          showHelp(item.help);
        }
    }
}
