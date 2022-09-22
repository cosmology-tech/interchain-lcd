/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44Params {
  /** purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation */
  purpose: number;
  /** coin_type is a constant that improves privacy */

  coin_type: number;
  /** account splits the key space into independent user identities */

  account: number;
  /**
   * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
   * chain.
   */

  change: boolean;
  /** address_index is used as child index in BIP32 derivation */

  address_index: number;
}
/** BIP44Params is used as path field in ledger item in Record. */

export interface BIP44ParamsSDKType {
  /** purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation */
  purpose: number;
  /** coin_type is a constant that improves privacy */

  coin_type: number;
  /** account splits the key space into independent user identities */

  account: number;
  /**
   * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
   * chain.
   */

  change: boolean;
  /** address_index is used as child index in BIP32 derivation */

  address_index: number;
}