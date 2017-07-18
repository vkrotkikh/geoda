(function($) {
    $(document).ready(function() {
        $(".button-collapse").sideNav();
    });

    ////// google maps

    var myCenter = new google.maps.LatLng(32.074552, 34.775707);
    var mapProp = {
        center: new google.maps.LatLng(32.074552, 34.775707),
        zoom: 17,
        scrollwheel: false,
        styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#444444"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                        "saturation": "-100"
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#4f9dc3"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [{
                        "color": "#010000"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c8e6ee"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]

    };
    var image = '../images/ico-marker.png';
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
            position: myCenter,
            map: map,
            icon: image
        });

    //// materialize select

    $('select').material_select();

})(jQuery);