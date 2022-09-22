import * as _44 from "./abci/types";
import * as _45 from "./crypto/keys";
import * as _46 from "./crypto/proof";
import * as _47 from "./libs/bits/types";
import * as _48 from "./p2p/types";
import * as _49 from "./types/block";
import * as _50 from "./types/evidence";
import * as _51 from "./types/params";
import * as _52 from "./types/types";
import * as _53 from "./types/validator";
import * as _54 from "./version/types";
export namespace tendermint {
  export const abci = { ..._44
  };
  export const crypto = { ..._45,
    ..._46
  };
  export namespace libs {
    export const bits = { ..._47
    };
  }
  export const p2p = { ..._48
  };
  export const types = { ..._49,
    ..._50,
    ..._51,
    ..._52,
    ..._53
  };
  export const version = { ..._54
  };
}