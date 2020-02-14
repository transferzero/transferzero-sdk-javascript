# TransferzeroSdk.DocumentsApi

All URIs are relative to *https://api-sandbox.transferzero.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDocument**](DocumentsApi.md#deleteDocument) | **DELETE** /documents/{Document ID} | Deleting a document
[**getDocument**](DocumentsApi.md#getDocument) | **GET** /documents/{Document ID} | Fetching a document
[**getDocuments**](DocumentsApi.md#getDocuments) | **GET** /documents | Getting a list of documents
[**postDocuments**](DocumentsApi.md#postDocuments) | **POST** /documents | Creating a document


<a name="deleteDocument"></a>
# **deleteDocument**
> DocumentResponse deleteDocument(documentIDopts)

Deleting a document

Deletes a single document by the Document ID

### Example
```javascript
import { DocumentsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new DocumentsApi(apiClient);

let opts = { 
  'senderId': "senderId_example" // String | Allows filtering results by `sender_id`.  Example: `/v1/transactions?sender_id=b41d3cb7-6c54-4245-85fc-8e30690eb0f7`
};
apiInstance.deleteDocument(documentIDopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling DocumentsApi#deleteDocument");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentID** | [**String**](.md)| ID of the document to delete.  Example: &#x60;/v1/document/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 
 **senderId** | **String**| Allows filtering results by &#x60;sender_id&#x60;.  Example: &#x60;/v1/transactions?sender_id&#x3D;b41d3cb7-6c54-4245-85fc-8e30690eb0f7&#x60; | [optional] 

### Return type

[**DocumentResponse**](DocumentResponse.md)

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

<a name="getDocument"></a>
# **getDocument**
> DocumentResponse getDocument(documentIDopts)

Fetching a document

Returns a single document by the Documents ID

### Example
```javascript
import { DocumentsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new DocumentsApi(apiClient);

let opts = { 
  'senderId': "senderId_example" // String | Allows filtering results by `sender_id`.  Example: `/v1/transactions?sender_id=b41d3cb7-6c54-4245-85fc-8e30690eb0f7`
};
apiInstance.getDocument(documentIDopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling DocumentsApi#getDocument");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentID** | [**String**](.md)| ID of the document to get.  Example: &#x60;/v1/documents/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 
 **senderId** | **String**| Allows filtering results by &#x60;sender_id&#x60;.  Example: &#x60;/v1/transactions?sender_id&#x3D;b41d3cb7-6c54-4245-85fc-8e30690eb0f7&#x60; | [optional] 

### Return type

[**DocumentResponse**](DocumentResponse.md)

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

<a name="getDocuments"></a>
# **getDocuments**
> DocumentListResponse getDocuments(opts)

Getting a list of documents

Fetches a list of documents.

### Example
```javascript
import { DocumentsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new DocumentsApi(apiClient);

let opts = { 
  'page': 1 // Number | The page number to request (defaults to 1)
  'per': 10 // Number | The number of results to load per page (defaults to 10)
  'senderId': "senderId_example" // String | Allows filtering results by `sender_id`.  Example: `/v1/transactions?sender_id=b41d3cb7-6c54-4245-85fc-8e30690eb0f7`
};
apiInstance.getDocuments(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling DocumentsApi#getDocuments");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page number to request (defaults to 1) | [optional] 
 **per** | **Number**| The number of results to load per page (defaults to 10) | [optional] 
 **senderId** | **String**| Allows filtering results by &#x60;sender_id&#x60;.  Example: &#x60;/v1/transactions?sender_id&#x3D;b41d3cb7-6c54-4245-85fc-8e30690eb0f7&#x60; | [optional] 

### Return type

[**DocumentListResponse**](DocumentListResponse.md)

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

<a name="postDocuments"></a>
# **postDocuments**
> DocumentResponse postDocuments(documentRequest)

Creating a document

Creates a new document

### Example
```javascript
import { DocumentsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new DocumentsApi(apiClient);

apiInstance.postDocuments(documentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling DocumentsApi#postDocuments");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentRequest** | [**DocumentRequest**](DocumentRequest.md)|  | 

### Return type

[**DocumentResponse**](DocumentResponse.md)

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

