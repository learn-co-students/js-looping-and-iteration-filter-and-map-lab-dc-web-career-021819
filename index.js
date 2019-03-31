// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(sally){
    if (sally.revenue > revenue) {
      return sally
    }
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  batchRevenue = []
  drivers.map(function (sally) {
    if (sally.revenue > revenue) {
      batchRevenue.push(sally.name)
    }
  })
  return batchRevenue
}

function exactMatch(driversArray, match) {
  matchByKey = Object.keys(match)[0]
  return driversArray.filter(driver => driver[matchByKey] == match[matchByKey])
}

function exactMatchToList(driversArray, match){
  matchByKey = Object.keys(match)[0]
  driverResults = driversArray.filter(driver => driver[matchByKey] == match[matchByKey])
  return driverResults.map(driver => driver.name)
}
