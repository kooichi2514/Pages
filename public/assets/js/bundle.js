/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/calculadora.js":
/*!************************************!*\
  !*** ./src/modules/calculadora.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calculadora)
/* harmony export */ });
function Calculadora(display) {
  this.display = display;
  this.inicia = function () {
    this.cliqueBotoes();
    this.pressionaEnter();
  };
  this.pressionaEnter = function () {
    var _this = this;
    this.display.addEventListener('keyup', function (e) {
      if (e.keyCode === 13) {
        _this.realizaConta();
      }
    });
  };
  this.realizaConta = function () {
    var conta = this.display.value;
    try {
      conta = eval(conta);
      if (!conta) {
        alert('Conta inválida');
        return;
      }
      this.display.value = String(conta);
    } catch (e) {
      alert('Conta inválida');
      return;
    }
  };
  this.clearDisplay = function () {
    this.display.value = '';
  };
  this.apagaUm = function () {
    this.display.value = this.display.value.slice(0, -1);
  };
  this.cliqueBotoes = function () {
    var _this2 = this;
    document.addEventListener('click', function (e) {
      var el = e.target;
      if (el.classList.contains('btn-num')) {
        _this2.btnParaDisplay(el.innerText);
      }
      if (el.classList.contains('btn-clear')) {
        _this2.clearDisplay();
      }
      if (el.classList.contains('btn-del')) {
        _this2.apagaUm();
      }
      if (el.classList.contains('btn-eq')) {
        _this2.realizaConta();
      }
      _this2.display.focus();
    });
  };
  this.btnParaDisplay = function (valor) {
    this.display.value += valor;
  };
}

/***/ }),

/***/ "./src/modules/carregador.js":
/*!***********************************!*\
  !*** ./src/modules/carregador.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ carregaScript)
/* harmony export */ });
/* harmony import */ var _imc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imc */ "./src/modules/imc.js");
/* harmony import */ var _calculadora__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculadora */ "./src/modules/calculadora.js");
/* harmony import */ var _listadetarefas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listadetarefas */ "./src/modules/listadetarefas.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ "./src/modules/timer.js");
/* harmony import */ var _validaform_validaform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validaform/validaform */ "./src/modules/validaform/validaform.js");
/* harmony import */ var _marcaPonto_visu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marcaPonto/visu */ "./src/modules/marcaPonto/visu.js");
/* harmony import */ var _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marcaPonto/pontada */ "./src/modules/marcaPonto/pontada.js");
/* harmony import */ var _marcaPonto_cadastro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marcaPonto/cadastro */ "./src/modules/marcaPonto/cadastro.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








function pegaBotao(classe) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var botao = document.querySelector(classe);
      console.log('Ainda não sei como resolver essa parte de uma forma melhor');
      resolve(botao);
    }, 2000);
  });
}
function carregaScript(_x) {
  return _carregaScript.apply(this, arguments);
}

////////////////////////////////////////////////////////
function _carregaScript() {
  _carregaScript = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(paginaAtual) {
    var funcao;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // Na verdade deveria começar o script logo que aparece o html.......

          if (paginaAtual === 'CalcIMC.html') {
            funcao = imc;
            funcao();
          }
          if (paginaAtual === 'Calculadora.html') {
            funcao = calculadora;
            funcao();
          }
          if (paginaAtual === 'listaDeTarefas.html') {
            funcao = listaTarefa;
            funcao();
          }
          if (paginaAtual === 'timer.html') {
            funcao = ligaTimer;
            funcao();
          }
          if (paginaAtual === 'validaform.html') {
            funcao = ligaValidaForm;
            funcao();
          }
          if (paginaAtual === 'marcaPonto.html') {
            funcao = ligaMarcaPonto;
            funcao();
          }
          if (paginaAtual === 'registraFuncionario.html') {
            funcao = ligaCadastro;
            funcao();
          }
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _carregaScript.apply(this, arguments);
}
function imc() {
  var imc = new _imc__WEBPACK_IMPORTED_MODULE_0__["default"]();
  imc.inicia();
}
function calculadora() {
  return _calculadora.apply(this, arguments);
}
function _calculadora() {
  _calculadora = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var botao, calculadora;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return pegaBotao('.display');
        case 2:
          botao = _context2.sent;
          calculadora = new _calculadora__WEBPACK_IMPORTED_MODULE_1__["default"](botao);
          calculadora.inicia();
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _calculadora.apply(this, arguments);
}
function listaTarefa() {
  return _listaTarefa.apply(this, arguments);
}
function _listaTarefa() {
  _listaTarefa = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var botao, tarefas;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return pegaBotao('.btn-tarefa');
        case 2:
          botao = _context3.sent;
          tarefas = new _listadetarefas__WEBPACK_IMPORTED_MODULE_2__["default"](botao);
          tarefas.inicia();
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _listaTarefa.apply(this, arguments);
}
function ligaTimer() {
  return _ligaTimer.apply(this, arguments);
}
function _ligaTimer() {
  _ligaTimer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var botao;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return pegaBotao('.relogio');
        case 2:
          botao = _context4.sent;
          (0,_timer__WEBPACK_IMPORTED_MODULE_3__["default"])(botao);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _ligaTimer.apply(this, arguments);
}
function ligaValidaForm() {
  return _ligaValidaForm.apply(this, arguments);
}
function _ligaValidaForm() {
  _ligaValidaForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var botao, valida;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return pegaBotao('.formulario');
        case 2:
          botao = _context5.sent;
          valida = new _validaform_validaform__WEBPACK_IMPORTED_MODULE_4__["default"](botao);
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _ligaValidaForm.apply(this, arguments);
}
function ligaMarcaPonto() {
  return _ligaMarcaPonto.apply(this, arguments);
}
function _ligaMarcaPonto() {
  _ligaMarcaPonto = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var botao, relogio, registro, janeiro, f1, f2, f3, f4, listaDeFunc, _i2, _registro2, pessoa, texto;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return pegaBotao('.mostrar');
        case 2:
          botao = _context6.sent;
          relogio = new _marcaPonto_visu__WEBPACK_IMPORTED_MODULE_5__["default"](botao);
          registro = [];
          janeiro = new _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__.Agenda('Jan');
          f1 = new _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__.Funcionario('123', 'Victor');
          f2 = new _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__.Funcionario('321', 'Rotciv');
          f3 = new _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__.Funcionario('145', 'Ronaldo');
          f4 = new _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__.Funcionario('154', 'Joelson');
          registro.push({
            chave: f1
          });
          registro.push({
            chave: f2
          });
          registro.push({
            chave: f3
          });
          registro.push({
            chave: f4
          });
          _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__.Funcionario.pegaInput(registro);
          listaDeFunc = document.querySelector('.funcionarios');
          botao.addEventListener('click', function () {
            if (!listaDeFunc.innerText) {
              for (var _i = 0, _registro = registro; _i < _registro.length; _i++) {
                var pessoa = _registro[_i];
                var texto = _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__.Funcionario.pegaTexto(pessoa);
                var li = addLi(texto);
                listaDeFunc.appendChild(li);
              }
            } else {
              listaDeFunc.innerText = '';
            }
          });
          for (_i2 = 0, _registro2 = registro; _i2 < _registro2.length; _i2++) {
            pessoa = _registro2[_i2];
            texto = _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__.Funcionario.pegaTexto(pessoa);
            try {
              relogio.mostraRegistroNaTela(texto);
            } catch (e) {
              console.log('Tem um erro que precisa arrumar aqui :(');
            }
          }
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _ligaMarcaPonto.apply(this, arguments);
}
function ligaCadastro() {
  return _ligaCadastro.apply(this, arguments);
} /////////////////////////////////////////////////////////////////////////
function _ligaCadastro() {
  _ligaCadastro = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var formulario, regustri;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return pegaBotao('.cadastro');
        case 2:
          formulario = _context7.sent;
          regustri = new _marcaPonto_cadastro__WEBPACK_IMPORTED_MODULE_7__.FormCadastro(formulario, _marcaPonto_pontada__WEBPACK_IMPORTED_MODULE_6__.Funcionario); // console.log(regustri);
        case 4:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _ligaCadastro.apply(this, arguments);
}
function criaLi() {
  var li = document.createElement('li');
  return li;
}
function addLi(texto) {
  var li = criaLi();
  li.innerText = texto;
  return li;
}

/***/ }),

/***/ "./src/modules/imc.js":
/*!****************************!*\
  !*** ./src/modules/imc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalculaIMC)
/* harmony export */ });
// export default class CalculaIMC {
//     constructor(peso, altura) {
//         this.peso = Number(peso);
//         this.altura = Number(altura);
//         this.bmi = '';
//         this.msg = '';
//         this.getIMC();
//     }

//     getIMC() {
//         if(!this.peso) {
//             this.bmi = 'Peso Inválido'
//             return;
//         }
//         if(!this.altura || this.altura > 2.9) {
//             this.msg = 'Altura Inválida'
//             return;
//         }
//         const imc = this.peso / this.altura ** 2;
//         this.bmi = imc.toFixed(2);
//         this.msg = this.getNivelImc(this.bmi);

//     }

//     getNivelImc(imc) {
//         const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
//         'Obesidade grau 2',  'Obesidade grau 3'];

//         if (imc >= 39.9) {
//             return nivel[5];
//         }
//         if (imc >= 34.9) {
//             return nivel[4];
//         }
//         if (imc >= 29.9) {
//             return nivel[3];
//         }
//         if (imc >= 24.9) {
//             return nivel[2];
//         }
//         if (imc >= 18.5) {
//             return nivel[1];
//         }
//         if (imc < 18.5) {
//             return nivel[0];
//         }
//     }
// }

function CalculaIMC() {
  var _this = this;
  // this.display = btncalc;

  this.inicia = function () {
    // this.display.addEventListener('click', () => {
    //     this.getIMC();
    // });
    document.addEventListener('click', function (e) {
      var el = e.target;
      if (el.classList.contains('btn-calc')) {
        _this.getIMC();
      }
    });
  };
  this.getIMC = function () {
    var peso = document.querySelector('.input-peso').value;
    var altura = document.querySelector('.input-altura').value;
    if (!peso) {
      _this.bmi = 'Peso Inválido';
      return;
    }
    if (!altura || altura > 2.9) {
      _this.msg = 'Altura Inválida';
      return;
    }
    var imc = peso / Math.pow(altura, 2);
    var bmi = imc.toFixed(2);
    var msg = _this.getNivelImc(bmi);
    _this.setResultado(bmi, msg);
  };
  this.getNivelImc = function (imc) {
    var nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) {
      return nivel[5];
    }
    if (imc >= 34.9) {
      return nivel[4];
    }
    if (imc >= 29.9) {
      return nivel[3];
    }
    if (imc >= 24.9) {
      return nivel[2];
    }
    if (imc >= 18.5) {
      return nivel[1];
    }
    if (imc < 18.5) {
      return nivel[0];
    }
  };
  this.setResultado = function (bmi, mensagem) {
    var imcResultado = document.querySelector('.imc-resultado');
    imcResultado.innerHTML = "".concat(bmi, " ").concat(mensagem);
  };
}

/***/ }),

/***/ "./src/modules/listadetarefas.js":
/*!***************************************!*\
  !*** ./src/modules/listadetarefas.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tarefas)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Tarefas(btnTarefa) {
  var _this = this;
  this.inputTarefa = document.querySelector('.input-tarefa');
  this.tarefas = document.querySelector('.tarefas');
  this.btnTarefa = btnTarefa;
  this.inicia = function () {
    _this.enter();
    _this.clique();
    _this.apagar();
    _this.adicionaTarefasSalvas();
  };
  this.clique = function () {
    _this.btnTarefa.addEventListener('click', function () {
      if (!_this.inputTarefa.value) return;
      _this.criaTarefa(_this.inputTarefa.value);
    });
  };
  this.enter = function () {
    _this.inputTarefa.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        if (!_this.inputTarefa.value) return;
        _this.criaTarefa(_this.inputTarefa.value);
      }
    });
  };
  this.apagar = function () {
    document.addEventListener('click', function (e) {
      var el = e.target;
      if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        _this.salvarTarefas();
      }
    });
  };
  this.criaTarefa = function (textoInput) {
    var li = _this.criaLi();
    li.innerText = textoInput;
    _this.tarefas.appendChild(li);
    _this.limpaInput();
    _this.criaBotaoApagar(li);
    _this.salvarTarefas();
  };
  this.criaLi = function () {
    var li = document.createElement('li');
    return li;
  };
  this.limpaInput = function () {
    _this.inputTarefa.value = '';
    _this.inputTarefa.focus();
  };
  this.criaBotaoApagar = function (li) {
    li.innerText += ' ';
    var botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
  };
  this.salvarTarefas = function () {
    var liTarefas = _this.tarefas.querySelectorAll('li');
    var listaDeTarefas = [];
    var _iterator = _createForOfIteratorHelper(liTarefas),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tarefa = _step.value;
        var tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
  };
  this.adicionaTarefasSalvas = function () {
    var tarefas = localStorage.getItem('tarefas');
    var listaDeTarefas = JSON.parse(tarefas);
    var _iterator2 = _createForOfIteratorHelper(listaDeTarefas),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tarefa = _step2.value;
        _this.criaTarefa(tarefa);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
}

/***/ }),

/***/ "./src/modules/marcaPonto/cadastro.js":
/*!********************************************!*\
  !*** ./src/modules/marcaPonto/cadastro.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCadastro": () => (/* binding */ FormCadastro)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//criar função para gerar numero de funcionario automaticamente

var FormCadastro = /*#__PURE__*/function () {
  function FormCadastro(formulario, classe) {
    _classCallCheck(this, FormCadastro);
    this.formulario = formulario;
    this.classe = classe;
    this.nome = '';
    this.numeroUsuario = '';
    this.eventos();
  }
  _createClass(FormCadastro, [{
    key: "eventos",
    value: function eventos() {
      var _this = this;
      this.formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        _this.handleSubmit(e);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.nomeValido();
      this.usuarioValido();
      var cadastro = this.criarCadastro();
      this.salvarCadastro(cadastro);
    }
  }, {
    key: "nomeValido",
    value: function nomeValido() {
      var nome = this.formulario.querySelector('.nome');
      this.nome = nome.value;
    }
  }, {
    key: "usuarioValido",
    value: function usuarioValido() {
      var usu = this.formulario.querySelector('.numero-usuario');
      this.numeroUsuario = usu.value;
    }
  }, {
    key: "criarCadastro",
    value: function criarCadastro() {
      var cadastro = new this.classe(this.numeroUsuario, this.nome);
      return cadastro;
    }
  }, {
    key: "salvarCadastro",
    value: function salvarCadastro(cadastro) {
      var listaDeCadastros = this.getCadastros();
      if (!listaDeCadastros) {
        this.salvaEmJSON([cadastro]);
        return;
      }
      listaDeCadastros.push(cadastro);
      this.salvaEmJSON(listaDeCadastros);
    }
  }, {
    key: "getCadastros",
    value: function getCadastros() {
      var cadastros = localStorage.getItem('cadastros');
      var listaDeCadastros = JSON.parse(cadastros);
      return listaDeCadastros;
    }
  }, {
    key: "salvaEmJSON",
    value: function salvaEmJSON(arquivo) {
      var cadastrosJSON = JSON.stringify(arquivo);
      localStorage.setItem('cadastros', cadastrosJSON);
    }
  }]);
  return FormCadastro;
}();

/***/ }),

/***/ "./src/modules/marcaPonto/pontada.js":
/*!*******************************************!*\
  !*** ./src/modules/marcaPonto/pontada.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Agenda": () => (/* binding */ Agenda),
/* harmony export */   "Funcionario": () => (/* binding */ Funcionario)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Funcionario = /*#__PURE__*/function () {
  function Funcionario(id, nome) {
    _classCallCheck(this, Funcionario);
    this.id = id;
    this.nome = nome;
    this.entrada = ''; // make Object.property for all later;
    this.horasAcumuladasNoMes = 0;
    this.registrosBackup = [];
  }
  _createClass(Funcionario, [{
    key: "registraEntrada",
    value: function registraEntrada() {
      console.log("cheguei no registra entrada do ".concat(this.id));
      if (!this.entrada) {
        this.entrada = (Date.now() / 1000).toFixed();
        return;
      }
      this.registraDiaria();
    }
  }, {
    key: "resetHoras",
    value: function resetHoras() {
      // if(dia !== '1') return;

      this.horasAcumuladasNoMes = 0;
    }
  }, {
    key: "registraDiaria",
    value: function registraDiaria() {
      var checkOut = (Date.now() / 1000).toFixed();
      var valor = Funcionario.timeStampParaHoras(this.entrada, checkOut);
      this.horasAcumuladasNoMes += valor;
      this.backupCheckInOut(this.entrada, checkOut);
      this.entrada = '';
    }
  }, {
    key: "backupCheckInOut",
    value: function backupCheckInOut(checkIn, checkOut) {
      this.registrosBackup.push({
        id: this.id,
        checkIn: checkIn,
        checkOut: checkOut
      });
    }
  }, {
    key: "amostraRegistro",
    value: function amostraRegistro() {
      var _iterator = _createForOfIteratorHelper(this.registrosBackup),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var registro = _step.value;
          var checkIn = registro.checkIn,
            checkOut = registro.checkOut;
          console.log("Entrada: ".concat(checkIn, ". Sa\xEDda: ").concat(checkOut, ". || Horas Totais: ").concat(Funcionario.timeStampParaHoras(checkIn, checkOut), "."));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "estaLogado",
    value: function estaLogado() {
      if (!this.entrada) return 'Não está logado.';
      var hora = new Date(this.entrada * 1000);
      return hora.toLocaleTimeString('pt-BR');
      var seila = this.entrada ? 'Está logado.' : 'Não está logado.';
      return seila;
    }
  }], [{
    key: "timeStampParaHoras",
    value: function timeStampParaHoras(entrada, saida) {
      return ((saida - entrada) / 60 / 60).toFixed(2);
    }
  }, {
    key: "pegaInput",
    value: function pegaInput(registro) {
      var inputId = document.querySelector('.input-code');
      var btn = document.querySelector('.btn-marca'); //Essa parte do código ta meio cagada, acho que da pra refatorar
      Funcionario.executaCode(inputId, btn, registro);
    }
  }, {
    key: "pegaTexto",
    value: function pegaTexto(pessoa) {
      var chave = pessoa.chave;
      return "".concat(chave.nome, " ").concat(chave.id, " ").concat(chave.estaLogado(), " ").concat(chave.horasAcumuladasNoMes);
    }
  }, {
    key: "executaCode",
    value: function executaCode(codeInput, button, registro) {
      button.addEventListener('click', function () {
        var _iterator2 = _createForOfIteratorHelper(registro),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var pessoa = _step2.value;
            var chave = pessoa.chave;
            if (codeInput.value === chave.id) {
              chave.registraEntrada();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
    }
  }]);
  return Funcionario;
}();
var Agenda = /*#__PURE__*/function () {
  function Agenda(mes) {
    _classCallCheck(this, Agenda);
    this.mes = mes;
    this.tabela = [];
  }
  _createClass(Agenda, [{
    key: "addTabela",
    value: function addTabela(funcionario) {
      var funId = funcionario.id;
      var objeto = {
        id: funId,
        horasTotais: 0
      };
      this.tabela.push(objeto);
    }
  }, {
    key: "salvaHorasTotais",
    value: function salvaHorasTotais(funcionario) {
      var _iterator3 = _createForOfIteratorHelper(this.tabela),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var registradoTabela = _step3.value;
          var id = registradoTabela.id;
          if (id == funcionario.id) {
            registradoTabela.horasTotais += funcionario.horasAcumuladasNoMes;
            funcionario.resetHoras();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);
  return Agenda;
}();

// // Show case
// const f1 = new Funcionario('123', 'Victor');
// const f2 = new Funcionario('321', 'Rotciv');
// const janeiro = new Agenda('Jan');
// janeiro.addTabela(f1);
// janeiro.addTabela(f2);
// console.log(f1);
// f1.registraEntrada()
// console.log(f1);
// f1.registraEntrada()
// console.log(f1);

/***/ }),

/***/ "./src/modules/marcaPonto/visu.js":
/*!****************************************!*\
  !*** ./src/modules/marcaPonto/visu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Relogio)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Relogio = /*#__PURE__*/function () {
  function Relogio(botao) {
    _classCallCheck(this, Relogio);
    this.date = new Date();
    this.h2 = document.querySelector('.marca-ponto h2');
    this.h1 = document.querySelector('.marca-ponto h1');
    this.setDate();
    this.renewDate();
    this.botao = botao;
  }
  _createClass(Relogio, [{
    key: "setDate",
    value: function setDate() {
      var opcoes = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      var brDate = this.date.toLocaleDateString('pt-BR', opcoes);
      if (brDate != this.h2.innerHTML) {
        this.h2.innerHTML = brDate;
      }
      var hours = this.date.toLocaleTimeString('pt-BR');
      this.h1.innerHTML = hours;
    }
  }, {
    key: "renewDate",
    value: function renewDate() {
      var _this = this;
      setInterval(function () {
        _this.date = new Date();
        _this.setDate();
      }, 1000);
    }
  }, {
    key: "criaLi",
    value: function criaLi() {
      var li = document.createElement('li');
      return li;
    }
  }, {
    key: "addLi",
    value: function addLi(texto) {
      var li = this.criaLi();
      li.innerText = texto;
      this.funcionarios.appendChild(li);
    }
  }, {
    key: "mostraRegistroNaTela",
    value: function mostraRegistroNaTela(texto) {
      this.botao.addEventListener('click', this.addLi(texto));
    }
  }]);
  return Relogio;
}();


/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ timer)
/* harmony export */ });
function timer(relogio) {
  var segundos = 0;
  var timer;
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }
  function criaHoraDosSegundos(segundos) {
    var data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    });
  }
  document.addEventListener('click', function (e) {
    var el = e.target;
    if (el.classList.contains('zerar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }
  });
}

/***/ }),

/***/ "./src/modules/validaform/validaCPF.js":
/*!*********************************************!*\
  !*** ./src/modules/validaform/validaCPF.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidaCPF)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ValidaCPF = /*#__PURE__*/function () {
  function ValidaCPF(cpfEnviado) {
    _classCallCheck(this, ValidaCPF);
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }
  _createClass(ValidaCPF, [{
    key: "\xE9Sequencia",
    value: function éSequencia() {
      return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
  }, {
    key: "geraNovoCPF",
    value: function geraNovoCPF() {
      var cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      var digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      var digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }
  }, {
    key: "valida",
    value: function valida() {
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo != 'string') return false;
      if (this.cpfLimpo.length != 11) return false;
      if (this.éSequencia()) return false;
      this.geraNovoCPF();
      return this.novoCpf === this.cpfLimpo;
    }
  }], [{
    key: "geraDigito",
    value: function geraDigito(cpfSemDigitos) {
      var cpfArray = Array.from(cpfSemDigitos);
      var revers = cpfArray.length + 1;
      var total = cpfArray.reduce(function (ac, val) {
        ac += revers * Number(val);
        revers--;
        return ac;
      }, 0);
      var digito = 11 - total % 11;
      return digito <= 9 ? String(digito) : '0';
    }
  }]);
  return ValidaCPF;
}(); // const validacpf = new ValidaCPF('336.987.488-19');
// // const validacpf = new ValidaCPF('111.111.111-11');
// console.log(validacpf.valida());
// console.log(validacpf)


/***/ }),

/***/ "./src/modules/validaform/validaform.js":
/*!**********************************************!*\
  !*** ./src/modules/validaform/validaform.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidaFormulario)
/* harmony export */ });
/* harmony import */ var _validaCPF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validaCPF */ "./src/modules/validaform/validaCPF.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ValidaFormulario = /*#__PURE__*/function () {
  function ValidaFormulario(formulario) {
    _classCallCheck(this, ValidaFormulario);
    this.formulario = formulario;
    this.eventos();
  }
  _createClass(ValidaFormulario, [{
    key: "eventos",
    value: function eventos() {
      var _this = this;
      this.formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        _this.handleSubmit(e);
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var camposValidos = this.camposSaoValidos();
      var senhasValidas = this.senhasSaoValidas();
    }
  }, {
    key: "senhasSaoValidas",
    value: function senhasSaoValidas() {
      var valido = true;
      var senha = this.formulario.querySelector('.senha');
      var repetirSenha = this.formulario.querySelector('.repetir-senha');
      if (senha.value !== repetirSenha.value) {
        valido = false;
        this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
        this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
      }
      if (senha.value.length < 6 || senha.value.length > 12) {
        valido = false;
        this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres');
      }
      return valido;
    }
  }, {
    key: "camposSaoValidos",
    value: function camposSaoValidos() {
      var valido = true;
      var _iterator = _createForOfIteratorHelper(this.formulario.querySelectorAll('.error-txt')),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var errorText = _step.value;
          errorText.remove();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(this.formulario.querySelectorAll('.validar')),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var campo = _step2.value;
          var label = campo.previousElementSibling.innerText;
          if (!campo.value) {
            this.criaErro(campo, "Campo \"".concat(label, "\" n\xE3o pode estar em branco."));
            valido = false;
          }
          if (campo.classList.contains('cpf')) {
            if (!this.validaCPF(campo)) valido = false;
          }
          if (campo.classList.contains('usuario')) {
            if (!this.validaUsuario(campo)) valido = false;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return valido;
    }
  }, {
    key: "validaUsuario",
    value: function validaUsuario(campo) {
      var usuario = campo.value;
      var valido = true;
      if (usuario.length < 3 || usuario.length > 12) {
        this.criaErro(campo, 'Usuário deverá ter entre 3 e 12 caracteres');
        valido = false;
      }
      if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
        this.criaErro(campo, 'Usuário só poderá conter letras e/ou números');
        valido = false;
      }
      ;
      return valido;
    }
  }, {
    key: "validaCPF",
    value: function validaCPF(campo) {
      var cpf = new _validaCPF__WEBPACK_IMPORTED_MODULE_0__["default"](campo.value);
      if (!cpf.valida()) {
        this.criaErro(campo, 'CPF Inválido.');
        return false;
      }
      return true;
    }
  }, {
    key: "criaErro",
    value: function criaErro(campo, msg) {
      var div = document.createElement('div');
      div.innerHTML = msg;
      div.classList.add('error-txt');
      campo.insertAdjacentElement('afterend', div);
    }
  }]);
  return ValidaFormulario;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --primary-color: rgb(15, 96, 189);\r\n    --primary-color-darker: rgb(14, 58, 116);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    padding: 10px;\r\n  }", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,wCAAwC;AAC5C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,aAAa;EACf","sourcesContent":[":root {\r\n    --primary-color: rgb(15, 96, 189);\r\n    --primary-color-darker: rgb(14, 58, 116);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\n.grid-container {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    padding: 10px;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_carregador__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carregador */ "./src/modules/carregador.js");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");


var paginaAtual = '';
document.addEventListener('click', function (e) {
  var el = e.target;
  var tag = el.tagName.toLowerCase();
  if (tag === 'a') {
    var href = el.getAttribute('href');
    e.preventDefault();
    paginaAtual = href;
    axios(href).then(function (resposta) {
      return carregaResultado(resposta.data);
    });
    (0,_modules_carregador__WEBPACK_IMPORTED_MODULE_0__["default"])(paginaAtual);
  }
});
function carregaResultado(response) {
  var resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map