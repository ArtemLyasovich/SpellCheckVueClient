export const checkSpelling = async (text, language) => {
  try {
    const response = await fetch('http://localhost:5000/api/grammar/spellcheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        language: language,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error checking spelling:', error);
    throw error;
  }
};

export const checkGrammar = async (text, language) => {
  try {
    const response = await fetch('http://localhost:5000/api/grammar/grammarcheck', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        language: language,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error checking grammar:', error);
    throw error;
  }
};
