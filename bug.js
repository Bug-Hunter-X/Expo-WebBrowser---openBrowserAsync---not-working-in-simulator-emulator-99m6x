import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://google.com');
  console.log({ result });
}

// ... other code ...

//Problem:The openBrowserAsync function fails to open in the simulator and the emulator in android or ios.
//It only works in the real device.
