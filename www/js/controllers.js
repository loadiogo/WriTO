/**
 * Created by root on 09/09/15.
 */
angular.module('starter.controllers', ['ionic','firebase'])

  .factory('Livros', ['$firebaseArray', function ($firebaseArray) {
    var livrosRef = new Firebase('https://writo1.firebaseio.com/livros');
    return $firebaseArray(livrosRef);
  }])

  .factory('Livro', [])


  .controller('AppCtrl', function($scope) {
  })

  .controller('ListsCtrl', function ($scope, $ionicListDelegate, Livros){

    $scope.livros = Livros;

    $scope.addLivro = function(){
      var name = prompt('Qual será o nome do livro?');
      if(name){
        $scope.livros.$add({
          'name': name
        });
      }
    };

  })

.controller('ListCtrl', function ($scope, $stateParams){

  });


$scope.init = function(){
  //// Initialize Firebase
  var firepadRef = new Firebase('https://writo1.firebaseio.com/livros/livro');
  //// Create CodeMirror (with lineWrapping on).
  var codeMirror = CodeMirror(document.getElementById('firepad-container'), { lineWrapping: true });
  //// Create Firepad (with rich text toolbar and shortcuts enabled).
  var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
    { richTextToolbar: true, richTextShortcuts: true });
  //// Initialize contents.
  firepad.on('ready', function() {
    if (firepad.isHistoryEmpty()) {
      firepad.setHtml('<span style="font-size: 24px;">Rich-text editing with <span style="color: red">Firepad!</span></span><br/><br/>Collaborative-editing made easy.\n');
    }
  });
}
// Helper to get hash from end of URL or generate a random one.
$scope.getExampleRef = function(){
  var ref = new Firebase('https://writo1.firebaseio.com');
  var hash = window.location.hash.replace(/#/g, '');
  if (hash) {
    ref = ref.child(hash);
  } else {
    ref = ref.push(); // generate unique location.
    window.location = window.location + '#' + ref.key(); // add it as a hash to the URL.
  }
  return ref;
}
init();
