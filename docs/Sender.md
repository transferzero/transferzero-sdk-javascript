# TransferzeroSdk.Sender

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of sender to create - either person or business (defaults to person)  | [optional] 
**country** | **String** | Country of sender in 2-character alpha ISO 3166-2 country format | 
**phoneCountry** | **String** | Phone country of sender in 2-character alpha ISO 3166-2 country format | 
**phoneNumber** | **String** | Phone number of sender (without country callcode) | [optional] 
**email** | **String** | Email of sender | 
**firstName** | **String** | First name of sender (used only with a Personal sender) | [optional] 
**middleName** | **String** | Middle name of sender (used only with a Personal sender) | [optional] 
**lastName** | **String** | Last name of sender (used only with a Personal sender) | [optional] 
**occupation** | **String** | Occupation of sender (used only with a Personal sender) | [optional] 
**nationality** | **String** | The nationality of the sender (used only with a Personal sender) | [optional] 
**onboardingStatus** | **String** | The onboarding status of the sender | [optional] 
**address** | **String** | The address of the sender | [optional] 
**description** | **String** | Description of the sender | [optional] 
**name** | **String** | Name of sender (used only with a Business sender) | [optional] 
**city** | **String** | Sender&#39;s city | 
**street** | **String** | Sender&#39;s street | 
**addressDescription** | **String** | Description of address | [optional] 
**postalCode** | **String** | Zip code of sender | 
**birthDate** | **Date** | Date of birth of sender | [optional] 
**ip** | **String** | IP of sender | 
**identificationNumber** | **String** | Identification number of document used | [optional] 
**identificationType** | **String** | Document to be identified. The identification type can be one of the following:  - &#x60;DL&#x60;: Driving License - &#x60;PP&#x60;: International Passport - &#x60;ID&#x60;: National ID - &#x60;OT&#x60;: Other | [optional] 
**documents** | [**[Document]**](Document.md) | Needed for KYC checks. Required to approve the sender unless KYC is waived for your account. Please send us an empty list of documents: &#x60;\&quot;documents\&quot;: [ ]&#x60; in the request if KYC has been waived.  If the documents already exist, please send the Document ID eg. &#x60;&#x60;&#x60;JSON \&quot;documents\&quot;: [   {     \&quot;id\&quot;: \&quot;b6648ba3-1c7b-4f59-8580-684899c84a07\&quot;   } ] &#x60;&#x60;&#x60; | 
**metadata** | [**Object**](.md) | Metadata of sender. You can store any detail specific to your integration here (for example the local ID of the sender on your end). When requesting sender details you will receive the sent metadata back. Also when sending sender related webhooks you will receive the details stored here as well. | [optional] 
**state** | [**SenderState**](SenderState.md) |  | [optional] 
**id** | **String** |  | [optional] 
**externalId** | **String** | Optional ID that is supplied by partner linking it to the partner&#39;s own Sender ID. Note: if present we will validate whether the sent ID is a duplicate in our system or not. | [optional] 
**errors** | **{String: [ValidationErrorDescription]}** | The fields that have some problems and don&#39;t pass validation | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `person` (value: `"person"`)

* `business` (value: `"business"`)




<a name="IdentificationTypeEnum"></a>
## Enum: IdentificationTypeEnum


* `DL` (value: `"DL"`)

* `PP` (value: `"PP"`)

* `ID` (value: `"ID"`)

* `OT` (value: `"OT"`)




