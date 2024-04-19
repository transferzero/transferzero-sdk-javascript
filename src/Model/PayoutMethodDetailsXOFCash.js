/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PayoutMethodCashProviderEnum from './PayoutMethodCashProviderEnum';
import PayoutMethodCountryEnum from './PayoutMethodCountryEnum';

/**
 * The PayoutMethodDetailsXOFCash model module.
 * @module Model/PayoutMethodDetailsXOFCash
 * @version 1.34.6
 */
class PayoutMethodDetailsXOFCash {
    /**
     * Constructs a new <code>PayoutMethodDetailsXOFCash</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;+221774044436\&quot;, // E.164 international format   \&quot;cash_provider\&quot;: \&quot;wizall\&quot; // Mandatory; Values: \&quot;wizall\&quot;;   \&quot;country\&quot;: \&quot;SN\&quot; // Optional; Values: \&quot;CI\&quot;, \&quot;ML\&quot; or \&quot;SN\&quot;; Default value is \&quot;SN\&quot;; } &#x60;&#x60;&#x60;  Please note all senders trying to create Wizall cash pickup requests must have &#x60;identity_type&#x60; and &#x60;identity_number&#x60; present. The fields above are generally considered optional for senders for other payment corridors. If you wish to use an existing sender who has some of these fields missing you can provide them alongside the &#x60;id&#x60; or &#x60;external_id&#x60; field in the sender details. For example -  &#x60;&#x60;&#x60;JSON {   \&quot;transaction\&quot;: {       \&quot;sender\&quot;: {         \&quot;external_id\&quot;: \&quot;&lt;id of sender&gt;\&quot;,         \&quot;identity_type\&quot;: \&quot;ID\&quot;,         \&quot;identity_number\&quot;: \&quot;AB12345678\&quot;,         (...)       },       (...)     } } &#x60;&#x60;&#x60;
     * @alias module:Model/PayoutMethodDetailsXOFCash
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     * @param cashProvider {module:Model/PayoutMethodCashProviderEnum} 
     */
    constructor(firstName, lastName, phoneNumber, cashProvider) { 
        
        PayoutMethodDetailsXOFCash.initialize(this, firstName, lastName, phoneNumber, cashProvider);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, phoneNumber, cashProvider) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['phone_number'] = phoneNumber;
        obj['cash_provider'] = cashProvider;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsXOFCash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsXOFCash} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsXOFCash} The populated <code>PayoutMethodDetailsXOFCash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsXOFCash();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('cash_provider')) {
                obj['cash_provider'] = PayoutMethodCashProviderEnum.constructFromObject(data['cash_provider']);
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = PayoutMethodCountryEnum.constructFromObject(data['country']);
            }
            if (data.hasOwnProperty('birth_date')) {
                obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsXOFCash.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsXOFCash.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsXOFCash.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodCashProviderEnum} cash_provider
 */
PayoutMethodDetailsXOFCash.prototype['cash_provider'] = undefined;

/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsXOFCash.prototype['country'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsXOFCash.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsXOFCash;

