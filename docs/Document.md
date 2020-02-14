# TransferzeroSdk.Document

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**senderId** | **String** |  | [optional] 
**upload** | **String** | Base64 encoded data uri of an image/pdf file or a fully qualified url | 
**uploadFileName** | **String** | Name of the upload | 
**metadata** | [**Object**](.md) | Metadata of document | [optional] 
**uploadContentType** | **String** |  | [optional] 
**uploadFileSize** | **Number** |  | [optional] 
**category** | **String** | uncategorised | [optional] 
**side** | **String** | The side of the KYC ID. One of &#39;front&#39; or &#39;back&#39; | [optional] 
**documentType** | **String** | This is a brief description of the document type | [optional] 
**issuingCountry** | **String** | Issuing country of ID in 2-character alpha ISO 3166-2 country format | [optional] 
**id** | **String** |  | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] 


<a name="SideEnum"></a>
## Enum: SideEnum


* `front` (value: `"front"`)

* `back` (value: `"back"`)




