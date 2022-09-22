import { Minter, MinterSDKType, Params, ParamsSDKType } from "./mint";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current inflation information. */
    minter: Minter;
    /** params defines all the paramaters of the module. */
    params: Params;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
    /** minter is a space for holding current inflation information. */
    minter: MinterSDKType;
    /** params defines all the paramaters of the module. */
    params: ParamsSDKType;
}
