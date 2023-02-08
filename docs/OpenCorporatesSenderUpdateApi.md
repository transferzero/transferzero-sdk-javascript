# TransferzeroSdk.OpenCorporatesSenderUpdateApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateSender**](OpenCorporatesSenderUpdateApi.md#updateSender) | **POST** /open_corporates/update_sender | Update Sender with data retrieved from Open Corporates


<a name="updateSender"></a>
# **updateSender**
> OpenCorporatesSenderUpdateResponse updateSender(openCorporatesSenderUpdateRequest)

Update Sender with data retrieved from Open Corporates

This endpoint searches for a company on Open Corporates API and updates the associated Sender fields with the search results

### Example
```javascript
import { OpenCorporatesSenderUpdateApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new OpenCorporatesSenderUpdateApi(apiClient);

apiInstance.updateSender(openCorporatesSenderUpdateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling OpenCorporatesSenderUpdateApi#updateSender");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openCorporatesSenderUpdateRequest** | [**OpenCorporatesSenderUpdateRequest**](OpenCorporatesSenderUpdateRequest.md)|  | 

### Return type

[**OpenCorporatesSenderUpdateResponse**](OpenCorporatesSenderUpdateResponse.md)

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

