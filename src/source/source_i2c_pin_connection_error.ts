import { z } from "zod"
import {
  base_circuit_json_error,
  type BaseCircuitJsonError,
} from "src/base_circuit_json_error"
import { getZodPrefixedIdWithDefault } from "src/common"
import { expectTypesMatch } from "src/utils/expect-types-match"

export const source_i2c_pin_connection_error = base_circuit_json_error
  .extend({
    type: z.literal("source_i2c_pin_connection_error"),
    source_i2c_pin_connection_error_id: getZodPrefixedIdWithDefault(
      "source_i2c_pin_connection_error",
    ),
    error_type: z
      .literal("source_i2c_pin_connection_error")
      .default("source_i2c_pin_connection_error"),
    source_port_ids: z.array(z.string()),
  })
  .describe(
    "Error emitted when incompatible I2C pins (e.g. SDA and SCL) are connected to the same net",
  )

export type SourceI2CPinConnectionErrorInput = z.input<
  typeof source_i2c_pin_connection_error
>
type InferredSourceI2CPinConnectionError = z.infer<
  typeof source_i2c_pin_connection_error
>

/**
 * Error emitted when incompatible I2C pins (e.g. SDA and SCL) are connected to the same net
 */
export interface SourceI2CPinConnectionError extends BaseCircuitJsonError {
  type: "source_i2c_pin_connection_error"
  source_i2c_pin_connection_error_id: string
  error_type: "source_i2c_pin_connection_error"
  source_port_ids: string[]
}

expectTypesMatch<
  SourceI2CPinConnectionError,
  InferredSourceI2CPinConnectionError
>(true)
