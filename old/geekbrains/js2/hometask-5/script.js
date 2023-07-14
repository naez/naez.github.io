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

  $('.posts').prepend(
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

  $('.posts').append(
    '<div class="showHideGlobal">\
      <button class="btn btn--green hideAllPostBody">Свернуть все</button>\
      <button class="btn btn--green showAllPostBody">Развернуть все</button>\
    </div>'
  );
  $('.hideAllPostBody').on('click', function () {
    $('.post-body').slideUp(300);
    $('.hidePostBody').text('Развернуть')
  })
  $('.showAllPostBody').on('click', function () {
    $('.post-body').slideDown(300)
    $('.hidePostBody').text('Свернуть')
  })

  $('.comment-input').on('keyup', function (e) {
    var keyCode = e.keyCode;

    if (keyCode == 13) {
      var data = $(this).data();
      var postId = data.id;
      var value = e.target.value;
      self.addComment(value, postId)
    }
  });

  $('.addPost').on('click', function () {

      var title = $('.add-title').val();
      var text = $('.add-text').val();

      if (title)
        self.addPost(title, text)
      else
        $('.add-title').addClass('error')
  });

  $('.hidePostBody').on('click', function () {
    let postBody =  $(this).closest('.post-item').find('.post-body');

    postBody.slideToggle(300);
    $(this).text(changeText($(this).text()))
  })
}

function changeText(param) {
  return param=='Свернуть'?'Развернуть':'Свернуть'
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

  return '<div class="post-item">\
            <h3>' + this.title + '</h3>\
            <div class="post-body">\
              <p>' + this.body + '</p>\
              <div class="comments-box">' + commentsHtml + '</div>\
              <input type="text" class="form-control comment-input" placeholder="Добавить коммент" data-id="' + this.id + '"/>\
            </div>\
            <button class="btn btn--green btn--medium hidePostBody">Свернуть</button>\
          </div>';
}

var blog = new Blog();

blog.fetchPosts(function () {
  blog.fetchComments(function () {
    blog.renderPosts()
  });
});
