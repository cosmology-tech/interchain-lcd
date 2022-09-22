/// <reference types="long" />
import { Vote, VoteSDKType, LightBlock, LightBlockSDKType } from "./types";
import { Validator, ValidatorSDKType } from "./validator";
export interface Evidence {
    duplicate_vote_evidence?: DuplicateVoteEvidence;
    light_client_attack_evidence?: LightClientAttackEvidence;
}
export interface EvidenceSDKType {
    duplicate_vote_evidence?: DuplicateVoteEvidenceSDKType;
    light_client_attack_evidence?: LightClientAttackEvidenceSDKType;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    vote_a: Vote;
    vote_b: Vote;
    total_voting_power: Long;
    validator_power: Long;
    timestamp: Date;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceSDKType {
    vote_a: VoteSDKType;
    vote_b: VoteSDKType;
    total_voting_power: Long;
    validator_power: Long;
    timestamp: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflicting_block: LightBlock;
    common_height: Long;
    byzantine_validators: Validator[];
    total_voting_power: Long;
    timestamp: Date;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceSDKType {
    conflicting_block: LightBlockSDKType;
    common_height: Long;
    byzantine_validators: ValidatorSDKType[];
    total_voting_power: Long;
    timestamp: Date;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export interface EvidenceListSDKType {
    evidence: EvidenceSDKType[];
}
