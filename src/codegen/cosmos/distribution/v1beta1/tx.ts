import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */

export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */

export interface MsgSetWithdrawAddressSDKType {
  delegator_address: string;
  withdraw_address: string;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */

export interface MsgSetWithdrawAddressResponse {}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */

export interface MsgSetWithdrawAddressResponseSDKType {}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */

export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */

export interface MsgWithdrawDelegatorRewardSDKType {
  delegator_address: string;
  validator_address: string;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */

export interface MsgWithdrawDelegatorRewardResponse {
  amount: Coin[];
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */

export interface MsgWithdrawDelegatorRewardResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */

export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */

export interface MsgWithdrawValidatorCommissionSDKType {
  validator_address: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */

export interface MsgWithdrawValidatorCommissionResponse {
  amount: Coin[];
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */

export interface MsgWithdrawValidatorCommissionResponseSDKType {
  amount: CoinSDKType[];
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */

export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */

export interface MsgFundCommunityPoolSDKType {
  amount: CoinSDKType[];
  depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */

export interface MsgFundCommunityPoolResponse {}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */

export interface MsgFundCommunityPoolResponseSDKType {}