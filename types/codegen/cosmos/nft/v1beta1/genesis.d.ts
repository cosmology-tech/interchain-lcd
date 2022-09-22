import { Class, ClassSDKType, NFT, NFTSDKType } from "./nft";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
    /** class defines the class of the nft type. */
    classes: Class[];
    entries: Entry[];
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateSDKType {
    /** class defines the class of the nft type. */
    classes: ClassSDKType[];
    entries: EntrySDKType[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
    /** owner is the owner address of the following nft */
    owner: string;
    /** nfts is a group of nfts of the same owner */
    nfts: NFT[];
}
/** Entry Defines all nft owned by a person */
export interface EntrySDKType {
    /** owner is the owner address of the following nft */
    owner: string;
    /** nfts is a group of nfts of the same owner */
    nfts: NFTSDKType[];
}
