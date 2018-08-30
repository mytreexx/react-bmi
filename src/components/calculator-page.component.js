import React, { Component } from 'react';

class CalculatorPage extends Component {
    state = {
        weight: '',
        height: '',
    }

    constructor() {
        super();

        this.weightChange = this.weightChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.submit = this.submit.bind(this);   
    }

    weightChange(event) {
        this.setState({ weight: event.target.value });
    }

    heightChange(event) {
        this.setState({ height: event.target.value });
    }

    submit() {
        if (this.state.height > 0 && this.state.weight > 0) {
            const bmiFormula = this.state.weight / (this.state.height / 100 * this.state.height / 100)
            this.props.onSubmit(bmiFormula);
        }
    }

    render() {
        return (
            <div className="card border-success mb-3" id="cardCalc">
                <div className="card-header">BMI Calculator</div>

                <div className="form-group">
                    <label><i className="fas fa-weight"></i> Weight:</label>
                    <input type="number" autoFocus className="form-control" value={this.state.weight} onChange={this.weightChange} />
                    <small className="form-text text-muted">(In kilograms)</small>
                </div>

                <div className="form-group">
                    <label><i className="fas fa-ruler-vertical"></i> Height:</label>
                    <input type="number" className="form-control" value={this.state.height} onChange={this.heightChange} />
                    <small className="form-texts text-muted">(In centimeters)</small>
                </div>

                <button className="calc-btn btn btn-success" onClick={this.submit}>Calculate!</button>
            </div>
        )
    }
}

export default CalculatorPage;