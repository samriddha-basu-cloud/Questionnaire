import React from 'react';

/**
 * Component for grading nutrition-related answers.
 * 
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.answers - Array of answer objects.
 * @param {Function} props.gradeAnswer - Function to handle grading of an answer.
 * @returns {JSX.Element} Rendered form for grading nutrition answers.
 */
const NutritionAnswerGrading = ({ answers, gradeAnswer }) => {
  const nutritionScores = [
    { value: '1', label: 'Excellent' },
    { value: '2', label: 'Good' },
    { value: '3', label: 'Satisfactory' },
    { value: '4', label: 'Needs Improvement' },
    { value: '5', label: 'Unsatisfactory' }
  ];

  return (
    <section className="nutrition-grading-section">
      <h2 className="nutrition-grading-heading">Grade</h2>
      <ul className="nutrition-answer-list">
        {answers.map((answer, index) => (
          <li key={`nutrition-answer-${index}`} className="nutrition-answer-item">
            <p className="nutrition-question"><strong>Nutrition Question:</strong> {answer.question}</p>
            <p className="nutrition-answer"><strong>Response:</strong> {answer.answer}</p>
            <select 
              onChange={(event) => gradeAnswer(index, event.target.value)} 
              className="nutrition-grade-select"
              aria-label={`Grade for answer ${index + 1}`}
            >
              <option value="">Select Score</option>
              {nutritionScores.map((score) => (
                <option key={score.value} value={score.value}>
                  {score.value} - {score.label}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NutritionAnswerGrading;
