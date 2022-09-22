import * as _20 from "./gov/v1/gov";
import * as _24 from "./gov/v1beta1/gov";
import * as _27 from "./staking/v1beta1/authz";
import * as _30 from "./staking/v1beta1/staking";
import * as _32 from "./tx/signing/v1beta1/signing";
import * as _33 from "./tx/v1beta1/service";
import * as _55 from "./bank/v1beta1/query.lcd";
import * as _56 from "./distribution/v1beta1/query.lcd";
import * as _57 from "./gov/v1/query.lcd";
import * as _58 from "./gov/v1beta1/query.lcd";
import * as _59 from "./staking/v1beta1/query.lcd";
import * as _60 from "./tx/v1beta1/service.lcd";
export declare namespace cosmos {
    namespace bank {
        const v1beta1: {
            LCDQueryClient: typeof _55.LCDQueryClient;
        };
    }
    namespace base {
        namespace query {
            const v1beta1: {};
        }
        namespace reflection {
            const v2alpha1: {};
        }
        const v1beta1: {};
    }
    namespace crypto {
        const ed25519: {};
        namespace hd {
            const v1: {};
        }
        namespace keyring {
            const v1: {};
        }
        const multisig: {};
        const secp256k1: {};
        const secp256r1: {};
    }
    namespace distribution {
        const v1beta1: {
            LCDQueryClient: typeof _56.LCDQueryClient;
        };
    }
    namespace gov {
        const v1: {
            LCDQueryClient: typeof _57.LCDQueryClient;
            voteOptionFromJSON(object: any): _20.VoteOption;
            voteOptionToJSON(object: _20.VoteOption): string;
            proposalStatusFromJSON(object: any): _20.ProposalStatus;
            proposalStatusToJSON(object: _20.ProposalStatus): string;
            VoteOption: typeof _20.VoteOption;
            VoteOptionSDKType: typeof _20.VoteOptionSDKType;
            ProposalStatus: typeof _20.ProposalStatus;
            ProposalStatusSDKType: typeof _20.ProposalStatusSDKType;
        };
        const v1beta1: {
            LCDQueryClient: typeof _58.LCDQueryClient;
            voteOptionFromJSON(object: any): _24.VoteOption;
            voteOptionToJSON(object: _24.VoteOption): string;
            proposalStatusFromJSON(object: any): _24.ProposalStatus;
            proposalStatusToJSON(object: _24.ProposalStatus): string;
            VoteOption: typeof _24.VoteOption;
            VoteOptionSDKType: typeof _24.VoteOptionSDKType;
            ProposalStatus: typeof _24.ProposalStatus;
            ProposalStatusSDKType: typeof _24.ProposalStatusSDKType;
        };
    }
    namespace staking {
        const v1beta1: {
            LCDQueryClient: typeof _59.LCDQueryClient;
            bondStatusFromJSON(object: any): _30.BondStatus;
            bondStatusToJSON(object: _30.BondStatus): string;
            BondStatus: typeof _30.BondStatus;
            BondStatusSDKType: typeof _30.BondStatusSDKType;
            authorizationTypeFromJSON(object: any): _27.AuthorizationType;
            authorizationTypeToJSON(object: _27.AuthorizationType): string;
            AuthorizationType: typeof _27.AuthorizationType;
            AuthorizationTypeSDKType: typeof _27.AuthorizationTypeSDKType;
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _32.SignMode;
                signModeToJSON(object: _32.SignMode): string;
                SignMode: typeof _32.SignMode;
                SignModeSDKType: typeof _32.SignModeSDKType;
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _60.LCDQueryClient;
            orderByFromJSON(object: any): _33.OrderBy;
            orderByToJSON(object: _33.OrderBy): string;
            broadcastModeFromJSON(object: any): _33.BroadcastMode;
            broadcastModeToJSON(object: _33.BroadcastMode): string;
            OrderBy: typeof _33.OrderBy;
            OrderBySDKType: typeof _33.OrderBySDKType;
            BroadcastMode: typeof _33.BroadcastMode;
            BroadcastModeSDKType: typeof _33.BroadcastModeSDKType;
        };
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _55.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _56.LCDQueryClient;
                };
                gov: {
                    v1: _57.LCDQueryClient;
                    v1beta1: _58.LCDQueryClient;
                };
                staking: {
                    v1beta1: _59.LCDQueryClient;
                };
                tx: {
                    v1beta1: _60.LCDQueryClient;
                };
            };
        }>;
    };
}
