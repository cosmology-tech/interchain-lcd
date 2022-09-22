/// <reference types="long" />
import { Proof, ProofSDKType } from "../crypto/proof";
import { Consensus, ConsensusSDKType } from "../version/types";
import { ValidatorSet, ValidatorSetSDKType } from "./validator";
/** BlockIdFlag indicates which BlcokID the signature is for */
export declare enum BlockIDFlag {
    BLOCK_ID_FLAG_UNKNOWN = 0,
    BLOCK_ID_FLAG_ABSENT = 1,
    BLOCK_ID_FLAG_COMMIT = 2,
    BLOCK_ID_FLAG_NIL = 3,
    UNRECOGNIZED = -1
}
/** BlockIdFlag indicates which BlcokID the signature is for */
export declare enum BlockIDFlagSDKType {
    BLOCK_ID_FLAG_UNKNOWN = 0,
    BLOCK_ID_FLAG_ABSENT = 1,
    BLOCK_ID_FLAG_COMMIT = 2,
    BLOCK_ID_FLAG_NIL = 3,
    UNRECOGNIZED = -1
}
export declare function blockIDFlagFromJSON(object: any): BlockIDFlag;
export declare function blockIDFlagToJSON(object: BlockIDFlag): string;
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgTypeSDKType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
/** PartsetHeader */
export interface PartSetHeaderSDKType {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof: Proof;
}
export interface PartSDKType {
    index: number;
    bytes: Uint8Array;
    proof: ProofSDKType;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    part_set_header: PartSetHeader;
}
/** BlockID */
export interface BlockIDSDKType {
    hash: Uint8Array;
    part_set_header: PartSetHeaderSDKType;
}
/** Header defines the structure of a Tendermint block header. */
export interface Header {
    /** basic block info */
    version: Consensus;
    chain_id: string;
    height: Long;
    time: Date;
    /** prev block info */
    last_block_id: BlockID;
    /** hashes of block data */
    last_commit_hash: Uint8Array;
    data_hash: Uint8Array;
    /** hashes from the app output from the prev block */
    validators_hash: Uint8Array;
    /** validators for the next block */
    next_validators_hash: Uint8Array;
    /** consensus params for current block */
    consensus_hash: Uint8Array;
    /** state after txs from the previous block */
    app_hash: Uint8Array;
    last_results_hash: Uint8Array;
    /** consensus info */
    evidence_hash: Uint8Array;
    /** original proposer of the block */
    proposer_address: Uint8Array;
}
/** Header defines the structure of a Tendermint block header. */
export interface HeaderSDKType {
    /** basic block info */
    version: ConsensusSDKType;
    chain_id: string;
    height: Long;
    time: Date;
    /** prev block info */
    last_block_id: BlockIDSDKType;
    /** hashes of block data */
    last_commit_hash: Uint8Array;
    data_hash: Uint8Array;
    /** hashes from the app output from the prev block */
    validators_hash: Uint8Array;
    /** validators for the next block */
    next_validators_hash: Uint8Array;
    /** consensus params for current block */
    consensus_hash: Uint8Array;
    /** state after txs from the previous block */
    app_hash: Uint8Array;
    last_results_hash: Uint8Array;
    /** consensus info */
    evidence_hash: Uint8Array;
    /** original proposer of the block */
    proposer_address: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
/** Data contains the set of transactions included in the block */
export interface DataSDKType {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: Long;
    round: number;
    /** zero if vote is nil. */
    block_id: BlockID;
    timestamp: Date;
    validator_address: Uint8Array;
    validator_index: number;
    signature: Uint8Array;
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface VoteSDKType {
    type: SignedMsgTypeSDKType;
    height: Long;
    round: number;
    /** zero if vote is nil. */
    block_id: BlockIDSDKType;
    timestamp: Date;
    validator_address: Uint8Array;
    validator_index: number;
    signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: Long;
    round: number;
    block_id: BlockID;
    signatures: CommitSig[];
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitSDKType {
    height: Long;
    round: number;
    block_id: BlockIDSDKType;
    signatures: CommitSigSDKType[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    block_id_flag: BlockIDFlag;
    validator_address: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigSDKType {
    block_id_flag: BlockIDFlagSDKType;
    validator_address: Uint8Array;
    timestamp: Date;
    signature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: Long;
    round: number;
    pol_round: number;
    block_id: BlockID;
    timestamp: Date;
    signature: Uint8Array;
}
export interface ProposalSDKType {
    type: SignedMsgTypeSDKType;
    height: Long;
    round: number;
    pol_round: number;
    block_id: BlockIDSDKType;
    timestamp: Date;
    signature: Uint8Array;
}
export interface SignedHeader {
    header: Header;
    commit: Commit;
}
export interface SignedHeaderSDKType {
    header: HeaderSDKType;
    commit: CommitSDKType;
}
export interface LightBlock {
    signed_header: SignedHeader;
    validator_set: ValidatorSet;
}
export interface LightBlockSDKType {
    signed_header: SignedHeaderSDKType;
    validator_set: ValidatorSetSDKType;
}
export interface BlockMeta {
    block_id: BlockID;
    block_size: Long;
    header: Header;
    num_txs: Long;
}
export interface BlockMetaSDKType {
    block_id: BlockIDSDKType;
    block_size: Long;
    header: HeaderSDKType;
    num_txs: Long;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    root_hash: Uint8Array;
    data: Uint8Array;
    proof: Proof;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofSDKType {
    root_hash: Uint8Array;
    data: Uint8Array;
    proof: ProofSDKType;
}