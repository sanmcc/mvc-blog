// form handler for comment text
//delete comment 
//button handlers

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const text = document.querySelector('#text').value.trim();

    if (text) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to post comment');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.comment-list')
    .addEventListener('click', delButtonHandler);