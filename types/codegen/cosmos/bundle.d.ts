import * as _51 from "./gov/v1/gov";
import * as _55 from "./gov/v1beta1/gov";
import * as _61 from "./group/v1/tx";
import * as _62 from "./group/v1/types";
import * as _73 from "./orm/v1alpha1/schema";
import * as _80 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/staking";
import * as _85 from "./tx/signing/v1beta1/signing";
import * as _86 from "./tx/v1beta1/service";
import * as _115 from "./auth/v1beta1/query.lcd";
import * as _116 from "./authz/v1beta1/query.lcd";
import * as _117 from "./bank/v1beta1/query.lcd";
import * as _118 from "./base/tendermint/v1beta1/query.lcd";
import * as _119 from "./distribution/v1beta1/query.lcd";
import * as _120 from "./evidence/v1beta1/query.lcd";
import * as _121 from "./feegrant/v1beta1/query.lcd";
import * as _122 from "./gov/v1/query.lcd";
import * as _123 from "./gov/v1beta1/query.lcd";
import * as _124 from "./group/v1/query.lcd";
import * as _125 from "./mint/v1beta1/query.lcd";
import * as _126 from "./nft/v1beta1/query.lcd";
import * as _127 from "./params/v1beta1/query.lcd";
import * as _128 from "./slashing/v1beta1/query.lcd";
import * as _129 from "./staking/v1beta1/query.lcd";
import * as _130 from "./tx/v1beta1/service.lcd";
import * as _131 from "./upgrade/v1beta1/query.lcd";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {};
    }
    namespace auth {
        const v1beta1: {
            LCDQueryClient: typeof _115.LCDQueryClient;
        };
    }
    namespace authz {
        const v1beta1: {
            LCDQueryClient: typeof _116.LCDQueryClient;
        };
    }
    namespace bank {
        const v1beta1: {
            LCDQueryClient: typeof _117.LCDQueryClient;
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {};
        }
        namespace kv {
            const v1beta1: {};
        }
        namespace query {
            const v1beta1: {};
        }
        namespace reflection {
            const v1beta1: {};
            const v2alpha1: {};
        }
        namespace snapshots {
            const v1beta1: {};
        }
        namespace store {
            const v1beta1: {};
        }
        namespace tendermint {
            const v1beta1: {
                LCDQueryClient: typeof _118.LCDQueryClient;
            };
        }
        const v1beta1: {};
    }
    namespace capability {
        const v1beta1: {};
    }
    namespace crisis {
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
            LCDQueryClient: typeof _119.LCDQueryClient;
        };
    }
    namespace evidence {
        const v1beta1: {
            LCDQueryClient: typeof _120.LCDQueryClient;
        };
    }
    namespace feegrant {
        const v1beta1: {
            LCDQueryClient: typeof _121.LCDQueryClient;
        };
    }
    namespace genutil {
        const v1beta1: {};
    }
    namespace gov {
        const v1: {
            LCDQueryClient: typeof _122.LCDQueryClient;
            voteOptionFromJSON(object: any): _51.VoteOption;
            voteOptionToJSON(object: _51.VoteOption): string;
            proposalStatusFromJSON(object: any): _51.ProposalStatus;
            proposalStatusToJSON(object: _51.ProposalStatus): string;
            VoteOption: typeof _51.VoteOption;
            VoteOptionSDKType: typeof _51.VoteOptionSDKType;
            ProposalStatus: typeof _51.ProposalStatus;
            ProposalStatusSDKType: typeof _51.ProposalStatusSDKType;
        };
        const v1beta1: {
            LCDQueryClient: typeof _123.LCDQueryClient;
            voteOptionFromJSON(object: any): _55.VoteOption;
            voteOptionToJSON(object: _55.VoteOption): string;
            proposalStatusFromJSON(object: any): _55.ProposalStatus;
            proposalStatusToJSON(object: _55.ProposalStatus): string;
            VoteOption: typeof _55.VoteOption;
            VoteOptionSDKType: typeof _55.VoteOptionSDKType;
            ProposalStatus: typeof _55.ProposalStatus;
            ProposalStatusSDKType: typeof _55.ProposalStatusSDKType;
        };
    }
    namespace group {
        const v1: {
            LCDQueryClient: typeof _124.LCDQueryClient;
            voteOptionFromJSON(object: any): _62.VoteOption;
            voteOptionToJSON(object: _62.VoteOption): string;
            proposalStatusFromJSON(object: any): _62.ProposalStatus;
            proposalStatusToJSON(object: _62.ProposalStatus): string;
            proposalResultFromJSON(object: any): _62.ProposalResult;
            proposalResultToJSON(object: _62.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _62.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _62.ProposalExecutorResult): string;
            VoteOption: typeof _62.VoteOption;
            VoteOptionSDKType: typeof _62.VoteOptionSDKType;
            ProposalStatus: typeof _62.ProposalStatus;
            ProposalStatusSDKType: typeof _62.ProposalStatusSDKType;
            ProposalResult: typeof _62.ProposalResult;
            ProposalResultSDKType: typeof _62.ProposalResultSDKType;
            ProposalExecutorResult: typeof _62.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _62.ProposalExecutorResultSDKType;
            execFromJSON(object: any): _61.Exec;
            execToJSON(object: _61.Exec): string;
            Exec: typeof _61.Exec;
            ExecSDKType: typeof _61.ExecSDKType;
        };
    }
    namespace mint {
        const v1beta1: {
            LCDQueryClient: typeof _125.LCDQueryClient;
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            LCDQueryClient: typeof _126.LCDQueryClient;
        };
    }
    namespace orm {
        const v1: {};
        const v1alpha1: {
            storageTypeFromJSON(object: any): _73.StorageType;
            storageTypeToJSON(object: _73.StorageType): string;
            StorageType: typeof _73.StorageType;
            StorageTypeSDKType: typeof _73.StorageTypeSDKType;
        };
    }
    namespace params {
        const v1beta1: {
            LCDQueryClient: typeof _127.LCDQueryClient;
        };
    }
    namespace slashing {
        const v1beta1: {
            LCDQueryClient: typeof _128.LCDQueryClient;
        };
    }
    namespace staking {
        const v1beta1: {
            LCDQueryClient: typeof _129.LCDQueryClient;
            bondStatusFromJSON(object: any): _83.BondStatus;
            bondStatusToJSON(object: _83.BondStatus): string;
            BondStatus: typeof _83.BondStatus;
            BondStatusSDKType: typeof _83.BondStatusSDKType;
            authorizationTypeFromJSON(object: any): _80.AuthorizationType;
            authorizationTypeToJSON(object: _80.AuthorizationType): string;
            AuthorizationType: typeof _80.AuthorizationType;
            AuthorizationTypeSDKType: typeof _80.AuthorizationTypeSDKType;
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _85.SignMode;
                signModeToJSON(object: _85.SignMode): string;
                SignMode: typeof _85.SignMode;
                SignModeSDKType: typeof _85.SignModeSDKType;
            };
        }
        const v1beta1: {
            LCDQueryClient: typeof _130.LCDQueryClient;
            orderByFromJSON(object: any): _86.OrderBy;
            orderByToJSON(object: _86.OrderBy): string;
            broadcastModeFromJSON(object: any): _86.BroadcastMode;
            broadcastModeToJSON(object: _86.BroadcastMode): string;
            OrderBy: typeof _86.OrderBy;
            OrderBySDKType: typeof _86.OrderBySDKType;
            BroadcastMode: typeof _86.BroadcastMode;
            BroadcastModeSDKType: typeof _86.BroadcastModeSDKType;
        };
    }
    namespace upgrade {
        const v1beta1: {
            LCDQueryClient: typeof _131.LCDQueryClient;
        };
    }
    namespace vesting {
        const v1beta1: {};
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _115.LCDQueryClient;
                };
                authz: {
                    v1beta1: _116.LCDQueryClient;
                };
                bank: {
                    v1beta1: _117.LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: _118.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _119.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _120.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _121.LCDQueryClient;
                };
                gov: {
                    v1: _122.LCDQueryClient;
                    v1beta1: _123.LCDQueryClient;
                };
                group: {
                    v1: _124.LCDQueryClient;
                };
                mint: {
                    v1beta1: _125.LCDQueryClient;
                };
                nft: {
                    v1beta1: _126.LCDQueryClient;
                };
                params: {
                    v1beta1: _127.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _128.LCDQueryClient;
                };
                staking: {
                    v1beta1: _129.LCDQueryClient;
                };
                tx: {
                    v1beta1: _130.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _131.LCDQueryClient;
                };
            };
        }>;
    };
}
