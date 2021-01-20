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
import PayoutMethodCashProviderEnum from './PayoutMethodCashProviderEnum';
import PayoutMethodDetailsBTC from './PayoutMethodDetailsBTC';
import PayoutMethodDetailsBalance from './PayoutMethodDetailsBalance';
import PayoutMethodDetailsGBPBank from './PayoutMethodDetailsGBPBank';
import PayoutMethodDetailsGHSBank from './PayoutMethodDetailsGHSBank';
import PayoutMethodDetailsIBAN from './PayoutMethodDetailsIBAN';
import PayoutMethodDetailsMADCash from './PayoutMethodDetailsMADCash';
import PayoutMethodDetailsMobile from './PayoutMethodDetailsMobile';
import PayoutMethodDetailsNGNBank from './PayoutMethodDetailsNGNBank';
import PayoutMethodDetailsXOFBank from './PayoutMethodDetailsXOFBank';
import PayoutMethodDetailsXOFCash from './PayoutMethodDetailsXOFCash';
import PayoutMethodDetailsXOFMobile from './PayoutMethodDetailsXOFMobile';
import PayoutMethodDetailsZARBank from './PayoutMethodDetailsZARBank';
import PayoutMethodGenderEnum from './PayoutMethodGenderEnum';
import PayoutMethodIdentityCardTypeEnum from './PayoutMethodIdentityCardTypeEnum';
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';

/**
 * The PayoutMethodDetails model module.
 * @module Model/PayoutMethodDetails
 * @version 1.9.0
 */
class PayoutMethodDetails {
    /**
     * Constructs a new <code>PayoutMethodDetails</code>.
     * @alias module:Model/PayoutMethodDetails
     * @implements module:Model/PayoutMethodDetailsNGNBank
     * @implements module:Model/PayoutMethodDetailsMobile
     * @implements module:Model/PayoutMethodDetailsXOFMobile
     * @implements module:Model/PayoutMethodDetailsXOFBank
     * @implements module:Model/PayoutMethodDetailsXOFCash
     * @implements module:Model/PayoutMethodDetailsGHSBank
     * @implements module:Model/PayoutMethodDetailsGBPBank
     * @implements module:Model/PayoutMethodDetailsIBAN
     * @implements module:Model/PayoutMethodDetailsMADCash
     * @implements module:Model/PayoutMethodDetailsBalance
     * @implements module:Model/PayoutMethodDetailsBTC
     * @implements module:Model/PayoutMethodDetailsZARBank
     * @param firstName {} 
     * @param lastName {} 
     * @param bankCode {} 
     * @param bankAccount {} 
     * @param phoneNumber {} 
     * @param mobileProvider {} 
     * @param iban {} 
     * @param bankName {} 
     * @param bankCountry {} 
     * @param senderIdentityCardType {} 
     * @param senderIdentityCardId {} 
     * @param senderCityOfBirth {} 
     * @param senderCountryOfBirth {} 
     * @param senderGender {} 
     * @param name {} 
     * @param address {} 
     * @param street {} 
     * @param postalCode {} 
     * @param city {} 
     */
    constructor(firstName, lastName, bankCode, bankAccount, phoneNumber, mobileProvider, iban, bankName, bankCountry, senderIdentityCardType, senderIdentityCardId, senderCityOfBirth, senderCountryOfBirth, senderGender, name, address, street, postalCode, city) { 
        PayoutMethodDetailsNGNBank.initialize(this, firstName, lastName, bankCode, bankAccount);PayoutMethodDetailsMobile.initialize(this, firstName, lastName, phoneNumber);PayoutMethodDetailsXOFMobile.initialize(this, firstName, lastName, phoneNumber, mobileProvider);PayoutMethodDetailsXOFBank.initialize(this, firstName, lastName, iban, bankName, bankCountry);PayoutMethodDetailsXOFCash.initialize(this, firstName, lastName, phoneNumber);PayoutMethodDetailsGHSBank.initialize(this, firstName, lastName, bankCode, bankAccount);PayoutMethodDetailsGBPBank.initialize(this, firstName, lastName);PayoutMethodDetailsIBAN.initialize(this, firstName, lastName, iban);PayoutMethodDetailsMADCash.initialize(this, firstName, lastName, phoneNumber, senderIdentityCardType, senderIdentityCardId, senderCityOfBirth, senderCountryOfBirth, senderGender);PayoutMethodDetailsBalance.initialize(this);PayoutMethodDetailsBTC.initialize(this, firstName, lastName, name, address);PayoutMethodDetailsZARBank.initialize(this, firstName, lastName, street, postalCode, city, bankCode, bankAccount, phoneNumber);
        PayoutMethodDetails.initialize(this, firstName, lastName, bankCode, bankAccount, phoneNumber, mobileProvider, iban, bankName, bankCountry, senderIdentityCardType, senderIdentityCardId, senderCityOfBirth, senderCountryOfBirth, senderGender, name, address, street, postalCode, city);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankCode, bankAccount, phoneNumber, mobileProvider, iban, bankName, bankCountry, senderIdentityCardType, senderIdentityCardId, senderCityOfBirth, senderCountryOfBirth, senderGender, name, address, street, postalCode, city) { 
    }

    /**
     * Constructs a <code>PayoutMethodDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetails} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetails} The populated <code>PayoutMethodDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetails();
            PayoutMethodDetailsNGNBank.constructFromObject(data, obj);
            PayoutMethodDetailsMobile.constructFromObject(data, obj);
            PayoutMethodDetailsXOFMobile.constructFromObject(data, obj);
            PayoutMethodDetailsXOFBank.constructFromObject(data, obj);
            PayoutMethodDetailsXOFCash.constructFromObject(data, obj);
            PayoutMethodDetailsGHSBank.constructFromObject(data, obj);
            PayoutMethodDetailsGBPBank.constructFromObject(data, obj);
            PayoutMethodDetailsIBAN.constructFromObject(data, obj);
            PayoutMethodDetailsMADCash.constructFromObject(data, obj);
            PayoutMethodDetailsBalance.constructFromObject(data, obj);
            PayoutMethodDetailsBTC.constructFromObject(data, obj);
            PayoutMethodDetailsZARBank.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement PayoutMethodDetailsNGNBank interface:
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
// Implement PayoutMethodDetailsMobile interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsMobile.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsMobile.prototype['last_name'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsMobile.prototype['phone_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayoutMethodDetailsMobile.prototype['mobile_provider'] = undefined;
// Implement PayoutMethodDetailsXOFMobile interface:
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
// Implement PayoutMethodDetailsXOFBank interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsXOFBank.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsXOFBank.prototype['last_name'] = undefined;
/**
 * @member {String} iban
 */
PayoutMethodDetailsXOFBank.prototype['iban'] = undefined;
/**
 * @member {String} bank_name
 */
PayoutMethodDetailsXOFBank.prototype['bank_name'] = undefined;
/**
 * @member {String} bank_country
 */
PayoutMethodDetailsXOFBank.prototype['bank_country'] = undefined;
// Implement PayoutMethodDetailsXOFCash interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsXOFCash.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsXOFCash.prototype['last_name'] = undefined;
/**
 * @member {String} identity_card_id
 */
PayoutMethodDetailsXOFCash.prototype['identity_card_id'] = undefined;
/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} identity_card_type
 */
PayoutMethodDetailsXOFCash.prototype['identity_card_type'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsXOFCash.prototype['phone_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodCashProviderEnum} cash_provider
 */
PayoutMethodDetailsXOFCash.prototype['cash_provider'] = undefined;
// Implement PayoutMethodDetailsGHSBank interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsGHSBank.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsGHSBank.prototype['last_name'] = undefined;
/**
 * @member {String} bank_code
 */
PayoutMethodDetailsGHSBank.prototype['bank_code'] = undefined;
/**
 * @member {String} bank_account
 */
PayoutMethodDetailsGHSBank.prototype['bank_account'] = undefined;
// Implement PayoutMethodDetailsGBPBank interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsGBPBank.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsGBPBank.prototype['last_name'] = undefined;
/**
 * @member {String} bank_name
 */
PayoutMethodDetailsGBPBank.prototype['bank_name'] = undefined;
/**
 * @member {String} bank_account
 */
PayoutMethodDetailsGBPBank.prototype['bank_account'] = undefined;
/**
 * @member {String} sort_code
 */
PayoutMethodDetailsGBPBank.prototype['sort_code'] = undefined;
/**
 * @member {String} iban
 */
PayoutMethodDetailsGBPBank.prototype['iban'] = undefined;
/**
 * @member {String} bic
 */
PayoutMethodDetailsGBPBank.prototype['bic'] = undefined;
// Implement PayoutMethodDetailsIBAN interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsIBAN.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsIBAN.prototype['last_name'] = undefined;
/**
 * @member {String} bank_name
 */
PayoutMethodDetailsIBAN.prototype['bank_name'] = undefined;
/**
 * @member {String} iban
 */
PayoutMethodDetailsIBAN.prototype['iban'] = undefined;
/**
 * @member {String} bic
 */
PayoutMethodDetailsIBAN.prototype['bic'] = undefined;
// Implement PayoutMethodDetailsMADCash interface:
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
// Implement PayoutMethodDetailsBalance interface:
/**
 * @member {String} reference
 */
PayoutMethodDetailsBalance.prototype['reference'] = undefined;
// Implement PayoutMethodDetailsBTC interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsBTC.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsBTC.prototype['last_name'] = undefined;
/**
 * @member {String} name
 */
PayoutMethodDetailsBTC.prototype['name'] = undefined;
/**
 * @member {String} address
 */
PayoutMethodDetailsBTC.prototype['address'] = undefined;
// Implement PayoutMethodDetailsZARBank interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsZARBank.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsZARBank.prototype['last_name'] = undefined;
/**
 * @member {String} street
 */
PayoutMethodDetailsZARBank.prototype['street'] = undefined;
/**
 * @member {String} postal_code
 */
PayoutMethodDetailsZARBank.prototype['postal_code'] = undefined;
/**
 * @member {String} city
 */
PayoutMethodDetailsZARBank.prototype['city'] = undefined;
/**
 * @member {String} email
 */
PayoutMethodDetailsZARBank.prototype['email'] = undefined;
/**
 * @member {String} bank_code
 */
PayoutMethodDetailsZARBank.prototype['bank_code'] = undefined;
/**
 * @member {String} bank_account
 */
PayoutMethodDetailsZARBank.prototype['bank_account'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsZARBank.prototype['phone_number'] = undefined;
/**
 * @member {String} transfer_reason_code
 */
PayoutMethodDetailsZARBank.prototype['transfer_reason_code'] = undefined;




export default PayoutMethodDetails;

