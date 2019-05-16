# TransferzeroSdk.WebhookLogMetadata

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | [**WebhookDefinition**](WebhookDefinition.md) |  | [optional] 
**event** | **String** | Specific event that triggered the webhook | [optional] 
**instanceId** | **String** | Instance ID of the webhook event | [optional] 
**instanceType** | **String** | Type of instance event | [optional] 
**attemptId** | **String** | Attempt ID | [optional] 
**tries** | **Number** | Number of tries at the point webhook was triggered | [optional] 
**request** | [**WebhookLogMetadataRequest**](WebhookLogMetadataRequest.md) |  | [optional] 
**response** | [**WebhookLogMetadataResponse**](WebhookLogMetadataResponse.md) |  | [optional] 
**appId** | **String** | ID of app on which webhook event was triggered | [optional] 
**apiKeyId** | **String** | ID of API key in use at point of webhook event | [optional] 


