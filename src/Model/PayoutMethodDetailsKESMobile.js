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
import PayoutMethodIdentityCardTypeEnum from './PayoutMethodIdentityCardTypeEnum';
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetailsKESMobile model module.
 * @module Model/PayoutMethodDetailsKESMobile
 * @version 1.37.1
 */
class PayoutMethodDetailsKESMobile {
    /**
     * Constructs a new <code>PayoutMethodDetailsKESMobile</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;First\&quot;,     \&quot;last_name\&quot;: \&quot;Last\&quot;,     \&quot;street\&quot;: \&quot;1 Linford Street\&quot;,     \&quot;city\&quot;: \&quot;Nairobi\&quot;,     \&quot;phone_number\&quot;: \&quot;+254123456789\&quot;, // E.164 international format     \&quot;identity_card_type\&quot;: \&quot;ID\&quot;, // refers to the recipient&#39;s ID details; Values: \&quot;PP\&quot;: Passport, \&quot;ID\&quot;: National ID or \&quot;O\&quot;: Other     \&quot;identity_card_id\&quot;: &#39;AB12345678&#39;, // refers to the recipient&#39;s ID details     \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot;,     \&quot;mobile_provider\&quot;: \&quot;mpesa\&quot;,     \&quot;relationship_to_sender\&quot;: \&quot;Aunt\&quot; // Optional   } &#x60;&#x60;&#x60;  See [KES Mobile](https://docs.transferzero.com/docs/payout-details/#kesmobile) documentation for transfer_reason lists
     * @alias module:Model/PayoutMethodDetailsKESMobile
     * @param firstName {String} 
     * @param lastName {String} 
     * @param street {String} 
     * @param phoneNumber {String} 
     * @param mobileProvider {module:Model/PayoutMethodMobileProviderEnum} 
     * @param transferReason {module:Model/PayoutMethodTransferReasonEnum} 
     * @param identityCardType {module:Model/PayoutMethodIdentityCardTypeEnum} 
     * @param identityCardId {String} 
     */
    constructor(firstName, lastName, street, phoneNumber, mobileProvider, transferReason, identityCardType, identityCardId) { 
        
        PayoutMethodDetailsKESMobile.initialize(this, firstName, lastName, street, phoneNumber, mobileProvider, transferReason, identityCardType, identityCardId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, street, phoneNumber, mobileProvider, transferReason, identityCardType, identityCardId) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['street'] = street;
        obj['phone_number'] = phoneNumber;
        obj['mobile_provider'] = mobileProvider;
        obj['transfer_reason'] = transferReason;
        obj['identity_card_type'] = identityCardType;
        obj['identity_card_id'] = identityCardId;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsKESMobile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsKESMobile} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsKESMobile} The populated <code>PayoutMethodDetailsKESMobile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsKESMobile();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('mobile_provider')) {
                obj['mobile_provider'] = PayoutMethodMobileProviderEnum.constructFromObject(data['mobile_provider']);
            }
            if (data.hasOwnProperty('transfer_reason_code')) {
                obj['transfer_reason_code'] = ApiClient.convertToType(data['transfer_reason_code'], 'String');
            }
            if (data.hasOwnProperty('transfer_reason')) {
                obj['transfer_reason'] = PayoutMethodTransferReasonEnum.constructFromObject(data['transfer_reason']);
            }
            if (data.hasOwnProperty('identity_card_type')) {
                obj['identity_card_type'] = PayoutMethodIdentityCardTypeEnum.constructFromObject(data['identity_card_type']);
            }
            if (data.hasOwnProperty('identity_card_id')) {
                obj['identity_card_id'] = ApiClient.convertToType(data['identity_card_id'], 'String');
            }
            if (data.hasOwnProperty('relationship_to_sender')) {
                obj['relationship_to_sender'] = ApiClient.convertToType(data['relationship_to_sender'], 'String');
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
PayoutMethodDetailsKESMobile.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsKESMobile.prototype['last_name'] = undefined;

/**
 * @member {String} street
 */
PayoutMethodDetailsKESMobile.prototype['street'] = undefined;

/**
 * @member {String} city
 */
PayoutMethodDetailsKESMobile.prototype['city'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsKESMobile.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayoutMethodDetailsKESMobile.prototype['mobile_provider'] = undefined;

/**
 * @member {String} transfer_reason_code
 */
PayoutMethodDetailsKESMobile.prototype['transfer_reason_code'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsKESMobile.prototype['transfer_reason'] = undefined;

/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} identity_card_type
 */
PayoutMethodDetailsKESMobile.prototype['identity_card_type'] = undefined;

/**
 * @member {String} identity_card_id
 */
PayoutMethodDetailsKESMobile.prototype['identity_card_id'] = undefined;

/**
 * @member {String} relationship_to_sender
 */
PayoutMethodDetailsKESMobile.prototype['relationship_to_sender'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsKESMobile.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsKESMobile;

