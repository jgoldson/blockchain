import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoLarge.png';

class App extends Component {
    state = { walletInfo: {} };

    componentDidMount() {
        fetch('http://localhost:3000/api/wallet-info')
        .then(response => response.json())
        .then(json => this.setState({ walletInfo: json}));
    }

    render() {
        const { address, balance } = this.state.walletInfo;
        return (
            <div className='App'>
                <div>
                    <img className='logo' src={logo}></img>
                    <br />
                </div>
                <div>Welcome to SHUECOIN</div>
                <br />
                <div><Link to='/blocks'>Blocks</Link></div>
                <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div>
                <br />
                <div className='WalletInfo'>
                <div>Address: {address}</div>
                <div>Balance: {balance}</div>
                </div>
                
                
            </div>
        );
    }
}

export default App;