export const Questionnaire = [
  {
    questionnaire: "How healthy you are",
    key:"Az",
    questions: [
      {
        id: 1,
        statype: "calories",
        question: "How often do you fidget your legs while sitting?",
        options: [
          { label: "Never", value: 0, id: 1 },
          { label: "Sometimes", value: 1, id: 2 },
          { label: "Very often", value: 2, id: 3 }
        ]
      },
      {
        id: 2,
        statype: "calories",
        question: "How frequently do you pace while on phone calls?",
        options: [
          { label: "I sit still", value: 0, id: 1 },
          { label: "Sometimes I walk", value: 1, id: 2 },
          { label: "I always walk", value: 2, id: 3 }
        ]
      },
      {
        id: 3,
        statype: "posture",
        question: "What is your usual sitting posture?",
        options: [
          { label: "Very upright", value: 2, id: 1 },
          { label: "Slightly slouched", value: 1, id: 2 },
          { label: "Completely slouched", value: 0, id: 3 }
        ]
      },
      {
        id: 4,
        statype: "steps",
        question: "How often do you take stairs instead of elevators?",
        options: [
          { label: "Never", value: 0, id: 1 },
          { label: "Sometimes", value: 1, id: 2 },
          { label: "Almost always", value: 2, id: 3 }
        ]
      },
      {
        id: 5,
        statype: "hydration",
        question: "How many glasses of water do you drink daily?",
        options: [
          { label: "Less than 3", value: 0, id: 1 },
          { label: "3 to 6", value: 1, id: 2 },
          { label: "7 or more", value: 2, id: 3 }
        ]
      },
      {
        id: 6,
        statype: "focus",
        question: "How often do you get distracted while working?",
        options: [
          { label: "Every few minutes", value: 0, id: 1 },
          { label: "Sometimes", value: 1, id: 2 },
          { label: "Rarely", value: 2, id: 3 }
        ]
      }
    ]
  },
  {
    questionnaire: "How focused you are",
      key:"Ax",

    questions: [
      {
        id: 1,
        statype: "focus",
        question: "Can you work without checking your phone?",
        options: [
          { label: "Not at all", value: 0, id: 1 },
          { label: "Occasionally", value: 1, id: 2 },
          { label: "Yes, easily", value: 2, id: 3 }
        ]
      },
      {
        id: 2,
        statype: "focus",
        question: "How often do you finish tasks on time?",
        options: [
          { label: "Rarely", value: 0, id: 1 },
          { label: "Sometimes", value: 1, id: 2 },
          { label: "Usually", value: 2, id: 3 }
        ]
      }
    ]
  }
];
