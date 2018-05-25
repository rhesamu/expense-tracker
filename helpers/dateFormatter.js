function dateFormatter(date) {
  // return dt.getMonth( ) + 1 +'/'+ dt.getDate( ) + '/' +dt.getFullYear( );
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

 var day = date.getDate();
 var monthIndex = date.getMonth();
 var year = date.getFullYear();

 return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

module.exports = dateFormatter