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
import PayinMethodDetailsBTC from './PayinMethodDetailsBTC';
import PayinMethodDetailsMobile from './PayinMethodDetailsMobile';
import PayinMethodDetailsNGNBank from './PayinMethodDetailsNGNBank';
import PayoutMethodCountryEnum from './PayoutMethodCountryEnum';
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';

/**
 * The PayinMethodDetails model module.
 * @module Model/PayinMethodDetails
 * @version 1.34.7
 */
class PayinMethodDetails {
    /**
     * Constructs a new <code>PayinMethodDetails</code>.
     * Fields needed by the payment processor. Depends on the chose payin type.  See the appropriate model details for more info:  - &#x60;NGN::Bank&#x60;: see [&#x60;PayinMethodDetailsNGNBank&#x60;](#model-PayinMethodDetailsNGNBank) - &#x60;GHS::Mobile&#x60;: see [&#x60;PayinMethodDetailsMobile&#x60;](#model-PayinMethodDetailsMobile) - &#x60;UGX::Mobile&#x60;: see [&#x60;PayinMethodDetailsMobile&#x60;](#model-PayinMethodDetailsMobile)  Note that some payin processors don&#39;t require additional input, these include &#x60;lhv&#x60; through &#x60;EUR::Bank&#x60; and &#x60;GBP::Bank&#x60;. Some providers like &#x60;providus&#x60; also have all of their fields set as optional, so you might not want to set any values. To use these providers please set this value to &#x60;{}&#x60; (an empty hash) 
     * @alias module:Model/PayinMethodDetails
     * @implements module:Model/PayinMethodDetailsNGNBank
     * @implements module:Model/PayinMethodDetailsMobile
     * @implements module:Model/PayinMethodDetailsBTC
     */
    constructor() { 
        PayinMethodDetailsNGNBank.initialize(this);PayinMethodDetailsMobile.initialize(this);PayinMethodDetailsBTC.initialize(this);
        PayinMethodDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayinMethodDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayinMethodDetails} obj Optional instance to populate.
     * @return {module:Model/PayinMethodDetails} The populated <code>PayinMethodDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayinMethodDetails();
            PayinMethodDetailsNGNBank.constructFromObject(data, obj);
            PayinMethodDetailsMobile.constructFromObject(data, obj);
            PayinMethodDetailsBTC.constructFromObject(data, obj);

            if (data.hasOwnProperty('payment_method')) {
                obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'String');
            }
            if (data.hasOwnProperty('redirect_url')) {
                obj['redirect_url'] = ApiClient.convertToType(data['redirect_url'], 'String');
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
            if (data.hasOwnProperty('otp')) {
                obj['otp'] = ApiClient.convertToType(data['otp'], 'String');
            }
            if (data.hasOwnProperty('refund_address')) {
                obj['refund_address'] = ApiClient.convertToType(data['refund_address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The payment method which the sender will use to make the payments. Options are `bank`, `card` or you can leave empty to support both.
 * @member {String} payment_method
 */
PayinMethodDetails.prototype['payment_method'] = undefined;

/**
 * This is where the sender should be redirected back when the payment has been finished
 * @member {String} redirect_url
 */
PayinMethodDetails.prototype['redirect_url'] = undefined;

/**
 * The phone number where the funds should be collected from
 * @member {String} phone_number
 */
PayinMethodDetails.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayinMethodDetails.prototype['mobile_provider'] = undefined;

/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayinMethodDetails.prototype['country'] = undefined;

/**
 * The OTP that the sender received in otp verified ussd popup ux flow.
 * @member {String} otp
 */
PayinMethodDetails.prototype['otp'] = undefined;

/**
 * Please make sure the refund_address is a valid BTC address belonging to the sender, as that is going to be used in case the transaction has to be refunded.
 * @member {String} refund_address
 */
PayinMethodDetails.prototype['refund_address'] = undefined;


// Implement PayinMethodDetailsNGNBank interface:
/**
 * The payment method which the sender will use to make the payments. Options are `bank`, `card` or you can leave empty to support both.
 * @member {String} payment_method
 */
PayinMethodDetailsNGNBank.prototype['payment_method'] = undefined;
/**
 * This is where the sender should be redirected back when the payment has been finished
 * @member {String} redirect_url
 */
PayinMethodDetailsNGNBank.prototype['redirect_url'] = undefined;
// Implement PayinMethodDetailsMobile interface:
/**
 * The phone number where the funds should be collected from
 * @member {String} phone_number
 */
PayinMethodDetailsMobile.prototype['phone_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayinMethodDetailsMobile.prototype['mobile_provider'] = undefined;
/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayinMethodDetailsMobile.prototype['country'] = undefined;
/**
 * The OTP that the sender received in otp verified ussd popup ux flow.
 * @member {String} otp
 */
PayinMethodDetailsMobile.prototype['otp'] = undefined;
// Implement PayinMethodDetailsBTC interface:
/**
 * Please make sure the refund_address is a valid BTC address belonging to the sender, as that is going to be used in case the transaction has to be refunded.
 * @member {String} refund_address
 */
PayinMethodDetailsBTC.prototype['refund_address'] = undefined;




export default PayinMethodDetails;

