// Code your solution here:

function driversWithRevenueOver(arr, num) {
  const ret = arr.filter(driver => {
    return driver.revenue > num;
  });
  return ret;
}

function driverNamesWithRevenueOver(arr, num) {
  const ret = driversWithRevenueOver(arr, num).map(driver => {
    return driver.name;
  });
  return ret;
}

function exactMatch(arr, match) {
  const ret = arr.filter(driver => {
    return driver.name === match.name || driver.revenue === match.revenue;
  });

  return ret;
}

function exactMatchToList(arr, match) {
  const ret = exactMatch(arr, match).map(driver => {
    return driver.name;
  });
  return ret;
}
