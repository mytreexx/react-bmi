import React from 'react';

function ResultsPage({ bmi, onBackClick }) {
    const arrowClass =
      bmi < 18.5 ? 'under-weight'
        : bmi < 24.9 ? 'normal-weight'
          : bmi < 30 ? 'over-weight'
            : bmi < 35 ? 'obese-class-i'
              : bmi < 40 ? 'obese-class-ii'
                : 'obese-class-iii';

    return (
      <div className="card border-success mb-3">
        <div className="card-header">BMI Calculator</div>

        <h1 className="result-title">Your BMI is: {bmi.toFixed(2)}</h1>
        <div className={arrowClass}>
          <h6>You are here</h6>
          <i className="fas fa-long-arrow-alt-down arrow"></i>
        </div>


        <img src="http://artoftall.com/wp-content/uploads/2016/07/bmi-categories_med.jpeg" alt="BMI Graph" />

        <button className="btn btn-success back-btn" onClick={onBackClick}>
          Back
        </button>
      </div>
    )
}

export default ResultsPage;