document.addEventListener("DOMContentLoaded", function() {
    fetch("components/header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
      });
  
    fetch("components/navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
      });

    fetch("components/footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      });
  
    fetch("components/collections-card.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("collections").innerHTML = data;
      });
  
    // fetch("data/items.json")
    //   .then(response => response.json())
    //   .then(items => {
    //     const content = document.getElementById("content");
    //     items.forEach(item => {
    //       fetch("components/item-card.html")
    //         .then(response => response.text())
    //         .then(template => {
    //           const html = template
    //             .replace("{title}", item.title)
    //             .replace("{description}", item.description)
    //             .replace("{date}", item.date);
    //           content.innerHTML += html;
    //         });
    //     });
    //   });

    fetch("data/contact-items.json")
      .then(response => response.json())
      .then(items => {
        const Ccontent = document.getElementById("contact-details");
        items.forEach(item => {
          fetch("components/contact-card.html")
            .then(response => response.text())
            .then(template => {
              const contactDet = template
                .replace("{header}", item.header)
                .replace("{details}", item.details)
                .replace("{link}", item.link);
              Ccontent.innerHTML += contactDet;
            });
        });
      });


    fetch("data/team.json")
      .then(response => response.json())
      .then(items => {
        const Ccontent = document.getElementById("team");
        items.forEach(item => {
          fetch("components/team-members.html")
            .then(response => response.text())
            .then(template => {
              const contactDet = template
                .replace("{name}", item.name)
                .replace("{title}", item.title)
                // .replace("{link}", item.link);
              Ccontent.innerHTML += contactDet;
            });
        });
      });
  });