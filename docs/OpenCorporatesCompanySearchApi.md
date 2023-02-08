# TransferzeroSdk.OpenCorporatesCompanySearchApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchCompany**](OpenCorporatesCompanySearchApi.md#searchCompany) | **POST** /open_corporates/search | Search for a company on Open Corporates


<a name="searchCompany"></a>
# **searchCompany**
> OpenCorporatesSearchResponse searchCompany(openCorporatesSearchRequest)

Search for a company on Open Corporates

This endpoint searches for a company on Open Corporates API and returns the name if found

### Example
```javascript
import { OpenCorporatesCompanySearchApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new OpenCorporatesCompanySearchApi(apiClient);

apiInstance.searchCompany(openCorporatesSearchRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling OpenCorporatesCompanySearchApi#searchCompany");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **openCorporatesSearchRequest** | [**OpenCorporatesSearchRequest**](OpenCorporatesSearchRequest.md)|  | 

### Return type

[**OpenCorporatesSearchResponse**](OpenCorporatesSearchResponse.md)

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

