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
import PayoutMethodCountryEnum from './PayoutMethodCountryEnum';
import PayoutMethodDetailsBRLBank from './PayoutMethodDetailsBRLBank';
import PayoutMethodDetailsBTC from './PayoutMethodDetailsBTC';
import PayoutMethodDetailsBalance from './PayoutMethodDetailsBalance';
import PayoutMethodDetailsGBPBank from './PayoutMethodDetailsGBPBank';
import PayoutMethodDetailsGHSBank from './PayoutMethodDetailsGHSBank';
import PayoutMethodDetailsGHSCash from './PayoutMethodDetailsGHSCash';
import PayoutMethodDetailsGNFMobile from './PayoutMethodDetailsGNFMobile';
import PayoutMethodDetailsIBAN from './PayoutMethodDetailsIBAN';
import PayoutMethodDetailsKESBank from './PayoutMethodDetailsKESBank';
import PayoutMethodDetailsKESMobile from './PayoutMethodDetailsKESMobile';
import PayoutMethodDetailsMADCash from './PayoutMethodDetailsMADCash';
import PayoutMethodDetailsMobile from './PayoutMethodDetailsMobile';
import PayoutMethodDetailsNGNBank from './PayoutMethodDetailsNGNBank';
import PayoutMethodDetailsUSDBank from './PayoutMethodDetailsUSDBank';
import PayoutMethodDetailsUSDCash from './PayoutMethodDetailsUSDCash';
import PayoutMethodDetailsXAFBank from './PayoutMethodDetailsXAFBank';
import PayoutMethodDetailsXAFMobile from './PayoutMethodDetailsXAFMobile';
import PayoutMethodDetailsXOFBank from './PayoutMethodDetailsXOFBank';
import PayoutMethodDetailsXOFCash from './PayoutMethodDetailsXOFCash';
import PayoutMethodDetailsXOFMobile from './PayoutMethodDetailsXOFMobile';
import PayoutMethodDetailsZARBank from './PayoutMethodDetailsZARBank';
import PayoutMethodGenderEnum from './PayoutMethodGenderEnum';
import PayoutMethodIdentityCardTypeEnum from './PayoutMethodIdentityCardTypeEnum';
import PayoutMethodLegalEntityTypeEnum from './PayoutMethodLegalEntityTypeEnum';
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';
import PayoutMethodNatureOfBusinessEnum from './PayoutMethodNatureOfBusinessEnum';
import PayoutMethodTransferReasonEnum from './PayoutMethodTransferReasonEnum';

/**
 * The PayoutMethodDetails model module.
 * @module Model/PayoutMethodDetails
 * @version 1.23.2
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
     * @implements module:Model/PayoutMethodDetailsGHSCash
     * @implements module:Model/PayoutMethodDetailsGBPBank
     * @implements module:Model/PayoutMethodDetailsIBAN
     * @implements module:Model/PayoutMethodDetailsMADCash
     * @implements module:Model/PayoutMethodDetailsBalance
     * @implements module:Model/PayoutMethodDetailsBTC
     * @implements module:Model/PayoutMethodDetailsZARBank
     * @implements module:Model/PayoutMethodDetailsUSDBank
     * @implements module:Model/PayoutMethodDetailsUSDCash
     * @implements module:Model/PayoutMethodDetailsKESMobile
     * @implements module:Model/PayoutMethodDetailsKESBank
     * @implements module:Model/PayoutMethodDetailsXAFMobile
     * @implements module:Model/PayoutMethodDetailsXAFBank
     * @implements module:Model/PayoutMethodDetailsGNFMobile
     * @implements module:Model/PayoutMethodDetailsBRLBank
     * @param firstName {} 
     * @param lastName {} 
     * @param bankCode {} 
     * @param bankAccount {} 
     * @param bankAccountType {} 
     * @param phoneNumber {} 
     * @param mobileProvider {} 
     * @param country {} 
     * @param transferReason {} 
     * @param iban {} 
     * @param bankName {} 
     * @param cashProvider {} 
     * @param senderIdentityCardType {} 
     * @param senderIdentityCardId {} 
     * @param identityCardType {} 
     * @param identityCardId {} 
     * @param name {} 
     * @param address {} 
     * @param street {} 
     * @param postalCode {} 
     * @param city {} 
     * @param branchCode {} 
     * @param swiftCode {} 
     */
    constructor(firstName, lastName, bankCode, bankAccount, bankAccountType, phoneNumber, mobileProvider, country, transferReason, iban, bankName, cashProvider, senderIdentityCardType, senderIdentityCardId, identityCardType, identityCardId, name, address, street, postalCode, city, branchCode, swiftCode) { 
        PayoutMethodDetailsNGNBank.initialize(this, firstName, lastName, bankCode, bankAccount);PayoutMethodDetailsMobile.initialize(this, firstName, lastName, phoneNumber);PayoutMethodDetailsXOFMobile.initialize(this, firstName, lastName, phoneNumber, mobileProvider);PayoutMethodDetailsXOFBank.initialize(this, firstName, lastName, iban);PayoutMethodDetailsXOFCash.initialize(this, firstName, lastName, phoneNumber, cashProvider);PayoutMethodDetailsGHSBank.initialize(this, firstName, lastName, bankCode, bankAccount);PayoutMethodDetailsGHSCash.initialize(this, firstName, lastName, phoneNumber);PayoutMethodDetailsGBPBank.initialize(this, firstName, lastName);PayoutMethodDetailsIBAN.initialize(this, firstName, lastName, iban);PayoutMethodDetailsMADCash.initialize(this, firstName, lastName, phoneNumber, senderIdentityCardType, senderIdentityCardId);PayoutMethodDetailsBalance.initialize(this);PayoutMethodDetailsBTC.initialize(this, firstName, lastName, name, address);PayoutMethodDetailsZARBank.initialize(this, firstName, lastName, street, postalCode, city, bankCode, bankAccount, phoneNumber);PayoutMethodDetailsUSDBank.initialize(this, firstName, lastName, phoneNumber, bankCode, bankAccount, country);PayoutMethodDetailsUSDCash.initialize(this, firstName, lastName, phoneNumber, country);PayoutMethodDetailsKESMobile.initialize(this, firstName, lastName, street, phoneNumber, mobileProvider, identityCardType, identityCardId);PayoutMethodDetailsKESBank.initialize(this, firstName, lastName, bankCode, street, bankAccount, bankName, swiftCode, identityCardType, identityCardId);PayoutMethodDetailsXAFMobile.initialize(this, firstName, lastName, phoneNumber, mobileProvider);PayoutMethodDetailsXAFBank.initialize(this, firstName, lastName, iban);PayoutMethodDetailsGNFMobile.initialize(this, firstName, lastName, phoneNumber, mobileProvider);PayoutMethodDetailsBRLBank.initialize(this, firstName, lastName, bankCode, branchCode, bankAccount, bankAccountType, identityCardType, identityCardId, transferReason);
        PayoutMethodDetails.initialize(this, firstName, lastName, bankCode, bankAccount, bankAccountType, phoneNumber, mobileProvider, country, transferReason, iban, bankName, cashProvider, senderIdentityCardType, senderIdentityCardId, identityCardType, identityCardId, name, address, street, postalCode, city, branchCode, swiftCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankCode, bankAccount, bankAccountType, phoneNumber, mobileProvider, country, transferReason, iban, bankName, cashProvider, senderIdentityCardType, senderIdentityCardId, identityCardType, identityCardId, name, address, street, postalCode, city, branchCode, swiftCode) { 
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
            PayoutMethodDetailsGHSCash.constructFromObject(data, obj);
            PayoutMethodDetailsGBPBank.constructFromObject(data, obj);
            PayoutMethodDetailsIBAN.constructFromObject(data, obj);
            PayoutMethodDetailsMADCash.constructFromObject(data, obj);
            PayoutMethodDetailsBalance.constructFromObject(data, obj);
            PayoutMethodDetailsBTC.constructFromObject(data, obj);
            PayoutMethodDetailsZARBank.constructFromObject(data, obj);
            PayoutMethodDetailsUSDBank.constructFromObject(data, obj);
            PayoutMethodDetailsUSDCash.constructFromObject(data, obj);
            PayoutMethodDetailsKESMobile.constructFromObject(data, obj);
            PayoutMethodDetailsKESBank.constructFromObject(data, obj);
            PayoutMethodDetailsXAFMobile.constructFromObject(data, obj);
            PayoutMethodDetailsXAFBank.constructFromObject(data, obj);
            PayoutMethodDetailsGNFMobile.constructFromObject(data, obj);
            PayoutMethodDetailsBRLBank.constructFromObject(data, obj);

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
/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsXOFMobile.prototype['country'] = undefined;
/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsXOFMobile.prototype['transfer_reason'] = undefined;
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
/**
 * @member {String} bank_code
 */
PayoutMethodDetailsXOFBank.prototype['bank_code'] = undefined;
/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsXOFBank.prototype['transfer_reason'] = undefined;
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
 * @member {String} phone_number
 */
PayoutMethodDetailsXOFCash.prototype['phone_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodCashProviderEnum} cash_provider
 */
PayoutMethodDetailsXOFCash.prototype['cash_provider'] = undefined;
/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsXOFCash.prototype['country'] = undefined;
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
// Implement PayoutMethodDetailsGHSCash interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsGHSCash.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsGHSCash.prototype['last_name'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsGHSCash.prototype['phone_number'] = undefined;
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
/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsZARBank.prototype['transfer_reason'] = undefined;
/**
 * @member {String} name
 */
PayoutMethodDetailsZARBank.prototype['name'] = undefined;
/**
 * @member {String} contact_first_name
 */
PayoutMethodDetailsZARBank.prototype['contact_first_name'] = undefined;
/**
 * @member {String} contact_last_name
 */
PayoutMethodDetailsZARBank.prototype['contact_last_name'] = undefined;
/**
 * @member {String} registration_number
 */
PayoutMethodDetailsZARBank.prototype['registration_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodNatureOfBusinessEnum} nature_of_business
 */
PayoutMethodDetailsZARBank.prototype['nature_of_business'] = undefined;
/**
 * @member {module:Model/PayoutMethodLegalEntityTypeEnum} legal_entity_type
 */
PayoutMethodDetailsZARBank.prototype['legal_entity_type'] = undefined;
// Implement PayoutMethodDetailsUSDBank interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsUSDBank.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsUSDBank.prototype['last_name'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsUSDBank.prototype['phone_number'] = undefined;
/**
 * @member {String} bank_code
 */
PayoutMethodDetailsUSDBank.prototype['bank_code'] = undefined;
/**
 * @member {String} bank_account
 */
PayoutMethodDetailsUSDBank.prototype['bank_account'] = undefined;
/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsUSDBank.prototype['country'] = undefined;
// Implement PayoutMethodDetailsUSDCash interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsUSDCash.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsUSDCash.prototype['last_name'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsUSDCash.prototype['phone_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsUSDCash.prototype['country'] = undefined;
// Implement PayoutMethodDetailsKESMobile interface:
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
// Implement PayoutMethodDetailsKESBank interface:
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
// Implement PayoutMethodDetailsXAFMobile interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsXAFMobile.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsXAFMobile.prototype['last_name'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsXAFMobile.prototype['phone_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayoutMethodDetailsXAFMobile.prototype['mobile_provider'] = undefined;
/**
 * @member {module:Model/PayoutMethodCountryEnum} country
 */
PayoutMethodDetailsXAFMobile.prototype['country'] = undefined;
// Implement PayoutMethodDetailsXAFBank interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsXAFBank.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsXAFBank.prototype['last_name'] = undefined;
/**
 * @member {String} iban
 */
PayoutMethodDetailsXAFBank.prototype['iban'] = undefined;
/**
 * @member {String} bank_account
 */
PayoutMethodDetailsXAFBank.prototype['bank_account'] = undefined;
/**
 * @member {String} bank_name
 */
PayoutMethodDetailsXAFBank.prototype['bank_name'] = undefined;
/**
 * @member {String} bank_country
 */
PayoutMethodDetailsXAFBank.prototype['bank_country'] = undefined;
/**
 * @member {String} bank_code
 */
PayoutMethodDetailsXAFBank.prototype['bank_code'] = undefined;
/**
 * @member {String} sort_code
 */
PayoutMethodDetailsXAFBank.prototype['sort_code'] = undefined;
/**
 * @member {module:Model/PayoutMethodTransferReasonEnum} transfer_reason
 */
PayoutMethodDetailsXAFBank.prototype['transfer_reason'] = undefined;
// Implement PayoutMethodDetailsGNFMobile interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsGNFMobile.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsGNFMobile.prototype['last_name'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsGNFMobile.prototype['phone_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayoutMethodDetailsGNFMobile.prototype['mobile_provider'] = undefined;
// Implement PayoutMethodDetailsBRLBank interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsBRLBank.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsBRLBank.prototype['last_name'] = undefined;
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




export default PayoutMethodDetails;

