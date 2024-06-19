/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldValidation from './FieldValidation';

/**
 * The FieldDescription model module.
 * @module Model/FieldDescription
 * @version 1.36.0
 */
class FieldDescription {
    /**
     * Constructs a new <code>FieldDescription</code>.
     * @alias module:Model/FieldDescription
     */
    constructor() { 
        
        FieldDescription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/FieldDescription} obj Optional instance to populate.
     * @return {module:Model/FieldDescription} The populated <code>FieldDescription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldDescription();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('validations')) {
                obj['validations'] = FieldValidation.constructFromObject(data['validations']);
            }
        }
        return obj;
    }


}

/**
 * the type of the field.
 * @member {module:Model/FieldDescription.TypeEnum} type
 */
FieldDescription.prototype['type'] = undefined;

/**
 * @member {module:Model/FieldValidation} validations
 */
FieldDescription.prototype['validations'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
FieldDescription['TypeEnum'] = {

    /**
     * value: "input"
     * @const
     */
    "input": "input",

    /**
     * value: "select"
     * @const
     */
    "select": "select"
};



export default FieldDescription;

