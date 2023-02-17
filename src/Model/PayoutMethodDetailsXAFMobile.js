/**
 * BitPesa Private API
 * API specification used for internal BitPesa endpoints
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
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';

/**
 * The PayoutMethodDetailsXAFMobile model module.
 * @module Model/PayoutMethodDetailsXAFMobile
 * @version 1.25.0
 */
class PayoutMethodDetailsXAFMobile {
    /**
     * Constructs a new <code>PayoutMethodDetailsXAFMobile</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;+237674044436\&quot;, // E.164 international format   \&quot;mobile_provider\&quot;: \&quot;orange\&quot;, // or mtn\&quot;   \&quot;country\&quot; // Optional; Values: \&quot;CM\&quot; } &#x60;&#x60;&#x60;
     * @alias module:Model/PayoutMethodDetailsXAFMobile
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     * @param mobileProvider {module:Model/PayoutMethodMobileProviderEnum} 
     */
    constructor(firstName, lastName, phoneNumber, mobileProvider) { 
        
        PayoutMethodDetailsXAFMobile.initialize(this, firstName, lastName, phoneNumber, mobileProvider);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, phoneNumber, mobileProvider) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['phone_number'] = phoneNumber;
        obj['mobile_provider'] = mobileProvider;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsXAFMobile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsXAFMobile} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsXAFMobile} The populated <code>PayoutMethodDetailsXAFMobile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsXAFMobile();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('mobile_provider')) {
                obj['mobile_provider'] = PayoutMethodMobileProviderEnum.constructFromObject(data['mobile_provider']);
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
PayoutMethodDetailsXAFMobile.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsXAFMobile.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsXAFMobile.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayoutMethodDetailsXAFMobile.prototype['mobile_provider'] = undefined;

/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsXAFMobile.prototype['country'] = undefined;






export default PayoutMethodDetailsXAFMobile;

