const newFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comm-desc").value.trim();

  if (content) {
    const response = await fetch(`/api/comm`, {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(content);
    } else {
      alert("Failed to create comm");
    }
  }
};

document
  .querySelector(".new-comm-form")
  .addEventListener("submit", newFormHandler);
