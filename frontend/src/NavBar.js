import React from 'react';

const NavBar = ({ accounts,setAccounts}) =>{
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }
    return (
        <div className="flex justify-center p-2 mr-4 mt-4"> 
           
        

            <div className='mr-6'>About</div>
            <div className='mr-4'>Mint</div>
            <div className='mr-4'>Team</div>

            {isConnected ? (
                <button >Connected</button>
            ) : (
                <button  className='bg-cyan-600 hover:bg-cyan-700 p-1' onClick={connectAccount}>Connect</button>
            )}
            
        </div>
        
    );
};

export default NavBar;