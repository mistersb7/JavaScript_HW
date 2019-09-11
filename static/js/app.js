// Assign data from data.js to ufodata variable
var ufodata = data;
// Get a reference to the table body
var tbody = d3.select("tbody");

//Set default table data
ufodata.forEach((x) => {
  var row = tbody.append("tr");
  Object.entries(x).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
// // Select the button
var button = d3.select("#button");
button.on("click", function filter() {

//Clear Table of default or filtered data
var myTable = document.getElementById("ufo-table");
var rowCount = myTable.rows.length;
for (var x=rowCount-1; x>0; x--) {
   myTable.deleteRow(x);
}

//--------------------------------------------------------------------------------------------------------------
//Set headers to loop through
const headers= ['datetime','city','state','country','shape'];
var filteredheaders= new Array();
//Loop through headers array and append to new array which stores headers with input values from the HTML
for (i =0; i <headers.length;i++){
  var inputvalue= document.getElementById(headers[i]).value;
  if(inputvalue==""|| inputvalue==null){}
  else{
    filteredheaders.push(headers[i]);
    // console.log(filteredheaders);
  }
};

// console.log(headers);
// console.log(filteredheaders);
// for(i=0; i<filteredheaders.length; i++){
//   console.log(filteredheaders[i]);
//   var inputValue = document.getElementById("city").value;
//   console.log(inputvalue);
// };

var inputValue = document.getElementById(filteredheaders[0]).value;
console.log(inputValue);
console.log(filteredheaders[0]);

console.log(filteredheaders.length);
//--------------------------------------------------------------------------------------------------------------------

// // Get input value from each filter
// var inputValue = document.getElementById("city").value;
// // console.log(inputValue);

// //Filter data by input value
// var filtereddata = ufodata.filter(x => x.city === inputValue);
// // console.log(filtereddata);

// //Append to table using filtered data
// filtereddata.forEach((x) => {
//   var row = tbody.append("tr");
//   Object.entries(x).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });

// Get input value from each element in filteredheaders
// for (i =0; i <filteredheaders.length;i++){
// var filtereddata=[]
var inputArray= new Array();
for (i =0; i<filteredheaders.length;i++){
  var inputValue = document.getElementById(filteredheaders[i]).value;
  inputArray.push(inputValue);
  console.log(inputArray);
};

var i;
var headerskey;
var inputskey;
var filterdata= {}
for (i =0; i<filteredheaders.length;i++){
  headerskey= filteredheaders[i];
  inputskey= inputArray[i];
  filterdata[headerskey]= inputskey;
};

console.log(filterdata);
console.log(ufodata);

var filtereddata = ufodata.filter(search,filterdata);
function search(user){
  return Object.keys(this).every((key) => user[key] === this[key]);

};

console.log(filtereddata)
// var filtereddata= ufodata.filter(function(item){
//   for (var key in )

// });
//   function(value){
//     return value === inputValue;
//   }
// //Filter data by input value
//   var filtereddata = ufodata.filter(function(x){
//     var blah= filteredheaders[i];
//     var xx= "x.${header}"
//     return x.blah === inputValue
//   });
//   console.log(filtereddata);
  // filtereddata.push(filtered);

//Append to table using filtered data
filtereddata.forEach((x) => {
  var row = tbody.append("tr");
  Object.entries(x).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

}); 

//-----------------------------------------------------------------------------------------------------------------------
//Clear Filters(s) Button
var clearbutton = d3.select("#clear");
clearbutton.on("click", function filter() {
//Clear Table of default or filtered data
var myTable = document.getElementById("ufo-table");
var rowCount = myTable.rows.length;
for (var x=rowCount-1; x>0; x--) {
   myTable.deleteRow(x);
}
//Append default data
  ufodata.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
