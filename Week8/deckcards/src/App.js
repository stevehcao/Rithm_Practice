import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    value: '',
    suit: '',
    imgUrl: '',
    deckId: '',
    loadingMsg: 'loading...',
    cardRemaining: '',
    cardArr: []
  };

  componentDidMount = async () => {
    try {
      //console.log(this.state.deckId);
      if (this.state.deckId) {
        const newCard = await axios.get(
          `https://deckofcardsapi.com/api/deck/${
            this.state.deckId
          }/draw/?count=1`
        );
        this.setState({
          value: newCard.data.cards[0].value,
          suit: newCard.data.cards[0].suit,
          imgUrl: newCard.data.cards[0].image,
          loadingMsg: '',
          cardRemaining: newCard.data.remaining
        });
      } else {
        const response = await axios.get(
          'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
        );
        // console.log(response);
        this.setState({ deckId: response.data.deck_id });
        // const oneCard = await axios.get(
        //   `https://deckofcardsapi.com/api/deck/${
        //     this.state.deckId
        //   }/draw/?count=1`
        // );
        // // console.log(oneCard);
        // this.setState({
        //   value: oneCard.data.cards[0].value,
        //   suit: oneCard.data.cards[0].suit,
        //   imgUrl: oneCard.data.cards[0].image,
        //   loadingMsg: '',
        //   cardRemaining: oneCard.data.remaining
        // });
      }
    } catch (e) {
      this.setState({
        loadingMsg: 'did not get deck ID'
      });
    }
  };

  render() {
    if (this.state.loadingMsg.length === 0) {
      return (
        <div>
          <img src={this.state.imgUrl} />
          <p>
            {this.state.value} {this.state.suit} {this.state.cardRemaining}
          </p>
          {this.state.deckId}
          <button onClick={this.componentDidMount}>Get a Card</button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.componentDidMount}>Get a Card</button>
      </div>
    );
  }
}

export default App;
