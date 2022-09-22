import { Plan, PlanSDKType } from "./upgrade";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgSoftwareUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
  /** plan is the upgrade plan. */

  plan: Plan;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgSoftwareUpgradeSDKType {
  /** authority is the address of the governance account. */
  authority: string;
  /** plan is the upgrade plan. */

  plan: PlanSDKType;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgSoftwareUpgradeResponse {}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgSoftwareUpgradeResponseSDKType {}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUpgrade {
  /** authority is the address of the governance account. */
  authority: string;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUpgradeSDKType {
  /** authority is the address of the governance account. */
  authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUpgradeResponse {}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * 
 * Since: cosmos-sdk 0.46
 */

export interface MsgCancelUpgradeResponseSDKType {}