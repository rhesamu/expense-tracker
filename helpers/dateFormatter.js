function dateFormatter(dt) {
  return dt.getMonth( ) + 1 +'/'+ dt.getDate( ) + '/' +dt.getFullYear( );
}

module.exports = dateFormatter