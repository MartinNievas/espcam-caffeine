function doGet (){
  var url = 'https://cafecito.app/########'; //Replace #### with the user
  var html = UrlFetchApp.fetch(url).getContentText();
  var string1 = html.split('<script id="__NEXT_DATA__" type="application/json">')[1];// all after
  var string2 = string1.split('</script></body></html>')[0];// all before '</a></td>'
  
  const parsedData = JSON.parse(string2)

  //Logger.log('string2: '+ string2);
  const coffes = parsedData.props.initialProps.pageProps.coffees;
  Logger.log('text: '+ JSON.stringify(coffes[0].message));
  const output = JSON.stringify(coffes[0].message);
  return ContentService.createTextOutput(output);

}
