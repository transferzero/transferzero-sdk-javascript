# TransferzeroSdk.WebhookLogMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**params** | [**WebhookDefinition**](WebhookDefinition.md) |  | [optional] 
**event** | **String** | Specific event that triggered the webhook | [optional] [readonly] 
**instanceId** | **String** | Instance ID of the webhook event | [optional] [readonly] 
**instanceType** | **String** | Type of instance event | [optional] [readonly] 
**attemptId** | **String** | Attempt ID | [optional] [readonly] 
**tries** | **Number** | Number of tries at the point webhook was triggered | [optional] [readonly] 
**request** | [**WebhookLogMetadataRequest**](WebhookLogMetadataRequest.md) |  | [optional] 
**response** | [**WebhookLogMetadataResponse**](WebhookLogMetadataResponse.md) |  | [optional] 
**appId** | **String** | ID of app on which webhook event was triggered | [optional] [readonly] 
**apiKeyId** | **String** | ID of API key in use at point of webhook event | [optional] [readonly] 


