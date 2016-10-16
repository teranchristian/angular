angular.module('test', [])
.controller('CuentaClicsController', function(){
  var vm  = this;
  vm.numClics = 0;
  vm.incrementaClic = function(){
    vm.numClics ++;
  }
})
.component('test', {
  templateUrl: './components/test.html',
  controller: 'CuentaClicsController',
  controllerAs: 'vm'
});
