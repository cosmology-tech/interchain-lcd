/// <reference types="long" />
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    from_address: string;
    to_address: string;
    amount: Coin[];
    end_time: Long;
    delayed: boolean;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
    end_time: Long;
    delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */
export interface MsgCreatePermanentLockedAccount {
    from_address: string;
    to_address: string;
    amount: Coin[];
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */
export interface MsgCreatePermanentLockedAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponse {
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */
export interface MsgCreatePermanentLockedAccountResponseSDKType {
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccount {
    from_address: string;
    to_address: string;
    start_time: Long;
    vesting_periods: Period[];
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time: Long;
    vesting_periods: PeriodSDKType[];
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponse {
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponseSDKType {
}
