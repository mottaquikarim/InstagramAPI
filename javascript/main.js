/* CURRENTLY IN: javascript/main.js */
var accessToken = 'YOUR_ACCESS_TOKEN';

var instaSearch = InstagramAPI.init( accessToken );
instaSearch.endpoint(
    'media/search',
    {
        lat: 40.707840135059854,
        lng: -74.01120185852051,
        distance: 200
    },
    function(data){
        for(x in data.data){
          $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>');  
        }
    },
    function(error){
        console.log('failed ', error);
    }
);
