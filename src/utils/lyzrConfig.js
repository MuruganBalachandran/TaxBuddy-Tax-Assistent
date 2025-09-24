const LYZR_API_KEY = process.env.REACT_APP_LYZR_API_KEY;
const LYZR_USER_ID = process.env.REACT_APP_LYZR_USER_ID;
const LYZR_AGENT_ID = process.env.REACT_APP_LYZR_AGENT_ID;
const LYZR_API_URL = 'https://agent-prod.studio.lyzr.ai/v3/inference/chat/';

export const createLyzrCompletion = async (prompt, pdfContent) => {
  try {
    const response = await fetch(LYZR_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': LYZR_API_KEY
      },
      body: JSON.stringify({
        user_id: LYZR_USER_ID,
        agent_id: LYZR_AGENT_ID,
        session_id: LYZR_AGENT_ID,
        message: `Context from PDF: ${pdfContent}\n\nQuestion: ${prompt}`
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data.response || 'No response from the agent';
  } catch (error) {
    console.error('Lyzr API Error:', error);


    
    throw new Error(error.message || 'Failed to get response from Lyzr AI');
  }
};
