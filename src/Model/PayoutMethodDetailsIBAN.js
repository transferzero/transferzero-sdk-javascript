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
 * The PayoutMethodDetailsIBAN model module.
 * @module Model/PayoutMethodDetailsIBAN
 * @version 1.37.1
 */
class PayoutMethodDetailsIBAN {
    /**
     * Constructs a new <code>PayoutMethodDetailsIBAN</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;iban\&quot;: \&quot;DE89370400440532013000\&quot;,   \&quot;bic\&quot;: \&quot;DEUTDEBBXXX\&quot;, // Optional   \&quot;bank_name\&quot;: \&quot;Deutsche Bank\&quot;, // Optional   \&quot;narration\&quot;: \&quot;Birthday Gift\&quot; // Optional } &#x60;&#x60;&#x60;
     * @alias module:Model/PayoutMethodDetailsIBAN
     * @param firstName {String} 
     * @param lastName {String} 
     * @param iban {String} 
     */
    constructor(firstName, lastName, iban) { 
        
        PayoutMethodDetailsIBAN.initialize(this, firstName, lastName, iban);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, iban) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['iban'] = iban;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsIBAN</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsIBAN} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsIBAN} The populated <code>PayoutMethodDetailsIBAN</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsIBAN();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bic')) {
                obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
            }
            if (data.hasOwnProperty('narration')) {
                obj['narration'] = ApiClient.convertToType(data['narration'], 'String');
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
PayoutMethodDetailsIBAN.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsIBAN.prototype['last_name'] = undefined;

/**
 * @member {String} iban
 */
PayoutMethodDetailsIBAN.prototype['iban'] = undefined;

/**
 * @member {String} bic
 */
PayoutMethodDetailsIBAN.prototype['bic'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsIBAN.prototype['bank_name'] = undefined;

/**
 * @member {String} narration
 */
PayoutMethodDetailsIBAN.prototype['narration'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsIBAN.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsIBAN;

