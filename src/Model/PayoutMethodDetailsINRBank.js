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

/**
 * The PayoutMethodDetailsINRBank model module.
 * @module Model/PayoutMethodDetailsINRBank
 * @version 1.30.0
 */
class PayoutMethodDetailsINRBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsINRBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;city\&quot;: \&quot;New Delhi\&quot;,   \&quot;street\&quot;: \&quot;1, Akbar Road\&quot;,   \&quot;postal_code\&quot;: \&quot;110016\&quot;,   \&quot;phone_number\&quot;: \&quot;+919876543210\&quot;,   \&quot;bank_name\&quot;: \&quot;Bank of India\&quot;   \&quot;bank_account\&quot;: \&quot;1234567890\&quot;,   \&quot;ifsc_code\&quot;: \&quot;BKID0006005\&quot; } &#x60;&#x60;&#x60; See [INR Bank](https://docs.transferzero.com/docs/payout-details/#inrbank) documentation for the bank_name list
     * @alias module:Model/PayoutMethodDetailsINRBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param city {String} 
     * @param street {String} 
     * @param postalCode {String} 
     * @param phoneNumber {String} 
     * @param bankName {String} 
     * @param bankAccount {String} 
     * @param ifscCode {String} 
     */
    constructor(firstName, lastName, city, street, postalCode, phoneNumber, bankName, bankAccount, ifscCode) { 
        
        PayoutMethodDetailsINRBank.initialize(this, firstName, lastName, city, street, postalCode, phoneNumber, bankName, bankAccount, ifscCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, city, street, postalCode, phoneNumber, bankName, bankAccount, ifscCode) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['city'] = city;
        obj['street'] = street;
        obj['postal_code'] = postalCode;
        obj['phone_number'] = phoneNumber;
        obj['bank_name'] = bankName;
        obj['bank_account'] = bankAccount;
        obj['ifsc_code'] = ifscCode;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsINRBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsINRBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsINRBank} The populated <code>PayoutMethodDetailsINRBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsINRBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('ifsc_code')) {
                obj['ifsc_code'] = ApiClient.convertToType(data['ifsc_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsINRBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsINRBank.prototype['last_name'] = undefined;

/**
 * @member {String} city
 */
PayoutMethodDetailsINRBank.prototype['city'] = undefined;

/**
 * @member {String} street
 */
PayoutMethodDetailsINRBank.prototype['street'] = undefined;

/**
 * @member {String} postal_code
 */
PayoutMethodDetailsINRBank.prototype['postal_code'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsINRBank.prototype['phone_number'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsINRBank.prototype['bank_name'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsINRBank.prototype['bank_account'] = undefined;

/**
 * @member {String} ifsc_code
 */
PayoutMethodDetailsINRBank.prototype['ifsc_code'] = undefined;






export default PayoutMethodDetailsINRBank;

