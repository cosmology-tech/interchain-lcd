/// <reference types="long" />
import { CapabilityOwners, CapabilityOwnersSDKType } from "./capability";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
    /** index is the index of the capability owner. */
    index: Long;
    /** index_owners are the owners at the given index. */
    indexOwners: CapabilityOwners;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersSDKType {
    /** index is the index of the capability owner. */
    index: Long;
    /** index_owners are the owners at the given index. */
    index_owners: CapabilityOwnersSDKType;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
    /** index is the capability global index. */
    index: Long;
    /**
     * owners represents a map from index to owners of the capability index
     * index key is string to allow amino marshalling.
     */
    owners: GenesisOwners[];
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
    /** index is the capability global index. */
    index: Long;
    /**
     * owners represents a map from index to owners of the capability index
     * index key is string to allow amino marshalling.
     */
    owners: GenesisOwnersSDKType[];
}
