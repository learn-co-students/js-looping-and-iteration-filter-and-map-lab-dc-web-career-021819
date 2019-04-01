// Code your solution here:
function driversWithRevenueOver(obj, revenue) {
  return obj.filter(function(d){return d.revenue > revenue;});
}

function driverNamesWithRevenueOver(obj, revenue) {
  return driversWithRevenueOver(obj, revenue).map(function(n){ return n.name; });
}

function exactMatch(obj, obj2) {
  return obj.filter(function(d){
    for (key in obj2){
      return d[key] === obj2[key];
    }
  });
}

function exactMatchToList(obj, obj2) {
  return exactMatch(obj, obj2).map(function(n){
    return n.name;
  });
}
