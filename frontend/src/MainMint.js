import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import roboPunksNFT from './RoboPunksNFT.json';

const roboPunksNFTAddress = "0xE76462b7d838C64467b7a1498E1E314C0dd9Bdb9";


const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);


    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount),{
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                });
                console.log('response: ', response);

            } catch (err) {
                console.log("error:", err)

            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div className='justify-center mt-40 grid grid-row-4'>
            <h1 className='text-2xl mb-3'>MetaMoney</h1>
            <p className='pl-22 pr-22 mb-5 meta-text'>METAMONEY HELPS GAMERS EARN REAL MONEY WHILE DOING WHAT THEY LOVE.PLAY GAMES LIKE AXIE INFINITY, PUBG,CLASH OF CLANS, CALL OF DUTY </p>
            {isConnected ? (
                <div>
                    <div>
                        <button className='bg-cyan-800 shadow-lg shadow-black p-2 hover:bg-cyan-600' onClick={handleDecrement} >-</button>
                        <input className='text-black p-1 text-center' type="number" value={mintAmount} />
                        <button className='bg-cyan-800 shadow-lg shadow-black p-2 hover:bg-cyan-600' onClick={handleIncrement}>+</button>
                    </div>
                    <button className='bg-cyan-800 p-3 mt-5 hover:bg-cyan-600 shadow-lg shadow-black rounded-lg' onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>YOU MUST BE CONNECTED TO MINT</p>
            )}
        </div>
    );
        
        
    
};

export default MainMint;