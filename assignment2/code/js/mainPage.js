// Code for the main app page (locations list).

// This is sample code to demonstrate navigation.
// You need not use it for final app.

function viewLocation(locationName){
    
    for(var i = 1; i<10;i++){
        localStorage.setItem(i+"-eslectedLocation",locationName)
        location.href = "viewlocation.html";
    }
    
}

var location = [];

var data={
    latitude:"",
    longitude:"",
    callback:""    
}

jsonpRequest("https://api.forecast.io/forecast/0e19508473250478b7081491e9157ba2/", data);

function jsonpRequest ( url , data){
    
    var params = "";
    
    params = params + data.latitude + "," +data.longitude;
    
    var script = document.createElement("script");
    script.src = url + params;
    document.bodu.appendChild(script)
}

function weatherResponse(locationarray)
{
    location = locationarray
    
    
}