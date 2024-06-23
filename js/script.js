document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  fetch("/components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    });

  fetch("/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });

  // fetch("/components/collections-card.html")
  //   .then(response => response.text())
  //   .then(data => {
  //     document.getElementById("allCollections").innerHTML = data;
  //   });

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
  if (document.getElementById("contact-details")) {
    fetch("/data/contact-items.json")
      .then((response) => response.json())
      .then((items) => {
        const Ccontent = document.getElementById("contact-details");
        items.forEach((item) => {
          fetch("/components/contact-card.html")
            .then((response) => response.text())
            .then((template) => {
              const contactDet = template
                .replace("{header}", item.header)
                .replace("{details}", item.details)
                .replace("{link}", item.link);
              Ccontent.innerHTML += contactDet;
            });
        });
      });
  }

  if (document.getElementById("team")) {
    fetch("/data/team.json")
      .then((response) => response.json())
      .then((items) => {
        const Ccontent = document.getElementById("team");
        items.forEach((item) => {
          fetch("/components/team-members.html")
            .then((response) => response.text())
            .then((template) => {
              const contactDet = template
                .replace("{name}", item.name)
                .replace("{title}", item.title);
              // .replace("{link}", item.link);
              Ccontent.innerHTML += contactDet;
            });
        });
      });
  }

  if (document.getElementById("collections")) {
    fetch("/data/collection-items.json")
      .then((response) => response.json())
      .then((items) => {
        const CContent = document.getElementById("collections");
        items.slice(0, 3).forEach((item) => {
          fetch("/components/collection-card.html")
            .then((response) => response.text())
            .then((template) => {
              const collDet = template
                .replace("{link}", item.link)
                .replaceAll("{headr}", item.title)
                .replace("{img1}", item.img1)
                .replace("{img2}", item.img2)
                .replace("{details}", item.miniDetails);
              CContent.innerHTML += collDet;
            });
        });
      });
  }

  if (document.getElementById("allCollections")) {
    fetch("/data/collection-items.json")
      .then((response) => response.json())
      .then((items) => {
        const ontent = document.getElementById("allCollections");
        items.forEach((item) => {
          fetch("/components/collections-card.html")
            .then((response) => response.text())
            .then((template) => {
              const collsDet = template
                .replace("{link}", item.link)
                .replace("{img1}", item.img1)
                .replaceAll("{headr}", item.title)
                .replace("{desc}", item.miniDetails);
              ontent.innerHTML += collsDet;
            });
        });
      });
  }
});
