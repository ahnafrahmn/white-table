
fetch("data.json")
.then(response => response.json()).then(data =>{
    const topics = document.querySelector(".topics")

    data.forEach(topic => {
        const topicBox = document.createElement("div");
        const topicName = document.createElement("div");
        const topicDetails = document.createElement("div");
        topicBox.classList.add("topicBox");
        topicName.classList.add("topicName");
        topicDetails.classList.add("topicDetails");
        topicName.innerHTML = topic.name;
        topicDetails.innerHTML = topic.details;
        topicDetails.style.display = "none";
        topicBox.appendChild(topicName);
        topicBox.appendChild(topicDetails);
        topics.appendChild(topicBox);
    });

    // For expanding --
    const items = document.querySelectorAll(".topics > .topicBox")
    items.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.classList.contains("active")) {
                document.querySelector(".active > .topicDetails").style.display = "none";
                item.classList.remove("active");
            } else {
                items.forEach((e) => {
                    e.classList.remove("active");
                });
                item.classList.toggle("active");
                document.querySelector(".active > .topicDetails").style.display = "block";
            }
        });
    });
    //--

});



// For auto slide down -
setTimeout(function () {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, 1200); // 1000 milliseconds = 1 seconds

