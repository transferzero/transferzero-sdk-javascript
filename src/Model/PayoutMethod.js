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
import FieldDescription from './FieldDescription';
import PayoutMethodDetails from './PayoutMethodDetails';
import ValidationErrorDescription from './ValidationErrorDescription';

/**
 * The PayoutMethod model module.
 * @module Model/PayoutMethod
 * @version 1.7.0
 */
class PayoutMethod {
    /**
     * Constructs a new <code>PayoutMethod</code>.
     * This describes the specific details on how the payment has to be routed to the recipient.
     * @alias module:Model/PayoutMethod
     */
    constructor() { 
        
        PayoutMethod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayoutMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethod} obj Optional instance to populate.
     * @return {module:Model/PayoutMethod} The populated <code>PayoutMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethod();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = PayoutMethodDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], {'String': [ValidationErrorDescription]});
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': FieldDescription});
            }
        }
        return obj;
    }


}

/**
 * Contains the currency to send the money to, and the type of the money movement  Commonly used payout types are:  - `NGN::Bank` - for Nigerian bank account payments. - `NGN::Mobile` - for Nigerian mobile money payments. - `GHS::Bank` - for Ghanaian bank account payments. - `GHS::Mobile` - for Ghanaian mobile money payments. - `UGX::Mobile` - for Ugandan mobile money payments. - `TZS::Mobile` - for Tanzanian mobile money payments. - `XOF::Mobile` - for Senegalese mobile money payments. - `XOF::Bank` - for Senegalese bank account payments. - `XOF::Cash` - for Senegalese cash remittance payments. - `MAD::Cash` - for Moroccan cash remittance payments. - `EUR::Bank` - for IBAN bank transfers in EUR. - `GBP::Bank` - for IBAN bank and FP accounts transfers in GBP. - `ZAR::Bank` - for South Africa bank account payments.  You can also send funds to the internal balance using `CCY::Balance`, where `CCY` is the appropriate currency. See [Collection from senders](https://docs.transferzero.com/docs/additional-features/#collections-from-senders) for more info on how to collect money into internal balance 
 * @member {String} type
 */
PayoutMethod.prototype['type'] = undefined;

/**
 * @member {module:Model/PayoutMethodDetails} details
 */
PayoutMethod.prototype['details'] = undefined;

/**
 * Metadata of payout method. You can store any kind of information in this field.
 * @member {Object} metadata
 */
PayoutMethod.prototype['metadata'] = undefined;

/**
 * @member {String} id
 */
PayoutMethod.prototype['id'] = undefined;

/**
 * The fields that have some problems and don't pass validation
 * @member {Object.<String, Array.<module:Model/ValidationErrorDescription>>} errors
 */
PayoutMethod.prototype['errors'] = undefined;

/**
 * The fields needed for payments with this payment method with details on validation requirements
 * @member {Object.<String, module:Model/FieldDescription>} fields
 */
PayoutMethod.prototype['fields'] = undefined;






export default PayoutMethod;

