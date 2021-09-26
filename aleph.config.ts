import json from "aleph/plugins/json.ts";
import type { Config } from "aleph/types.ts";

export default <Config> {
  plugins: [
    json(),
  ],
};
