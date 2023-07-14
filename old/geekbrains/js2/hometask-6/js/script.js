// Blog
function Blog() {
  this.comments = [];
  this.posts = [];
}

Blog.prototype.fetchPosts = function (cb) {
  var self = this;
  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/posts',
    type: 'GET',
    // context: this
  })
  .done(function (posts) {
    self.posts = posts;
    cb();
  });
};

Blog.prototype.fetchComments = function (cb) {
  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/comments',
    type: 'GET',
    context: this
  })
  .done(function (comments) {
    this.comments = comments;
    cb();
  });
};

Blog.prototype.filterCommentsByPostId = function (id) {
  var matchComments = [];

  this.comments.forEach(function (item) {
    if(item.postId == id) {
      matchComments.push(item);
    }
  });

  return matchComments;
}

Blog.prototype.addPost = function (title, text, postId) {
  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/posts',
    type: 'POST',
    context: this,
    data: {
      title: title,
      body: text,
      postId: postId
    }
  })
  .done(function (newPost) {
    this.posts.push(newPost);
    this.renderPosts();
  });
};

Blog.prototype.addComment = function (text, postId) {
  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/comments',
    type: 'POST',
    context: this,
    data: {
      body: text,
      postId: postId
    }
  })
  .done(function (newComment) {
    this.comments.push(newComment);
    this.renderPosts();
  });
};

Blog.prototype.renderPosts = function () {
  var self = this;

  $('.posts').html('');
  this.posts.forEach(function (item) {
    var filteredComments = self.filterCommentsByPostId(item.id);
    var post = new Post(item.id, item.userId, item.title, item.body, filteredComments);
    var element = post.render();
    $('.posts').prepend(element);
  })
  $('.addPost-wrap, .autocomplete').remove();
  $('.posts').before(
    '<div class="addPost-wrap">\
      <h2>Добавить пост</h2>\
      <div class="form-group">\
        <input type="text" class="form-control add-title" placeholder="Добавить заголовок" required/>\
      </div>\
      <div class="form-group">\
        <textarea class="form-control add-text" placeholder="Добавить текст"></textarea>\
      </div>\
      <button class="btn btn--green addPost">Добавить пост</button>\
    </div>'
  );
  $('.posts').before(
    '<div class="autocomplete">\
      <h2>Введите название поста</h2>\
      <div class="form-group">\
        <input id="autocomplete" type="text" class="form-control add-title" placeholder="Добавить заголовок" required/>\
        <button class="search btn btn--medium">Поиск</button>\
      </div>\
    </div>'
  );

  $('.addPost').on('click', function () {
      let title = $('.add-title').val(),
          text = $('.add-text').val();
      if (title){
        self.addPost(title, text);
        accordionDestroy()
      }
      else
        $('.add-title').addClass('error')
  });
  accordion();

  let postTitles = [];
  $('.post-title').each(function () {
    postTitles.push($(this).text())
  });
  $("#autocomplete").autocomplete({
    source: postTitles
  });

  $('.search').on('click', function () {
    $('.post-title').filter(function(){
      return $(this).text().indexOf($("#autocomplete").val()) !== 0;
    }).hide().next().hide();
  });
  $("#autocomplete").on('keyup', function () {
    if ($("#autocomplete").val().length == 0)
      $('.post-title').show()
  });
}

function accordionDestroy() {
  $(".posts").accordion("destroy")
}
function accordion() {
  $(".posts").accordion({
    animate: 200,
    heightStyle: "content",
    active: true
  })
}

// Post
function Post(id, userId, title, body, comments) {
  this.id = id;
  this.userId = userId;
  this.title = title;
  this.body = body;
  this.comments = comments;
}


Post.prototype.render = function () {
  var commentsHtml = '';
  this.comments.forEach(function (item) {
    commentsHtml += '<p class="comment-item">' + item.body + '</p>'
  });

  return '<h3 class="post-title">' + this.title + '</h3>\
          <div class="post-item">\
            <div class="post-body">\
              <p>' + this.body + '</p>\
              <div class="comments-box">' + commentsHtml + '</div>\
            </div>\
          </div>';
}

var blog = new Blog();

blog.fetchPosts(function () {
  blog.fetchComments(function () {
    blog.renderPosts()
  });
});
