import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BIP44Params, BIP44ParamsSDKType } from "../../hd/v1/hd";
/** Record is used for representing a key in the keyring. */
export interface Record {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pubKey: Any;
    /** local stores the public information about a locally stored key */
    local?: Record_Local;
    /** ledger stores the public information about a Ledger key */
    ledger?: Record_Ledger;
    /** Multi does not store any information. */
    multi?: Record_Multi;
    /** Offline does not store any information. */
    offline?: Record_Offline;
}
/** Record is used for representing a key in the keyring. */
export interface RecordSDKType {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pub_key: AnySDKType;
    /** local stores the public information about a locally stored key */
    local?: Record_LocalSDKType;
    /** ledger stores the public information about a Ledger key */
    ledger?: Record_LedgerSDKType;
    /** Multi does not store any information. */
    multi?: Record_MultiSDKType;
    /** Offline does not store any information. */
    offline?: Record_OfflineSDKType;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
    privKey: Any;
    privKeyType: string;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_LocalSDKType {
    priv_key: AnySDKType;
    priv_key_type: string;
}
/** Ledger item */
export interface Record_Ledger {
    path: BIP44Params;
}
/** Ledger item */
export interface Record_LedgerSDKType {
    path: BIP44ParamsSDKType;
}
/** Multi item */
export interface Record_Multi {
}
/** Multi item */
export interface Record_MultiSDKType {
}
/** Offline item */
export interface Record_Offline {
}
/** Offline item */
export interface Record_OfflineSDKType {
}
