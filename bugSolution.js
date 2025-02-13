//This is a workaround for the issue.
//It is recommended to test the app on a real device.
//If you want to test it in a simulator or emulator, you should use a different approach.

import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  //This workaround uses the Linking library to open the url in the browser.
  //This works in both simulator and emulator and real device.
  let result = await Linking.openURL('https://google.com');
  console.log({ result });
}

// ... other code ...
