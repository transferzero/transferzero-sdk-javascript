# TransferzeroSdk.EntitiesApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEntities**](EntitiesApi.md#getEntities) | **GET** /risk_assessment/entities/{Entity Type}/summary | Listing entities
[**getEntitiesByParams**](EntitiesApi.md#getEntitiesByParams) | **GET** /risk_assessment/entities/{Entity Type}/search | Listing entities by params (rating and/or state)
[**getEntity**](EntitiesApi.md#getEntity) | **GET** /risk_assessment/entities/{Entity Type}/{Entity ID} | Fetching a entity
[**patchEntity**](EntitiesApi.md#patchEntity) | **PATCH** /risk_assessment/entities/{Entity Type}/{Entity ID} | Updating an entity
[**postEntity**](EntitiesApi.md#postEntity) | **POST** /risk_assessment/entities/{Entity Type}/{Entity ID} | Creating an entity


<a name="getEntities"></a>
# **getEntities**
> EntityListResponse getEntities(entityTypeids)

Listing entities

Get a list of entities

### Example
```javascript
import { EntitiesApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new EntitiesApi(apiClient);

apiInstance.getEntities(entityTypeids).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling EntitiesApi#getEntities");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **String**| Type of entities to get.  Example: &#x60;/risk_assessment/entities/sender/summary?ids[]&#x3D;bf9ff782-e182-45ac-abea-5bce83ad6670&amp;ids[]&#x3D;344fb668-196d-43db-9d94-b34b7e6c7e0b&#x60; | 
 **ids** | [**[String]**](String.md)| Returns entities of specified entity(e.g Sender) id(s). This allows the fetching of entities for multiple e.g. senders  Example: &#x60;/risk_assessment/entities/sender?ids[]&#x3D;bf9ff782-e182-45ac-abea-5bce83ad6670&amp;ids[]&#x3D;344fb668-196d-43db-9d94-b34b7e6c7e0b&#x60; | 

### Return type

[**EntityListResponse**](EntityListResponse.md)

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

<a name="getEntitiesByParams"></a>
# **getEntitiesByParams**
> EntityListResponse getEntitiesByParams(entityTypeopts)

Listing entities by params (rating and/or state)

Get a list of entities scoped by the requested params (rating and/or state)

### Example
```javascript
import { EntitiesApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new EntitiesApi(apiClient);

let opts = { 
  'rating': "rating_example" // String | Returns a list of entities scoped by the Entity rating (rating param can be one of 'extremely_high', 'high_risk', 'medium_risk' or 'low_risk')  Example: `/risk_assessment/entities/Sender::Business/search?rating=extremely_high`
  'state': "state_example" // String | Returns a list of entities scoped by the Entity state (state param can be one of 'complete' or 'incomplete')  Example: `/risk_assessment/entities/Sender::Business/search?state=complete`
};
apiInstance.getEntitiesByParams(entityTypeopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling EntitiesApi#getEntitiesByParams");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **String**| Type of entities to retrieve.  Example: &#x60;/risk_assessment/entities/sender/search?rating&#x3D;extremely_high&amp;state&#x3D;complete&#x60; | 
 **rating** | **String**| Returns a list of entities scoped by the Entity rating (rating param can be one of &#39;extremely_high&#39;, &#39;high_risk&#39;, &#39;medium_risk&#39; or &#39;low_risk&#39;)  Example: &#x60;/risk_assessment/entities/Sender::Business/search?rating&#x3D;extremely_high&#x60; | [optional] 
 **state** | **String**| Returns a list of entities scoped by the Entity state (state param can be one of &#39;complete&#39; or &#39;incomplete&#39;)  Example: &#x60;/risk_assessment/entities/Sender::Business/search?state&#x3D;complete&#x60; | [optional] 

### Return type

[**EntityListResponse**](EntityListResponse.md)

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

<a name="getEntity"></a>
# **getEntity**
> EntityCreateResponse getEntity(entityTypeentityID)

Fetching a entity

Returns a single entity by the Entity ID

### Example
```javascript
import { EntitiesApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new EntitiesApi(apiClient);

apiInstance.getEntity(entityTypeentityID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling EntitiesApi#getEntity");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **String**| Type of entities to get.  Example: &#x60;/risk_assessment/entities/sender/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 
 **entityID** | [**String**](.md)| ID of the entity to get.  Example: &#x60;/risk_assessment/entities/sender/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 

### Return type

[**EntityCreateResponse**](EntityCreateResponse.md)

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

<a name="patchEntity"></a>
# **patchEntity**
> EntityUpdateResponse patchEntity(entityTypeentityIDentityUpdateRequest)

Updating an entity

Updates a single entity by the Entity ID

### Example
```javascript
import { EntitiesApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new EntitiesApi(apiClient);

apiInstance.patchEntity(entityTypeentityIDentityUpdateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling EntitiesApi#patchEntity");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **String**| Type of entities to get.  Example: &#x60;/risk_assessment/entities/sender/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 
 **entityID** | [**String**](.md)| ID of the entity to get.  Example: &#x60;/risk_assessment/entities/sender/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 
 **entityUpdateRequest** | [**EntityUpdateRequest**](EntityUpdateRequest.md)|  | 

### Return type

[**EntityUpdateResponse**](EntityUpdateResponse.md)

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

<a name="postEntity"></a>
# **postEntity**
> EntityCreateResponse postEntity(entityTypeentityIDentityCreateRequest)

Creating an entity

Creates a new entity. 

### Example
```javascript
import { EntitiesApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';

let apiInstance = new EntitiesApi(apiClient);

apiInstance.postEntity(entityTypeentityIDentityCreateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling EntitiesApi#postEntity");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **String**| Type of entity to create. | 
 **entityID** | [**String**](.md)| ID of entity type to create entity for.  Example: &#x60;/risk_assessment/entities/sender/e6f67a67-b2c2-4897-ad58-9fc3a9d8d991&#x60; | 
 **entityCreateRequest** | [**EntityCreateRequest**](EntityCreateRequest.md)|  | 

### Return type

[**EntityCreateResponse**](EntityCreateResponse.md)

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

