const request = require('request');

var geocodeAddress = (address) => {

  var encodedAddress = encodeURIComponent(argv.address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {

      if(error) {
        console.log('Unable to connect..');
      }else if(body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address.');
      }else if (body.status === 'OK'){
        console.log(body.results[0].geometry.location.lat);
        console.log(body.results[0].geometry.location.lng);
      }

  }
});

module.exports.geocodeAddress = geocodeAddress;
