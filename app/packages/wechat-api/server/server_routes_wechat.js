console.log('in server');

Picker.route('/wechat/callback', function(params, req, res, next) {
  var content = 'hello';
  res.end(content);
});
