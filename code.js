// Get all event items
function getAllEventItems() {
  // Get the active spreadsheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Get the first sheet
  var sheet = spreadsheet.getSheets()[0];
  
  // Get the number of rows in the sheet
  var lastRow = sheet.getLastRow();

  // Check if there is at least one data row in the sheet
  if (lastRow > 1) {
    // Get the data range (exclude the header row)
    var dataRange = sheet.getRange(2, 1, lastRow - 1, 5);
    
    // Get the values in the range
    var data = dataRange.getValues();

    // Filter out rows where the last column (status) has the of value "Unpublished"
    var filteredData = data.filter(function(row) {
      return row[row.length - 1] !== "Unpublished";
    });
    
    // Log the data 
    // DO NOT DELETE this code
    Logger.log(filteredData);
    
    // Return the data
    return filteredData;
  } 
  else {
    // Handle the case when there are no data rows in the sheet
    Logger.log("No data rows found in the sheet.");
    return []; // or handle as needed, returning an empty array for example
  }
}

// HTTP GET endpoint
function doGet() {
  // Get all events item as data
  var data = getAllEventItems();

  // Convert the data to JSON
  var jsonData = JSON.stringify(data);

  // Serve the data as JSON
  return ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON);
}

console.log(getAllEventItems());
