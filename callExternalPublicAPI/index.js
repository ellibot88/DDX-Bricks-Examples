
var domo = window.domo;
var datasets = window.datasets;
var test = document.getElementById("myDiv");
var list = document.getElementById("list");



var config = {
  method: 'get',
  url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson',
  headers: { }
};

axios(config)
.then(function (response) {
  //test.innerHTML = JSON.stringify(response.data)
  let domo = response.data.features
  console.log(domo)
  for(let i = 0; i<domo.length; i++){
    
    const item = document.createElement("li");
    item.innerText = `${domo[i].properties.place}: ${domo[i].properties.mag} magnitude`
    list.appendChild(item)
    
  }
})
.catch(function (error) {
  console.log(error);
});



var fields = ['state', 'revenue'];
var groupby = ['state'];
var query = `/data/v1/${datasets[0]}?fields=${fields.join()}&groupby=${groupby.join()}`;
domo.get(query).then(handleResult);



function handleResult(data){
  console && console.log(data);
}