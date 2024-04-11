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

/**
 * The PayoutMethodDetailsGHSCash model module.
 * @module Model/PayoutMethodDetailsGHSCash
 * @version 1.34.4
 */
class PayoutMethodDetailsGHSCash {
    /**
     * Constructs a new <code>PayoutMethodDetailsGHSCash</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;+233322023144\&quot; } &#x60;&#x60;&#x60;
     * @alias module:Model/PayoutMethodDetailsGHSCash
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     */
    constructor(firstName, lastName, phoneNumber) { 
        
        PayoutMethodDetailsGHSCash.initialize(this, firstName, lastName, phoneNumber);
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
     * Constructs a <code>PayoutMethodDetailsGHSCash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsGHSCash} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsGHSCash} The populated <code>PayoutMethodDetailsGHSCash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsGHSCash();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
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
PayoutMethodDetailsGHSCash.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsGHSCash.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsGHSCash.prototype['phone_number'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsGHSCash.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsGHSCash;

