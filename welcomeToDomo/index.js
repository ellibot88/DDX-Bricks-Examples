const name = domo.env.userName.split(' ')[0]
const welcome = document.getElementById('welcome')
const dashboards = document.getElementById('dashboards')
const list = document.getElementById('list')
//console.log(welcome)


// DDX Bricks Wiki - See https://developer.domo.com/docs/ddx-bricks
// for tips on getting started, linking to Domo data and debugging your app
 
//Available globals
var domo = window.domo;
var datasets = window.datasets;

//Step 1. Select your dataset(s) from the button in the bottom left corner
welcome.insertAdjacentText('beforeend', ` ${name}`)
welcome.insertAdjacentText('beforeend', ', welcome to Domo!')



//Step 2. Query your dataset(s): https://developer.domo.com/docs/dev-studio-references/data-api
var fields = ['Object_Name', 'Object_ID'];
var groupby = ['Object_Name', 'Object_ID'];
var filter = ['Department = Customer Success Operations']
var alias = ['count=User_ID']
var query = `/data/v1/${datasets[0]}?alias=${alias.join()}&fields=${fields.join()}&groupby=${groupby.join()}&filter=${filter.join()}&limit=5`;
domo.post(`/sql/v1/${datasets[0]}`, `SELECT Object_Name, Object_ID, count(User_ID) FROM ${datasets[0]} where Department = (select Department from ${datasets[0]} where User_ID = ${domo.env.userId}) GROUP BY Object_Name, Object_ID order by count(User_ID) desc limit 5`, {contentType: 'text/plain'}).then(handleResult);



//Step 3. Do something with the data from the query result
function handleResult(data){
  console && console.log(data);
  for(let i = 0; i < data.rows.length; i++) {
	let item = document.createElement("li")
  let link = document.createElement("a")
	link.insertAdjacentText('beforeend', `${data.rows[i][0]}`)
  link.setAttribute("href",`https://armis.domo.com/page/${data.rows[i][1]}`)
  //link.setAttribute("target","_blank")
  link.referrerpolicy = "same-origin"
  //link.href=`javascript:domo.navigate('https://armis.domo.com/page/${data[i].Object_ID}',true)`
	link.target='_blank'
  item.appendChild(link)
	list.appendChild(item)
}
}
