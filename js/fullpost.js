var fullposturl = window.location.href;
fullposturl = fullposturl.substring(fullposturl.indexOf("#")+1);



new Vue({
  el: '#app',
  data: {
    posts: []
  },
  created () {

    var vm = this
    axios.get('https://globalmyanmarmedia.com/wp-json/wp/v2/posts/'+fullposturl)
      .then(function (response) {
        vm.posts = response.data
      })

  }
})
