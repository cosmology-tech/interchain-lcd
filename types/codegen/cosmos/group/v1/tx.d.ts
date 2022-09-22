/// <reference types="long" />
import { Member, MemberSDKType, VoteOption, VoteOptionSDKType } from "./types";
import { Any, AnySDKType } from "../../../google/protobuf/any";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export declare enum Exec {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    EXEC_UNSPECIFIED = 0,
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    EXEC_TRY = 1,
    UNRECOGNIZED = -1
}
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export declare enum ExecSDKType {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    EXEC_UNSPECIFIED = 0,
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    EXEC_TRY = 1,
    UNRECOGNIZED = -1
}
export declare function execFromJSON(object: any): Exec;
export declare function execToJSON(object: Exec): string;
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupSDKType {
    /** admin is the account address of the group admin. */
    admin: string;
    /** members defines the group members. */
    members: MemberSDKType[];
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
    /** group_id is the unique ID of the newly created group. */
    group_id: Long;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseSDKType {
    /** group_id is the unique ID of the newly created group. */
    group_id: Long;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    member_updates: Member[];
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersSDKType {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /**
     * member_updates is the list of members to update,
     * set weight to 0 to remove a member.
     */
    member_updates: MemberSDKType[];
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseSDKType {
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /** new_admin is the group new admin account address. */
    new_admin: string;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminSDKType {
    /** admin is the current account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /** new_admin is the group new admin account address. */
    new_admin: string;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseSDKType {
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /** metadata is the updated group's metadata. */
    metadata: string;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataSDKType {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /** metadata is the updated group's metadata. */
    metadata: string;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseSDKType {
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /** metadata is any arbitrary metadata attached to the group policy. */
    metadata: string;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy: Any;
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicySDKType {
    /** admin is the account address of the group admin. */
    admin: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
    /** metadata is any arbitrary metadata attached to the group policy. */
    metadata: string;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy: AnySDKType;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
    /** address is the account address of the newly created group policy. */
    address: string;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponseSDKType {
    /** address is the account address of the newly created group policy. */
    address: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of the group policy. */
    address: string;
    /** new_admin is the new group policy admin. */
    new_admin: string;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdminSDKType {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of the group policy. */
    address: string;
    /** new_admin is the new group policy admin. */
    new_admin: string;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
    /** admin is the account address of the group and group policy admin. */
    admin: string;
    /** members defines the group members. */
    members: Member[];
    /** group_metadata is any arbitrary metadata attached to the group. */
    group_metadata: string;
    /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
    group_policy_metadata: string;
    /** group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group and group policy admin. */
    group_policy_as_admin: boolean;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy: Any;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicySDKType {
    /** admin is the account address of the group and group policy admin. */
    admin: string;
    /** members defines the group members. */
    members: MemberSDKType[];
    /** group_metadata is any arbitrary metadata attached to the group. */
    group_metadata: string;
    /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
    group_policy_metadata: string;
    /** group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group and group policy admin. */
    group_policy_as_admin: boolean;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy: AnySDKType;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
    /** group_id is the unique ID of the newly created group with policy. */
    group_id: Long;
    /** group_policy_address is the account address of the newly created group policy. */
    group_policy_address: string;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponseSDKType {
    /** group_id is the unique ID of the newly created group with policy. */
    group_id: Long;
    /** group_policy_address is the account address of the newly created group policy. */
    group_policy_address: string;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseSDKType {
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** decision_policy is the updated group policy's decision policy. */
    decision_policy: Any;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicySDKType {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** decision_policy is the updated group policy's decision policy. */
    decision_policy: AnySDKType;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseSDKType {
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** metadata is the updated group policy metadata. */
    metadata: string;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadataSDKType {
    /** admin is the account address of the group admin. */
    admin: string;
    /** address is the account address of group policy. */
    address: string;
    /** metadata is the updated group policy metadata. */
    metadata: string;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseSDKType {
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
    /** address is the account address of group policy. */
    address: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: Any[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: Exec;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposalSDKType {
    /** address is the account address of group policy. */
    address: string;
    /**
     * proposers are the account addresses of the proposers.
     * Proposers signatures will be counted as yes votes.
     */
    proposers: string[];
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
    messages: AnySDKType[];
    /**
     * exec defines the mode of execution of the proposal,
     * whether it should be executed immediately on creation or not.
     * If so, proposers signatures are considered as Yes votes.
     */
    exec: ExecSDKType;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    /** proposal is the unique ID of the proposal. */
    proposal_id: Long;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
    /** proposal is the unique ID of the proposal. */
    proposal_id: Long;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
    /** proposal is the unique ID of the proposal. */
    proposal_id: Long;
    /** address is the admin of the group policy or one of the proposer of the proposal. */
    address: string;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposalSDKType {
    /** proposal is the unique ID of the proposal. */
    proposal_id: Long;
    /** address is the admin of the group policy or one of the proposer of the proposal. */
    address: string;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseSDKType {
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
    /** proposal is the unique ID of the proposal. */
    proposal_id: Long;
    /** voter is the voter account address. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: Exec;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteSDKType {
    /** proposal is the unique ID of the proposal. */
    proposal_id: Long;
    /** voter is the voter account address. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOptionSDKType;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /**
     * exec defines whether the proposal should be executed
     * immediately after voting or not.
     */
    exec: ExecSDKType;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
    /** proposal is the unique ID of the proposal. */
    proposal_id: Long;
    /** signer is the account address used to execute the proposal. */
    signer: string;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecSDKType {
    /** proposal is the unique ID of the proposal. */
    proposal_id: Long;
    /** signer is the account address used to execute the proposal. */
    signer: string;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseSDKType {
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
    /** address is the account address of the group member. */
    address: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroupSDKType {
    /** address is the account address of the group member. */
    address: string;
    /** group_id is the unique ID of the group. */
    group_id: Long;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseSDKType {
}
