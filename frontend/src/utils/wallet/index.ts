import { TW, WalletCore } from "@trustwallet/wallet-core";

export class Wallet {
    CoinType: WalletCore["CoinType"];
    HexCoding: WalletCore["HexCoding"];
    AnySigner: WalletCore["AnySigner"];
    HDWallet: WalletCore["HDWallet"];
    PublicKey: WalletCore["PublicKey"];
    AnyAddress: WalletCore["AnyAddress"];
    PrivateKey: WalletCore["PrivateKey"];
    Mnemonic: WalletCore["Mnemonic"];
    Curve: WalletCore["Curve"];
    TW: typeof TW;
    SolanaAddress: WalletCore["SolanaAddress"];
    StoredKey: WalletCore["StoredKey"];

    constructor(_walletCore: WalletCore, _tw = TW) {
        const {
        HDWallet,
        CoinType,
        AnySigner,
        HexCoding,
        PublicKey,
        PrivateKey,
        Mnemonic,
        Curve,
        AnyAddress,
        SolanaAddress,
        StoredKey,
        } = _walletCore;
        this.CoinType = CoinType;
        this.AnySigner = AnySigner;
        this.HexCoding = HexCoding;
        this.HDWallet = HDWallet;
        this.PublicKey = PublicKey;
        this.PrivateKey = PrivateKey;
        this.Mnemonic = Mnemonic;
        this.Curve = Curve;
        this.TW = _tw;
        this.AnyAddress = AnyAddress;
        this.SolanaAddress = SolanaAddress;
        this.StoredKey = StoredKey;
    }

    importWithPrvKey = async (
        privatekey: string,
        chainId = "ethereum",
        curve = "secp256k1",
    ) => {
        const _privateKey = this.trimZeroHex(privatekey);
        const _curve = this.getCurve(curve);
        const coinType = this.getCoinType(chainId);
        let prvKey = this.PrivateKey.create();
        try {
        prvKey = this.PrivateKey.createWithData(
            this.HexCoding.decode(_privateKey),
        );
        } catch (e) {
        console.log(e);
        }
        let pubKey = prvKey?.getPublicKeyCurve25519();
        switch (_curve) {
        case this.Curve.secp256k1:
            pubKey = prvKey.getPublicKeySecp256k1(false);
            break;
        case this.Curve.ed25519:
            pubKey = prvKey.getPublicKeyEd25519();
            break;
        case this.Curve.ed25519Blake2bNano:
            pubKey = prvKey.getPublicKeyEd25519Blake2b();
            break;
        case this.Curve.curve25519:
            pubKey = prvKey.getPublicKeyCurve25519();
            break;
        case this.Curve.nist256p1:
            pubKey = prvKey.getPublicKeyNist256p1();
            break;
        case this.Curve.ed25519ExtendedCardano:
            pubKey = prvKey.getPublicKeyEd25519Cardano();
            break;
        default:
            break;
        }
        const generatedAddress = this.AnyAddress.createWithPublicKey(
        pubKey,
        coinType,
        ).description();
        return generatedAddress;
    };

    createAccount = () => {
        const account = this.HDWallet.create(128, "");
        const entropy = account.entropy();
        const address = account.getAddressForCoin(this.CoinType.ethereum);
        const pvtKey = account.getKey(this.CoinType.ethereum, "m/44'/60'/0'/0/0");
        const pvtKeyHex = this.bufferToHex(pvtKey.data());
        return { publicAddr: address, privateKey: pvtKeyHex };
    };

    // Not required to use this

    trimZeroHex = (zeroHex: string) => {
        if (zeroHex.startsWith("0x")) {
        return zeroHex.slice(2, zeroHex.length);
        }
        return zeroHex;
    };

    getCurve = (curve: string) => {
        switch (curve) {
        case "secp256k1":
            return this.Curve.secp256k1;
        case "ed25519Blake2bNano":
            return this.Curve.ed25519Blake2bNano;
        case "curve25519":
            return this.Curve.curve25519;
        case "nist256p1":
            return this.Curve.nist256p1;
        case "ed25519ExtendedCardano":
            return this.Curve.ed25519ExtendedCardano;
        case "ed25519":
            return this.Curve.ed25519;
        default:
            return this.Curve.secp256k1;
        }
    };

    getCoinType = (chainId: string) => {
        const coinType = this.CoinType;
        switch (chainId) {
        case "ethereum":
            return coinType.ethereum;
        case "bsc":
            return coinType.smartChain;
        case "polygon":
            return coinType.polygon;
        case "solana":
            return coinType.solana;
        case "zkevm":
            return coinType.polygonzkEVM;
        case "zksync":
            return coinType.zksync;
        default:
            return coinType.ethereum;
        }
    };

    bufferToHex = (unitArray: Uint8Array) => {
        return Buffer.from(unitArray).toString("hex");
    };

    createWithMnemonic(mnemonic: string, passphrase: string) {
        return this.HDWallet.createWithMnemonic(mnemonic, passphrase);
    }
}
