/*
var req1 = new XMLHttpRequest();
var url = "http://api.eia.gov/category/?";
var api_key = "api_key=45AF218653356B8673FD6F039FC9AB94";
var query = "&category_id=371";

req1.open("GET", url + api_key + query, true);
req1.addEventListener('load', function() {
    var response = JSON.parse(req1.responseText);
    console.log(response);
})
req1.send(null);
*/

/*
var req = new XMLHttpRequest();
var url = "http://api.eia.gov/";
var type = "series/?";
var api_key = "api_key=45AF218653356B8673FD6F039FC9AB94";
var query = "&series_id=TOTAL.NUETSUS.A";

req.open("GET", url + type + api_key + query, true);
req.addEventListener('load', function() {
    var response = JSON.parse(req.responseText);
    console.log(response);
});
req.send(null);
*/

var req = new XMLHttpRequest();
var url = "http://api.eia.gov/";
var type = "series/?";
var api_key = "api_key=45AF218653356B8673FD6F039FC9AB94";
var query = "&series_id=TOTAL.NUETSUS.A;ELEC.GEN.NUC-VA-99.A";
req.open("POST", url + type + api_key, true);
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.addEventListener('load', function(){
    var response = JSON.parse(req.responseText);
    console.log(response)
});
req.send(query);







/*
document.addEventListener('DOMContentLoaded', bindButtons);
function bindButtons(){
    document.getElementById('submit1').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    //var url = "http://api.eia.gov/series/?";
    var url = "http://api.eia.gov/category/?";
    var api_key = "api_key=45AF218653356B8673FD6F039FC9AB94";
    var query = "&category_id=371";
    //var query = "&series_id=INTL.27-7-USA-MK.A";
    req.open("GET", url + api_key + query, true);
    req.addEventListener('load', function(){
    if(req.status >= 200 && req.status < 400) {
        var response = JSON.parse(req.responseText);
        console.log(response);
    } else {
        console.log("Error in network request: " + request.statusText);
    }});
    req.send(null);
    event.preventDefault();
    });
};
*/


