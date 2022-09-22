import { PublicKey, PublicKeySDKType } from "../crypto/keys";
export interface ValidatorSet {
  validators: Validator[];
  proposer: Validator;
  totalVotingPower: Long;
}
export interface ValidatorSetSDKType {
  validators: ValidatorSDKType[];
  proposer: ValidatorSDKType;
  total_voting_power: Long;
}
export interface Validator {
  address: Uint8Array;
  pubKey: PublicKey;
  votingPower: Long;
  proposerPriority: Long;
}
export interface ValidatorSDKType {
  address: Uint8Array;
  pub_key: PublicKeySDKType;
  voting_power: Long;
  proposer_priority: Long;
}
export interface SimpleValidator {
  pubKey: PublicKey;
  votingPower: Long;
}
export interface SimpleValidatorSDKType {
  pub_key: PublicKeySDKType;
  voting_power: Long;
}