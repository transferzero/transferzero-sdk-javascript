# TransferzeroSdk.PaymentMethod

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Details currency and type of payment. | [optional] 
**provider** | **String** | Identifies the payment provider. | [optional] 
**otcPermitted** | **Boolean** | Are over the counter transactions permitted? | [optional] 
**details** | **[String]** | Fields required to make the payment depending on type. | [optional] 
**_default** | **Boolean** | Boolean revealing whether this is the default payout method. Only present on payout methods | [optional] 
**fields** | [**{String: FieldDescription}**](FieldDescription.md) | The fields needed for payments with this payment method with details on validation requirements | [optional] 


