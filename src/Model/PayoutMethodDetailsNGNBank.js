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

/**
 * The PayoutMethodDetailsNGNBank model module.
 * @module Model/PayoutMethodDetailsNGNBank
 * @version 1.2.0
 */
class PayoutMethodDetailsNGNBank {
    /**
     * Constructs a new <code>PayoutMethodDetailsNGNBank</code>.
     * &#x60;&#x60;&#x60;JSON   \&quot;details\&quot;: {     \&quot;first_name\&quot;: \&quot;First\&quot;,     \&quot;last_name\&quot;: \&quot;Last\&quot;,     \&quot;bank_code\&quot;: \&quot;058\&quot;,     \&quot;bank_account\&quot;: \&quot;123456789\&quot;,     \&quot;bank_account_type\&quot;: \&quot;10\&quot;       # 10 for saving       # 20 for current accounts   } &#x60;&#x60;&#x60;  The valid bank_code values are:  - Access Bank: 044 - Diamond Bank: 063 - EcoBank: 050 - FCMB Bank: 214 - Fidelity Bank: 070 - First Bank of Nigeria: 011 - Guaranty Trust Bank : 058 - Heritage Bank: 030 - Jaiz Bank: 301 - Keystone: 082 - Mainstreet: 014 - Polaris Bank: 076 - Stanbic IBTC Bank: 039 - Sterling bank: 232 - Union Bank: 032 - United Bank for Africa: 033 - Unity Bank: 215 - Wema Bank: 035 - Zenith International: 057
     * @alias module:Model/PayoutMethodDetailsNGNBank
     * @param firstName {String} 
     * @param lastName {String} 
     * @param bankCode {String} 
     * @param bankAccount {String} 
     * @param bankAccountType {module:Model/PayoutMethodBankAccountTypeEnum} 
     */
    constructor(firstName, lastName, bankCode, bankAccount, bankAccountType) { 
        
        PayoutMethodDetailsNGNBank.initialize(this, firstName, lastName, bankCode, bankAccount, bankAccountType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankCode, bankAccount, bankAccountType) { 
        obj['first_name'] = firstName;
        obj['last_name'] = lastName;
        obj['bank_code'] = bankCode;
        obj['bank_account'] = bankAccount;
        obj['bank_account_type'] = bankAccountType;
    }

    /**
     * Constructs a <code>PayoutMethodDetailsNGNBank</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetailsNGNBank} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetailsNGNBank} The populated <code>PayoutMethodDetailsNGNBank</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetailsNGNBank();

            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('bank_code')) {
                obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
            }
            if (data.hasOwnProperty('bank_account')) {
                obj['bank_account'] = ApiClient.convertToType(data['bank_account'], 'String');
            }
            if (data.hasOwnProperty('bank_account_type')) {
                obj['bank_account_type'] = PayoutMethodBankAccountTypeEnum.constructFromObject(data['bank_account_type']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} first_name
 */
PayoutMethodDetailsNGNBank.prototype['first_name'] = undefined;

/**
 * @member {String} last_name
 */
PayoutMethodDetailsNGNBank.prototype['last_name'] = undefined;

/**
 * @member {String} bank_code
 */
PayoutMethodDetailsNGNBank.prototype['bank_code'] = undefined;

/**
 * @member {String} bank_account
 */
PayoutMethodDetailsNGNBank.prototype['bank_account'] = undefined;

/**
 * @member {module:Model/PayoutMethodBankAccountTypeEnum} bank_account_type
 */
PayoutMethodDetailsNGNBank.prototype['bank_account_type'] = undefined;






export default PayoutMethodDetailsNGNBank;
