# TransferzeroSdk.MandatesApi

All URIs are relative to *https://api-sandbox.transferzero.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMandate**](MandatesApi.md#getMandate) | **GET** /mandates/{Mandate ID} | Fetch a single mandate


<a name="getMandate"></a>
# **getMandate**
> MandateResponse getMandate(mandateID)

Fetch a single mandate

Finds and returns a Mandate created within the current calendar year, where the mandate is linked to a Recipient owned by the authenticated API key.  Returns 404 if the mandate is not owned by the API key or was not issued in the current calendar year — mandates are only valid for the year in which they were issued.

### Example
```javascript
import { MandatesApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new MandatesApi(apiClient);

apiInstance.getMandate(mandateID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling MandatesApi#getMandate");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mandateID** | [**String**](.md)| ID of the mandate.  Example: &#x60;/v1/mandates/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 

### Return type

[**MandateResponse**](MandateResponse.md)

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

