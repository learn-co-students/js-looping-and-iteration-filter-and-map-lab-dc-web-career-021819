// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  let newArray
  newArray = drivers.filter(driver =>  driver.revenue > revenue
  )
  return newArray
}

function driverNamesWithRevenueOver(drivers, revenue){
  let newArray
  let outputArray
  newArray = driversWithRevenueOver(drivers, revenue)
  outputArray = newArray.map(function(driver){
    return driver.name
  })
  return outputArray
}

function exactMatch(drivers, object){
  key = Object.keys(object)
  let newArray = drivers.filter(driver=>driver[key] === object[key])
  return newArray
}

function exactMatchToList(drivers, object){
  let key = Object.keys(object)
  let newArray = exactMatch(drivers, object)
  let outputArray = newArray.map(function(driver){
    return driver.name
  })
  return outputArray
}
