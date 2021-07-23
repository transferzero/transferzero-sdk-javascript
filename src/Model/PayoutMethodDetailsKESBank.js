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
import PayoutMethodIdentityCardTypeEnum from './PayoutMethodIdentityCardTypeEnum';

/**
 * The PayoutMethodDetailsKESBank model module.
 * @module Model/PayoutMethodDetailsKESBank
 * @version 1.15.0
 */
class PayoutMethodDetailsKESBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsKESBank</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;First\&quot;,     \&quot;last_name\&quot;: \&quot;Last\&quot;,     \&quot;street\&quot;: \&quot;Main Street\&quot;,     \&quot;bank_code\&quot;: \&quot;68\&quot;,     \&quot;bank_account\&quot;: \&quot;12345678\&quot;,     \&quot;bank_name\&quot;: \&quot;Equity Bank Ltd\&quot;,     \&quot;branch_code\&quot;: \&quot;404\&quot;,     \&quot;swift_code\&quot; \&quot;ABCLKENA\&quot;,     \&quot;transfer_reason_code\&quot;: \&quot;185\&quot;,     \&quot;identity_card_type\&quot;: \&quot;ID\&quot;,     \&quot;identity_card_id\&quot;: \&quot;AB12345678\&quot;   } &#x60;&#x60;&#x60;  The valid bank_code values are:  - Habib Bank Limited: 08 - Trans-National Bank Limited: 26 - Housing Finance Co. Kenya: 61 - UBA Kenya Bank Ltd: 76 - Kenya Commercial Bank: 01000 - Standard Chartered Bank: 02000 - Barclays Bank of Kenya: 03000 - Bank of India: 05000 - Bank of Boroda: 06000 - NCBA Bank: 07000 - Prime Bank: 10000 - Co-operative Bank of Kenya: 11000 - National Bank of Kenya: 12000 - M-Oriental Commercial Bank Limited: 14000 - Citibank: 16000 - Habib Bank A.G. Zurich: 17000 - Middle East Bank: 18000 - Bank of Africa Kenya: 19000 - Consolidated Bank of Kenya: 23000 - Credit Bank Ltd: 25000 - Chase Bank: 30000 - Stanbic Bank Kenya: 31000 - African Banking Corporation: 35000 - Giro Bank Limited: 42000 - ECO Bank Kenya: 43000 - Spire Bank Limited: 49000 - Paramount Universal Bank Limited: 50000 - Jamii Bora Bank: 51000 - Guaranty Trust Bank Kenya: 53000 - Victoria Bank Limited: 54000 - Guardian Bank: 55000 - Investments and Mortgages Bank Limited: 57000 - Development Bank of Kenya: 59000 - Fidelity Commercial Bank: 46000 - Diamond Trust Bank: 63000 - Sidian Bank: 66000 - Equity Bank Limited: 68000 - Family Bank: 70000 - Gulf African Bank: 72000 - First Community Bank: 74000 - KWFT Bank: 78000  See [KES Bank](https://docs.transferzero.com/docs/payout-details/#kesbank) documentation for the transfer_reason_code list
     * @alias module:Model/PayoutMethodDetailsKESBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param bankCode {String} 
     * @param street {String} 
     * @param bankAccount {String} 
     * @param bankName {String} 
     * @param swiftCode {String} 
     * @param transferReasonCode {String} 
     * @param identityCardType {module:Model/PayoutMethodIdentityCardTypeEnum} 
     * @param identityCardId {String} 
     */
    constructor(firstName, lastName, bankCode, street, bankAccount, bankName, swiftCode, transferReasonCode, identityCardType, identityCardId) { 
        
        PayoutMethodDetailsKESBank.initialize(this, firstName, lastName, bankCode, street, bankAccount, bankName, swiftCode, transferReasonCode, identityCardType, identityCardId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankCode, street, bankAccount, bankName, swiftCode, transferReasonCode, identityCardType, identityCardId) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['bank_code'] = bankCode;
        obj['street'] = street;
        obj['bank_account'] = bankAccount;
        obj['bank_name'] = bankName;
        obj['swift_code'] = swiftCode;
        obj['transfer_reason_code'] = transferReasonCode;
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
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
            }
            if (data.hasOwnProperty('branch_code')) {
                obj['branch_code'] = ApiClient.convertToType(data['branch_code'], 'String');
            }
            if (data.hasOwnProperty('swift_code')) {
                obj['swift_code'] = ApiClient.convertToType(data['swift_code'], 'String');
            }
            if (data.hasOwnProperty('transfer_reason_code')) {
                obj['transfer_reason_code'] = ApiClient.convertToType(data['transfer_reason_code'], 'String');
            }
            if (data.hasOwnProperty('identity_card_type')) {
                obj['identity_card_type'] = PayoutMethodIdentityCardTypeEnum.constructFromObject(data['identity_card_type']);
            }
            if (data.hasOwnProperty('identity_card_id')) {
                obj['identity_card_id'] = ApiClient.convertToType(data['identity_card_id'], 'String');
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
 * @member {String} bank_code
 */
PayoutMethodDetailsKESBank.prototype['bank_code'] = undefined;

/**
 * @member {String} street
 */
PayoutMethodDetailsKESBank.prototype['street'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsKESBank.prototype['bank_account'] = undefined;

/**
 * @member {String} bank_name
 */
PayoutMethodDetailsKESBank.prototype['bank_name'] = undefined;

/**
 * @member {String} branch_code
 */
PayoutMethodDetailsKESBank.prototype['branch_code'] = undefined;

/**
 * @member {String} swift_code
 */
PayoutMethodDetailsKESBank.prototype['swift_code'] = undefined;

/**
 * @member {String} transfer_reason_code
 */
PayoutMethodDetailsKESBank.prototype['transfer_reason_code'] = undefined;

/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} identity_card_type
 */
PayoutMethodDetailsKESBank.prototype['identity_card_type'] = undefined;

/**
 * @member {String} identity_card_id
 */
PayoutMethodDetailsKESBank.prototype['identity_card_id'] = undefined;






export default PayoutMethodDetailsKESBank;

