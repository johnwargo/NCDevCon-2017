![NCDevCon Logo](http://ncdevcon.com/skins/bootstrap/assets/img/ncdevcon-logo.png)
# NCDevCon 2017 Demo Source

This repository contains the source code for the sample applications demonstrated in my NCDevCon 2017 presentation. In this session, I created basically the same app using four different open source mobile development approaches:

+ [Apache Cordova](http://cordova.io)
+ [Ionic](https://ionicframework.com/)
+ [React Native](https://facebook.github.io/react-native/)
+ [NativeScript](https://www.nativescript.org/)

For each application, I created a simple UI that renders a list of mobile device capabilities exposed through the target development platform's native API interface. For example, in the Cordova sample application (shown below), I used the [Cordova Device](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device/) plugin to retrieve (and display) details about the device that are only available at the native API level on the device (in other words, not normally available to the web browser).

![Cordova application sample](images/figure-01.png)

***

You can find information on many different topics on my [personal blog](http://www.johnwargo.com). Learn about all of my publications at [John Wargo Books](http://www.johnwargobooks.com).