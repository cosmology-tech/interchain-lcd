/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
  index: Long;
}
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */

export interface CapabilitySDKType {
  index: Long;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */

export interface Owner {
  module: string;
  name: string;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */

export interface OwnerSDKType {
  module: string;
  name: string;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */

export interface CapabilityOwners {
  owners: Owner[];
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */

export interface CapabilityOwnersSDKType {
  owners: OwnerSDKType[];
}