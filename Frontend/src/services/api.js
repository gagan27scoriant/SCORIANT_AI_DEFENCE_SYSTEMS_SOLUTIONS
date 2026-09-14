const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8787';

// Client-side email validation helper
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length < 5 || trimmed.length > 254) return false;
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return re.test(trimmed);
}

export async function submitContactForm(data) {
  if (!data.email || !isValidEmail(data.email)) {
    throw new Error('Please enter a valid email address before submitting.');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('[API] Contact submission error:', error);
    throw error;
  }
}

export async function submitCareerApplication(formDataObj, file) {
  if (!formDataObj.email || !isValidEmail(formDataObj.email)) {
    throw new Error('Please enter a valid email address before submitting your application.');
  }

  try {
    const formData = new FormData();
    Object.entries(formDataObj).forEach(([k, v]) => {
      if (v !== undefined && v !== null) {
        formData.append(k, v);
      }
    });

    if (file) {
      formData.append('resume', file);
    }

    const response = await fetch(`${API_BASE_URL}/api/careers`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('[API] Career application error:', error);
    throw error;
  }
}

export async function submitDemoRequest(data) {
  if (!data.email || !isValidEmail(data.email)) {
    throw new Error('Please enter a valid official email address before requesting a demo.');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/demo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('[API] Demo request error:', error);
    throw error;
  }
}

