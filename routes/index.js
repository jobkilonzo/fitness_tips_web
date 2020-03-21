var express = require('express');
var router = express.Router();
const Subscriber = require('../models/Subscriber');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Perfect Fit' });
});

router.get('/about', function(req, res, next){
  res.render('about', {title: 'about'})
});

router.get('/blog', function(req, res, next){
  res.render('blog', {title: 'Blog'})
});

router.get('/fitness_tips', function(req, res, next){
  res.render('fitness_tips', {title: 'Fitness Tips'})
});
router.get('/subscribe', function(req, res, next){
  res.render('subscribe', {title: 'Subscribe'})
});
router.get('/thanks', function(req, res, next){
    res.render('thanks', {title: 'Thank you'})
});
router.post('/subscriber', function(req, res, next){
  Subscriber.findOne({email: req.body.email})
      .then(subscriber => {
        if (subscriber){
          return res.status(400).json({email: 'Email already exist'})
        }else{
          const newSubscriber = new Subscriber({
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            country: req.body.country,
            email: req.body.email
          });

          newSubscriber.save()
              .then(subscriber=> res.json(subscriber))
              .catch(err => console.log(err));
        }
      });
    res.redirect('/thanks')
});

router.get('/subscribers', function(req, res, next){
  // res.render('subscribers', {title: 'Subscribers'});
  // Subscriber.find()
  //     .then(subscribers => res.json(subscribers))
  //     .catch(err => res.status(404).json({nosubscribers: "No subscriber found"}))
    Subscriber.find({}, function (err, data) {
        res.render('subscribers', {
            title: 'Subscribers',
            subscribers: data
        })
    })
});


router.get('/contacts', function(req, res, next){
  res.render('contact', {title: 'Contacts'})
});


module.exports = router;
