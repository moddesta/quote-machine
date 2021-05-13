import React from 'react';
import './QuoteBox.css'; 
import Button from './Button';
import { FacebookShareButton, FacebookIcon } from 'react-share';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          quotes: [],
          selectedQuoteIndex: null,
          color: 'red'
        }

    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
}

    componentDidMount() {
       fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json') 
        .then(data => data.json())
        .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
    }

    get selectedQuote() {
        if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
            return undefined;
        }
        return this.state.quotes[this.state.selectedQuoteIndex];
    }

    generateNewQuoteIndex = () => {
        if(!this.state.quotes.length) {
            return;
        } 
        return Math.floor(Math.random() * this.state.quotes.length);
    } 

    componentDidUpdate(prevProps, prevState){
        const { color } = this.state;
      
        if(prevProps.color !== color) {
            const newBodyColor = document.querySelector("body");
            newBodyColor.style.backgroundColor = color;
          }
      }

    assignNewQuoteIndex = () => {
        this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
        this.setState({ color: '#' + Math.floor(Math.random()*16777215).toString(16) });
    }

render() {
    console.log(this.state.selectedQuoteIndex);
    return (
        <div style={{ color: this.state.color }}id="App">
            <div id="quote-box" className="ui container"> 
                <div id="text">{this.selectedQuote ? `"${this.selectedQuote.quote}"` : ''}</div>
                <div id="author">{this.selectedQuote ? this.selectedQuote.author : ''}</div>
                
                <div className="flex-container">
                <FacebookShareButton 
                    url={"https://www.facebook.com/sharer/sharer.php?u=#url"} 
                    quote={this.selectedQuote ? `"${this.selectedQuote.quote}"` + " - " + this.selectedQuote.author : ''} 
                    className="share-button">
                    <FacebookIcon size={25} round />
                </FacebookShareButton>
                <Button color={this.state.color} buttonDisplayName="Next Quote" clickHandler={this.assignNewQuoteIndex}/>
                </div>
            </div>
        </div>
        );
    }
};

export default App;