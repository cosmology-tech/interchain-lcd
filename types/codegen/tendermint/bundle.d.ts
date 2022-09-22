import * as _44 from "./abci/types";
import * as _52 from "./types/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _44.CheckTxType;
        checkTxTypeToJSON(object: _44.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _44.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _44.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _44.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _44.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _44.EvidenceType;
        evidenceTypeToJSON(object: _44.EvidenceType): string;
        CheckTxType: typeof _44.CheckTxType;
        CheckTxTypeSDKType: typeof _44.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _44.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _44.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _44.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _44.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _44.EvidenceType;
        EvidenceTypeSDKType: typeof _44.EvidenceTypeSDKType;
    };
    const crypto: {};
    namespace libs {
        const bits: {};
    }
    const p2p: {};
    const types: {
        blockIDFlagFromJSON(object: any): _52.BlockIDFlag;
        blockIDFlagToJSON(object: _52.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _52.SignedMsgType;
        signedMsgTypeToJSON(object: _52.SignedMsgType): string;
        BlockIDFlag: typeof _52.BlockIDFlag;
        BlockIDFlagSDKType: typeof _52.BlockIDFlagSDKType;
        SignedMsgType: typeof _52.SignedMsgType;
        SignedMsgTypeSDKType: typeof _52.SignedMsgTypeSDKType;
    };
    const version: {};
}
