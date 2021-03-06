/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Response for updating a release
 *
 */
class ReleaseUpdateResponse {
  /**
   * Create a ReleaseUpdateResponse.
   * @member {boolean} [mandatoryUpdate]
   * @member {string} [releaseNotes]
   * @member {array} [destinations]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleaseUpdateResponse
   *
   * @returns {object} metadata of ReleaseUpdateResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReleaseUpdateResponse',
      type: {
        name: 'Composite',
        className: 'ReleaseUpdateResponse',
        modelProperties: {
          mandatoryUpdate: {
            required: false,
            serializedName: 'mandatory_update',
            type: {
              name: 'Boolean'
            }
          },
          releaseNotes: {
            required: false,
            serializedName: 'release_notes',
            type: {
              name: 'String'
            }
          },
          destinations: {
            required: false,
            serializedName: 'destinations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ReleaseUpdateResponseDestinationsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ReleaseUpdateResponseDestinationsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ReleaseUpdateResponse;
