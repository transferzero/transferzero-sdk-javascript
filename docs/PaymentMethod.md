# TransferzeroSdk.PaymentMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Details currency and type of payment. | [optional] [readonly] 
**provider** | **String** | Identifies the payment provider. | [optional] [readonly] 
**otcPermitted** | **Boolean** | Are over the counter transactions permitted? | [optional] [readonly] 
**details** | **[String]** | Fields required to make the payment depending on type. | [optional] [readonly] 
**_default** | **Boolean** | Boolean revealing whether this is the default payout method. Only present on payout methods | [optional] [readonly] 
**fields** | [**{String: FieldDescription}**](FieldDescription.md) | The fields needed for payments with this payment method with details on validation requirements | [optional] [readonly] 


