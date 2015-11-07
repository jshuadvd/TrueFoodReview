var Sequelize = require('sequelize');
var express = require('express');

var sequelize = new Sequelize('mydb', 'student', 'ilovetesting', {
  host: 'localhost',
  dialect: 'postgres'
});

// HERE'S THE ONE TABLE WITH ALL DATA
var PlaceYelp = sequelize.define('placeYelp', {
  name: {type: Sequelize.STRING},
  rating: {type: Sequelize.FLOAT},
  review_count: {type: Sequelize.INTEGER},
  lat: {type: Sequelize.FLOAT},
  long: {type: Sequelize.FLOAT},
  address: {type: Sequelize.STRING},
  city: {type: Sequelize.STRING},
  state: {type: Sequelize.STRING},
  postal_code: {type: Sequelize.INTEGER}
});

sequelize.authenticate().then(function(err, data) {
  console.log('Connected with PostgreSQL');
}).catch(function(err) {
  console.log(err.message);
});



module.exports =



function(data)  {
  Place.sync().then(function() {
    data.forEach(function(item) {
      var result = {
        name: item.name,
        rating: item.rating,
        review_count: item.review_count,
        lat: item.lat,
        long: item.long,
        address: item.address[0],
        city: item.city,
        state: item.state,
        postal_code: item.postal_code
      };
      Place.create(result).then(function() {
        // console.log("YESSS");
      });
    });
  });
};
