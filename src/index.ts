import { createCipheriv, createDecipheriv, randomBytes } from "crypto";
import {
  ALGORITHM,
  OUTPUT_ENCODING,
  ERROR_MESSAGE,
  INPUT_ENCODING,
} from "./const";

const crypt = {
  /**
   * Encrypts a value using a secret key.
   * @param value The value to encrypt.
   * @param secretKey The secretKey to encrypt.
   * @returns The encrypted value.
   * @throws Error if the value or secret key is missing.
   */
  encrypt(value: string, secretKey: string): string {
    if (!value) throw new Error(ERROR_MESSAGE.ENCRYPT.MISSING_VALUE);
    if (!secretKey) throw new Error(ERROR_MESSAGE.ENCRYPT.MISSING_SECRET_KEY);

    const bufferSecretKey = Buffer.from(secretKey, "hex");
    const iv = randomBytes(12);
    const cipher = createCipheriv(ALGORITHM, bufferSecretKey, iv);

    let encryptedValue = cipher.update(value, INPUT_ENCODING, OUTPUT_ENCODING);
    encryptedValue += cipher.final(OUTPUT_ENCODING);

    const tag = cipher.getAuthTag().toString(OUTPUT_ENCODING);
    return `${iv.toString(OUTPUT_ENCODING)}:${encryptedValue}:${tag}`;
  },

  /**
   * Decrypts  a value using a secret key.
   * @param value The value to decrypt.
   * @param secretKey The secretKey to decrypt.
   * @returns The decrypted value.
   * @throws Error if the value or secret key is missing.
   */
  decrypt(value: string, secretKey: string): string {
    if (!value) throw new Error(ERROR_MESSAGE.DECRYPT.MISSING_VALUE);
    if (!secretKey) throw new Error(ERROR_MESSAGE.DECRYPT.MISSING_SECRET_KEY);

    const bufferSecretKey = Buffer.from(secretKey, "hex");
    const [ivString, encryptedData, tagString] = value.split(":");
    const iv = Buffer.from(ivString, OUTPUT_ENCODING);
    const tag = Buffer.from(tagString, OUTPUT_ENCODING);

    const decipher = createDecipheriv(ALGORITHM, bufferSecretKey, iv);
    decipher.setAuthTag(tag);

    let decryptedValue = decipher.update(
      encryptedData,
      OUTPUT_ENCODING,
      INPUT_ENCODING
    );
    decryptedValue += decipher.final(INPUT_ENCODING);
    return decryptedValue;
  },

  /**
   * Compares a value with its encrypted version to verify if they match after decryption.
   * @param value The value to compare.
   * @param encrypted The encrypted value to compare against.
   * @param secretKey The secretKey to compare.
   * @returns true if the value matches its decrypted version, false otherwise.
   * @throws Error if the value, encrypted or secret key is missing.
   */
  compare(value: string, encrypted: string, secretKey: string): boolean {
    if (!value) throw new Error(ERROR_MESSAGE.COMPARE.MISSING_VALUE);
    if (!encrypted) throw new Error(ERROR_MESSAGE.COMPARE.MISSING_ENCRYPTED);
    if (!secretKey) throw new Error(ERROR_MESSAGE.COMPARE.MISSING_SECRET_KEY);

    const decrypted = this.decrypt(encrypted, secretKey);
    return value === decrypted;
  },
};

export default crypt;
