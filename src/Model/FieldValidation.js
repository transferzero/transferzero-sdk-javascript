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
import FieldSelectValidation from './FieldSelectValidation';

/**
 * The FieldValidation model module.
 * @module Model/FieldValidation
 * @version 1.27.6
 */
class FieldValidation {
    /**
     * Constructs a new <code>FieldValidation</code>.
     * @alias module:Model/FieldValidation
     */
    constructor() { 
        
        FieldValidation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldValidation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/FieldValidation} obj Optional instance to populate.
     * @return {module:Model/FieldValidation} The populated <code>FieldValidation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldValidation();

            if (data.hasOwnProperty('presence')) {
                obj['presence'] = ApiClient.convertToType(data['presence'], 'Boolean');
            }
            if (data.hasOwnProperty('inclusion')) {
                obj['inclusion'] = FieldSelectValidation.constructFromObject(data['inclusion']);
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], Object);
            }
        }
        return obj;
    }


}

/**
 * Describes whether the field is mandatory or not
 * @member {Boolean} presence
 */
FieldValidation.prototype['presence'] = undefined;

/**
 * @member {module:Model/FieldSelectValidation} inclusion
 */
FieldValidation.prototype['inclusion'] = undefined;

/**
 * Contains the regex to use to validate the input field
 * @member {Object} format
 */
FieldValidation.prototype['format'] = undefined;






export default FieldValidation;

