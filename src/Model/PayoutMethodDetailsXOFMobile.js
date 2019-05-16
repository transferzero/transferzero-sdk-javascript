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
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';

/**
 * The PayoutMethodDetailsXOFMobile model module.
 * @module Model/PayoutMethodDetailsXOFMobile
 * @version 1.1.0
 */
class PayoutMethodDetailsXOFMobile {
    /**
     * Constructs a new <code>PayoutMethodDetailsXOFMobile</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;774044436\&quot;     # local or international Senegalese format   \&quot;mobile_provider\&quot;: \&quot;orange\&quot;, # \&quot;orange\&quot; or \&quot;tigo\&quot; }
     * @alias module:Model/PayoutMethodDetailsXOFMobile
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     * @param mobileProvider {module:Model/PayoutMethodMobileProviderEnum} 
     */
    constructor(firstName, lastName, phoneNumber, mobileProvider) { 
        
        PayoutMethodDetailsXOFMobile.initialize(this, firstName, lastName, phoneNumber, mobileProvider);
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
     * Constructs a <code>PayoutMethodDetailsXOFMobile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsXOFMobile} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsXOFMobile} The populated <code>PayoutMethodDetailsXOFMobile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsXOFMobile();

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
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsXOFMobile.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsXOFMobile.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsXOFMobile.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayoutMethodDetailsXOFMobile.prototype['mobile_provider'] = undefined;






export default PayoutMethodDetailsXOFMobile;

