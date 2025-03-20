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
import PayoutMethodCountryEnum from './PayoutMethodCountryEnum';
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetailsXOFMobile model module.
 * @module Model/PayoutMethodDetailsXOFMobile
 * @version 1.36.7
 */
class PayoutMethodDetailsXOFMobile {
    /**
     * Constructs a new <code>PayoutMethodDetailsXOFMobile</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;+221708766123\&quot;, // E.164 international format   \&quot;mobile_provider\&quot;: \&quot;orange\&quot;, // \&quot;orange\&quot;, \&quot;tigo\&quot;, \&quot;emoney\&quot; or \&quot;free\&quot; for Senegal; \&quot;orange\&quot;, \&quot;mtn\&quot; or \&quot;moov\&quot; for Ivory Coast; \&quot;orange\&quot; or \&quot;mobicash\&quot; for Burkina Faso and Mali   \&quot;country\&quot; // Optional; Values: \&quot;SN\&quot; for Senegal; \&quot;CI\&quot; for Ivory Coast; \&quot;ML\&quot; for Mali; \&quot;BF\&quot; for Burkina Faso; Default value is \&quot;SN\&quot;   \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot; // mandatory for Mali payouts, optional otherwise } &#x60;&#x60;&#x60;
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
            if (data.hasOwnProperty('country')) {
                obj['country'] = PayoutMethodCountryEnum.constructFromObject(data['country']);
            }
            if (data.hasOwnProperty('transfer_reason')) {
                obj['transfer_reason'] = PayoutMethodTransferReasonEnum.constructFromObject(data['transfer_reason']);
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

/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsXOFMobile.prototype['country'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsXOFMobile.prototype['transfer_reason'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsXOFMobile.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsXOFMobile;

