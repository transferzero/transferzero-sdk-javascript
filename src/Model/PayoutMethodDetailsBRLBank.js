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
import PayoutMethodBankAccountTypeEnum from './PayoutMethodBankAccountTypeEnum';
import PayoutMethodIdentityCardTypeEnum from './PayoutMethodIdentityCardTypeEnum';
import PayoutMethodPixKeyTypeEnum from './PayoutMethodPixKeyTypeEnum';
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetailsBRLBank model module.
 * @module Model/PayoutMethodDetailsBRLBank
 * @version 1.26.0
 */
class PayoutMethodDetailsBRLBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsBRLBank</code>.
     * PIX Payment: &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;First\&quot;,     \&quot;last_name\&quot;: \&quot;Last\&quot;,     \&quot;city\&quot;: \&quot;Brasilia\&quot;,     \&quot;postal_code\&quot;: \&quot;70070\&quot;,     \&quot;phone_number\&quot;: \&quot;+552112345678\&quot;, // E.164 international format     \&quot;pix_key_type\&quot;: \&quot;email\&quot;,     \&quot;pix_key_value\&quot;: \&quot;person@example.com\&quot;,     \&quot;identity_card_type\&quot;: \&quot;ID\&quot;,     \&quot;identity_card_id\&quot;: \&quot;01234567890\&quot;,     \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot;   } &#x60;&#x60;&#x60;  TED Payment: &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;First\&quot;,     \&quot;last_name\&quot;: \&quot;Last\&quot;,     \&quot;city\&quot;: \&quot;Brasilia\&quot;,     \&quot;postal_code\&quot;: \&quot;70070\&quot;,     \&quot;phone_number\&quot;: \&quot;+552112345678\&quot;, // E.164 international format     \&quot;bank_code\&quot;: \&quot;104\&quot;,     \&quot;branch_code\&quot;: \&quot;00001\&quot;,     \&quot;bank_account\&quot;: \&quot;0009795493\&quot;,     \&quot;bank_account_type\&quot;: \&quot;10\&quot;,     \&quot;identity_card_type\&quot;: \&quot;ID\&quot;,     \&quot;identity_card_id\&quot;: \&quot;01234567890\&quot;,     \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot;   } &#x60;&#x60;&#x60;  See [BRL Bank](https://docs.transferzero.com/docs/payout-details/#brlbank) documentation for the bank_code and transfer_reason lists
     * @alias module:Model/PayoutMethodDetailsBRLBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param city {String} 
     * @param postalCode {String} 
     * @param identityCardType {module:Model/PayoutMethodIdentityCardTypeEnum} 
     * @param identityCardId {String} 
     * @param transferReason {module:Model/PayoutMethodTransferReasonEnum} 
     */
    constructor(firstName, lastName, city, postalCode, identityCardType, identityCardId, transferReason) { 
        
        PayoutMethodDetailsBRLBank.initialize(this, firstName, lastName, city, postalCode, identityCardType, identityCardId, transferReason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, city, postalCode, identityCardType, identityCardId, transferReason) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['city'] = city;
        obj['postal_code'] = postalCode;
        obj['identity_card_type'] = identityCardType;
        obj['identity_card_id'] = identityCardId;
        obj['transfer_reason'] = transferReason;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsBRLBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsBRLBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsBRLBank} The populated <code>PayoutMethodDetailsBRLBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsBRLBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('phone_number')) {
                obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('branch_code')) {
                obj['branch_code'] = ApiClient.convertToType(data['branch_code'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('bank_account_type')) {
                obj['bank_account_type'] = PayoutMethodBankAccountTypeEnum.constructFromObject(data['bank_account_type']);
            }
            if (data.hasOwnProperty('pix_key_type')) {
                obj['pix_key_type'] = PayoutMethodPixKeyTypeEnum.constructFromObject(data['pix_key_type']);
            }
            if (data.hasOwnProperty('pix_key_value')) {
                obj['pix_key_value'] = ApiClient.convertToType(data['pix_key_value'], 'String');
            }
            if (data.hasOwnProperty('identity_card_type')) {
                obj['identity_card_type'] = PayoutMethodIdentityCardTypeEnum.constructFromObject(data['identity_card_type']);
            }
            if (data.hasOwnProperty('identity_card_id')) {
                obj['identity_card_id'] = ApiClient.convertToType(data['identity_card_id'], 'String');
            }
            if (data.hasOwnProperty('transfer_reason')) {
                obj['transfer_reason'] = PayoutMethodTransferReasonEnum.constructFromObject(data['transfer_reason']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsBRLBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsBRLBank.prototype['last_name'] = undefined;

/**
 * @member {String} city
 */
PayoutMethodDetailsBRLBank.prototype['city'] = undefined;

/**
 * @member {String} postal_code
 */
PayoutMethodDetailsBRLBank.prototype['postal_code'] = undefined;

/**
 * @member {String} phone_number
 */
PayoutMethodDetailsBRLBank.prototype['phone_number'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsBRLBank.prototype['bank_code'] = undefined;

/**
 * @member {String} branch_code
 */
PayoutMethodDetailsBRLBank.prototype['branch_code'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsBRLBank.prototype['bank_account'] = undefined;

/**
 * @member {module:Model/PayoutMethodBankAccountTypeEnum} bank_account_type
 */
PayoutMethodDetailsBRLBank.prototype['bank_account_type'] = undefined;

/**
 * @member {module:Model/PayoutMethodPixKeyTypeEnum} pix_key_type
 */
PayoutMethodDetailsBRLBank.prototype['pix_key_type'] = undefined;

/**
 * @member {String} pix_key_value
 */
PayoutMethodDetailsBRLBank.prototype['pix_key_value'] = undefined;

/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} identity_card_type
 */
PayoutMethodDetailsBRLBank.prototype['identity_card_type'] = undefined;

/**
 * @member {String} identity_card_id
 */
PayoutMethodDetailsBRLBank.prototype['identity_card_id'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsBRLBank.prototype['transfer_reason'] = undefined;






export default PayoutMethodDetailsBRLBank;

