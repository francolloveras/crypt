# Crypt

Crypt is a simple utility class for encrypting and decrypting values using Node.js's built-in crypto module.

## Installation

To install Crypt, you can use npm:

```bash
npm install @classius/crypt
```

## Usage

```typescript
import crypt from "@classius/crypt";

const secretKey = "your-secret-key";
const value = "your-value";

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

### crypt.encrypt()

Encrypts a value using a secret key.

- <span style="color:#F97583;font-weight:bold;">@param</span> `value`: <span style="color:#79B8FF;">string</span> - The value to encrypt.
- <span style="color:#F97583;font-weight:bold;">@param</span> `secretKey`: <span style="color:#79B8FF;">string</span> - The secret key used for encryption.
- <span style="color:#F97583;font-weight:bold;">@returns</span>: <span style="color:#79B8FF;">string</span> - The encrypted value.
- <span style="color:#F97583;font-weight:bold;">@throws</span>: <span style="color:#79B8FF;">Error</span> - Error if the value or secret key is missing.

### crypt.decrypt()

Decrypts a value using a secret key.

- <span style="color:#F97583;font-weight:bold;">@param</span> `value`: <span style="color:#79B8FF;">string</span> - The value to decrypt.
- <span style="color:#F97583;font-weight:bold;">@param</span> `secretKey`: <span style="color:#79B8FF;">string</span> - The secret key used for decryption.
- <span style="color:#F97583;font-weight:bold;">@returns</span>: <span style="color:#79B8FF;">string</span> - The decrypted value.
- <span style="color:#F97583;font-weight:bold;">@throws</span>: <span style="color:#79B8FF;">Error</span> - Error if the value or secret key is missing.

### crypt.compare()

Compares a value with its encrypted version to verify if they match after decryption.

- <span style="color:#F97583;font-weight:bold;">@param</span> `value`: <span style="color:#79B8FF;">string</span> - The original value.
- <span style="color:#F97583;font-weight:bold;">@param</span> `encrypted`: <span style="color:#79B8FF;">string</span> - The encrypted value.
- <span style="color:#F97583;font-weight:bold;">@param</span> `secretKey`: <span style="color:#79B8FF;">string</span> - The secret key used for decryption.
- <span style="color:#F97583;font-weight:bold;">@returns</span>: <span style="color:#79B8FF;">boolean</span> - true if the value matches its decrypted version, false otherwise.
- <span style="color:#F97583;font-weight:bold;">@throws</span>: <span style="color:#79B8FF;">Error</span> - Error if the value, encrypted or secret key is missing.

## Contributing

Contributions are welcome! Please feel free to submit a pull request if you find any issues or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
