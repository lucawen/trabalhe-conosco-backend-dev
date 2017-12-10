<template>
  <section>
    <b-pagination
        :total="count"
        :current.sync="current_page"
        :per-page="page_size"
        @change='changeOptions'>
    </b-pagination> <p class="is-size-7	">Total de {{last_page}} páginas</p>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    resource_url: {
      type: String,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      current_page: '',
      last_page: '',
      count: '',
      next_page_url: '',
      prev_page_url: '',
      page_size: '',
      config: {
          remote_data: 'data',
          remote_current_page: 'current_page',
          remote_last_page: 'last_page',
          remote_next_page_url: 'next_page_url',
          remote_prev_page_url: 'prev_page_url',
          remote_page_size: 'page_size',
          remote_count: 'count'
      }
    }
  },
  methods: {
    changeOptions: function (val) {
      if (val == 'Infinity')
        return;
      var self = this;

      if(val - self.current_page == 1){
        self.fetchData(self.next_page_url);
      } else if (val - this.current_page == -1){
        self.fetchData(self.prev_page_url);
      } else if (val == 1){
        self.fetchData(self.resource_url);
      } else {
        self.fetchData(self._replaceUrl(self.resource_url, 'page', val));
      }
      self.current_page = val;
    },
    fetchData: function (pageUrl) {
      this.$emit("request_start");
      pageUrl = pageUrl || this.resource_url
      var self = this;
      var config = {};
      if(this.config.headers) {
          config.headers = this.config.headers;
      }
      axios.get(pageUrl, config)
      .then(function (response) {
        self.$emit("request_finish",response);
        self.handleResponseData(response.data)
      }).catch(function (response) {
        self.$emit("request_error",response);
        console.log('Fetching data failed.', response)
      })
    },
    handleResponseData: function (response) {
      var self = this;
      this.makePagination(response)
      var data = self._getNestedValue(response, this.config.remote_data)
      this.$emit('update', data)
    },
    makePagination: function (data) {
      var self = this;
      this.current_page = self._getNestedValue(data, this.config.remote_current_page)
      this.last_page = self._getNestedValue(data, this.config.remote_last_page)
      this.count = self._getNestedValue(data, this.config.remote_count)
      this.page_size = self._getNestedValue(data, this.config.remote_page_size)
      this.next_page_url = (this.current_page === this.last_page) ? null : self._getNestedValue(data, this.config.remote_next_page_url);
      this.prev_page_url = (this.current_page === 1) ? null : self._getNestedValue(data, this.config.remote_prev_page_url);
    },
    initConfig: function (){
      this.config = this._merge_objects(this.config, this.options)
    },
    _merge_objects: function (obj1, obj2) {
      var obj3 = {};
      for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
      for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
      return obj3;
    },
    _getNestedValue: function (obj, path) {
      var originalPath = path
      path = path.split('.')
      var res = obj
      for (var i = 0; i < path.length; i++) {
        res = res[path[i]]
      }
      if(typeof res == 'undefined') console.log(`[VuePaginator] Response doesn't contain key ${originalPath}!`)
      return res
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
  },
  watch : {
    resource_url () {
      this.fetchData()
    }
  },
  created () {
    this.initConfig()
    this.fetchData()
  }
}
</script>
