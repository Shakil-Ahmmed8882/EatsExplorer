import React from 'react';

const FAQ = () => {
  const foodFAQs = [
    "What is the importance of a balanced diet?",
    "How can I improve my cooking skills?",
    "What are some common food allergies?",
    "How do I read food labels effectively?",
    "What is the difference between organic and non-organic foods?",
    "What are some healthy snack options?",
    "How can I reduce food waste at home?",
    "What are the basic food safety practices?",
    "What are the health benefits of drinking water?",
    "How can I make nutritious choices while dining out?"
  ];

  const foodAnswers = [
    "A balanced diet is essential for providing your body with the necessary nutrients for optimal health.",
    "You can improve your cooking skills by practicing different recipes and techniques.",
    "Common food allergies include nuts, dairy, soy, and gluten.",
    "Reading food labels involves checking for ingredients, nutritional information, and expiration dates.",
    "Organic foods are grown without synthetic pesticides or fertilizers, while non-organic foods may use them.",
    "Healthy snack options include fruits, vegetables, nuts, and yogurt.",
    "You can reduce food waste by meal planning and using leftovers creatively.",
    "Basic food safety practices include washing hands, proper cooking temperatures, and refrigeration.",
    "Drinking water has numerous health benefits, including hydration and toxin elimination.",
    "Making nutritious choices while dining out involves selecting balanced menu items and controlling portion sizes."
  ];

  return (
    <div>
      {foodFAQs.map((question, idx) => {
        return (
          <div key={idx} className='space-y-4'>
            <h3 className="text-2xl font-bold">{question}</h3>
            <p>{foodAnswers[idx]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;