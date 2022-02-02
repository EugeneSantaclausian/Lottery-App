import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

//getProvider returns a promise the same as window.ethereum

const provider = await detectEthereumProvider();

const web3 = new Web3(provider);

export default web3;
