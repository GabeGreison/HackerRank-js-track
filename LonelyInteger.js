function lonelyinteger(a) {
  let newA = a.filter((item, index) => a.indexOf(item) != index);

  let result = a.filter((item) => !newA.includes(item));

  return result[0];
}
