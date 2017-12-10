<template>
  <div class="app">
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
    <b-loading :active.sync="isLoading" :canCancel="false"></b-loading>
    <v-paginator :resource_url="resource_url" ref="vpaginator" @update="updateResource" @request_start="startLoading" @request_finish="finishLoading" @request_error="errorLoading"></v-paginator>
  </div>
</template>

<script>
var _ = require('lodash');
import VuePaginator from './components/Paginator.vue'
export default {
  data () {
    return {
      users: [],
      resource_url: '/api/users/list/?search=',
      search: '',
      isLoading: false
    }
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
    updateResource(data){
      this.users = data
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
    _replaceUrl: function (url, paramName, paramValue){
      if(paramValue == null)
          paramValue = '';
      var pattern = new RegExp('\\b('+paramName+'=).*?(&|$)')
      if(url.search(pattern)>=0){
          return url.replace(pattern,'$1' + paramValue + '$2');
      }
      url = url.replace(/\?$/,'');
      return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue
    }
  }
}
</script>
