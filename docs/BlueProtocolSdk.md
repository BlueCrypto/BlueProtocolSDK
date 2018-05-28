## Classes

<dl>
<dt><a href="#BlueProtocolSdk">BlueProtocolSdk</a></dt>
<dd><p>The BlueProtocolSdk class. Provides methods for interacting with the Blue
Protocol Sdk.</p>
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
    * [new BlueProtocolSdk(apiKey, network)](#new_BlueProtocolSdk_new)
    * [.scanLists(address)](#BlueProtocolSdk+scanLists) ⇒ [<code>Promise.&lt;ListResult&gt;</code>](#ListResult)
    * [.analyzeContract(address)](#BlueProtocolSdk+analyzeContract) ⇒ [<code>Promise.&lt;AnalysisResult&gt;</code>](#AnalysisResult)

<a name="new_BlueProtocolSdk_new"></a>

### new BlueProtocolSdk(apiKey, network)
Constructor for the BlueProtocolSdk class.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| apiKey | <code>string</code> |  | Your BlueProtocol SDK api key |
| network | <code>string</code> | <code>&quot;mainnet&quot;</code> | (optional) defaults mainnet [rinkeby, ropsten] |

<a name="BlueProtocolSdk+scanLists"></a>

### blueProtocolSdk.scanLists(address) ⇒ [<code>Promise.&lt;ListResult&gt;</code>](#ListResult)
Checks against a number of of community and Blue-maintained black and
whitelists which identify known attackers, and verified recipients of
funds and returns the results.

**Kind**: instance method of [<code>BlueProtocolSdk</code>](#BlueProtocolSdk)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | The address you wish to check. Can be a public                           address of an account or a contract. |

**Example**  
```js
blueSdk.scanLists('0x83D217450eB96F6247ff49d148409d4fEAf0405F')
.then(result => {
    console.log(result)
})
.catch(err => {
    console.error(err)
})
```
<a name="BlueProtocolSdk+analyzeContract"></a>

### blueProtocolSdk.analyzeContract(address) ⇒ [<code>Promise.&lt;AnalysisResult&gt;</code>](#AnalysisResult)
A number of analyzers are run against the given contract's

**Kind**: instance method of [<code>BlueProtocolSdk</code>](#BlueProtocolSdk)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | The address of the contract you wish to analyze |

**Example**  
```js
blueSdk.analyzeContract('0x83D217450eB96F6247ff49d148409d4fEAf0405F')
.then(result => {
    console.log(result)
})
.catch(err => {
    console.error(err)
})
```
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
| score | <code>number</code> | The weighted score |
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

