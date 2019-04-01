// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name)
}

function exactMatch(drivers, object) {
  return drivers.filter(driver => driver.name === object.name || driver.revenue === object.revenue)
}

function exactMatchToList(drivers, object){
  return drivers.filter(driver => driver.name === object.name || driver.revenue === object.revenue).map(driver => driver.name)
}
