
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
