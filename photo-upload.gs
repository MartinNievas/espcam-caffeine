function doPost(e) {
  //var decoded = Utilities.base64Decode(e.parameters.contents, Utilities.Charset.UTF_8);
  // This line is for testing with:
  // $ base64 my_picture >> data_test
  // $ curl -L -F "contents=`cat data_test`" "https://script.google.com/macros/s/########/exec"
  
  var decoded = Utilities.base64Decode(e.parameters.data); // To be used with ESPcam
  var nombreArchivo = Utilities.formatDate(new Date(), "GMT-3", "yyyyMMdd_HHmmss")+".jpg";
  var blob = Utilities.newBlob(decoded, "image/jpeg", nombreArchivo); // Please define date.
  //DriveApp.createFile(blob);

   // Save the photo to Google Drive
  var folder, folders = DriveApp.getFoldersByName("ESP32-CAM");
  if (folders.hasNext()) {
    folder = folders.next();
  } else {
    folder = DriveApp.createFolder("ESP32-CAM");
  }
  var file = folder.createFile(blob);
  return ContentService.createTextOutput('Completo')
}
