# TransferzeroSdk.Mandate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the mandate | [optional] [readonly] 
**status** | [**MandateStatus**](MandateStatus.md) |  | [optional] 
**typeId** | **Number** | Numeric beneficiary type identifier. Identifies whether the mandate was issued for a natural person, sole proprietor, partnership, company, etc. | [optional] [readonly] 
**reference** | **String** | Human-readable reference assigned to the mandate at creation. | [optional] [readonly] 
**signedAt** | **Date** | Timestamp when the mandate transitioned to &#x60;signed&#x60;. &#x60;null&#x60; for mandates that are pending, notified, failed, or bypassed. | [optional] [readonly] 
**createdAt** | **Date** | Timestamp when the mandate was created. | [optional] [readonly] 
**updatedAt** | **Date** | Timestamp when the mandate was last updated. | [optional] [readonly] 


