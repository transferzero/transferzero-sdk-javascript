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
import PayoutMethodCountryEnum from './PayoutMethodCountryEnum';

/**
 * The PayoutMethodDetailsUSDCash model module.
 * @module Model/PayoutMethodDetailsUSDCash
 * @version 1.26.0
 */
class PayoutMethodDetailsUSDCash {
    /**
     * Constructs a new <code>PayoutMethodDetailsUSDCash</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;Jane\&quot;,     \&quot;last_name\&quot;: \&quot;Doe\&quot;,     \&quot;phone_number\&quot;: \&quot;+2341234567\&quot;, // E.164 international format     \&quot;country\&quot;: \&quot;NG\&quot;   } &#x60;&#x60;&#x60; See [USD Cash](https://docs.transferzero.com/docs/payout-details/#usdcash) documentation for the country list
     * @alias module:Model/PayoutMethodDetailsUSDCash
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     * @param country {module:Model/PayoutMethodCountryEnum} 
     */
    constructor(firstName, lastName, phoneNumber, country) { 
        
        PayoutMethodDetailsUSDCash.initialize(this, firstName, lastName, phoneNumber, country);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, phoneNumber, country) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['phone_number'] = phoneNumber;
        obj['country'] = country;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsUSDCash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsUSDCash} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsUSDCash} The populated <code>PayoutMethodDetailsUSDCash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsUSDCash();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = PayoutMethodCountryEnum.constructFromObject(data['country']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsUSDCash.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsUSDCash.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsUSDCash.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsUSDCash.prototype['country'] = undefined;






export default PayoutMethodDetailsUSDCash;

