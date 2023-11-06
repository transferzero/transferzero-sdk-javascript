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
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetailsUGXBank model module.
 * @module Model/PayoutMethodDetailsUGXBank
 * @version 1.33.0
 */
class PayoutMethodDetailsUGXBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsUGXBank</code>.
     * &#x60;&#x60;&#x60;JSON \&quot;details\&quot;: {   \&quot;first_name\&quot;: \&quot;First\&quot;,   \&quot;last_name\&quot;: \&quot;Last\&quot;,   \&quot;street\&quot;: \&quot;1, Old Taxi Park\&quot;,   \&quot;city\&quot;: \&quot;Kampala\&quot;,   \&quot;postal_code\&quot;: \&quot;10102\&quot;,   \&quot;identity_card_id\&quot;: \&quot;3081900101123411\&quot;,   \&quot;bank_account\&quot;: \&quot;1234567890\&quot;,   \&quot;branch_code\&quot;: \&quot;130547\&quot;,   \&quot;transfer_reason\&quot;: \&quot;personal_account\&quot; } &#x60;&#x60;&#x60; See [UGX Bank](https://docs.transferzero.com/docs/payout-details/#ugxbank) documentation for the branch_code list
     * @alias module:Model/PayoutMethodDetailsUGXBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param street {String} 
     * @param city {String} 
     * @param postalCode {String} 
     * @param identityCardId {String} 
     * @param bankAccount {String} 
     * @param branchCode {String} 
     * @param transferReason {module:Model/PayoutMethodTransferReasonEnum} 
     */
    constructor(firstName, lastName, street, city, postalCode, identityCardId, bankAccount, branchCode, transferReason) { 
        
        PayoutMethodDetailsUGXBank.initialize(this, firstName, lastName, street, city, postalCode, identityCardId, bankAccount, branchCode, transferReason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, street, city, postalCode, identityCardId, bankAccount, branchCode, transferReason) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['street'] = street;
        obj['city'] = city;
        obj['postal_code'] = postalCode;
        obj['identity_card_id'] = identityCardId;
        obj['bank_account'] = bankAccount;
        obj['branch_code'] = branchCode;
        obj['transfer_reason'] = transferReason;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsUGXBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsUGXBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsUGXBank} The populated <code>PayoutMethodDetailsUGXBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsUGXBank();

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
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('identity_card_id')) {
                obj['identity_card_id'] = ApiClient.convertToType(data['identity_card_id'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('branch_code')) {
                obj['branch_code'] = ApiClient.convertToType(data['branch_code'], 'String');
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
PayoutMethodDetailsUGXBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsUGXBank.prototype['last_name'] = undefined;

/**
 * @member {String} street
 */
PayoutMethodDetailsUGXBank.prototype['street'] = undefined;

/**
 * @member {String} city
 */
PayoutMethodDetailsUGXBank.prototype['city'] = undefined;

/**
 * @member {String} postal_code
 */
PayoutMethodDetailsUGXBank.prototype['postal_code'] = undefined;

/**
 * @member {String} identity_card_id
 */
PayoutMethodDetailsUGXBank.prototype['identity_card_id'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsUGXBank.prototype['bank_account'] = undefined;

/**
 * @member {String} branch_code
 */
PayoutMethodDetailsUGXBank.prototype['branch_code'] = undefined;

/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsUGXBank.prototype['transfer_reason'] = undefined;






export default PayoutMethodDetailsUGXBank;

