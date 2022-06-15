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
 * @version 1.20.0
 */
class Sender {
    /**
     * Constructs a new <code>Sender</code>.
     * This contains the details of the sender. The first time a specific sender is used the full details should be provided. Once a sender is created and is used, the next time you MUST only send the ID of the sender. This is so we can match the same sender across multiple transactions for KYC and audit purposes.  Personal Sender Example: &#x60;&#x60;&#x60;json {   // name   \&quot;first_name\&quot;: \&quot;Jane\&quot;,   \&quot;last_name\&quot;: \&quot;Doe\&quot;,    // address   \&quot;country\&quot;: \&quot;US\&quot;,   \&quot;city\&quot;: \&quot;New York\&quot;,   \&quot;street\&quot;: \&quot;20 W 34th St\&quot;,   \&quot;postal_code\&quot;: \&quot;10001\&quot;,   \&quot;address_description\&quot;: \&quot;\&quot;,    // DOB   \&quot;birth_date\&quot;: \&quot;1974-12-24\&quot;,    // Contact Details; You can usually use your company&#39;s contact details here   \&quot;phone_country\&quot;: \&quot;US\&quot;,   \&quot;phone_number\&quot;: \&quot;5555551234\&quot;,   \&quot;email\&quot;: \&quot;info@transferzero.com\&quot;,    // ID of the sender in your system   \&quot;external_id\&quot;: \&quot;Sender:US:234523\&quot;,    // these fields are mandatory, but you can usually leave them with the following default values:   \&quot;documents\&quot;: [ ],   \&quot;ip\&quot;: \&quot;127.0.0.1\&quot;,   \&quot;metadata\&quot;: {} } &#x60;&#x60;&#x60;  Business Sender Example:  &#x60;&#x60;&#x60;json {   \&quot;type\&quot;: \&quot;business\&quot;,   \&quot;name\&quot;: \&quot;Company name\&quot;,    // Country of Incorporation   \&quot;country\&quot;: \&quot;US\&quot;,    // Trading address of the company   \&quot;trading_country\&quot;: \&quot;US\&quot;,   \&quot;city\&quot;: \&quot;New York\&quot;,   \&quot;street\&quot;: \&quot;20 W 34th St\&quot;,   \&quot;postal_code\&quot;: \&quot;10001\&quot;,   \&quot;address_description\&quot;: \&quot;\&quot;,    // Company Details   \&quot;legal_entity_type\&quot;: \&quot;privately_owned_company\&quot;,   \&quot;registration_date\&quot;: \&quot;2012-01-25\&quot;,   \&quot;registration_number\&quot;: \&quot;VAT1234567\&quot;,   \&quot;nature_of_business\&quot;: \&quot;retail_trade\&quot;,    // Contact Details   \&quot;phone_country\&quot;: \&quot;US\&quot;,   \&quot;phone_number\&quot;: \&quot;5555551234\&quot;,   \&quot;email\&quot;: \&quot;example@home.org\&quot;,    // ID of the sender in your system   \&quot;external_id\&quot;: \&quot;Sender:Business:US:234523\&quot;,    // these fields are mandatory, but you can usually leave them with the following default values:   \&quot;documents\&quot;: [ ],   \&quot;ip\&quot;: \&quot;127.0.0.1\&quot;,   \&quot;metadata\&quot;: {} } &#x60;&#x60;&#x60;  [Sender in the API documentation](https://docs.transferzero.com/docs/transaction-flow/#sender)
     * @alias module:Model/Sender
     * @param country {String} Country of sender in 2-character alpha ISO 3166-2 country format. This is the residential country for personal senders and the country of incorporation for business senders.
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
            if (data.hasOwnProperty('lang')) {
                obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
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
                obj['registration_date'] = ApiClient.convertToType(data['registration_date'], 'Date');
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
            if (data.hasOwnProperty('custom_source_of_funds')) {
                obj['custom_source_of_funds'] = ApiClient.convertToType(data['custom_source_of_funds'], 'String');
            }
            if (data.hasOwnProperty('core_business_activity')) {
                obj['core_business_activity'] = ApiClient.convertToType(data['core_business_activity'], 'String');
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
            if (data.hasOwnProperty('trading_name')) {
                obj['trading_name'] = ApiClient.convertToType(data['trading_name'], 'String');
            }
            if (data.hasOwnProperty('number_monthly_transactions')) {
                obj['number_monthly_transactions'] = ApiClient.convertToType(data['number_monthly_transactions'], 'String');
            }
            if (data.hasOwnProperty('amount_monthly_transactions')) {
                obj['amount_monthly_transactions'] = ApiClient.convertToType(data['amount_monthly_transactions'], 'String');
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
            if (data.hasOwnProperty('city_of_birth')) {
                obj['city_of_birth'] = ApiClient.convertToType(data['city_of_birth'], 'String');
            }
            if (data.hasOwnProperty('country_of_birth')) {
                obj['country_of_birth'] = ApiClient.convertToType(data['country_of_birth'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('sales_lead_id')) {
                obj['sales_lead_id'] = ApiClient.convertToType(data['sales_lead_id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
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
 * Country of sender in 2-character alpha ISO 3166-2 country format. This is the residential country for personal senders and the country of incorporation for business senders.
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
 * Document to be identified. The identification type can be one of the following:  - `DL`: Driving License - `PP`: International Passport - `ID`: National ID - `OT`: Other  Please note for Wizall `XOF::Cash` transactions the valid options are: - `ID`: National ID - `PP`: Passport
 * @member {module:Model/Sender.IdentificationTypeEnum} identification_type
 */
Sender.prototype['identification_type'] = undefined;

/**
 * Determines language of the served content. Defaults to English
 * @member {String} lang
 */
Sender.prototype['lang'] = undefined;

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
 * Legal entity type (used only with a Business sender)  Available values:   - sole_proprietorship: Sole Proprietorship   - partnership: Partnership   - privately_owned_company: Privately Owned Company (Limited Company)   - publicly_owned_company: Publicly Listed Company (PLC)   - government_owned_entity: Government Owned Entity Trusts   - trust: Foundations & Similar Entities   - ngo: Non-Government Organisations / Charities inc Religious bodies and place of worship   - club_and_society: Clubs and Societies   - go: GO (Majority Owned Subsidiary of State-Owned Company)   - financial_institution: Financial Institution  Please note not all values are acceptable for some our corridors. Please reach out to our sales teams for more information.  Note that if you select `financial_institution` then the fields `vat_registration_number`, `financial_regulator` and `regulatory_licence_number` will be mandatory as well.
 * @member {module:Model/Sender.LegalEntityTypeEnum} legal_entity_type
 */
Sender.prototype['legal_entity_type'] = undefined;

/**
 * The registration date (used only with a Business sender)
 * @member {Date} registration_date
 */
Sender.prototype['registration_date'] = undefined;

/**
 * The registration number (used only with a Business sender)
 * @member {String} registration_number
 */
Sender.prototype['registration_number'] = undefined;

/**
 * Nature of business options (used only with a Business sender)  Available values:   - personal: Personal   - agriculture_and_hunting: Agriculture and Hunting   - forestry: Forestry   - fishing: Fishing   - agricultural_by_products: Agricultural By-Products   - coal_mining: Coal Mining   - oil_mining: Oil Mining   - iron_ore_mining: Iron Ore Mining   - other_metal_and_diamond_mining: Other Metal and Diamond Mining   - other_mineral_mining: Other Mineral Mining   - manufacturing_of_food_drink_tobacco: Manufacture of Food/Drink/Tobacco   - manufacturing_of_textiles_leather_fur_furniture: Manufacture of Textiles/Leather/Fur/Furniture   - manufacture_of_wooden_products_furniture: Manufacture of Wooden Products/Furniture   - manufacture_of_paper_pulp_allied_products: Manufacture of Paper/Pulp/Allied Products   - manufacture_of_chemicals_medical_petroleum_rubber_plastic_products: Manufacture Of Chemicals Medical Petroleum Rubber Plastic Products   - manufacture_of_pottery_china_glass_stone: Manufacture Of Pottery China Glass Stone   - manufacture_of_iron_steel_non_ferrous_metals_basic_industries: Manufacture Of Iron Steel Non-Ferrous Metals Basic Industries   - manufacture_of_metal_products_electrical_and_scientific_engineering: Manufacture Of Metal Products Electrical And Scientific Engineering   - manufacture_of_jewelry_musical_instruments_toys: Manufacture Of Jewelry Musical Instruments Toys   - electricity_gas_and_water: Electricity, Gas And Water   - construction: Construction   - wholesale_trade: Wholesale Trade   - retail_trade: Retail Trade   - catering_incl_hotels: Catering Incl. Hotels   - transport_storage: Transport Storage   - communications: Communications   - finance_and_holding_companies: Finance And Holding Companies   - insurance: Insurance   - business_services: Business Services   - real_estate_development_investment: Real Estate Development Investment   - central_state_governments: Central State Governments   - community_services_defence_police_prisons_etc: Community Services Defence Police Prisons Etc   - social_services_education_health_care: Social Services Education Health Care   - personal_services_leisure_services: Personal Services - Leisure Services   - personal_services_domestic_laundry_repairs: Personal Services - Domestic Laundry Repairs   - personal_services_embassies_international_organisations: Personal Services - Embassies
 * @member {module:Model/Sender.NatureOfBusinessEnum} nature_of_business
 */
Sender.prototype['nature_of_business'] = undefined;

/**
 * The source of funds
 * @member {String} source_of_funds
 */
Sender.prototype['source_of_funds'] = undefined;

/**
 * Custom source of funds
 * @member {String} custom_source_of_funds
 */
Sender.prototype['custom_source_of_funds'] = undefined;

/**
 * The core activity (used only with a Business sender)
 * @member {String} core_business_activity
 */
Sender.prototype['core_business_activity'] = undefined;

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
 * The Business trading name (used only with a Business sender)
 * @member {String} trading_name
 */
Sender.prototype['trading_name'] = undefined;

/**
 * The estimated number of monthly transactions (used only with a Business sender)
 * @member {String} number_monthly_transactions
 */
Sender.prototype['number_monthly_transactions'] = undefined;

/**
 * The estimated amount for all transactions each month in USD (used only with a Business sender)
 * @member {String} amount_monthly_transactions
 */
Sender.prototype['amount_monthly_transactions'] = undefined;

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
 * City of birth of sender
 * @member {String} city_of_birth
 */
Sender.prototype['city_of_birth'] = undefined;

/**
 * Country of birth of sender in 2-character alpha ISO 3166-2 country format
 * @member {String} country_of_birth
 */
Sender.prototype['country_of_birth'] = undefined;

/**
 * The gender of the sender:  - `M`: Male - `F`: Female - `O`: Other
 * @member {module:Model/Sender.GenderEnum} gender
 */
Sender.prototype['gender'] = undefined;

/**
 * Sales Lead ID for tracking (optional)
 * @member {String} sales_lead_id
 */
Sender.prototype['sales_lead_id'] = undefined;

/**
 * Date and time of sender was created
 * @member {String} created_at
 */
Sender.prototype['created_at'] = undefined;





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


/**
 * Allowed values for the <code>nature_of_business</code> property.
 * @enum {String}
 * @readonly
 */
Sender['NatureOfBusinessEnum'] = {

    /**
     * value: "personal"
     * @const
     */
    "personal": "personal",

    /**
     * value: "agriculture_and_hunting"
     * @const
     */
    "agriculture_and_hunting": "agriculture_and_hunting",

    /**
     * value: "forestry"
     * @const
     */
    "forestry": "forestry",

    /**
     * value: "fishing"
     * @const
     */
    "fishing": "fishing",

    /**
     * value: "agricultural_by_products"
     * @const
     */
    "agricultural_by_products": "agricultural_by_products",

    /**
     * value: "coal_mining"
     * @const
     */
    "coal_mining": "coal_mining",

    /**
     * value: "oil_mining"
     * @const
     */
    "oil_mining": "oil_mining",

    /**
     * value: "iron_ore_mining"
     * @const
     */
    "iron_ore_mining": "iron_ore_mining",

    /**
     * value: "other_metal_and_diamond_mining"
     * @const
     */
    "other_metal_and_diamond_mining": "other_metal_and_diamond_mining",

    /**
     * value: "other_mineral_mining"
     * @const
     */
    "other_mineral_mining": "other_mineral_mining",

    /**
     * value: "manufacturing_of_food_drink_tobacco"
     * @const
     */
    "manufacturing_of_food_drink_tobacco": "manufacturing_of_food_drink_tobacco",

    /**
     * value: "manufacturing_of_textiles_leather_fur_furniture"
     * @const
     */
    "manufacturing_of_textiles_leather_fur_furniture": "manufacturing_of_textiles_leather_fur_furniture",

    /**
     * value: "manufacture_of_wooden_products_furniture"
     * @const
     */
    "manufacture_of_wooden_products_furniture": "manufacture_of_wooden_products_furniture",

    /**
     * value: "manufacture_of_paper_pulp_allied_products"
     * @const
     */
    "manufacture_of_paper_pulp_allied_products": "manufacture_of_paper_pulp_allied_products",

    /**
     * value: "manufacture_of_chemicals_medical_petroleum_rubber_plastic_products"
     * @const
     */
    "manufacture_of_chemicals_medical_petroleum_rubber_plastic_products": "manufacture_of_chemicals_medical_petroleum_rubber_plastic_products",

    /**
     * value: "manufacture_of_pottery_china_glass_stone"
     * @const
     */
    "manufacture_of_pottery_china_glass_stone": "manufacture_of_pottery_china_glass_stone",

    /**
     * value: "manufacture_of_iron_steel_non_ferrous_metals_basic_industries"
     * @const
     */
    "manufacture_of_iron_steel_non_ferrous_metals_basic_industries": "manufacture_of_iron_steel_non_ferrous_metals_basic_industries",

    /**
     * value: "manufacture_of_metal_products_electrical_and_scientific_engineering"
     * @const
     */
    "manufacture_of_metal_products_electrical_and_scientific_engineering": "manufacture_of_metal_products_electrical_and_scientific_engineering",

    /**
     * value: "manufacture_of_jewelry_musical_instruments_toys"
     * @const
     */
    "manufacture_of_jewelry_musical_instruments_toys": "manufacture_of_jewelry_musical_instruments_toys",

    /**
     * value: "electricity_gas_and_water"
     * @const
     */
    "electricity_gas_and_water": "electricity_gas_and_water",

    /**
     * value: "construction"
     * @const
     */
    "construction": "construction",

    /**
     * value: "wholesale_trade"
     * @const
     */
    "wholesale_trade": "wholesale_trade",

    /**
     * value: "retail_trade"
     * @const
     */
    "retail_trade": "retail_trade",

    /**
     * value: "catering_incl_hotels"
     * @const
     */
    "catering_incl_hotels": "catering_incl_hotels",

    /**
     * value: "transport_storage"
     * @const
     */
    "transport_storage": "transport_storage",

    /**
     * value: "communications"
     * @const
     */
    "communications": "communications",

    /**
     * value: "finance_and_holding_companies"
     * @const
     */
    "finance_and_holding_companies": "finance_and_holding_companies",

    /**
     * value: "insurance"
     * @const
     */
    "insurance": "insurance",

    /**
     * value: "business_services"
     * @const
     */
    "business_services": "business_services",

    /**
     * value: "real_estate_development_investment"
     * @const
     */
    "real_estate_development_investment": "real_estate_development_investment",

    /**
     * value: "central_state_governments"
     * @const
     */
    "central_state_governments": "central_state_governments",

    /**
     * value: "community_services_defence_police_prisons_etc"
     * @const
     */
    "community_services_defence_police_prisons_etc": "community_services_defence_police_prisons_etc",

    /**
     * value: "social_services_education_health_care"
     * @const
     */
    "social_services_education_health_care": "social_services_education_health_care",

    /**
     * value: "personal_services_leisure_services"
     * @const
     */
    "personal_services_leisure_services": "personal_services_leisure_services",

    /**
     * value: "personal_services_domestic_laundry_repairs"
     * @const
     */
    "personal_services_domestic_laundry_repairs": "personal_services_domestic_laundry_repairs",

    /**
     * value: "personal_services_embassies_international_organisations"
     * @const
     */
    "personal_services_embassies_international_organisations": "personal_services_embassies_international_organisations"
};


/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
Sender['GenderEnum'] = {

    /**
     * value: "M"
     * @const
     */
    "M": "M",

    /**
     * value: "F"
     * @const
     */
    "F": "F",

    /**
     * value: "O"
     * @const
     */
    "O": "O"
};



export default Sender;

