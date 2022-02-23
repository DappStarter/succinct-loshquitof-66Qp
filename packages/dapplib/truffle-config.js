require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remember mistake inflict drum front squeeze'; 
let testAccounts = [
"0xb8c40c37774eb7ca06ac51241f6e21ddf5f6b63a137b5595714c9b42751dcc03",
"0x83dea3f154b6d6138f590640f510c9085cb129966fc1732a43a3da0aea3f8d03",
"0xd04750fcaa209937d7e661d94d7c16a6c8a045d9203fddbcd482c23d3d3c267d",
"0xf8218179b10d75ef29d3da7a3695721afd8d6a675f05d59dc1f718b97b3211eb",
"0xe425566ec1d2129ac556d8ba06a0a9a3c63eb5f84a0da05bdb8d9bdba307bad1",
"0x7b215c4c6ed8b9c0c929c07da6bc7b510d2e68149ffbd8ca04b7ac85ff916885",
"0xf9c3f564bd4ccf22cbc0e61bfab8f07f3c2438007b8df2de1151591264097336",
"0x3abfc3ada020e111a7d801a1740320b041179197f06cf8b92d77403d4ba47ebb",
"0xd6f57f0106493e3acd191a2a0e6ca04815785f06a5e557fb9b491fc5d2e83d36",
"0x402f36cef177f0fec1d61741ab279308ebe42bd2e45dd9a36dcbd6e8908e26c1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

