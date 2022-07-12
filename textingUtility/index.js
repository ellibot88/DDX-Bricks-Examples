// DDX Bricks Wiki - See https://developer.domo.com/docs/ddx-bricks
// for tips on getting started, linking to Domo data and debugging your app
 
//Available globals
var domo = window.domo;
var datasets = window.datasets;
var To = document.getElementById('domo-client-id')
var Body = document.getElementById('domo-client-secret')



//Step 1. Select your dataset(s) from the button in the bottom left corner

var submitButton = document.getElementById('submit');

submitButton.onclick = function(){
console.log(submitButton)  
var data = `To=+1${To.value}&Body=${Body.value}&From={{FROM_PHONE_NUMBER}}`;

var config = {
  method: 'post',
  url: 'https://api.twilio.com/2010-04-01/Accounts/{{TWILIO_ACCOUNT}}/Messages.json',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Authorization': 'Basic {{TWILIO_ACCOUNT}}:{{AUTH_TOKEN}}'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  To.value = "";
	Body.value = "";
})
.catch(function (error) {
  console.log(error);
});
  

  
}

//Step 2. Query your dataset(s): https://developer.domo.com/docs/dev-studio-references/data-api
var fields = ['state', 'revenue'];
var groupby = ['state'];
var query = `/data/v1/${datasets[0]}?fields=${fields.join()}&groupby=${groupby.join()}`;
domo.get(query).then(handleResult);






//Step 3. Do something with the data from the query result
function handleResult(data){
  console && console.log(data);
}