#include <Arduino.h>
#include <HTTPClient.h>
#include <WiFi.h>

// secret ssid and pass
#include <secrets.h>

#ifndef PASS
const char* ssid = "ssid";
const char* password =  "pass";
#endif

void setup() {
  delay(10);
  Serial.begin(115200);


  WiFi.begin(ssid, password);

  Serial.print("Connecting...");
  while (WiFi.status() != WL_CONNECTED) { //Check for the connection
    delay(500);
    Serial.print(".");
  }

  Serial.print("Connected! my IP is: ");
  Serial.println(WiFi.localIP());

}

void loop() {

  if(WiFi.status()== WL_CONNECTED){

    HTTPClient http;

    http.setFollowRedirects(HTTPC_FORCE_FOLLOW_REDIRECTS);
    http.begin("https://script.google.com/macros/s/########################/exec"); // script.google
    http.addHeader("Content-Type", "plain-text");
    int response = http.GET();

    if(response>0){
      Serial.println("Código HTTP ► " + String(response));

      if(response == 200){
        String response_body = http.getString();
        Serial.println("Server response ▼ ");
        Serial.println(response_body);
      }
    }else{

     Serial.print("Error while sending POST, code: ");
     Serial.println(response);

    }

    http.end();

  }else{

     Serial.println("WIFI connection error");

  }

   delay(2000);
}
