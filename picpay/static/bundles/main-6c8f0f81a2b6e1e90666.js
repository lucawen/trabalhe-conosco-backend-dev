/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

Vue.use(Buefy.default, {
  defaultIconPack: 'fa'
});
new Vue({
  el: '#app',
  template: `<div>
    <b-field label="Pesquisa">
        <b-input v-model="search" :disabled="isLoading"></b-input>
    </b-field>
    <table class="table is-striped table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Username</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Username</th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.username}}</td>
        </tr>
        <tr v-if="users.length == 0">
          <td colspan="3">
          <section class="section">
                  <div class="content has-text-grey has-text-centered">
                      <p>
                        <i class="fa fa-frown-o" aria-hidden="true" style="font-size: 100px;"></i>
                      </p>
                      <p>Nada encontrado.</p>
                  </div>
              </section>
          </td>
        </tr>

      </tbody>

    </table>
    <b-loading :active.sync="isLoading" :canCancel="true"></b-loading>
    <v-paginator :resource_url="resource_url" ref="vpaginator" @update="updateResource" @request_start="startLoading" @request_finish="finishLoading" @request_error="errorLoading"></v-paginator>
    </div>`,
  data() {
    return {
      users: [],
      resource_url: '/api/users/list/?search=',
      search: '',
      isLoading: false
    };
  },
  components: {
    VPaginator: VuePaginator
  },
  watch: {
    search: _.debounce(function (newVal, oldVal) {
      var self = this;
      self.resource_url = self._replaceUrl(self.resource_url, 'search', newVal);
    }, 300)
  },
  methods: {
    updateResource(data) {
      this.users = data;
    },
    startLoading: function () {
      this.isLoading = true;
    },
    finishLoading: function () {
      this.isLoading = false;
    },
    errorLoading: function () {
      this.isLoading = false;
      this.$toast.open({
        duration: 5000,
        message: `Aconteceu algum erro inesperado.`,
        type: 'is-danger'
      });
    },
    _replaceUrl: function (url, paramName, paramValue) {
      if (paramValue == null) paramValue = '';
      var pattern = new RegExp('\\b(' + paramName + '=).*?(&|$)');
      if (url.search(pattern) >= 0) {
        return url.replace(pattern, '$1' + paramValue + '$2');
      }
      url = url.replace(/\?$/, '');
      return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);