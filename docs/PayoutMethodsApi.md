# TransferzeroSdk.PayoutMethodsApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePayoutMethod**](PayoutMethodsApi.md#deletePayoutMethod) | **DELETE** /payout_methods/{Payout Method ID} | Deleting a payout method
[**getPayoutMethod**](PayoutMethodsApi.md#getPayoutMethod) | **GET** /payout_methods/{Payout Method ID} | Fetching a payout method
[**getPayoutMethods**](PayoutMethodsApi.md#getPayoutMethods) | **GET** /payout_methods | Listing payout methods
[**patchPayoutMethod**](PayoutMethodsApi.md#patchPayoutMethod) | **PATCH** /payout_methods/{Payout Method ID} | Updating a payout method
[**postPayoutMethods**](PayoutMethodsApi.md#postPayoutMethods) | **POST** /payout_methods | Creating a payout method


<a name="deletePayoutMethod"></a>
# **deletePayoutMethod**
> PayoutMethodResponse deletePayoutMethod(payoutMethodID)

Deleting a payout method

Deletes a single payout method by the Payout Method ID

### Example
```javascript
import { PayoutMethodsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PayoutMethodsApi(apiClient);

apiInstance.deletePayoutMethod(payoutMethodID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PayoutMethodsApi#deletePayoutMethod");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payoutMethodID** | [**String**](.md)| ID of the payout method to delete.  Example: &#x60;/v1/payout_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 

### Return type

[**PayoutMethodResponse**](PayoutMethodResponse.md)

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

<a name="getPayoutMethod"></a>
# **getPayoutMethod**
> PayoutMethodResponse getPayoutMethod(payoutMethodID)

Fetching a payout method

Show a payout method by id

### Example
```javascript
import { PayoutMethodsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PayoutMethodsApi(apiClient);

apiInstance.getPayoutMethod(payoutMethodID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PayoutMethodsApi#getPayoutMethod");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payoutMethodID** | [**String**](.md)| ID of the payout method to get.  Example: &#x60;/v1/payout_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 

### Return type

[**PayoutMethodResponse**](PayoutMethodResponse.md)

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

<a name="getPayoutMethods"></a>
# **getPayoutMethods**
> PayoutMethodListResponse getPayoutMethods(opts)

Listing payout methods

List available payout methods

### Example
```javascript
import { PayoutMethodsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PayoutMethodsApi(apiClient);

let opts = { 
  'state': ["null"] // [String] | Allows filtering results by `state` of the payout method.  Example: `/v1/payout_methods?state[]=enabled`
  'type': ["null"] // [String] | Allows filtering results by the specified type.  Example: `/v1/payout_methods?type[]=NGN::Bank`
  'senderId': "senderId_example" // String | Allows filtering results by the specified sender id.  Example: `/v1/payout_methods?sender_id=bf9ff782-e182-45ac-abea-5bce83ad6670`
  'page': 1 // Number | The page number to request (defaults to 1)
  'per': 10 // Number | The number of results to load per page (defaults to 10)
  'createdAtFrom': "createdAtFrom_example" // String | Start date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
  'createdAtTo': "createdAtTo_example" // String | End date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
};
apiInstance.getPayoutMethods(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PayoutMethodsApi#getPayoutMethods");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | [**[String]**](String.md)| Allows filtering results by &#x60;state&#x60; of the payout method.  Example: &#x60;/v1/payout_methods?state[]&#x3D;enabled&#x60; | [optional] 
 **type** | [**[String]**](String.md)| Allows filtering results by the specified type.  Example: &#x60;/v1/payout_methods?type[]&#x3D;NGN::Bank&#x60; | [optional] 
 **senderId** | **String**| Allows filtering results by the specified sender id.  Example: &#x60;/v1/payout_methods?sender_id&#x3D;bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | [optional] 
 **page** | **Number**| The page number to request (defaults to 1) | [optional] 
 **per** | **Number**| The number of results to load per page (defaults to 10) | [optional] 
 **createdAtFrom** | **String**| Start date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60; | [optional] 
 **createdAtTo** | **String**| End date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60; | [optional] 

### Return type

[**PayoutMethodListResponse**](PayoutMethodListResponse.md)

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

<a name="patchPayoutMethod"></a>
# **patchPayoutMethod**
> PayoutMethodResponse patchPayoutMethod(payoutMethodIDpayoutMethod)

Updating a payout method

Updates a single payout method by the Payout Method ID

### Example
```javascript
import { PayoutMethodsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PayoutMethodsApi(apiClient);

apiInstance.patchPayoutMethod(payoutMethodIDpayoutMethod).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PayoutMethodsApi#patchPayoutMethod");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payoutMethodID** | [**String**](.md)| ID of the payout method to get.  Example: &#x60;/v1/payout_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 
 **payoutMethod** | [**PayoutMethod**](PayoutMethod.md)|  | 

### Return type

[**PayoutMethodResponse**](PayoutMethodResponse.md)

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

<a name="postPayoutMethods"></a>
# **postPayoutMethods**
> PayoutMethodResponse postPayoutMethods(payoutMethodRequest)

Creating a payout method

Creates a new payout method in our system. 

### Example
```javascript
import { PayoutMethodsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PayoutMethodsApi(apiClient);

apiInstance.postPayoutMethods(payoutMethodRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PayoutMethodsApi#postPayoutMethods");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payoutMethodRequest** | [**PayoutMethodRequest**](PayoutMethodRequest.md)|  | 

### Return type

[**PayoutMethodResponse**](PayoutMethodResponse.md)

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

