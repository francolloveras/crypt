export const ALGORITHM = "aes-256-gcm" as const;
export const INPUT_ENCODING = "utf8" as const;
export const OUTPUT_ENCODING = "base64" as const;

export const ERROR_MESSAGE = {
  ENCRYPT: {
    MISSING_VALUE: "Value to encrypt is required.",
    MISSING_SECRET_KEY: "Secret key to encrypt is required.",
  },
  DECRYPT: {
    MISSING_VALUE: "Value to decrypt is required.",
    MISSING_SECRET_KEY: "Secret key to decrypt is required.",
  },
  COMPARE: {
    MISSING_VALUE: "Value to compare is required.",
    MISSING_ENCRYPTED: "Encrypted value to compare is required.",
    MISSING_SECRET_KEY: "Secret key to compare is required.",
  },
} as const;
