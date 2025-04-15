# TransferzeroSdk.AccountValidationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankAccount** | **String** | Account Number to query | [optional] 
**bankCode** | **String** | Bank Code to query - same codes are used as for creating the transactions | [optional] 
**iban** | **String** | IBAN to query - BBAN format for XOF bank accounts | [optional] 
**phoneNumber** | **String** | Phone number to query in E.164 format | [optional] 
**mobileProvider** | [**PayoutMethodMobileProviderEnum**](PayoutMethodMobileProviderEnum.md) |  | [optional] 
**country** | **String** | Country of account in 2-character alpha ISO 3166-2 country format | 
**currency** | **String** | The currency the bank account is in | 
**method** | **String** | The method of the payment. Currently bank and mobile are supported | 



## Enum: CountryEnum


* `BF` (value: `"BF"`)

* `BJ` (value: `"BJ"`)

* `CG` (value: `"CG"`)

* `CI` (value: `"CI"`)

* `CM` (value: `"CM"`)

* `GA` (value: `"GA"`)

* `GH` (value: `"GH"`)

* `KE` (value: `"KE"`)

* `NG` (value: `"NG"`)

* `SN` (value: `"SN"`)

* `TD` (value: `"TD"`)

* `TG` (value: `"TG"`)

* `UG` (value: `"UG"`)





## Enum: CurrencyEnum


* `NGN` (value: `"NGN"`)

* `GHS` (value: `"GHS"`)

* `KES` (value: `"KES"`)

* `XOF` (value: `"XOF"`)

* `UGX` (value: `"UGX"`)

* `XAF` (value: `"XAF"`)





## Enum: MethodEnum


* `bank` (value: `"bank"`)

* `mobile` (value: `"mobile"`)




