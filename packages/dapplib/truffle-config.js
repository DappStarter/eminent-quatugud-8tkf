require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth shift promote inner private tail siren'; 
let testAccounts = [
"0xd3b1e64818a9fc0e729d22518b45f9fb4b093b6abe19da5901674df420475fa7",
"0x464a96d57f8fbdfa24467e2abb1564c6a1d0b62e084c06b60bf629c5809375ef",
"0x8c748fed7d9058e55d401395762a444c84f3990d1d1c056c0960a3591f32f337",
"0xad52a68a93b258408b41399e8f609a2bb084fa00fa6aab5136c0b8d73b66123d",
"0x14242ec988947577cc494d6bcd19774797113a2b2cc17f464f2d1c7bea169251",
"0x3c1d50da9e8b1654880ccd636285eb3a89f4c1a0e78b7a8e58fec90ad05a53f8",
"0x2c892f17fd6960961928799e3ab8e3012e904b33d3cf12f382ec31ae45bca66e",
"0xa71dcbd5e5cbdfbe71d89f15c58cb48618828d2770ebcfc3a06d658146eabc99",
"0xe8f4cfe619dc73b0bff458b4a416aacc4d44a57977618207e72231108a26deb4",
"0x2fcd67970af9089a4fb854010c6714a2820788159dc52802dd94cd0bd1ecec63"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


