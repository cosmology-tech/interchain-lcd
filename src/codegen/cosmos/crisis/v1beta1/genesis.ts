import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
/** GenesisState defines the crisis module's genesis state. */

export interface GenesisState {
  /**
   * constant_fee is the fee used to verify the invariant in the crisis
   * module.
   */
  constantFee: Coin;
}
/** GenesisState defines the crisis module's genesis state. */

export interface GenesisStateSDKType {
  /**
   * constant_fee is the fee used to verify the invariant in the crisis
   * module.
   */
  constant_fee: CoinSDKType;
}