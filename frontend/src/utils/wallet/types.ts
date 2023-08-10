import { TW } from "@trustwallet/wallet-core";

export type TTranx = {
    chainId?: string;
    chainIdHex: string;
    amount?: number;
    amountHex: string;
    amountValue?: number;
    gasLimit?: number;
    gasLimitHex: string;
    gasPrice?: number;
    gasPriceValue?: number;
    gasPriceHex: string;
    contractAddress?: string;
    contractDecimals: number;
    nonce?: number;
    nonceHex: string;
    toAddress: string;
    fromAddress: string;
    coinType?: string;
    symbol?: string;
    blockchain?: string;
    isNative?: boolean;
    data?: string;
    value?: string;
    valueHex?: string;
    memo?: string;
    chainName?: string;
    path?: string;
    hardwareType?: string;
    txBuff?: Buffer;
    transactionType: TRANSACTION_TYPE.SEND;
};

export enum TRANSACTION_TYPE {
    SEND = "SEND",
    SWAP = "SWAP",
    APPROVAL = "APPROVAL",
    BRIDGE = "BRIDGE",
    STAKE = "STAKE",
    UNSTAKE = "UNSTAKE",
    RESTAKE = "RESTAKE",
    WITHDRAW = "WITHDRAW",
    IBC = "IBC",
}

export interface ISigningInput {
    /** SigningInput chainId */
    chainId?: Uint8Array | null;

    /** SigningInput nonce */
    nonce?: Uint8Array | null;

    /** SigningInput gasPrice */
    gasPrice?: Uint8Array | null;

    /** SigningInput gasLimit */
    gasLimit?: Uint8Array | null;

    /** SigningInput maxInclusionFeePerGas */
    maxInclusionFeePerGas?: Uint8Array | null;

    /** SigningInput maxFeePerGas */
    maxFeePerGas?: Uint8Array | null;

    /** SigningInput toAddress */
    toAddress?: string | null;

    /** SigningInput privateKey */
    privateKey?: Uint8Array | null;

    /** SigningInput transaction */
    transaction?: TW.Ethereum.Proto.ITransaction | null;
}