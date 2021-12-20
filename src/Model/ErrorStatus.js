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

/**
 * The ErrorStatus model module.
 * @module Model/ErrorStatus
 * @version 1.18.1
 */
class ErrorStatus {
    /**
     * Constructs a new <code>ErrorStatus</code>.
     * @alias module:Model/ErrorStatus
     */
    constructor() { 
        
        ErrorStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/ErrorStatus} obj Optional instance to populate.
     * @return {module:Model/ErrorStatus} The populated <code>ErrorStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorStatus();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} status
 */
ErrorStatus.prototype['status'] = undefined;

/**
 * @member {String} error
 */
ErrorStatus.prototype['error'] = undefined;






export default ErrorStatus;

