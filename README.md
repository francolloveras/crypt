# Crypt

Crypt is a simple utility class for encrypting and decrypting values using Node.js's built-in crypto module.

## Installation

To install Crypt, you can use npm:

```bash
npm install @francolloveras/crypt
```

## Usage

```typescript
import { crypt } from "@francolloveras/crypt";

// The secret key must have a 32-byte hexadecimal value; You can use the generate() method to create a secret key.
const secretKey = crypt.generate();
const value = "value-to-encrypt";

// Encrypt a value
const encrypted = crypt.encrypt(value, secretKey);
console.log("Encrypted:", encrypted);

// Decrypt an encrypted value
const decrypted = crypt.decrypt(encrypted, secretKey);
console.log("Decrypted:", decrypted);

// Compare a value with its encrypted version
const match = crypt.compare(value, encrypted, secretKey);
console.log("Match:", match);
```

## API

### crypt.generate()

Generate a 32-byte hexadecimal value that can be used as a secret key.

- `@returns`: string - Random bytes value.

### crypt.encrypt()

Encrypts a value using a secret key.

- `@param value`: string - The value to encrypt.
- `@param secretKey`: string - The secret key used for encryption.
- `@returns`: string - The encrypted value.
- `@throws`: Error - Error if the value or secret key is missing.

### crypt.decrypt()

Decrypts a value using a secret key.

- `@param value`: string - The value to decrypt.
- `@param secretKey`: string - The secret key used for decryption.
- `@returns`: string - The decrypted value.
- `@throws`: Error - Error if the value or secret key is missing.

### crypt.compare()

Compares a value with its encrypted version to verify if they match after decryption.

- `@param value`: string - The original value.
- `@param encrypted`: string - The encrypted value.
- `@param secretKey`: string - The secret key used for decryption.
- `@returns`: boolean - true if the value matches its decrypted version, false otherwise.
- `@throws`: Error - Error if the value, encrypted or secret key is missing.

## Contributing

Contributions are welcome! Please feel free to submit a pull request if you find any issues or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
