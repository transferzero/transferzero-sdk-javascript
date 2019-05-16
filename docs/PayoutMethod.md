# TransferzeroSdk.PayoutMethod

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Contains the currency to send the money to, and the type of the money movement  Commonly used payout types are:  - &#x60;NGN::Bank&#x60; - for Nigerian bank account payments. - &#x60;NGN::Mobile&#x60; - for Nigerian mobile money payments. - &#x60;GHS::Bank&#x60; - for Ghanaian bank account payments. - &#x60;GHS::Mobile&#x60; - for Ghanaian mobile money payments. - &#x60;UGX::Mobile&#x60; - for Ugandan mobile money payments. - &#x60;TZS::Mobile&#x60; - for Tanzanian mobile money payments. - &#x60;XOF::Mobile&#x60; - for Senegalese mobile money payments. - &#x60;MAD::Cash&#x60; - for Moroccan cash remittance payments. - &#x60;EUR::Bank&#x60; - for IBAN bank transfers in EUR. - &#x60;GBP::Bank&#x60; - for IBAN bank transfers in GBP.  You can also send funds to the internal balance using &#x60;CCY::Balance&#x60;, where &#x60;CCY&#x60; is the appropriate currency. See [Collection from senders](https://github.com/transferzero/api-documentation/blob/master/additional-features.md#collections-from-senders) for more info on how to collect money into internal balance  | [optional] 
**details** | [**PayoutMethodDetails**](PayoutMethodDetails.md) |  | [optional] 
**metadata** | [**Object**](.md) | Metadata of payout method. You can store any kind of information in this field. | [optional] 
**id** | **String** |  | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] 
**fields** | [**{String: FieldDescription}**](FieldDescription.md) | The fields needed for payments with this payment method with details on validation requirements | [optional] 


