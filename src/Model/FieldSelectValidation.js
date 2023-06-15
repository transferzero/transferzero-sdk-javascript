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
 * The FieldSelectValidation model module.
 * @module Model/FieldSelectValidation
 * @version 1.27.8
 */
class FieldSelectValidation {
    /**
     * Constructs a new <code>FieldSelectValidation</code>.
     * @alias module:Model/FieldSelectValidation
     */
    constructor() { 
        
        FieldSelectValidation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldSelectValidation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/FieldSelectValidation} obj Optional instance to populate.
     * @return {module:Model/FieldSelectValidation} The populated <code>FieldSelectValidation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldSelectValidation();

            if (data.hasOwnProperty('in')) {
                obj['in'] = ApiClient.convertToType(data['in'], Object);
            }
            if (data.hasOwnProperty('allow_blank')) {
                obj['allow_blank'] = ApiClient.convertToType(data['allow_blank'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Describes the valid options for this selectbox
 * @member {Object} in
 */
FieldSelectValidation.prototype['in'] = undefined;

/**
 * Describes whether the field is optional or not
 * @member {Boolean} allow_blank
 */
FieldSelectValidation.prototype['allow_blank'] = undefined;






export default FieldSelectValidation;

