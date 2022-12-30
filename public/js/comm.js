const newFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#comm-name").value.trim();
  const content = document.querySelector("#comm-desc").value.trim();

  if (content && name) {
    const response = await fetch(`/api/blog`, {
      method: "POST",
      body: JSON.stringify({ content, name }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create comm");
    }
  }
};

document
  .querySelector(".new-comm-form")
  .addEventListener("submit", newFormHandler);
