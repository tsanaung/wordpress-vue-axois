new Vue({
  el: '#app',
  data: {
    posts: []
  },
  created () {

    var vm = this
    axios.get('https://globalmyanmarmedia.com/wp-json/wp/v2/posts')
      .then(function (response) {
        vm.posts = response.data
      })

  }
})
