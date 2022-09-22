import { Any, AnySDKType } from "../../../google/protobuf/any";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
    submitter: string;
    evidence: Any;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceSDKType {
    submitter: string;
    evidence: AnySDKType;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseSDKType {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
