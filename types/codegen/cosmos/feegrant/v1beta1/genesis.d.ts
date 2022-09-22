import { Grant, GrantSDKType } from "./feegrant";
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisState {
    allowances: Grant[];
}
/** GenesisState contains a set of fee allowances, persisted from the store */
export interface GenesisStateSDKType {
    allowances: GrantSDKType[];
}
