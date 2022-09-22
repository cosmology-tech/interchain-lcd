/// <reference types="long" />
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
export interface ValidatorSet {
    validators: Validator[];
    proposer: Validator;
    total_voting_power: Long;
}
export interface ValidatorSetSDKType {
    validators: ValidatorSDKType[];
    proposer: ValidatorSDKType;
    total_voting_power: Long;
}
export interface Validator {
    address: Uint8Array;
    pub_key: PublicKey;
    voting_power: Long;
    proposer_priority: Long;
}
export interface ValidatorSDKType {
    address: Uint8Array;
    pub_key: PublicKeySDKType;
    voting_power: Long;
    proposer_priority: Long;
}
export interface SimpleValidator {
    pub_key: PublicKey;
    voting_power: Long;
}
export interface SimpleValidatorSDKType {
    pub_key: PublicKeySDKType;
    voting_power: Long;
}
