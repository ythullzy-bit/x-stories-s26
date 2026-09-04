// ========================================
// ELEMENT
// ========================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const searchInput = document.getElementById("searchInput");


// ========================================
// MENU ☰
 // ========================================

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");
    menuButton.classList.toggle("open");

    const lines =
        menuButton.querySelectorAll("span");

    if (menuButton.classList.contains("open")) {

        lines[0].style.transform =
            "rotate(45deg) translate(5px, 5px)";

        lines[1].style.opacity = "0";

        lines[2].style.transform =
            "rotate(-45deg) translate(5px, -5px)";

    } else {

        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";

    }

});


// ========================================
// KLIK DI LUAR MENU
// ========================================

document.addEventListener("click", function (event) {

    if (
        !navMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        navMenu.classList.remove("active");
        menuButton.classList.remove("open");

        const lines =
            menuButton.querySelectorAll("span");

        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";
    }

});


// ========================================
// SEARCH MENU
// ========================================

searchInput.addEventListener("input", function () {

    const keyword =
        searchInput.value.toLowerCase().trim();

    const menuItems =
        navMenu.querySelectorAll("li");

    menuItems.forEach(function (item) {

        const link = item.querySelector("a");

        // Jangan sembunyikan judul sosial media
        if (!link) {
            return;
        }

        const text =
            link.textContent.toLowerCase();

        if (text.includes(keyword)) {

            item.style.display = "";

        } else {

            item.style.display = "none";

        }

    });

    // Buka menu ketika mulai mencari
    if (keyword.length > 0) {

        navMenu.classList.add("active");

    }

});


// ========================================
// KLIK LINK → TUTUP MENU
// ========================================

const links =
    navMenu.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");
        menuButton.classList.remove("open");

    });

});
// ========================================
// POPUP ANGGOTA
// ========================================

const memberCards =
    document.querySelectorAll(".member-card");

const memberModal =
    document.getElementById("memberModal");

const modalClose =
    document.getElementById("modalClose");

const modalPhoto =
    document.getElementById("modalPhoto");

const modalName =
    document.getElementById("modalName");

const modalRole =
    document.getElementById("modalRole");

const modalInfo =
    document.getElementById("modalInfo");


// KLIK KARTU ANGGOTA

memberCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const name =
            card.dataset.name;

        const role =
            card.dataset.role;

        const info =
            card.dataset.info;

        const photo =
            card.dataset.photo;


        modalName.textContent =
            name;

        modalRole.textContent =
            role;

        modalInfo.textContent =
            info;

        modalPhoto.src =
            photo;


        memberModal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });

});


// TUTUP POPUP

function closeMemberModal() {

    memberModal.classList.remove("active");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeMemberModal
);


// KLIK AREA LUAR POPUP

memberModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === memberModal
        ) {

            closeMemberModal();

        }

    }
);


// TOMBOL ESC

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeMemberModal();

        }

    }
);