## Classes

<dl>
<dt><a href="#BlueProtocolSdk">BlueProtocolSdk</a></dt>
<dd><p>The BlueProtocolSdk class. Provides methods for interacting with the Blue
Protocol Sdk.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getUtcDate">getUtcDate()</a> ⇒ <code>string</code></dt>
<dd><p>Private method used to get current UTC date in Ymd format.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ListResult">ListResult</a> : <code>Object</code></dt>
<dd><p>The result of a call to the scanLists method.</p>
</dd>
<dt><a href="#ListResultEntry">ListResultEntry</a> : <code>Object</code></dt>
<dd><p>An entry within the ListResult entries property.</p>
</dd>
<dt><a href="#AnalysisResult">AnalysisResult</a> : <code>Object</code></dt>
<dd><p>The result of a call to the analyzeContract method.</p>
</dd>
<dt><a href="#AnalysisResultEntry">AnalysisResultEntry</a> : <code>Object</code></dt>
<dd><p>An entry within the AnalysisResult entries property.</p>
</dd>
</dl>

<a name="BlueProtocolSdk"></a>

## BlueProtocolSdk
The BlueProtocolSdk class. Provides methods for interacting with the Blue
Protocol Sdk.

**Kind**: global class  

* [BlueProtocolSdk](#BlueProtocolSdk)
    * [new BlueProtocolSdk(apiKey, address, network)](#new_BlueProtocolSdk_new)
    * [.sendRequest(message, signedMessage)](#BlueProtocolSdk+sendRequest) ⇒ <code>mixed</code>
    * [.requestScanLists(address)](#BlueProtocolSdk+requestScanLists) ⇒ [<code>Promise.&lt;ListResult&gt;</code>](#ListResult)
    * [.requestAnalyzeContract(address)](#BlueProtocolSdk+requestAnalyzeContract) ⇒ [<code>Promise.&lt;AnalysisResult&gt;</code>](#AnalysisResult)

<a name="new_BlueProtocolSdk_new"></a>

### new BlueProtocolSdk(apiKey, address, network)
Constructor for the BlueProtocolSdk class.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| apiKey | <code>string</code> |  | Your BlueProtocol SDK api key |
| address | <code>string</code> |  | Your ethereum public address |
| network | <code>string</code> | <code>&quot;mainnet&quot;</code> | (optional) defaults mainnet [rinkeby, ropsten] |

<a name="BlueProtocolSdk+sendRequest"></a>

### blueProtocolSdk.sendRequest(message, signedMessage) ⇒ <code>mixed</code>
Sends the given message and signature to the Blue Protocol SDK API and
returns the response.

**Kind**: instance method of [<code>BlueProtocolSdk</code>](#BlueProtocolSdk)  
**Returns**: <code>mixed</code> - Depends on message parameter  

| Param | Type |
| --- | --- |
| message | <code>Object</code> | 
| signedMessage | <code>String</code> | 

<a name="BlueProtocolSdk+requestScanLists"></a>

### blueProtocolSdk.requestScanLists(address) ⇒ [<code>Promise.&lt;ListResult&gt;</code>](#ListResult)
Returns the message used to request list scanning.
Scans against a number of of community and Blue-maintained black and
whitelists which identify known attackers, and verified recipients of
funds and returns the results.

**Kind**: instance method of [<code>BlueProtocolSdk</code>](#BlueProtocolSdk)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | The address you wish to check. Can be a public                           address of an account or a contract. |

**Example**  
```js
let message = blueSdk.requestScanLists('0x83D217450eB96F6247ff49d148409d4fEAf0405F');

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
<a name="BlueProtocolSdk+requestAnalyzeContract"></a>

### blueProtocolSdk.requestAnalyzeContract(address) ⇒ [<code>Promise.&lt;AnalysisResult&gt;</code>](#AnalysisResult)
Returns the message used to request contract analysis.

**Kind**: instance method of [<code>BlueProtocolSdk</code>](#BlueProtocolSdk)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | The address of the contract you wish to analyze |

**Example**  
```js
let message = blueSdk.requestAnalyzeContract('0x83D217450eB96F6247ff49d148409d4fEAf0405F');

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
<a name="getUtcDate"></a>

## getUtcDate() ⇒ <code>string</code>
Private method used to get current UTC date in Ymd format.

**Kind**: global function  
<a name="ListResult"></a>

## ListResult : <code>Object</code>
The result of a call to the scanLists method.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| result | <code>string</code> | The result ['blocked', 'neutral', 'whitelisted'] |
| entries | [<code>Array.&lt;ListResultEntry&gt;</code>](#ListResultEntry) | The entries related to the given address. |

<a name="ListResultEntry"></a>

## ListResultEntry : <code>Object</code>
An entry within the ListResult entries property.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| name | <code>string</code> |  |
| category | <code>string</code> |  |
| subcategory | <code>string</code> |  |
| description | <code>string</code> |  |
| status | <code>string</code> | ['online', 'offline'] |
| addresses | <code>Array.&lt;string&gt;</code> | addresses involved to entry |

<a name="AnalysisResult"></a>

## AnalysisResult : <code>Object</code>
The result of a call to the analyzeContract method.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| scan_status | <code>number</code> | [in_progress, complete] |
| entries | [<code>Array.&lt;AnalysisResultEntry&gt;</code>](#AnalysisResultEntry) | The scan results |

<a name="AnalysisResultEntry"></a>

## AnalysisResultEntry : <code>Object</code>
An entry within the AnalysisResult entries property.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> |  |
| description | <code>string</code> |  |
| function | <code>string</code> | function hash |
| type | <code>string</code> | ['Informational', 'Warning'] |
| debug | <code>string</code> | Additional information related to entry |

