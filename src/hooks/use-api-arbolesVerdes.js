
export const sendEmail = async (name, email, content) => {
  try {
    const body = {
      name,
      email,
      content
    };

    const response = await fetch('http://localhost:5281/api/Email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return { status: 'error', code: response.status };
    }

    // Si llega aquí, el API devolvió 200 aunque no tenga body
    return { status: 'success' };

  } catch (error) {
    return { status: 'error', error: error.message };
  }
};
