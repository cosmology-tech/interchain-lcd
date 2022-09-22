/// <reference types="long" />
export interface ProtocolVersion {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface ProtocolVersionSDKType {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface NodeInfo {
    protocol_version: ProtocolVersion;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOther;
}
export interface NodeInfoSDKType {
    protocol_version: ProtocolVersionSDKType;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
    tx_index: string;
    rpc_address: string;
}
export interface NodeInfoOtherSDKType {
    tx_index: string;
    rpc_address: string;
}
export interface PeerInfo {
    id: string;
    address_info: PeerAddressInfo[];
    last_connected: Date;
}
export interface PeerInfoSDKType {
    id: string;
    address_info: PeerAddressInfoSDKType[];
    last_connected: Date;
}
export interface PeerAddressInfo {
    address: string;
    last_dial_success: Date;
    last_dial_failure: Date;
    dial_failures: number;
}
export interface PeerAddressInfoSDKType {
    address: string;
    last_dial_success: Date;
    last_dial_failure: Date;
    dial_failures: number;
}
