/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
    /** the store key for the KVStore this pair originates from */
    store_key: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
    /** the store key for the KVStore this pair originates from */
    store_key: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
