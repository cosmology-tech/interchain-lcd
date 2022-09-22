import * as _104 from "./abci/types";
import * as _112 from "./types/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _104.CheckTxType;
        checkTxTypeToJSON(object: _104.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _104.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _104.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _104.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _104.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _104.EvidenceType;
        evidenceTypeToJSON(object: _104.EvidenceType): string;
        CheckTxType: typeof _104.CheckTxType;
        CheckTxTypeSDKType: typeof _104.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _104.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _104.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _104.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _104.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _104.EvidenceType;
        EvidenceTypeSDKType: typeof _104.EvidenceTypeSDKType;
    };
    const crypto: {};
    namespace libs {
        const bits: {};
    }
    const p2p: {};
    const types: {
        blockIDFlagFromJSON(object: any): _112.BlockIDFlag;
        blockIDFlagToJSON(object: _112.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _112.SignedMsgType;
        signedMsgTypeToJSON(object: _112.SignedMsgType): string;
        BlockIDFlag: typeof _112.BlockIDFlag;
        BlockIDFlagSDKType: typeof _112.BlockIDFlagSDKType;
        SignedMsgType: typeof _112.SignedMsgType;
        SignedMsgTypeSDKType: typeof _112.SignedMsgTypeSDKType;
    };
    const version: {};
}
