# TransferzeroSdk.TransactionsApi

All URIs are relative to *https://api-sandbox.transferzero.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculateTransactions**](TransactionsApi.md#calculateTransactions) | **POST** /transactions/calculate | Calculates transaction amounts for a transaction payload
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /transactions/{Transaction ID} | Fetch a single transaction
[**getTransactions**](TransactionsApi.md#getTransactions) | **GET** /transactions | Get a list of transactions
[**payinTransaction**](TransactionsApi.md#payinTransaction) | **POST** /transactions/{Transaction ID}/payin | Creates a fake payin for transaction
[**payoutTransaction**](TransactionsApi.md#payoutTransaction) | **POST** /transactions/{Transaction ID}/payout | Creates a fake payout for transaction
[**postTransactions**](TransactionsApi.md#postTransactions) | **POST** /transactions | Creates a new transaction
[**validateTransactions**](TransactionsApi.md#validateTransactions) | **POST** /transactions/validate | Validates a transaction payload


<a name="calculateTransactions"></a>
# **calculateTransactions**
> TransactionResponse calculateTransactions(transactionRequest)

Calculates transaction amounts for a transaction payload

Calculates the input, output and fee amounts for the recipients in a transaction payload

### Example
```javascript
import { TransactionsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new TransactionsApi(apiClient);

apiInstance.calculateTransactions(transactionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionsApi#calculateTransactions");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequest** | [**TransactionRequest**](TransactionRequest.md)|  | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTransaction"></a>
# **getTransaction**
> TransactionResponse getTransaction(transactionID)

Fetch a single transaction

Finds and returns a Transaction created by the requesting API key, using the provided Transaction ID.

### Example
```javascript
import { TransactionsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new TransactionsApi(apiClient);

apiInstance.getTransaction(transactionID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionsApi#getTransaction");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionID** | [**String**](.md)| ID of the transaction.  Example: &#x60;/v1/transactions/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactions"></a>
# **getTransactions**
> TransactionListResponse getTransactions(opts)

Get a list of transactions

Retrieves a paginated list of the Transactions created by your API key.

### Example
```javascript
import { TransactionsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new TransactionsApi(apiClient);

let opts = { 
  'page': 1 // Number | The page number to request (defaults to 1)
  'per': 10 // Number | The number of results to load per page (defaults to 10)
  'externalId': "externalId_example" // String | Allows filtering results by `external_id`.  Example: `/v1/senders?external_id=26ec8517-2f0d-48c0-b74f-0bccb9ab3a87`
};
apiInstance.getTransactions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionsApi#getTransactions");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page number to request (defaults to 1) | [optional] 
 **per** | **Number**| The number of results to load per page (defaults to 10) | [optional] 
 **externalId** | **String**| Allows filtering results by &#x60;external_id&#x60;.  Example: &#x60;/v1/senders?external_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60; | [optional] 

### Return type

[**TransactionListResponse**](TransactionListResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payinTransaction"></a>
# **payinTransaction**
> TransactionResponse payinTransaction(transactionIDpayinMethodRequest)

Creates a fake payin for transaction

This method is available only in sandbox environment and is supposed to be used only for testing integration. It allows you to emulate a payin without paying actual money. 

### Example
```javascript
import { TransactionsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new TransactionsApi(apiClient);

apiInstance.payinTransaction(transactionIDpayinMethodRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionsApi#payinTransaction");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionID** | [**String**](.md)| ID of the transaction to payin.  Example: &#x60;/v1/transactions/bf9ff782-e182-45ac-abea-5bce83ad6670/payin&#x60; | 
 **payinMethodRequest** | [**PayinMethodRequest**](PayinMethodRequest.md)|  | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="payoutTransaction"></a>
# **payoutTransaction**
> TransactionResponse payoutTransaction(transactionID)

Creates a fake payout for transaction

This method is available only in sandbox environment and is supposed to be used only for testing. It allows you to emulate the payout of a transaction after payin. 

### Example
```javascript
import { TransactionsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new TransactionsApi(apiClient);

apiInstance.payoutTransaction(transactionID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionsApi#payoutTransaction");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionID** | [**String**](.md)| ID of the transaction to payout.  Example: &#x60;/v1/transactions/bf9ff782-e182-45ac-abea-5bce83ad6670/payout&#x60; | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postTransactions"></a>
# **postTransactions**
> TransactionResponse postTransactions(transactionRequest)

Creates a new transaction

Transactions are the main objects in the TransferZero API, so it&#39;s important to understand how to create and manage them. Transactions facilitate money movement from one Sender in a specific currency to one or multiple Recipients in another currency.  The main flow of a successful transaction flow is the following - - Transaction is created linking the Sender to the Recipient(s) with the requested amounts. - Once the sender is KYC&#39;d and approved the transaction can be funded. - Once the transaction is funded, we will initiate the payout to the recipient(s). - After the recipient (or all recipients) has received the money, the transaction is finished.

### Example
```javascript
import { TransactionsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new TransactionsApi(apiClient);

apiInstance.postTransactions(transactionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionsApi#postTransactions");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequest** | [**TransactionRequest**](TransactionRequest.md)|  | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateTransactions"></a>
# **validateTransactions**
> TransactionResponse validateTransactions(transactionRequest)

Validates a transaction payload

Validates fields in a transaction payload and displays invalid or missing fields

### Example
```javascript
import { TransactionsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new TransactionsApi(apiClient);

apiInstance.validateTransactions(transactionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionsApi#validateTransactions");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequest** | [**TransactionRequest**](TransactionRequest.md)|  | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

