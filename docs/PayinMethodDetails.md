# TransferzeroSdk.PayinMethodDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentMethod** | **String** | The payment method which the sender will use to make the payments. Options are &#x60;bank&#x60;, &#x60;card&#x60; or you can leave empty to support both. | [optional] 
**redirectUrl** | **String** | This is where the sender should be redirected back when the payment has been finished | [optional] 
**phoneNumber** | **String** | The phone number where the funds should be collected from | [optional] 
**mobileProvider** | [**PayoutMethodMobileProviderEnum**](PayoutMethodMobileProviderEnum.md) |  | [optional] 
**country** | [**PayoutMethodCountryEnum**](PayoutMethodCountryEnum.md) |  | [optional] 
**otp** | **String** | The OTP that the sender received in otp verified ussd popup ux flow. | [optional] 
**refundAddress** | **String** | Please make sure the refund_address is a valid BTC address belonging to the sender, as that is going to be used in case the transaction has to be refunded. | [optional] 


