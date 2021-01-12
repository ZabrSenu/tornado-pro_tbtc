# Tornado Cash. What is it?
Tornado improves transaction privacy by breaking the on-chain link between recipient and destination addresses. It uses a smart contract that accepts ETH deposits that can be withdrawn by a different address.
Tornado.cash allows you to send Ethereum cryptocurrency 100% anonymously using groundbreaking, non-custodial technology based on strong cryptography!

## How to use this tool

Please, use nodejs console. Get it using this link: https://nodejs.org/en/
You can see some more examples in cli.js file,where first of all you need to do following steps:
1. Copy files from js and json directories to home directory
2. Install npm: `npm install`
3. Copy the file: `cp .env.example .env`
4. Build npm: `npm run build` (I draw your attention to the fact that this action may take 10 minutes or more)

Use with command line version.
Works for Ropsten Network

## Contract Addresses used:

1. 0.001 tBTC slot mixer: `0xAb4c4bc8749136474E5705d81Ba5936B5274AC33`
2. 0.01 tBTC slot mixer: `0xEb7392dEcde73cd75C566CBFA6638dca37BA9D38`
3. 0.1 tBTC slot mixer: `0x4484C2ABEbA0D431c59D97207523d7dDe6C3caE4`
4. 1 tBTC slot mixer: `0x1cddf698BCD67A83e65f2C87bB2b48ba0310A3a2`

## Requirements that are required for the application to work

1. `node v11.15.0` to be installed
2. `npm install -g npx`

### Here you can find some examples:

#### Check balance of your account

```bash
./cli.js balance <your account address> [tBTC token address] --rpc <rpc endpoint>
./cli.js balance 0x1289f5266fBad689eV1aB3e23f237f6328BAf11f 0xb752f3d8C5B7873F353C15D4ef6e151D14db69CC --rpc https://ropsten.infura.io/v3/27a9649f826b4e31a83e07ae09a87448
```

#### Deposit tBTC on Ropsten

To make a deposit user generates a secret and sends its hash (called a commitment) along with deposit amount to the Tornado smart contract. The contract accepts the deposit and adds the commitment to its list of deposits.

```bash
./cli.js deposit tBTC <amount> --rpc <rpc endpoint>
./cli.js deposit tBTC 0.001 --rpc https://ropsten.infura.io/v3/27a9649f826b4e31a83e07ae09a87448
```

#### Withdraw tBTC on Ropsten

In order to do that the user should provide a proof that he or she possesses a secret to an unspent commitment from the smart contract’s list of deposits

```bash
./cli.js withdraw <note> <recipient> --rpc <rpc endpoint> --relayer <relayer endpoint>
./cli.js withdraw tornado-tbtc-0.001-3-0xbdae9a193bea274079ce3c2cfb2eede0d03ddf5aee8d069833e616a97036af0e2747cdfbde6bf87fafb17375646e9d2528c4576fe539ce1757055f30cbcc 0x1a5D6583295d56B09a4dA797275B07cC65cfC8c3 --rpc https://ropsten.infura.io/v3/27a9649f826b4e31a83e07ae09a87448 --relayer http://142.44.219.44:8000
```

#### Disclaimer:

This software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.
