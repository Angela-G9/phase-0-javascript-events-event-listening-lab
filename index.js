function addingEventListener() {
    const button = document.getElementById('button'); 
    if (button) {
      button.addEventListener('click', () => {
        alert('I was clicked!');
      });
    } else {
      console.error("Element with id 'button' not found.");
    }
  }
  