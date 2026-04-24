// Frontend: Fetch and display Hello World message
async function fetchHello() {
  try {
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();
    document.getElementById('message').textContent = data.message;
  } catch (error) {
    document.getElementById('message').textContent = 'Error: Could not fetch message';
    console.error('Error fetching hello:', error);
  }
}

// Fetch on page load
fetchHello();
