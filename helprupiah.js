function toRp(column) {

  return 'Rp.' + column.toLocaleString(['ID', 'id']);


}

module.exports = toRp
