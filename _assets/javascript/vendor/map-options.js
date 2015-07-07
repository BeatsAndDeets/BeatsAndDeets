function initialize() {
  var myLatlng = new google.maps.LatLng(41.89863,-87.982609);
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    disableDefaultUI: true,
    draggable: false,
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Beats & Deets'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);