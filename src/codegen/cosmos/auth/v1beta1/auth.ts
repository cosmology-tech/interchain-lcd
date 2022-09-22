import { Any, AnySDKType } from "../../../google/protobuf/any";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

export interface BaseAccount {
  address: string;
  pubKey: Any;
  accountNumber: Long;
  sequence: Long;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

export interface BaseAccountSDKType {
  address: string;
  pub_key: AnySDKType;
  account_number: Long;
  sequence: Long;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */

export interface ModuleAccount {
  baseAccount: BaseAccount;
  name: string;
  permissions: string[];
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */

export interface ModuleAccountSDKType {
  base_account: BaseAccountSDKType;
  name: string;
  permissions: string[];
}
/** Params defines the parameters for the auth module. */

export interface Params {
  maxMemoCharacters: Long;
  txSigLimit: Long;
  txSizeCostPerByte: Long;
  sigVerifyCostEd25519: Long;
  sigVerifyCostSecp256k1: Long;
}
/** Params defines the parameters for the auth module. */

export interface ParamsSDKType {
  max_memo_characters: Long;
  tx_sig_limit: Long;
  tx_size_cost_per_byte: Long;
  sig_verify_cost_ed25519: Long;
  sig_verify_cost_secp256k1: Long;
}