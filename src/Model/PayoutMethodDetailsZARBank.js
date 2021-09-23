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
import PayoutMethodLegalEntityTypeEnum from './PayoutMethodLegalEntityTypeEnum';
import PayoutMethodNatureOfBusinessEnum from './PayoutMethodNatureOfBusinessEnum';

/**
 * The PayoutMethodDetailsZARBank model module.
 * @module Model/PayoutMethodDetailsZARBank
 * @version 1.16.1
 */
class PayoutMethodDetailsZARBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsZARBank</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;First\&quot;, //  Mandatory for personal payouts;     \&quot;last_name\&quot;: \&quot;Last\&quot;, //  Mandatory for personal payouts;     \&quot;name\&quot; \&quot;First Ltd\&quot;, // Mandatory for business payouts;     \&quot;contact_first_name\&quot; \&quot;Business\&quot;, // Mandatory for business payouts;     \&quot;contact_last_name\&quot; \&quot;Contact\&quot;, // Mandatory for business payouts;     \&quot;street\&quot;: \&quot;Main Street\&quot;,     \&quot;postal_code\&quot;: \&quot;AB0001\&quot;,     \&quot;city\&quot;: \&quot;Cape Town\&quot;,     \&quot;email\&quot;: \&quot;recipient@email.com\&quot;,     \&quot;bank_name\&quot; &#39;Bank Zero&#39;, // Optional     \&quot;bank_code\&quot;: \&quot;334810\&quot;,     \&quot;bank_account\&quot;: \&quot;12345678\&quot;,     \&quot;phone_number\&quot;: \&quot;+27119785313\&quot;,     \&quot;transfer_reason_code\&quot;: \&quot;185\&quot;,     \&quot;legal_entity_type\&quot;: \&quot;sole_proprietorship\&quot;, // Optional; Default value is \&quot;person\&quot;; Mandatory for business payouts;     \&quot;nature_of_business\&quot;: \&quot;mining\&quot;, // Optional for business payouts;     \&quot;registration_number\&quot;: \&quot;17364BGC\&quot; // Optional for business payouts;   } &#x60;&#x60;&#x60;  See [ZAR Bank](https://docs.transferzero.com/docs/payout-details/#zarbank) documentation for the bank_code and transfer_reason_code lists
     * @alias module:Model/PayoutMethodDetailsZARBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param street {String} 
     * @param postalCode {String} 
     * @param city {String} 
     * @param bankCode {String} 
     * @param bankAccount {String} 
     * @param phoneNumber {String} 
     */
    constructor(firstName, lastName, street, postalCode, city, bankCode, bankAccount, phoneNumber) { 
        
        PayoutMethodDetailsZARBank.initialize(this, firstName, lastName, street, postalCode, city, bankCode, bankAccount, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, street, postalCode, city, bankCode, bankAccount, phoneNumber) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['street'] = street;
        obj['postal_code'] = postalCode;
        obj['city'] = city;
        obj['bank_code'] = bankCode;
        obj['bank_account'] = bankAccount;
        obj['phone_number'] = phoneNumber;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsZARBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsZARBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsZARBank} The populated <code>PayoutMethodDetailsZARBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsZARBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
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
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('transfer_reason_code')) {
                obj['transfer_reason_code'] = ApiClient.convertToType(data['transfer_reason_code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('contact_first_name')) {
                obj['contact_first_name'] = ApiClient.convertToType(data['contact_first_name'], 'String');
            }
            if (data.hasOwnProperty('contact_last_name')) {
                obj['contact_last_name'] = ApiClient.convertToType(data['contact_last_name'], 'String');
            }
            if (data.hasOwnProperty('registration_number')) {
                obj['registration_number'] = ApiClient.convertToType(data['registration_number'], 'String');
            }
            if (data.hasOwnProperty('nature_of_business')) {
                obj['nature_of_business'] = PayoutMethodNatureOfBusinessEnum.constructFromObject(data['nature_of_business']);
            }
            if (data.hasOwnProperty('legal_entity_type')) {
                obj['legal_entity_type'] = PayoutMethodLegalEntityTypeEnum.constructFromObject(data['legal_entity_type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsZARBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsZARBank.prototype['last_name'] = undefined;

/**
 * @member {String} street
 */
PayoutMethodDetailsZARBank.prototype['street'] = undefined;

/**
 * @member {String} postal_code
 */
PayoutMethodDetailsZARBank.prototype['postal_code'] = undefined;

/**
 * @member {String} city
 */
PayoutMethodDetailsZARBank.prototype['city'] = undefined;

/**
 * @member {String} email
 */
PayoutMethodDetailsZARBank.prototype['email'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsZARBank.prototype['bank_code'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsZARBank.prototype['bank_account'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsZARBank.prototype['phone_number'] = undefined;

/**
 * @member {String} transfer_reason_code
 */
PayoutMethodDetailsZARBank.prototype['transfer_reason_code'] = undefined;

/**
 * @member {String} name
 */
PayoutMethodDetailsZARBank.prototype['name'] = undefined;

/**
 * @member {String} contact_first_name
 */
PayoutMethodDetailsZARBank.prototype['contact_first_name'] = undefined;

/**
 * @member {String} contact_last_name
 */
PayoutMethodDetailsZARBank.prototype['contact_last_name'] = undefined;

/**
 * @member {String} registration_number
 */
PayoutMethodDetailsZARBank.prototype['registration_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodNatureOfBusinessEnum} nature_of_business
 */
PayoutMethodDetailsZARBank.prototype['nature_of_business'] = undefined;

/**
 * @member {module:Model/PayoutMethodLegalEntityTypeEnum} legal_entity_type
 */
PayoutMethodDetailsZARBank.prototype['legal_entity_type'] = undefined;






export default PayoutMethodDetailsZARBank;

