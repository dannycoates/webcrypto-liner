/**
 * aescrypto definition https://github.com/vibornoff/asmcrypto.js
 */

declare namespace asmCrypto {

    type RsaKey = { [key: number]: Uint8Array }

    class AES_ECB {
        static encrypt(data: BufferSource, key: BufferSource, padding: boolean): BufferSource;
        static decrypt(data: BufferSource, key: BufferSource, padding: boolean): BufferSource;
    }
    class AES_CBC {
        static encrypt(data: BufferSource, key: BufferSource, padding: BufferSource | undefined, iv: BufferSource): BufferSource;
        static decrypt(data: BufferSource, key: BufferSource, padding: BufferSource | undefined, iv: BufferSource): BufferSource;
    }
    class AES_GCM {
        static encrypt(data: BufferSource, key: BufferSource, iv: BufferSource, add: BufferSource | undefined, tagLength: number): BufferSource;
        static decrypt(data: BufferSource, key: BufferSource, iv: BufferSource, add: BufferSource | undefined, tagLength: number): BufferSource;
    }

    class SHA1 {
        static bytes(data: BufferSource): ArrayBufferView;
    }
    class SHA256 extends SHA1 { }

    class SHA512 extends SHA1 { }

    class RSA {
        static generateKey(modulusBits: number, publicExponent: number): RsaKey;
    }

    class RSA_OAEP_SHA1 {
        static encrypt(data: BufferSource, key: RsaKey, label?: BufferSource): ArrayBuffer;
        static decrypt(data: BufferSource, key: RsaKey, label?: BufferSource): ArrayBuffer;
    }


    class RSA_OAEP_SHA256 extends RSA_OAEP_SHA1 { }
    class RSA_OAEP_SHA512 extends RSA_OAEP_SHA1 { }

    class RSA_PKCS1_v1_5_SHA1 {
        static sign(data: BufferSource, key: RsaKey): ArrayBufferView;
        static verify(signature: BufferSource, data: BufferSource, key: RsaKey): boolean;
    }
    class RSA_PKCS1_v1_5_SHA256 extends RSA_PKCS1_v1_5_SHA1 { }
    class RSA_PKCS1_v1_5_SHA512 extends RSA_PKCS1_v1_5_SHA1 { }

    class RSA_PSS_SHA1 {
        static sign(data: BufferSource, key: RsaKey, saltLength?: number): ArrayBufferView;
        static verify(signature: BufferSource, data: BufferSource, key: RsaKey, saltLength?: number): boolean;
    }

    class RSA_PSS_SHA256 extends RSA_PSS_SHA1 { }
    class RSA_PSS_SHA512 extends RSA_PSS_SHA1 { }

    class PBKDF2_HMAC_SHA1 {
        static bytes(password: Uint8Array, salt: Uint8Array, iterations?: number, dklen?: number): Uint8Array;

        static hex(password: Uint8Array, salt: Uint8Array, iterations?: number, dklen?: number): Uint8Array;

        static base64(password: Uint8Array, salt: Uint8Array, iterations?: number, dklen?: number): Uint8Array;
    }

    class PBKDF2_HMAC_SHA256 {
        static bytes(password: Uint8Array, salt: Uint8Array, iterations?: number, dklen?: number): Uint8Array;

        static hex(password: Uint8Array, salt: Uint8Array, iterations?: number, dklen?: number): Uint8Array;

        static base64(password: Uint8Array, salt: Uint8Array, iterations?: number, dklen?: number): Uint8Array;
    }

    class PBKDF2_HMAC_SHA512 {
        static bytes(password: Uint8Array, salt: Uint8Array, iterations?: number, dklen?: number): Uint8Array;

        static hex(password: Uint8Array, salt: Uint8Array, iterations?: number, dklen?: number): Uint8Array;

        static base64(password: Uint8Array, salt: Uint8Array, iterations?: number, dklen?: number): Uint8Array;
    }

    class HMAC_SHA256 {
        static bytes(data: Uint8Array, password: Uint8Array): Uint8Array;
    }
}

declare module "asmcrypto.js" {
    export = asmCrypto;
}