var router = require('koa-router')();

router.get('/', function *(next)
{
      var data = {
            tabTitle:'Sarg | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            title:'Southern Arizona<br>Rain Gutters, Inc.'
      };

      yield this.render('index', data);
})
.get('/about', function *(next)
{
      var data = {
            tabTitle: 'About | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            title: 'About'
      };

      yield this.render('about', data);
})
.get('/contact', function *(next)
{
      var queryMsg = this.request.query.confirmation;
      var data = {
            tabTitle: 'Contact | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            title: 'Contact',
            formMsg: queryMsg
      };

      yield this.render('contact', data);
})
.post( '/confirmation', function *(next)
{
      var body = yield parse.form(this);

      var transporter = nm.createTransport(nmdt());
      var mailOptions = {
            from: 'Verge <contact.form@sarg.com',
            to: 'vergewd@gmail.com',
            subject: 'Inquiry',
            html: 'First Name: '+body.firstname+'<br>'+'Last Name: '+body.lastname+'<br>'+'Phone: '+body.phone+'<br>'+'Email: '+body.email+'<br>'+'Message: '+body.message
      }
      transporter.sendMail(mailOptions, function(error,info){
            if (error) {
                  console.log(error);
            }else{
                  console.log(info);
            }
      });
      this.redirect('/contact/?confirmation=Your+Inquiry+Was+Sent');
})
.get('rain-gutters', function *(next)
{
      var data = {
            tabTitle: 'Rain Gutters | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            title: 'Rain Gutters'
      };
      yield this.render('rain-gutters', data);
})
.get('rain-harvesting', function *(next)
{
      var data = {
            tabTitle: 'Rain Harvesting | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            title: 'Rain Harvesting'
      };
      yield this.render('rain-harvesting', data);
})
.get('greenhouses', function *(next)
{
      var data = {
            tabTitle: 'Greenhouses | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            title: 'Greenhouses'
      };
      yield this.render('greenhouses', data);
})
.get('screen-enclosures', function *(next)
{
      var data = {
            tabTitle: 'Screen Enclosures | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            title: 'Screen Enclosures'
      };
      yield this.render('screen-enclosures', data);
})
.get('faq', function *(next)
{
      var data = {
            tabTitle: 'FAQ | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            title: 'FAQ'
      };
      yield this.render('faq', data);
})
.get('aluminum-gutters', function *(next)
{
      var data = {
            tabTitle: 'Aluminum Gutters | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            title: 'Aluminum Gutters'
      };
      yield this.render('aluminum-gutters', data);
});

module.exports = router;
