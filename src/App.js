import React, { Component } from 'react';
import './App.css';
import ResultsPage from './components/results-page.compnent';
import CalculatorPage from './components/calculator-page.component';

class App extends Component {
  state = {
    resultMode: false,
  }

  constructor(props) {
    super(props);

    this.calculatorSubmit = this.calculatorSubmit.bind(this);
    this.backClick = this.backClick.bind(this);
  }

  calculatorSubmit(result) {
    this.setState({
      resultMode: true,
      bmi: result,
    });
  }

  backClick() {
    this.setState({ resultMode: false })
  }

  render() {
    return this.state.resultMode 
      ? <ResultsPage bmi={this.state.bmi} onBackClick={this.backClick} />
      : <CalculatorPage onSubmit={this.calculatorSubmit} />;
  }
}

export default App;