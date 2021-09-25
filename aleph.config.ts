import json from 'https://deno.land/x/aleph/plugins/json.ts'
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

export default <Config>{
  plugins: [
    json()
  ]
}