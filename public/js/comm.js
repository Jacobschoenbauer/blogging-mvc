const newFormHandler = async (event) => {
  event.preventDefault();
  const com_name = document.querySelector("#comm-name").value.trim();
  const content = document.querySelector("#comm-desc").value.trim();

  if (com_name && content) {
    const response = await fetch("/api/comm", {
      method: "POST",
      body: JSON.stringify({ com_name, content }),
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
