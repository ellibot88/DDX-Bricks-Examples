// DDX Bricks Wiki - See https://developer.domo.com/docs/ddx-bricks
// for tips on getting started, linking to Domo data and debugging your app
 
//Available globals
var domo = window.domo;
var datasets = window.datasets;
var test = document.getElementById("myDiv");

//Step 1. Select your dataset(s) from the button in the bottom left corner


var config = {
  method: 'get',
  url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
  headers: { }
};

axios(config)
.then(function (response) {
  test.innerHTML = JSON.stringify(response.data)
})
.catch(function (error) {
  console.log(error);
});


//Step 2. Query your dataset(s): https://developer.domo.com/docs/dev-studio-references/data-api
var fields = ['state', 'revenue'];
var groupby = ['state'];
var query = `/data/v1/${datasets[0]}?fields=${fields.join()}&groupby=${groupby.join()}`;
domo.get(query).then(handleResult);



//Step 3. Do something with the data from the query result
function handleResult(data){
  console && console.log(data);
}