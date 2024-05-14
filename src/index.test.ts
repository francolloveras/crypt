import { randomBytes } from "crypto";
import crypt from "./index";
import { ERROR_MESSAGE } from "./const";

describe("CryptHelper", () => {
  const secretKey = randomBytes(32).toString("hex");
  const originalValue = "hello world";

  it("should encrypt and decrypt a value correctly", () => {
    const encryptedValue = crypt.encrypt(originalValue, secretKey);
    const decryptedValue = crypt.decrypt(encryptedValue, secretKey);

    expect(decryptedValue).toBe(originalValue);
  });

  it("should compare a value with its encrypted version correctly", () => {
    const encryptedValue = crypt.encrypt(originalValue, secretKey);
    const comparisonResult = crypt.compare(
      originalValue,
      encryptedValue,
      secretKey
    );

    expect(comparisonResult).toBe(true);
  });

  it("should throw error when trying to encrypt with no value", () => {
    expect(() => {
      crypt.encrypt("", secretKey);
    }).toThrow(ERROR_MESSAGE.ENCRYPT.MISSING_VALUE);
  });

  it("should throw error when trying to decrypt with no value", () => {
    expect(() => {
      crypt.decrypt("", secretKey);
    }).toThrow(ERROR_MESSAGE.DECRYPT.MISSING_VALUE);
  });

  it("should throw error when trying to compare with no value", () => {
    const encryptedValue = crypt.encrypt("hello world", secretKey);

    expect(() => {
      crypt.compare("", encryptedValue, secretKey);
    }).toThrow(ERROR_MESSAGE.COMPARE.MISSING_VALUE);
  });

  it("should throw error when trying to compare with no encrypted value", () => {
    expect(() => {
      crypt.compare("hello world", "", secretKey);
    }).toThrow(ERROR_MESSAGE.COMPARE.MISSING_ENCRYPTED);
  });

  it("should throw error when trying to encrypt with no secret key", () => {
    expect(() => {
      crypt.encrypt("hello world", "");
    }).toThrow(ERROR_MESSAGE.ENCRYPT.MISSING_SECRET_KEY);
  });

  it("should throw error when trying to decrypt with no secret key", () => {
    const encryptedValue = crypt.encrypt("hello world", secretKey);

    expect(() => {
      crypt.decrypt(encryptedValue, "");
    }).toThrow(ERROR_MESSAGE.DECRYPT.MISSING_SECRET_KEY);
  });

  it("should throw error when trying to compare with no secret key", () => {
    const encryptedValue = crypt.encrypt("hello world", secretKey);

    expect(() => {
      crypt.compare("hello world", encryptedValue, "");
    }).toThrow(ERROR_MESSAGE.COMPARE.MISSING_SECRET_KEY);
  });
});
