/**
 * BitPesa Private API
 * API specification used for internal BitPesa endpoints
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
import EntityRating from './EntityRating';
import EntityState from './EntityState';

/**
 * The Entity model module.
 * @module Model/Entity
 * @version 1.24.0
 */
class Entity {
    /**
     * Constructs a new <code>Entity</code>.
     * This contains the details of the entity. The first time a specific entity is used the full details should be provided.  Entity Example: &#x60;&#x60;&#x60;json {   \&quot;id\&quot;: 39,   \&quot;total_score\&quot;: 35,   \&quot;rating\&quot;: \&quot;Extremely High\&quot;   \&quot;state\&quot;: \&quot;incomplete\&quot;,   \&quot;entity_id\&quot;: \&quot;86912555-272a-48f7-bdbb-eab653150e01\&quot;,   \&quot;entity_type\&quot;: \&quot;Sender\&quot;,   \&quot;remarks\&quot;: \&quot;ready to be reviewed\&quot;,   \&quot;created_at\&quot;: \&quot;2020-05-05T10:55:44.051Z\&quot;,   \&quot;updated_at\&quot;: \&quot;2020-05-05T10:55:44.051Z\&quot; } &#x60;&#x60;&#x60;
     * @alias module:Model/Entity
     */
    constructor() { 
        
        Entity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Entity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/Entity} obj Optional instance to populate.
     * @return {module:Model/Entity} The populated <code>Entity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Entity();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('total_score')) {
                obj['total_score'] = ApiClient.convertToType(data['total_score'], 'Number');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = EntityRating.constructFromObject(data['rating']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = EntityState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('entity_id')) {
                obj['entity_id'] = ApiClient.convertToType(data['entity_id'], 'String');
            }
            if (data.hasOwnProperty('entity_type')) {
                obj['entity_type'] = ApiClient.convertToType(data['entity_type'], 'String');
            }
            if (data.hasOwnProperty('remarks')) {
                obj['remarks'] = ApiClient.convertToType(data['remarks'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Entity.prototype['id'] = undefined;

/**
 * Total score of risk assessment
 * @member {Number} total_score
 */
Entity.prototype['total_score'] = undefined;

/**
 * @member {module:Model/EntityRating} rating
 */
Entity.prototype['rating'] = undefined;

/**
 * @member {module:Model/EntityState} state
 */
Entity.prototype['state'] = undefined;

/**
 * Id of linked entity
 * @member {String} entity_id
 */
Entity.prototype['entity_id'] = undefined;

/**
 * Type of entity to create eg. Sender, Company 
 * @member {String} entity_type
 */
Entity.prototype['entity_type'] = undefined;

/**
 * Notes about entity
 * @member {String} remarks
 */
Entity.prototype['remarks'] = undefined;






export default Entity;

