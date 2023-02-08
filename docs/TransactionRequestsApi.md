# TransferzeroSdk.TransactionRequestsApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDocumentTransactionRequest**](TransactionRequestsApi.md#addDocumentTransactionRequest) | **POST** /transaction_requests/{Transaction Request ID}/add_document | Adding a document to a transaction request (deprecated)
[**cancelTransactionRequest**](TransactionRequestsApi.md#cancelTransactionRequest) | **POST** /transaction_requests/{Transaction Request ID}/cancel | Cancelling a transaction request
[**confirmTransactionRequest**](TransactionRequestsApi.md#confirmTransactionRequest) | **POST** /transaction_requests/{Transaction Request ID}/confirm | Confirming a transaction request
[**getTransactionRequest**](TransactionRequestsApi.md#getTransactionRequest) | **GET** /transaction_requests/{Transaction Request ID} | Fetching a transaction request
[**getTransactionRequests**](TransactionRequestsApi.md#getTransactionRequests) | **GET** /transaction_requests | Listing transaction requests
[**postTransactionRequest**](TransactionRequestsApi.md#postTransactionRequest) | **POST** /transaction_requests | Creating a transaction request
[**restfulAddDocumentTransactionRequest**](TransactionRequestsApi.md#restfulAddDocumentTransactionRequest) | **POST** /transaction_requests/{Transaction Request ID}/documents/{Document ID}/add | Adding a document to a transaction request
[**transactionRequestLimits**](TransactionRequestsApi.md#transactionRequestLimits) | **GET** /transaction_requests/limits | Specifies the limits for transaction requests
[**validateTransactionRequests**](TransactionRequestsApi.md#validateTransactionRequests) | **POST** /transaction_requests/validate | Validates a transaction request payload


<a name="addDocumentTransactionRequest"></a>
# **addDocumentTransactionRequest**
> DocumentResponse addDocumentTransactionRequest(transactionRequestIDdocumentId)

Adding a document to a transaction request (deprecated)

Adds a new document to a transaction request 

### Example
```javascript
import { TransactionRequestsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new TransactionRequestsApi(apiClient);

apiInstance.addDocumentTransactionRequest(transactionRequestIDdocumentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionRequestsApi#addDocumentTransactionRequest");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequestID** | [**String**](.md)| ID of the transaction request to add the document.  Example: &#x60;/v1/info/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/add_document?document_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60; | 
 **documentId** | [**String**](.md)| The ID of the document to be added to the transaction request.  Example: &#x60;/v1/info/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/add_document?document_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60; | 

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="cancelTransactionRequest"></a>
# **cancelTransactionRequest**
> TransactionReqResponse cancelTransactionRequest(transactionRequestIDreasonCancellation)

Cancelling a transaction request

Cancels a transaction request 

### Example
```javascript
import { TransactionRequestsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new TransactionRequestsApi(apiClient);

apiInstance.cancelTransactionRequest(transactionRequestIDreasonCancellation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionRequestsApi#cancelTransactionRequest");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequestID** | [**String**](.md)| ID of the transaction request to cancel.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/cancel&#x60; | 
 **reasonCancellation** | **String**| Reason for the transaction request to cancel.  Example: &#x60;Not enough funds&#x60; | 

### Return type

[**TransactionReqResponse**](TransactionReqResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="confirmTransactionRequest"></a>
# **confirmTransactionRequest**
> TransactionReqResponse confirmTransactionRequest(transactionRequestID)

Confirming a transaction request

Confirms a new transaction request 

### Example
```javascript
import { TransactionRequestsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new TransactionRequestsApi(apiClient);

apiInstance.confirmTransactionRequest(transactionRequestID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionRequestsApi#confirmTransactionRequest");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequestID** | [**String**](.md)| ID of the transaction request to confirm.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/confirm&#x60; | 

### Return type

[**TransactionReqResponse**](TransactionReqResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionRequest"></a>
# **getTransactionRequest**
> TransactionReqResponse getTransactionRequest(transactionRequestIDopts)

Fetching a transaction request

Returns a single transaction request by the Transaction Request ID

### Example
```javascript
import { TransactionRequestsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new TransactionRequestsApi(apiClient);

let opts = { 
  'versioned': true // Boolean | If false is passed, returns a Transaction request containing a not cached Transaction object  Example: `/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670?versioned=false`
};
apiInstance.getTransactionRequest(transactionRequestIDopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionRequestsApi#getTransactionRequest");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequestID** | [**String**](.md)| ID of the transaction request to get.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 
 **versioned** | **Boolean**| If false is passed, returns a Transaction request containing a not cached Transaction object  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670?versioned&#x3D;false&#x60; | [optional] 

### Return type

[**TransactionReqResponse**](TransactionReqResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionRequests"></a>
# **getTransactionRequests**
> TransactionReqListResponse getTransactionRequests(opts)

Listing transaction requests

Get a list of transaction requests

### Example
```javascript
import { TransactionRequestsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new TransactionRequestsApi(apiClient);

let opts = { 
  'page': 1 // Number | The page number to request (defaults to 1)
  'per': 10 // Number | The number of results to load per page (defaults to 10)
  'state': ["null"] // [String] | Returns transaction requests with specified states.  Example: `/v1/transaction_requests?state[]=pending&state[]=modified`
  'currency': ["null"] // [String] | Returns transaction requests with specified input_currency.  Example: `/v1/transaction_requests?currency[]=USD`
  'createdAtFrom': "createdAtFrom_example" // String | Returns transaction requests with specified created_at lower limit.  Example: `/v1/transaction_requests?created_at_from=2018-06-09`
  'createdAtTo': "createdAtTo_example" // String | Returns transaction requests with specified created_at upper limit.  Example: `/v1/transaction_requests?created_at_to=2018-06-08`
  'amountFrom': "amountFrom_example" // String | Returns transaction requests with specified amount lower limit.  Example: `/v1/transaction_requests?currency=NGN&amount_from=2.4319983`
  'amountTo': "amountTo_example" // String | Returns transaction requests with specified amount upper limit.  Example: `/v1/transaction_requests?currency=NGN&amount_to=2.4319985`
  'senderId': "senderId_example" // String | Returns transaction requests for the specified sender.  Example: `/v1/transaction_requests?sender_id=b41d3cb7-6c54-4245-85fc-8e30690eb0f7`
  'versioned': true // Boolean | If false is passed, returns Transaction requests containing not cached Transaction objects  Example: `/v1/transaction_requests?versioned=false`
  'tag': ["null"] // [String] | Returns transaction requests with the specified tag(s). Tags are optional labels assigned to transaction requests for organizational purposes  Example: `/v1/transaction_requests?tag[]=square`
  'ids': ["null"] // [String] | Returns transaction requests with the specified id(s). This allows the fetching of multiple transaction requests by ids for efficiency  Example: `/v1/transaction_requests?ids[]=b41d3cb7-6c54-4245-85fc-8e30690eb0f7`
  'included': ["null"] // [String] | Returns transaction requests with the specified payout currencies.  Example: `/v1/transaction_requests?included[]=KES`
  'excluded': ["null"] // [String] | Returns transaction requests without the specified payout currencies.  Example: `/v1/transaction_requests?excluded[]=KES`
};
apiInstance.getTransactionRequests(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionRequestsApi#getTransactionRequests");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page number to request (defaults to 1) | [optional] 
 **per** | **Number**| The number of results to load per page (defaults to 10) | [optional] 
 **state** | [**[String]**](String.md)| Returns transaction requests with specified states.  Example: &#x60;/v1/transaction_requests?state[]&#x3D;pending&amp;state[]&#x3D;modified&#x60; | [optional] 
 **currency** | [**[String]**](String.md)| Returns transaction requests with specified input_currency.  Example: &#x60;/v1/transaction_requests?currency[]&#x3D;USD&#x60; | [optional] 
 **createdAtFrom** | **String**| Returns transaction requests with specified created_at lower limit.  Example: &#x60;/v1/transaction_requests?created_at_from&#x3D;2018-06-09&#x60; | [optional] 
 **createdAtTo** | **String**| Returns transaction requests with specified created_at upper limit.  Example: &#x60;/v1/transaction_requests?created_at_to&#x3D;2018-06-08&#x60; | [optional] 
 **amountFrom** | **String**| Returns transaction requests with specified amount lower limit.  Example: &#x60;/v1/transaction_requests?currency&#x3D;NGN&amp;amount_from&#x3D;2.4319983&#x60; | [optional] 
 **amountTo** | **String**| Returns transaction requests with specified amount upper limit.  Example: &#x60;/v1/transaction_requests?currency&#x3D;NGN&amp;amount_to&#x3D;2.4319985&#x60; | [optional] 
 **senderId** | **String**| Returns transaction requests for the specified sender.  Example: &#x60;/v1/transaction_requests?sender_id&#x3D;b41d3cb7-6c54-4245-85fc-8e30690eb0f7&#x60; | [optional] 
 **versioned** | **Boolean**| If false is passed, returns Transaction requests containing not cached Transaction objects  Example: &#x60;/v1/transaction_requests?versioned&#x3D;false&#x60; | [optional] 
 **tag** | [**[String]**](String.md)| Returns transaction requests with the specified tag(s). Tags are optional labels assigned to transaction requests for organizational purposes  Example: &#x60;/v1/transaction_requests?tag[]&#x3D;square&#x60; | [optional] 
 **ids** | [**[String]**](String.md)| Returns transaction requests with the specified id(s). This allows the fetching of multiple transaction requests by ids for efficiency  Example: &#x60;/v1/transaction_requests?ids[]&#x3D;b41d3cb7-6c54-4245-85fc-8e30690eb0f7&#x60; | [optional] 
 **included** | [**[String]**](String.md)| Returns transaction requests with the specified payout currencies.  Example: &#x60;/v1/transaction_requests?included[]&#x3D;KES&#x60; | [optional] 
 **excluded** | [**[String]**](String.md)| Returns transaction requests without the specified payout currencies.  Example: &#x60;/v1/transaction_requests?excluded[]&#x3D;KES&#x60; | [optional] 

### Return type

[**TransactionReqListResponse**](TransactionReqListResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postTransactionRequest"></a>
# **postTransactionRequest**
> TransactionReqResponse postTransactionRequest(transactionReqRequest)

Creating a transaction request

Creates a new transaction request 

### Example
```javascript
import { TransactionRequestsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new TransactionRequestsApi(apiClient);

apiInstance.postTransactionRequest(transactionReqRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionRequestsApi#postTransactionRequest");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionReqRequest** | [**TransactionReqRequest**](TransactionReqRequest.md)|  | 

### Return type

[**TransactionReqResponse**](TransactionReqResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="restfulAddDocumentTransactionRequest"></a>
# **restfulAddDocumentTransactionRequest**
> DocumentResponse restfulAddDocumentTransactionRequest(transactionRequestIDdocumentID)

Adding a document to a transaction request

Adds a new document to a transaction request 

### Example
```javascript
import { TransactionRequestsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new TransactionRequestsApi(apiClient);

apiInstance.restfulAddDocumentTransactionRequest(transactionRequestIDdocumentID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionRequestsApi#restfulAddDocumentTransactionRequest");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequestID** | [**String**](.md)| ID of the transaction request to add the document.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/add&#x60; | 
 **documentID** | [**String**](.md)| The ID of the document to be added to the transaction request.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/add&#x60; | 

### Return type

[**DocumentResponse**](DocumentResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="transactionRequestLimits"></a>
# **transactionRequestLimits**
> TransactionReqLimitsResponse transactionRequestLimits()

Specifies the limits for transaction requests

Specifies the minimum and maximum limits for transaction requests

### Example
```javascript
import { TransactionRequestsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new TransactionRequestsApi(apiClient);
apiInstance.transactionRequestLimits().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionRequestsApi#transactionRequestLimits");
    throw error;
  }
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TransactionReqLimitsResponse**](TransactionReqLimitsResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="validateTransactionRequests"></a>
# **validateTransactionRequests**
> TransactionReqResponse validateTransactionRequests(transactionReqRequest)

Validates a transaction request payload

Validates fields in a transaction request payload and displays invalid or missing fields

### Example
```javascript
import { TransactionRequestsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new TransactionRequestsApi(apiClient);

apiInstance.validateTransactionRequests(transactionReqRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling TransactionRequestsApi#validateTransactionRequests");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionReqRequest** | [**TransactionReqRequest**](TransactionReqRequest.md)|  | 

### Return type

[**TransactionReqResponse**](TransactionReqResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

