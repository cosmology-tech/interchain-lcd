/// <reference types="long" />
import { ProposalExecutorResult, ProposalExecutorResultSDKType } from "./types";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
    /** group_id is the unique ID of the group. */
    group_id: Long;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupSDKType {
    /** group_id is the unique ID of the group. */
    group_id: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
    /** group_id is the unique ID of the group. */
    group_id: Long;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupSDKType {
    /** group_id is the unique ID of the group. */
    group_id: Long;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicySDKType {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicySDKType {
    /** address is the account address of the group policy. */
    address: string;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: Long;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalSDKType {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: Long;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: Long;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalSDKType {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: Long;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteSDKType {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: Long;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: Long;
    /** result is the proposal execution result. */
    result: ProposalExecutorResult;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecSDKType {
    /** proposal_id is the unique ID of the proposal. */
    proposal_id: Long;
    /** result is the proposal execution result. */
    result: ProposalExecutorResultSDKType;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /** address is the account address of the group member. */
    address: string;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupSDKType {
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /** address is the account address of the group member. */
    address: string;
}
