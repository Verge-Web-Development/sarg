var router = require('koa-router')();

router.get('/', function *(next)
{
      var data = {
            tabTitle:'Sarg | Rain Gutters and Rainwater Harvesting in Southern Arizona',
      };

      yield this.render('index', data);
})
.get('/about', function *(next)
{
      var data = {
            tabTitle: 'About | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            pageTitle: 'About Us'
      };

      yield this.render('about', data);
})
.get('/contact', function *(next)
{
      var queryMsg = this.request.query.confirmation;
      var data = {
            tabTitle: 'Contact | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            pageTitle: 'Contact',
            formMsg: queryMsg
      };

      yield this.render('contact', data);
})
.post('/confirmation', function *(next)
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
.get('/rain-gutters', function *(next)
{
      var data = {
            tabTitle: 'Rain Gutters | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            pageTitle: 'Rain Gutters'
      };
      yield this.render('rain-gutters', data);
})
.get('/rain-harvesting', function *(next)
{
      var data = {
            tabTitle: 'Rain Harvesting | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            pageTitle: 'Rain Harvesting'
      };
      yield this.render('rain-harvesting', data);
})
.get('/greenhouses', function *(next)
{
      var data = {
            tabTitle: 'Greenhouses | Rain Gutters and Rainwater Harvesting in Southern Arizona',
            pageTitle: 'Greenhouses'
      };
      yield this.render('greenhouses', data);
})
.get('/screen-enclosures', function *(next)
{
      var data = {
            tabTitle: 'Screen Enclosures | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Screen Enclosures'
      };
      yield this.render('screen-enclosures', data);
})
.get('/faq', function *(next)
{
      var data = {
            tabTitle: 'FAQ | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'FAQ'
      };
      yield this.render('faq', data);
})
.get('/photos', function *(next)
{
      var data = {
            tabTitle: 'Photos | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Photos'
      };
      yield this.render('photos', data);
})
.get('/aluminum-gutters', function *(next)
{
      var data = {
            tabTitle: 'Aluminum Gutters | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Aluminum Gutters'
      };
      yield this.render('aluminum-gutters', data);
})
.get('/copper-gutters', function *(next)
{
      var data = {
            tabTitle: 'Copper Gutters | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Copper Gutters'
      };
      yield this.render('copper-gutters', data);
})
.get('/header-boxs', function *(next)
{
      var data = {
            tabTitle: 'Header Boxs | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Header Boxs'
      };
      yield this.render('header-boxs', data);
})
.get('/rainwater-harvesting-benefits', function *(next)
{
      var data = {
            tabTitle: 'Rainwater Harvesting Benefits | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Rainwater Harvesting Benefits'
      };
      yield this.render('rainwater-harvesting-benefits', data);
})
.get('/how-rain-harvesting-works', function *(next)
{
      var data = {
            tabTitle: 'How Rain Harvesting Works | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'How Rain Harvesting Works'
      };
      yield this.render('how-rain-harvesting-works', data);
})
.get('/plastic-tanks', function *(next)
{
      var data = {
            tabTitle: 'Plastic Tanks | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Plastic Tanks'
      };
      yield this.render('plastic-tanks', data);
})
.get('/culvert-cisterns', function *(next)
{
      var data = {
            tabTitle: 'Culvert Cisterns | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Culvert Cisterns'
      };
      yield this.render('culvert-cisterns', data);
})
.get('/stainless-steel-tanks', function *(next)
{
      var data = {
            tabTitle: 'Stainless Steel Tanks | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Stainless Steel Tanks'
      };
      yield this.render('stainless-steel-tanks', data);
})
.get('/stainless-steel-tanks', function *(next)
{
      var data = {
            tabTitle: 'Stainless Steel Tanks | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Stainless Steel Tanks'
      };
      yield this.render('stainless-steel-tanks', data);
})
.get('/underground-tanks', function *(next)
{
      var data = {
            tabTitle: 'Underground Tanks | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Underground Tanks'
      };
      yield this.render('underground-tanks', data);
})
.get('/commercial-tanks', function *(next)
{
      var data = {
            tabTitle: 'Commercial Tanks | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Commercial Tanks'
      };
      yield this.render('commercial-tanks', data);
})
.get('/rain-calculator', function *(next)
{
      var data = {
            tabTitle: 'Rain Calculator | Rain Gutters and Rainwater Harvesting in Southern Arizona',
           pageTitle: 'Rain Calculator'
      };
      yield this.render('rain-calculator', data);
});

module.exports = router;
