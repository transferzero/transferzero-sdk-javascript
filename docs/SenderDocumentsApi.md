# TransferzeroSdk.SenderDocumentsApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDocumentSender**](SenderDocumentsApi.md#addDocumentSender) | **POST** /senders/{Sender ID}/documents/{Document ID}/add | Adding a document to a sender
[**getSenderDocument**](SenderDocumentsApi.md#getSenderDocument) | **GET** /senders/{Sender ID}/documents/{Document ID} | Fetching a document belonging to a sender
[**getSenderDocuments**](SenderDocumentsApi.md#getSenderDocuments) | **GET** /senders/{Sender ID}/documents | Getting a list of documents belonging to a sender
[**removeDocumentSender**](SenderDocumentsApi.md#removeDocumentSender) | **POST** /senders/{Sender ID}/documents/{Document ID}/remove | Removing a document from a sender


<a name="addDocumentSender"></a>
# **addDocumentSender**
> DocumentResponse addDocumentSender(senderIDdocumentID)

Adding a document to a sender

Adds a new document to a sender 

### Example
```javascript
import { SenderDocumentsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new SenderDocumentsApi(apiClient);

apiInstance.addDocumentSender(senderIDdocumentID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling SenderDocumentsApi#addDocumentSender");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderID** | [**String**](.md)| ID of the sender to add the document.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/add&#x60; | 
 **documentID** | [**String**](.md)| The ID of the document to be added to the sender.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/add&#x60; | 

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

<a name="getSenderDocument"></a>
# **getSenderDocument**
> DocumentResponse getSenderDocument(senderIDdocumentID)

Fetching a document belonging to a sender

Returns a single document belonging to a sender by the Document ID

### Example
```javascript
import { SenderDocumentsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new SenderDocumentsApi(apiClient);

apiInstance.getSenderDocument(senderIDdocumentID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling SenderDocumentsApi#getSenderDocument");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderID** | [**String**](.md)| ID of the sender who owns the requested document.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60; | 
 **documentID** | [**String**](.md)| ID of the document to get.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60; | 

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

<a name="getSenderDocuments"></a>
# **getSenderDocuments**
> DocumentListResponse getSenderDocuments(senderIDopts)

Getting a list of documents belonging to a sender

Fetches a list of documents belonging to a sender.

### Example
```javascript
import { SenderDocumentsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new SenderDocumentsApi(apiClient);

let opts = { 
  'page': 1 // Number | The page number to request (defaults to 1)
  'per': 10 // Number | The number of results to load per page (defaults to 10)
};
apiInstance.getSenderDocuments(senderIDopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling SenderDocumentsApi#getSenderDocuments");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderID** | [**String**](.md)| ID of the sender who owns the requested documents.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670/documents&#x60; | 
 **page** | **Number**| The page number to request (defaults to 1) | [optional] 
 **per** | **Number**| The number of results to load per page (defaults to 10) | [optional] 

### Return type

[**DocumentListResponse**](DocumentListResponse.md)

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

<a name="removeDocumentSender"></a>
# **removeDocumentSender**
> DocumentResponse removeDocumentSender(senderIDdocumentID)

Removing a document from a sender

Removes a document from a sender 

### Example
```javascript
import { SenderDocumentsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new SenderDocumentsApi(apiClient);

apiInstance.removeDocumentSender(senderIDdocumentID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling SenderDocumentsApi#removeDocumentSender");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderID** | [**String**](.md)| ID of the sender with the document to remove.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/remove&#x60; | 
 **documentID** | [**String**](.md)| The ID of the document to be removed from the sender.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/remove&#x60; | 

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

