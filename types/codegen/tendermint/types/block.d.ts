import { Header, HeaderSDKType, Data, DataSDKType, Commit, CommitSDKType } from "./types";
import { EvidenceList, EvidenceListSDKType } from "./evidence";
export interface Block {
    header: Header;
    data: Data;
    evidence: EvidenceList;
    lastCommit: Commit;
}
export interface BlockSDKType {
    header: HeaderSDKType;
    data: DataSDKType;
    evidence: EvidenceListSDKType;
    last_commit: CommitSDKType;
}
