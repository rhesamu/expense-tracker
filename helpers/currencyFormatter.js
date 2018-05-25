function currencyFormatter(column) {

  return 'Rp.' + column.toLocaleString(['ID', 'id']);


}

module.exports = currencyFormatter
