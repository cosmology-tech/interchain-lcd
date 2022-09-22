import { Params, ParamsSDKType } from "./auth";
import { Any, AnySDKType } from "../../../google/protobuf/any";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
}
/** GenesisState defines the auth module's genesis state. */
export interface GenesisStateSDKType {
    /** params defines all the paramaters of the module. */
    params: ParamsSDKType;
    /** accounts are the accounts present at genesis. */
    accounts: AnySDKType[];
}
