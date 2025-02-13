# Expo WebBrowser - openBrowserAsync() Simulator/Emulator Issue

This repository demonstrates a problem with Expo's `WebBrowser.openBrowserAsync()` function.  The function consistently fails to open a browser in Android and iOS simulators and emulators. It works correctly only on physical devices.

## Problem Description

The `openBrowserAsync()` method, intended to open a URL in the device's default browser, does not function as expected in simulated environments.  The issue is consistent across both Android and iOS emulators.

## Setup

1.  Clone this repository.
2.  `npm install` or `yarn install`
3.  Run the project in your Expo Go app (on real device and simulator/emulator) or with EAS Build and run on your device and in the simulator/emulator.

## Solution

The provided solution may include a workaround or an explanation of the root cause. Refer to the bugSolution.js file for potential remedies.

## Note

This issue might be related to how simulators/emulators handle system-level interactions or URL handling. It's worth noting that it does work perfectly on a real device.