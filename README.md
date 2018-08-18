# BlueProtocolSDK
This library provides methods for interacting with the Blue Protocol SDK using
promises.

The use of this library requires an API Key.
You can request one by contacting us [HERE](https://www.blueprotocol.com/contact/).

## Install
```bash
npm install blueprotocolsdk
```

## Usage
```js
const BlueProtocolSdk = require('blueprotocolsdk');
const blueSdk = new BlueProtocolSdk(
 YOUR_API_KEY,
 YOUR_PUBLIC_ADDRESS
);

let message = blueSdk.requestScanLists(someAddress);

// Signing is not provided by this package. The message is intended to be
// signed by the wallet implementing this SDK.
// below line is placeholder..
let signedMessage = sign(message, privateKey);

blueSdk.sendRequest(message, signedMessage)
.then(result => {
    console.log(result)
})
.catch(err => {
    console.error(err)
})
```

See [Documentation](#Documentation) for available methods.

## [Documentation](./docs/BlueProtocolSdk.md)