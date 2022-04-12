# TransferzeroSdk.PayinMethodsApi

All URIs are relative to *https://api-sandbox.transferzero.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePayinMethod**](PayinMethodsApi.md#deletePayinMethod) | **DELETE** /payin_methods/{PayinMethod ID} | Deleting a payin method
[**getPayinMethod**](PayinMethodsApi.md#getPayinMethod) | **GET** /payin_methods/{PayinMethod ID} | Fetching a payin method
[**patchPayinMethod**](PayinMethodsApi.md#patchPayinMethod) | **PATCH** /payin_methods/{PayinMethod ID} | Updating a payin method
[**retryPayinMethod**](PayinMethodsApi.md#retryPayinMethod) | **POST** /payin_methods/{PayinMethod ID}/retry | Retries PayinMethod


<a name="deletePayinMethod"></a>
# **deletePayinMethod**
> PayinMethodResponse deletePayinMethod(payinMethodID)

Deleting a payin method

Initiates a cancellation request for the specified payin method

### Example
```javascript
import { PayinMethodsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new PayinMethodsApi(apiClient);

apiInstance.deletePayinMethod(payinMethodID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PayinMethodsApi#deletePayinMethod");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payinMethodID** | [**String**](.md)| ID of the payin method to delete.  Example: &#x60;/v1/payin_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 

### Return type

[**PayinMethodResponse**](PayinMethodResponse.md)

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

<a name="getPayinMethod"></a>
# **getPayinMethod**
> PayinMethodResponse getPayinMethod(payinMethodID)

Fetching a payin method

Show a payin method by id

### Example
```javascript
import { PayinMethodsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new PayinMethodsApi(apiClient);

apiInstance.getPayinMethod(payinMethodID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PayinMethodsApi#getPayinMethod");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payinMethodID** | [**String**](.md)| ID of the payin method to get.  Example: &#x60;/v1/payin_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 

### Return type

[**PayinMethodResponse**](PayinMethodResponse.md)

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

<a name="patchPayinMethod"></a>
# **patchPayinMethod**
> PayinMethodResponse patchPayinMethod(payinMethodIDpayinMethod)

Updating a payin method

Updates the payin method specified in the URL path.

### Example
```javascript
import { PayinMethodsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new PayinMethodsApi(apiClient);

apiInstance.patchPayinMethod(payinMethodIDpayinMethod).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PayinMethodsApi#patchPayinMethod");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payinMethodID** | [**String**](.md)| ID of the payin method to get.  Example: &#x60;/v1/payin_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 
 **payinMethod** | [**PayinMethod**](PayinMethod.md)|  | 

### Return type

[**PayinMethodResponse**](PayinMethodResponse.md)

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

<a name="retryPayinMethod"></a>
# **retryPayinMethod**
> PayinMethodResponse retryPayinMethod(payinMethodID)

Retries PayinMethod

Retries the collection process for the payin method.  Please note only payin methods in &#x60;error&#x60; state can be retried.

### Example
```javascript
import { PayinMethodsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new PayinMethodsApi(apiClient);

apiInstance.retryPayinMethod(payinMethodID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PayinMethodsApi#retryPayinMethod");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payinMethodID** | [**String**](.md)| ID of the payin method whose collection process should be retried  Example: &#x60;/v1/payin_methods/9d4d7b73-a94c-4979-ab57-09074fd55d33/retry&#x60; | 

### Return type

[**PayinMethodResponse**](PayinMethodResponse.md)

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

