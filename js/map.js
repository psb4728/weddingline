// 카카오 지도
var mapContainer = document.getElementById('map'), 
  mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), 
    level: 3 
  };  
  
var map = new kakao.maps.Map(mapContainer, mapOption); 
var geocoder = new kakao.maps.services.Geocoder();


geocoder.addressSearch('대전광역시 유성구 동서대로 639', function(result, status) {
  if (status === kakao.maps.services.Status.OK) {

    var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    var marker = new kakao.maps.Marker({
      map: map,
      position: coords
    });

    map.setCenter(coords);
  } 
}); 

// Kakao.init('b0d456a0fa6a12dd35daf0b8fb049ccb'); // 사용하려는 앱의 JavaScript 키 입력

// function startNavigation() {
//   Kakao.Navi.start({
//     name: '현대백화점 판교점',
//     x: 127.11205203011632,
//     y: 37.39279717586919,
//     coordType: 'wgs84',
//   });
// }