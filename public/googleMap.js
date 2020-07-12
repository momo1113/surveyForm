function initAutocomplete() {
  const apiKey = "AIzaSyCRGdlTqk5HOT3O4OHXb1FBUycEuyRM9Ho";

  if (localStorage.getItem("address") !== null) {
    let address = localStorage.getItem("address").split(",");
    let stree = address[0];
    let city = address[1];
    let state = address[2];
    let zip = address[3];
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${stree},+${city},+${state}&key=${apiKey}`;

    //fetch api
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let lat = parseFloat(data.results[0].geometry.location.lat);
        let lng = parseFloat(data.results[0].geometry.location.lng);

        // The location of Uluru
        var uluru = { lat: lat, lng: lng };
        // The map, centered at Uluru
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13,
          center: uluru,
        });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log("no address avalibale");
  }
}
