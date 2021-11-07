# espcam-caffeine

This project introduce the concept of CaaS (Cafecitos as a Service). Every 10 seconds, the program will ask to a Gscript if you have received some coffees (scraping https://cafecito.app/##### page source code). If so, a POST command will be issued to another Gscript and send a picture encrypted with [Base64 algorithm](https://en.wikipedia.org/wiki/Base64) to a Gdrive folder. These photos can be seen on the [Live demo page](https://sites.google.com/view/latte-photo-maker/inicio)

## Intro
The project is a mix of [this project](https://github.com/gsampallo/esp32cam-gdrive) developed by [gsampallo](https://github.com/gsampallo), and [this other project](https://github.com/ioticos/esp32_esp8266_get_request) developed by [ioticos](https://github.com/ioticos)

For uploading pictures to GDrive, you can follow [this](https://www.youtube.com/watch?v=XqT1rLHl3DE&t) video tutorial from gsampallo.

## Configurations
Add your token id and credentials on [these lines](https://github.com/MartinNievas/espcam-caffeine/blob/main/src/main.cpp#L13-L20)
- `ssid`: with your WiFi SSID (Only 2.4 Networks) 
- `password`: WiFi password
- `url`: Replace the ### with your google script token (web-scrapper)
- `myScript`: Replace the ### with your google script token (photo-upload)

You can also create a folder under `lib/secrets/secrets.h` with the lines:
```c
#define PASS
const char* ssid = "ssid";
const char* password =  "pass";
// scraper side script
const char* url =  "https://script.google.com/macros/s/########################/exec"    //Replace with your own url
// google docs image-save script
const char* myDomain = "script.google.com";
String myScript = "/macros/s/XXXXXXXXXXXXXXXXXXXXXX/exec";    //Replace with your own url
String myFilename = "filename=ESP32-CAM.jpg";
String mimeType = "&mimetype=image/jpeg";
String myImage = "&data=";
```
Note that `secrets` folder is not tracked by git.

## Compile and Upload
The project is build with platformio:
```bash
platformio build -t upload
```
I highly suggest that you look at the [video](https://www.youtube.com/watch?v=XqT1rLHl3DE) and [blog](https://www.gsampallo.com/2019/10/13/esp32-cam-subir-fotos-a-google-drive/) from sampallo.
