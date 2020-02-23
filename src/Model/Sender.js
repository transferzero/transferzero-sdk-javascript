/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Document from './Document';
import PoliticallyExposedPerson from './PoliticallyExposedPerson';
import SenderState from './SenderState';
import ValidationErrorDescription from './ValidationErrorDescription';

/**
 * The Sender model module.
 * @module Model/Sender
 * @version 1.5.0
 */
class Sender {
    /**
     * Constructs a new <code>Sender</code>.
     * This contains the details of the sender. The first time a specific sender is used the full details should be provided. Once a sender is created and is used, the next time you MUST only send the ID of the sender. This is so we can match the same sender across multiple transactions for KYC and audit purposes.  Personal Sender Example: &#x60;&#x60;&#x60;json {   \&quot;country\&quot;: \&quot;UG\&quot;,   \&quot;phone_country\&quot;: \&quot;UG\&quot;,   \&quot;phone_number\&quot;: \&quot;752403639\&quot;,   \&quot;email\&quot;: \&quot;example@home.org\&quot;,   \&quot;first_name\&quot;: \&quot;Johnny\&quot;,   \&quot;last_name\&quot;: \&quot;English\&quot;,   \&quot;city\&quot;: \&quot;Kampala\&quot;,   \&quot;street\&quot;: \&quot;Unknown 17-3\&quot;,   \&quot;address_description\&quot;: \&quot;Description of address\&quot;,   \&quot;postal_code\&quot;: \&quot;798983\&quot;,   \&quot;birth_date\&quot;: \&quot;1900-12-31\&quot;,   \&quot;documents\&quot;: [ ],   \&quot;politically_exposed_people\&quot;: [ ],   \&quot;ip\&quot;: \&quot;127.0.0.1\&quot;,   \&quot;identification_number\&quot;: \&quot;AB123456\&quot;,   \&quot;identification_type\&quot;: \&quot;ID\&quot;,   \&quot;external_id\&quot;: \&quot;806ec63a-a5a7-43cc-9d75-1ee74fbcc026\&quot;,   \&quot;metadata\&quot;: { } } &#x60;&#x60;&#x60;  Business Sender Example:  &#x60;&#x60;&#x60;json {   \&quot;type\&quot;: \&quot;business\&quot;,   \&quot;country\&quot;: \&quot;UG\&quot;,   \&quot;phone_country\&quot;: \&quot;UG\&quot;,   \&quot;phone_number\&quot;: \&quot;752403639\&quot;,   \&quot;email\&quot;: \&quot;example@home.org\&quot;,   \&quot;name\&quot;: \&quot;MyCompany\&quot;,   \&quot;city\&quot;: \&quot;Kampala\&quot;,   \&quot;street\&quot;: \&quot;Unknown 17-3\&quot;,   \&quot;postal_code\&quot;: \&quot;798983\&quot;,   \&quot;address_description\&quot;: \&quot;Description of address\&quot;,   \&quot;documents\&quot;: [ ],   \&quot;politically_exposed_people\&quot;: [ ],   \&quot;ip\&quot;: \&quot;127.0.0.1\&quot;,   \&quot;identification_number\&quot;: \&quot;AB123456\&quot;,   \&quot;identification_type\&quot;: \&quot;ID\&quot;,   \&quot;external_id\&quot;: \&quot;806ec63a-a5a7-43cc-9d75-1ee74fbcc026\&quot;,   \&quot;metadata\&quot;: { } } &#x60;&#x60;&#x60;  [Sender in the API documentation](https://docs.transferzero.com/docs/transaction-flow/#sender)
     * @alias module:Model/Sender
     * @param country {String} Country of sender in 2-character alpha ISO 3166-2 country format
     * @param street {String} Sender's street
     * @param postalCode {String} Zip code of sender
     * @param city {String} Sender's city
     * @param phoneCountry {String} Phone country of sender in 2-character alpha ISO 3166-2 country format
     * @param email {String} Email of sender
     * @param ip {String} IP of sender
     * @param documents {Array.<module:Model/Document>} Needed for KYC checks. Required to approve the sender unless KYC is waived for your account. Please send us an empty list of documents: `\"documents\": [ ]` in the request if KYC has been waived.  If the documents already exist, please send the Document ID eg. ```JSON \"documents\": [   {     \"id\": \"b6648ba3-1c7b-4f59-8580-684899c84a07\"   } ] ```
     */
    constructor(country, street, postalCode, city, phoneCountry, email, ip, documents) { 
        
        Sender.initialize(this, country, street, postalCode, city, phoneCountry, email, ip, documents);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, country, street, postalCode, city, phoneCountry, email, ip, documents) { 
        obj['country'] = country;
        obj['street'] = street;
        obj['postal_code'] = postalCode;
        obj['city'] = city;
        obj['phone_country'] = phoneCountry;
        obj['email'] = email;
        obj['ip'] = ip;
        obj['documents'] = documents;
    }

    /**
     * Constructs a <code>Sender</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Sender} obj Optional instance to populate.
     * @return {module:Model/Sender} The populated <code>Sender</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Sender();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = SenderState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('phone_country')) {
                obj['phone_country'] = ApiClient.convertToType(data['phone_country'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('address_description')) {
                obj['address_description'] = ApiClient.convertToType(data['address_description'], 'String');
            }
            if (data.hasOwnProperty('identification_number')) {
                obj['identification_number'] = ApiClient.convertToType(data['identification_number'], 'String');
            }
            if (data.hasOwnProperty('identification_type')) {
                obj['identification_type'] = ApiClient.convertToType(data['identification_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('middle_name')) {
                obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('birth_date')) {
                obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'Date');
            }
            if (data.hasOwnProperty('occupation')) {
                obj['occupation'] = ApiClient.convertToType(data['occupation'], 'String');
            }
            if (data.hasOwnProperty('nationality')) {
                obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
            }
            if (data.hasOwnProperty('legal_entity_type')) {
                obj['legal_entity_type'] = ApiClient.convertToType(data['legal_entity_type'], 'String');
            }
            if (data.hasOwnProperty('registration_date')) {
                obj['registration_date'] = ApiClient.convertToType(data['registration_date'], 'String');
            }
            if (data.hasOwnProperty('registration_number')) {
                obj['registration_number'] = ApiClient.convertToType(data['registration_number'], 'String');
            }
            if (data.hasOwnProperty('nature_of_business')) {
                obj['nature_of_business'] = ApiClient.convertToType(data['nature_of_business'], 'String');
            }
            if (data.hasOwnProperty('source_of_funds')) {
                obj['source_of_funds'] = ApiClient.convertToType(data['source_of_funds'], 'String');
            }
            if (data.hasOwnProperty('core_business_activities')) {
                obj['core_business_activities'] = ApiClient.convertToType(data['core_business_activities'], 'String');
            }
            if (data.hasOwnProperty('purpose_of_opening_account')) {
                obj['purpose_of_opening_account'] = ApiClient.convertToType(data['purpose_of_opening_account'], 'String');
            }
            if (data.hasOwnProperty('office_phone')) {
                obj['office_phone'] = ApiClient.convertToType(data['office_phone'], 'String');
            }
            if (data.hasOwnProperty('vat_registration_number')) {
                obj['vat_registration_number'] = ApiClient.convertToType(data['vat_registration_number'], 'String');
            }
            if (data.hasOwnProperty('financial_regulator')) {
                obj['financial_regulator'] = ApiClient.convertToType(data['financial_regulator'], 'String');
            }
            if (data.hasOwnProperty('regulatory_licence_number')) {
                obj['regulatory_licence_number'] = ApiClient.convertToType(data['regulatory_licence_number'], 'String');
            }
            if (data.hasOwnProperty('contact_person_email')) {
                obj['contact_person_email'] = ApiClient.convertToType(data['contact_person_email'], 'String');
            }
            if (data.hasOwnProperty('trading_country')) {
                obj['trading_country'] = ApiClient.convertToType(data['trading_country'], 'String');
            }
            if (data.hasOwnProperty('trading_address')) {
                obj['trading_address'] = ApiClient.convertToType(data['trading_address'], 'String');
            }
            if (data.hasOwnProperty('documents')) {
                obj['documents'] = ApiClient.convertToType(data['documents'], [Document]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], {'String': [ValidationErrorDescription]});
            }
            if (data.hasOwnProperty('onboarding_status')) {
                obj['onboarding_status'] = ApiClient.convertToType(data['onboarding_status'], 'String');
            }
            if (data.hasOwnProperty('politically_exposed_people')) {
                obj['politically_exposed_people'] = ApiClient.convertToType(data['politically_exposed_people'], [PoliticallyExposedPerson]);
            }
            if (data.hasOwnProperty('external_id')) {
                obj['external_id'] = ApiClient.convertToType(data['external_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Sender.prototype['id'] = undefined;

/**
 * Type of sender to create - either person or business (defaults to person) 
 * @member {module:Model/Sender.TypeEnum} type
 */
Sender.prototype['type'] = undefined;

/**
 * @member {module:Model/SenderState} state
 */
Sender.prototype['state'] = undefined;

/**
 * Country of sender in 2-character alpha ISO 3166-2 country format
 * @member {String} country
 */
Sender.prototype['country'] = undefined;

/**
 * Sender's street
 * @member {String} street
 */
Sender.prototype['street'] = undefined;

/**
 * Zip code of sender
 * @member {String} postal_code
 */
Sender.prototype['postal_code'] = undefined;

/**
 * Sender's city
 * @member {String} city
 */
Sender.prototype['city'] = undefined;

/**
 * Phone country of sender in 2-character alpha ISO 3166-2 country format
 * @member {String} phone_country
 */
Sender.prototype['phone_country'] = undefined;

/**
 * Phone number of sender (without country callcode)
 * @member {String} phone_number
 */
Sender.prototype['phone_number'] = undefined;

/**
 * Email of sender
 * @member {String} email
 */
Sender.prototype['email'] = undefined;

/**
 * IP of sender
 * @member {String} ip
 */
Sender.prototype['ip'] = undefined;

/**
 * Description of address
 * @member {String} address_description
 */
Sender.prototype['address_description'] = undefined;

/**
 * Identification number of document used
 * @member {String} identification_number
 */
Sender.prototype['identification_number'] = undefined;

/**
 * Document to be identified. The identification type can be one of the following:  - `DL`: Driving License - `PP`: International Passport - `ID`: National ID - `OT`: Other
 * @member {module:Model/Sender.IdentificationTypeEnum} identification_type
 */
Sender.prototype['identification_type'] = undefined;

/**
 * Name of sender (used only with a Business sender)
 * @member {String} name
 */
Sender.prototype['name'] = undefined;

/**
 * First name of sender (used only with a Personal sender)
 * @member {String} first_name
 */
Sender.prototype['first_name'] = undefined;

/**
 * Middle name of sender (used only with a Personal sender)
 * @member {String} middle_name
 */
Sender.prototype['middle_name'] = undefined;

/**
 * Last name of sender (used only with a Personal sender)
 * @member {String} last_name
 */
Sender.prototype['last_name'] = undefined;

/**
 * Date of birth of sender (used only with a Personal sender)
 * @member {Date} birth_date
 */
Sender.prototype['birth_date'] = undefined;

/**
 * Occupation of sender (used only with a Personal sender)
 * @member {String} occupation
 */
Sender.prototype['occupation'] = undefined;

/**
 * The nationality of the sender (used only with a Personal sender)
 * @member {String} nationality
 */
Sender.prototype['nationality'] = undefined;

/**
 * Legal entity type (used only with a Business sender)
 * @member {module:Model/Sender.LegalEntityTypeEnum} legal_entity_type
 */
Sender.prototype['legal_entity_type'] = undefined;

/**
 * The registration date (used only with a Business sender)
 * @member {String} registration_date
 */
Sender.prototype['registration_date'] = undefined;

/**
 * The registration number (used only with a Business sender)
 * @member {String} registration_number
 */
Sender.prototype['registration_number'] = undefined;

/**
 * Nature of business options (used only with a Business sender)
 * @member {String} nature_of_business
 */
Sender.prototype['nature_of_business'] = undefined;

/**
 * The source of funds
 * @member {String} source_of_funds
 */
Sender.prototype['source_of_funds'] = undefined;

/**
 * The core activities (used only with a Business sender)
 * @member {String} core_business_activities
 */
Sender.prototype['core_business_activities'] = undefined;

/**
 * The purpose for opening their account (used only with a Business sender)
 * @member {String} purpose_of_opening_account
 */
Sender.prototype['purpose_of_opening_account'] = undefined;

/**
 * The official phone number (used only with a Business sender)
 * @member {String} office_phone
 */
Sender.prototype['office_phone'] = undefined;

/**
 * The VAT registration number (used only with a Business sender)
 * @member {String} vat_registration_number
 */
Sender.prototype['vat_registration_number'] = undefined;

/**
 * The Financial Regulator (used only with a Business sender)
 * @member {String} financial_regulator
 */
Sender.prototype['financial_regulator'] = undefined;

/**
 * The Regulatory Licence Number (used only with a Business sender)
 * @member {String} regulatory_licence_number
 */
Sender.prototype['regulatory_licence_number'] = undefined;

/**
 * The contact's email address (used only with a Business sender)
 * @member {String} contact_person_email
 */
Sender.prototype['contact_person_email'] = undefined;

/**
 * The Business trading country (used only with a Business sender)
 * @member {String} trading_country
 */
Sender.prototype['trading_country'] = undefined;

/**
 * The Business trading address (used only with a Business sender)
 * @member {String} trading_address
 */
Sender.prototype['trading_address'] = undefined;

/**
 * Needed for KYC checks. Required to approve the sender unless KYC is waived for your account. Please send us an empty list of documents: `\"documents\": [ ]` in the request if KYC has been waived.  If the documents already exist, please send the Document ID eg. ```JSON \"documents\": [   {     \"id\": \"b6648ba3-1c7b-4f59-8580-684899c84a07\"   } ] ```
 * @member {Array.<module:Model/Document>} documents
 */
Sender.prototype['documents'] = undefined;

/**
 * Metadata of sender. You can store any detail specific to your integration here (for example the local ID of the sender on your end). When requesting sender details you will receive the sent metadata back. Also when sending sender related webhooks you will receive the details stored here as well.
 * @member {Object} metadata
 */
Sender.prototype['metadata'] = undefined;

/**
 * The fields that have some problems and don't pass validation
 * @member {Object.<String, Array.<module:Model/ValidationErrorDescription>>} errors
 */
Sender.prototype['errors'] = undefined;

/**
 * The onboarding status of the sender
 * @member {String} onboarding_status
 */
Sender.prototype['onboarding_status'] = undefined;

/**
 * An optional list of politically exposed people, individuals who are or have been entrusted with prominent public functions by a country, for example heads of state or heads of government, senior politicians, senior government, judicial or military officials, senior executives of state owned corporations, important political party officials.  There is a limit of three (3) politically exposed people per Sender.  Politically exposed person example: ```json   {     \"politically_exposed_person\": {       \"name\": \"Ronald Reagan\",       \"position\": \"President of the United States\",       \"started_date\": \"1981-01-20T00:00:00.000Z\",       \"ended_date\": \"1989-01-20T00:00:00.000Z\",       \"sender_id\": \"344fb668-196d-43db-9d94-b34b7e6c7e0b\"     }   } ```
 * @member {Array.<module:Model/PoliticallyExposedPerson>} politically_exposed_people
 */
Sender.prototype['politically_exposed_people'] = undefined;

/**
 * Optional ID that is supplied by partner linking it to the partner's own Sender ID. Note: if present we will validate whether the sent ID is a duplicate in our system or not.
 * @member {String} external_id
 */
Sender.prototype['external_id'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Sender['TypeEnum'] = {

    /**
     * value: "person"
     * @const
     */
    "person": "person",

    /**
     * value: "business"
     * @const
     */
    "business": "business"
};


/**
 * Allowed values for the <code>identification_type</code> property.
 * @enum {String}
 * @readonly
 */
Sender['IdentificationTypeEnum'] = {

    /**
     * value: "DL"
     * @const
     */
    "DL": "DL",

    /**
     * value: "PP"
     * @const
     */
    "PP": "PP",

    /**
     * value: "ID"
     * @const
     */
    "ID": "ID",

    /**
     * value: "OT"
     * @const
     */
    "OT": "OT"
};


/**
 * Allowed values for the <code>legal_entity_type</code> property.
 * @enum {String}
 * @readonly
 */
Sender['LegalEntityTypeEnum'] = {

    /**
     * value: "sole_proprietorship"
     * @const
     */
    "sole_proprietorship": "sole_proprietorship",

    /**
     * value: "partnership"
     * @const
     */
    "partnership": "partnership",

    /**
     * value: "privately_owned_company"
     * @const
     */
    "privately_owned_company": "privately_owned_company",

    /**
     * value: "publicly_owned_company"
     * @const
     */
    "publicly_owned_company": "publicly_owned_company",

    /**
     * value: "government_owned_entity"
     * @const
     */
    "government_owned_entity": "government_owned_entity",

    /**
     * value: "trust"
     * @const
     */
    "trust": "trust",

    /**
     * value: "ngo"
     * @const
     */
    "ngo": "ngo",

    /**
     * value: "club_and_society"
     * @const
     */
    "club_and_society": "club_and_society",

    /**
     * value: "go"
     * @const
     */
    "go": "go",

    /**
     * value: "other"
     * @const
     */
    "other": "other",

    /**
     * value: "financial_institution"
     * @const
     */
    "financial_institution": "financial_institution"
};



export default Sender;

