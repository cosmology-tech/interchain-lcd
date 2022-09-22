/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
    /** Msg type URL for which an autorization is granted */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventGrant is emitted on Msg/Grant */
export interface EventGrantSDKType {
    /** Msg type URL for which an autorization is granted */
    msg_type_url: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
    /** Msg type URL for which an autorization is revoked */
    msgTypeUrl: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevokeSDKType {
    /** Msg type URL for which an autorization is revoked */
    msg_type_url: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
