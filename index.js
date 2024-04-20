// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => {
        const userId = document.createElement("p");
        userId.textContent = data.id;
        document.body.appendChild(userId);
      })
      .catch(error => {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
      });
  }
  