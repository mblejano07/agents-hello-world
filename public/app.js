// Frontend: Fetch and display Hello World message
const messageElement = document.getElementById('message');

async function fetchHello() {
  // Show loading state
  messageElement.textContent = 'Loading';
  messageElement.className = 'message loading';
  
  try {
    const response = await fetch('http://localhost:3000/api/hello');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.message) {
      messageElement.textContent = data.message;
      messageElement.className = 'message success';
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    // Error handling - generic message that doesn't leak internals
    messageElement.textContent = 'Could not fetch message';
    messageElement.className = 'message error';
    console.error('Error fetching hello:', error);
  }
}

// Fetch on page load
fetchHello();
