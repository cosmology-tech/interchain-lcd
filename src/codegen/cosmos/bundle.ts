import * as _1 from "./bank/v1beta1/authz";
import * as _2 from "./bank/v1beta1/bank";
import * as _3 from "./bank/v1beta1/genesis";
import * as _4 from "./bank/v1beta1/query";
import * as _5 from "./bank/v1beta1/tx";
import * as _6 from "./base/query/v1beta1/pagination";
import * as _7 from "./base/reflection/v2alpha1/reflection";
import * as _8 from "./base/v1beta1/coin";
import * as _9 from "./crypto/ed25519/keys";
import * as _10 from "./crypto/hd/v1/hd";
import * as _11 from "./crypto/keyring/v1/record";
import * as _12 from "./crypto/multisig/keys";
import * as _13 from "./crypto/secp256k1/keys";
import * as _14 from "./crypto/secp256r1/keys";
import * as _15 from "./distribution/v1beta1/distribution";
import * as _16 from "./distribution/v1beta1/genesis";
import * as _17 from "./distribution/v1beta1/query";
import * as _18 from "./distribution/v1beta1/tx";
import * as _19 from "./gov/v1/genesis";
import * as _20 from "./gov/v1/gov";
import * as _21 from "./gov/v1/query";
import * as _22 from "./gov/v1/tx";
import * as _23 from "./gov/v1beta1/genesis";
import * as _24 from "./gov/v1beta1/gov";
import * as _25 from "./gov/v1beta1/query";
import * as _26 from "./gov/v1beta1/tx";
import * as _27 from "./staking/v1beta1/authz";
import * as _28 from "./staking/v1beta1/genesis";
import * as _29 from "./staking/v1beta1/query";
import * as _30 from "./staking/v1beta1/staking";
import * as _31 from "./staking/v1beta1/tx";
import * as _32 from "./tx/signing/v1beta1/signing";
import * as _33 from "./tx/v1beta1/service";
import * as _34 from "./tx/v1beta1/tx";
import * as _55 from "./bank/v1beta1/query.lcd";
import * as _56 from "./distribution/v1beta1/query.lcd";
import * as _57 from "./gov/v1/query.lcd";
import * as _58 from "./gov/v1beta1/query.lcd";
import * as _59 from "./staking/v1beta1/query.lcd";
import * as _60 from "./tx/v1beta1/service.lcd";
import * as _61 from "./lcd";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._55
    };
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = { ..._6
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._7
      };
    }
    export const v1beta1 = { ..._8
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._9
    };
    export namespace hd {
      export const v1 = { ..._10
      };
    }
    export namespace keyring {
      export const v1 = { ..._11
      };
    }
    export const multisig = { ..._12
    };
    export const secp256k1 = { ..._13
    };
    export const secp256r1 = { ..._14
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._56
    };
  }
  export namespace gov {
    export const v1 = { ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._57
    };
    export const v1beta1 = { ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._58
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
      ..._59
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._32
      };
    }
    export const v1beta1 = { ..._33,
      ..._34,
      ..._60
    };
  }
  export const ClientFactory = { ..._61
  };
}