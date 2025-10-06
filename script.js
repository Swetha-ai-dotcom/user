fetch("blogs.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("blog-container");
    data.forEach(blog => {
      const div = document.createElement("div");
      div.innerHTML = `<h2>${blog.title}</h2><p>${blog.content}</p><hr>`;
      container.appendChild(div);
    });
  });
