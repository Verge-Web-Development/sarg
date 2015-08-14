var router = require('./routes');
var nm = require('nodemailer');
var nmdt = require('nodemailer-direct-transport');
var parse = require('co-body');
var compress = require('koa-compress');
var handlebars = require('koa-handlebars');
var serve = require('koa-static');
var app = require('koa')();

app.use( handlebars({}));
app.use(compress({
      filter: function (content_type) {
      return /text/i.test(content_type)
      },
      threshold: 2048,
      flush: require('zlib').Z_SYNC_FLUSH
}));

app.use( serve(__dirname + '/public/') );
app.use( router.routes(), router.allowedMethods() );

app.listen(8080);
