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
import PayoutMethodCashProviderEnum from './PayoutMethodCashProviderEnum';
import PayoutMethodIdentityCardTypeEnum from './PayoutMethodIdentityCardTypeEnum';

/**
 * The PayoutMethodDetailsXOFCash model module.
 * @module Model/PayoutMethodDetailsXOFCash
 * @version 1.9.0
 */
class PayoutMethodDetailsXOFCash {
    /**
     * Constructs a new <code>PayoutMethodDetailsXOFCash</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;774044436\&quot;, // local or international Senegalese format   \&quot;identity_card_id\&quot;: \&quot;2231324232\&quot;, // Required if cash_provider value is \&quot;wizall\&quot;   \&quot;identity_card_type\&quot;: \&quot;PP\&quot;, // Required if cash_provider value is \&quot;wizall\&quot;   \&quot;cash_provider\&quot;: \&quot;wizall\&quot; // Optional; Values: \&quot;wari\&quot; or \&quot;wizall; Default value is \&quot;wari\&quot; } &#x60;&#x60;&#x60;  Please note when sending Wari cash pickup requests you should subscribe to the recipient.pending webhook, as that will broadcast the payment reference ID the customer need to use to obtain the funds. Example webhook response excerpt -  &#x60;&#x60;&#x60;JSON {   (...)   \&quot;state\&quot;:\&quot;pending\&quot;,   \&quot;metadata\&quot;: {     \&quot;payment_reference\&quot;:\&quot;9M5GJRJUBCY\&quot;   },   (...) } &#x60;&#x60;&#x60;
     * @alias module:Model/PayoutMethodDetailsXOFCash
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     */
    constructor(firstName, lastName, phoneNumber) { 
        
        PayoutMethodDetailsXOFCash.initialize(this, firstName, lastName, phoneNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, phoneNumber) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['phone_number'] = phoneNumber;
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
            if (data.hasOwnProperty('identity_card_id')) {
                obj['identity_card_id'] = ApiClient.convertToType(data['identity_card_id'], 'String');
            }
            if (data.hasOwnProperty('identity_card_type')) {
                obj['identity_card_type'] = PayoutMethodIdentityCardTypeEnum.constructFromObject(data['identity_card_type']);
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('cash_provider')) {
                obj['cash_provider'] = PayoutMethodCashProviderEnum.constructFromObject(data['cash_provider']);
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
 * @member {String} identity_card_id
 */
PayoutMethodDetailsXOFCash.prototype['identity_card_id'] = undefined;

/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} identity_card_type
 */
PayoutMethodDetailsXOFCash.prototype['identity_card_type'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsXOFCash.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodCashProviderEnum} cash_provider
 */
PayoutMethodDetailsXOFCash.prototype['cash_provider'] = undefined;






export default PayoutMethodDetailsXOFCash;

