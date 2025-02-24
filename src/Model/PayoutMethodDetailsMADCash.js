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
import PayoutMethodGenderEnum from './PayoutMethodGenderEnum';
import PayoutMethodIdentityCardTypeEnum from './PayoutMethodIdentityCardTypeEnum';

/**
 * The PayoutMethodDetailsMADCash model module.
 * @module Model/PayoutMethodDetailsMADCash
 * @version 1.36.6
 */
class PayoutMethodDetailsMADCash {
    /**
     * Constructs a new <code>PayoutMethodDetailsMADCash</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;phone_number\&quot;: \&quot;+212537718685\&quot;     # Mandatory; E.164 international format   \&quot;sender_identity_card_type\&quot; &#x3D;&gt; \&quot;O\&quot;,     # Mandatory; Values: \&quot;O\&quot;: Other, \&quot;PP\&quot;: Passport, \&quot;ID\&quot;: National ID   \&quot;sender_identity_card_id\&quot; &#x3D;&gt; &#39;AB12345678&#39;,     # Mandatory   \&quot;sender_city_of_birth\&quot; &#x3D;&gt; \&quot;London\&quot;,     # Optional   \&quot;sender_country_of_birth\&quot; &#x3D;&gt; \&quot;GB\&quot;,     # Optional; ISO 2-letter format   \&quot;sender_gender\&quot; &#x3D;&gt; \&quot;M\&quot;,     # Optional; Values: \&quot;M\&quot;: Male, \&quot;F\&quot;: Female   \&quot;reason\&quot; &#x3D;&gt; \&quot;Remittance payment\&quot;,     # Optional; Default value is &#39;Remittance payment&#39;   \&quot;identity_card_type\&quot; &#x3D;&gt; \&quot;ID\&quot;,     # Optional; Values: \&quot;PP\&quot;: Passport, \&quot;ID\&quot;: National ID   \&quot;identity_card_id\&quot; &#x3D;&gt; &#39;AB12345678&#39;     # Optional } &#x60;&#x60;&#x60;  Please note when sending MAD::Cash payments you should subscribe to the recipient.pending webhook, as that will broadcast the payment reference ID the customer need to use to obtain the funds. Example webhook response excerpt -  &#x60;&#x60;&#x60;JSON {   (...)   \&quot;state\&quot;:\&quot;pending\&quot;,   \&quot;metadata\&quot;: {     \&quot;payment_reference\&quot;:\&quot;9M5GJRJUBCY\&quot;   },   (...) } &#x60;&#x60;&#x60;  The reference can also be provided optionally for MAD::Cash, but if you want to use this functionality please contact us for more details.
     * @alias module:Model/PayoutMethodDetailsMADCash
     * @param firstName {String} 
     * @param lastName {String} 
     * @param phoneNumber {String} 
     * @param senderIdentityCardType {module:Model/PayoutMethodIdentityCardTypeEnum} 
     * @param senderIdentityCardId {String} 
     */
    constructor(firstName, lastName, phoneNumber, senderIdentityCardType, senderIdentityCardId) { 
        
        PayoutMethodDetailsMADCash.initialize(this, firstName, lastName, phoneNumber, senderIdentityCardType, senderIdentityCardId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, phoneNumber, senderIdentityCardType, senderIdentityCardId) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['phone_number'] = phoneNumber;
        obj['sender_identity_card_type'] = senderIdentityCardType;
        obj['sender_identity_card_id'] = senderIdentityCardId;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsMADCash</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsMADCash} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsMADCash} The populated <code>PayoutMethodDetailsMADCash</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsMADCash();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('sender_identity_card_type')) {
                obj['sender_identity_card_type'] = PayoutMethodIdentityCardTypeEnum.constructFromObject(data['sender_identity_card_type']);
            }
            if (data.hasOwnProperty('sender_identity_card_id')) {
                obj['sender_identity_card_id'] = ApiClient.convertToType(data['sender_identity_card_id'], 'String');
            }
            if (data.hasOwnProperty('sender_city_of_birth')) {
                obj['sender_city_of_birth'] = ApiClient.convertToType(data['sender_city_of_birth'], 'String');
            }
            if (data.hasOwnProperty('sender_country_of_birth')) {
                obj['sender_country_of_birth'] = ApiClient.convertToType(data['sender_country_of_birth'], 'String');
            }
            if (data.hasOwnProperty('sender_gender')) {
                obj['sender_gender'] = PayoutMethodGenderEnum.constructFromObject(data['sender_gender']);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('identity_card_type')) {
                obj['identity_card_type'] = PayoutMethodIdentityCardTypeEnum.constructFromObject(data['identity_card_type']);
            }
            if (data.hasOwnProperty('identity_card_id')) {
                obj['identity_card_id'] = ApiClient.convertToType(data['identity_card_id'], 'String');
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
PayoutMethodDetailsMADCash.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsMADCash.prototype['last_name'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsMADCash.prototype['phone_number'] = undefined;

/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} sender_identity_card_type
 */
PayoutMethodDetailsMADCash.prototype['sender_identity_card_type'] = undefined;

/**
 * @member {String} sender_identity_card_id
 */
PayoutMethodDetailsMADCash.prototype['sender_identity_card_id'] = undefined;

/**
 * @member {String} sender_city_of_birth
 */
PayoutMethodDetailsMADCash.prototype['sender_city_of_birth'] = undefined;

/**
 * @member {String} sender_country_of_birth
 */
PayoutMethodDetailsMADCash.prototype['sender_country_of_birth'] = undefined;

/**
 * @member {module:Model/PayoutMethodGenderEnum} sender_gender
 */
PayoutMethodDetailsMADCash.prototype['sender_gender'] = undefined;

/**
 * @member {String} reason
 */
PayoutMethodDetailsMADCash.prototype['reason'] = undefined;

/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} identity_card_type
 */
PayoutMethodDetailsMADCash.prototype['identity_card_type'] = undefined;

/**
 * @member {String} identity_card_id
 */
PayoutMethodDetailsMADCash.prototype['identity_card_id'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsMADCash.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsMADCash;

