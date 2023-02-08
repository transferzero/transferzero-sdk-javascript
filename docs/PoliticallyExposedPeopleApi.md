# TransferzeroSdk.PoliticallyExposedPeopleApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePoliticallyExposedPerson**](PoliticallyExposedPeopleApi.md#deletePoliticallyExposedPerson) | **DELETE** /politically_exposed_people/{PoliticallyExposedPerson ID} | Deleting a politically exposed person
[**getPoliticallyExposedPeople**](PoliticallyExposedPeopleApi.md#getPoliticallyExposedPeople) | **GET** /politically_exposed_people | Listing Politically Exposed People
[**getPoliticallyExposedPerson**](PoliticallyExposedPeopleApi.md#getPoliticallyExposedPerson) | **GET** /politically_exposed_people/{PoliticallyExposedPerson ID} | Fetching a politically exposed person
[**patchPoliticallyExposedPerson**](PoliticallyExposedPeopleApi.md#patchPoliticallyExposedPerson) | **PATCH** /politically_exposed_people/{PoliticallyExposedPerson ID} | Updating a politically exposed person
[**postPoliticallyExposedPeople**](PoliticallyExposedPeopleApi.md#postPoliticallyExposedPeople) | **POST** /politically_exposed_people | Creating a politically exposed person


<a name="deletePoliticallyExposedPerson"></a>
# **deletePoliticallyExposedPerson**
> deletePoliticallyExposedPerson(politicallyExposedPersonID)

Deleting a politically exposed person

Deletes a single politically exposed person given the PEP ID.

### Example
```javascript
import { PoliticallyExposedPeopleApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PoliticallyExposedPeopleApi(apiClient);

apiInstance.deletePoliticallyExposedPerson(politicallyExposedPersonID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PoliticallyExposedPeopleApi#deletePoliticallyExposedPerson");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **politicallyExposedPersonID** | **Number**| The ID of the Politically Exposed Person you want to delete.  Example: &#x60;/v1/politically_exposed_people/1&#x60; | 

### Return type

null (empty response body)

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
 - **Accept**: Not defined

<a name="getPoliticallyExposedPeople"></a>
# **getPoliticallyExposedPeople**
> PoliticallyExposedPersonListResponse getPoliticallyExposedPeople(opts)

Listing Politically Exposed People

Get a list of politically exposed people

### Example
```javascript
import { PoliticallyExposedPeopleApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PoliticallyExposedPeopleApi(apiClient);

let opts = { 
  'senderId': null // String | The ID of the Sender to whom the politically exposed people are attached to.  Example: `/v1/politically_exposed_people?sender_id=344fb668-196d-43db-9d94-b34b7e6c7e0b`
};
apiInstance.getPoliticallyExposedPeople(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PoliticallyExposedPeopleApi#getPoliticallyExposedPeople");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **senderId** | [**String**](.md)| The ID of the Sender to whom the politically exposed people are attached to.  Example: &#x60;/v1/politically_exposed_people?sender_id&#x3D;344fb668-196d-43db-9d94-b34b7e6c7e0b&#x60; | [optional] 

### Return type

[**PoliticallyExposedPersonListResponse**](PoliticallyExposedPersonListResponse.md)

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

<a name="getPoliticallyExposedPerson"></a>
# **getPoliticallyExposedPerson**
> PoliticallyExposedPersonResponse getPoliticallyExposedPerson(politicallyExposedPersonIDopts)

Fetching a politically exposed person

Returns a single politically exposed person given the PEP ID. Can optionally be filtered using the sender_id query parameter.

### Example
```javascript
import { PoliticallyExposedPeopleApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PoliticallyExposedPeopleApi(apiClient);

let opts = { 
  'senderId': null // String | The ID of the Sender to whom the politically exposed person is attached to.
};
apiInstance.getPoliticallyExposedPerson(politicallyExposedPersonIDopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PoliticallyExposedPeopleApi#getPoliticallyExposedPerson");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **politicallyExposedPersonID** | **Number**| The ID of the Politically Exposed Person you want to retrieve.  Example: &#x60;/v1/politically_exposed_people/1?sender_id&#x3D;344fb668-196d-43db-9d94-b34b7e6c7e0b&#x60; | 
 **senderId** | [**String**](.md)| The ID of the Sender to whom the politically exposed person is attached to. | [optional] 

### Return type

[**PoliticallyExposedPersonResponse**](PoliticallyExposedPersonResponse.md)

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

<a name="patchPoliticallyExposedPerson"></a>
# **patchPoliticallyExposedPerson**
> PoliticallyExposedPersonResponse patchPoliticallyExposedPerson(politicallyExposedPersonIDpoliticallyExposedPerson)

Updating a politically exposed person

Updates a single politically exposed person given the PEP ID.

### Example
```javascript
import { PoliticallyExposedPeopleApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PoliticallyExposedPeopleApi(apiClient);

apiInstance.patchPoliticallyExposedPerson(politicallyExposedPersonIDpoliticallyExposedPerson).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PoliticallyExposedPeopleApi#patchPoliticallyExposedPerson");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **politicallyExposedPersonID** | **Number**| The ID of the Politically Exposed Person you want to update.  Example: &#x60;/v1/politically_exposed_people/1&#x60; | 
 **politicallyExposedPerson** | [**PoliticallyExposedPerson**](PoliticallyExposedPerson.md)|  | 

### Return type

[**PoliticallyExposedPersonResponse**](PoliticallyExposedPersonResponse.md)

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

<a name="postPoliticallyExposedPeople"></a>
# **postPoliticallyExposedPeople**
> PoliticallyExposedPersonResponse postPoliticallyExposedPeople(politicallyExposedPerson)

Creating a politically exposed person

Creates a new politically exposed person in our system. 

### Example
```javascript
import { PoliticallyExposedPeopleApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new PoliticallyExposedPeopleApi(apiClient);

apiInstance.postPoliticallyExposedPeople(politicallyExposedPerson).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling PoliticallyExposedPeopleApi#postPoliticallyExposedPeople");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **politicallyExposedPerson** | [**PoliticallyExposedPerson**](PoliticallyExposedPerson.md)|  | 

### Return type

[**PoliticallyExposedPersonResponse**](PoliticallyExposedPersonResponse.md)

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

