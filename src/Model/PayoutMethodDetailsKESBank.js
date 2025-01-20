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
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetailsKESBank model module.
 * @module Model/PayoutMethodDetailsKESBank
 * @version 1.36.5
 */
class PayoutMethodDetailsKESBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsKESBank</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;First\&quot;,     \&quot;last_name\&quot;: \&quot;Last\&quot;,     \&quot;street\&quot;: \&quot;Main Street\&quot;,     \&quot;city\&quot;: \&quot;Nairobi\&quot;,     \&quot;bank_code\&quot;: \&quot;68\&quot;,     \&quot;bank_account\&quot;: \&quot;12345678\&quot;,     \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot;, // New transfer reason field     \&quot;identity_card_type\&quot;: \&quot;ID\&quot;, // refers to the recipient&#39;s ID details; Values: \&quot;PP\&quot;: Passport, \&quot;ID\&quot;: National ID or \&quot;O\&quot;: Other     \&quot;identity_card_id\&quot;: \&quot;AB12345678\&quot;, // refers to the recipient&#39;s ID details     \&quot;relationship_to_sender\&quot;: \&quot;Relative\&quot; // Optional   } &#x60;&#x60;&#x60;  See [KES Bank](https://docs.transferzero.com/docs/payout-details/#kesbank) documentation for the &#x60;bank_code&#x60; and &#x60;transfer_reason&#x60; lists
     * @alias module:Model/PayoutMethodDetailsKESBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param street {String} 
     * @param bankCode {String} 
     * @param bankAccount {String} 
     * @param transferReason {module:Model/PayoutMethodTransferReasonEnum} 
     * @param identityCardType {module:Model/PayoutMethodIdentityCardTypeEnum} 
     * @param identityCardId {String} 
     */
    constructor(firstName, lastName, street, bankCode, bankAccount, transferReason, identityCardType, identityCardId) { 
        
        PayoutMethodDetailsKESBank.initialize(this, firstName, lastName, street, bankCode, bankAccount, transferReason, identityCardType, identityCardId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, street, bankCode, bankAccount, transferReason, identityCardType, identityCardId) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['street'] = street;
        obj['bank_code'] = bankCode;
        obj['bank_account'] = bankAccount;
        obj['transfer_reason'] = transferReason;
        obj['identity_card_type'] = identityCardType;
        obj['identity_card_id'] = identityCardId;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsKESBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsKESBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsKESBank} The populated <code>PayoutMethodDetailsKESBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsKESBank();

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
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
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
PayoutMethodDetailsKESBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsKESBank.prototype['last_name'] = undefined;

/**
 * @member {String} street
 */
PayoutMethodDetailsKESBank.prototype['street'] = undefined;

/**
 * @member {String} city
 */
PayoutMethodDetailsKESBank.prototype['city'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsKESBank.prototype['bank_code'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsKESBank.prototype['bank_account'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsKESBank.prototype['transfer_reason'] = undefined;

/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} identity_card_type
 */
PayoutMethodDetailsKESBank.prototype['identity_card_type'] = undefined;

/**
 * @member {String} identity_card_id
 */
PayoutMethodDetailsKESBank.prototype['identity_card_id'] = undefined;

/**
 * @member {String} relationship_to_sender
 */
PayoutMethodDetailsKESBank.prototype['relationship_to_sender'] = undefined;

/**
 * Date of birth of recipient
 * @member {Date} birth_date
 */
PayoutMethodDetailsKESBank.prototype['birth_date'] = undefined;






export default PayoutMethodDetailsKESBank;

