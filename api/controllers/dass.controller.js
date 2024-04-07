import dassModel from "../models/dassSchema.js";

export const dassHanlder = (req, res) => {
    let { depression_score, anxiety_score, stress_score } = req.body;
    depression_score = parseInt(depression_score);
    anxiety_score = parseInt(anxiety_score);
    stress_score = parseInt(stress_score);
    let depression_label = "", anxiety_label = "", stress_label = ""

    // Calculating Depression Label
    if (depression_score <= 9)
        depression_label = 'Normal';
    else if (depression_score <= 13)
        depression_label = 'Mild';
    else if (depression_score <= 20)
        depression_label = 'Moderate';
    else if (depression_score <= 27)
        depression_label = 'Severe';
    else if (depression_score >= 28)
        depression_label = 'Extremely Severe';
    else
        depression_label = 'Uncategorized';

    // Calculating Anxiety Label
    if (anxiety_score <= 7)
        anxiety_label = 'Normal';
    else if (anxiety_score <= 9)
        anxiety_label = 'Mild';
    else if (anxiety_score <= 14)
        anxiety_label = 'Moderate';
    else if (anxiety_score <= 19)
        anxiety_label = 'Severe';
    else if (anxiety_score >= 20)
        anxiety_label = 'Extremely Severe';
    else
        anxiety_label = 'Uncategorized';

    // Calculating Stress Label
    if (stress_score <= 14)
        stress_label = 'Normal';
    else if (stress_score <= 18)
        stress_label = 'Mild';
    else if (stress_score <= 25)
        stress_label = 'Moderate';
    else if (stress_score <= 33)
        stress_label = 'Severe';
    else if (stress_score >= 34)
        stress_label = 'Extremely Severe';
    else
        stress_label = 'Uncategorized';

    const newDass= new dassModel({
        depression_label,
        depression_score,
        anxiety_label,
        anxiety_score,
        stress_label,
        stress_score
    })

    res.json({
        depression_label,
        depression_score,
        anxiety_label,
        anxiety_score,
        stress_label,
        stress_score
    })
}