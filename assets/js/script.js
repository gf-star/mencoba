/* =========================================
   OPEN INVITATION
========================================= */

function openInvitation() {

    const opening =
        document.getElementById("opening");

    const mainContent =
        document.getElementById("main-content");

    const music =
        document.getElementById("backgroundMusic");


    if (mainContent) {
        mainContent.classList.remove("hidden");
    }

    if (opening) {
        opening.classList.add("hide");
    }


    /* PLAY MUSIC */

    if (music) {

        music.volume = 0.6;

        music.play()
            .then(() => {

                const button =
                    document.getElementById("musicButton");

                if (button) {
                    button.innerHTML = "🎵";
                }

            })
            .catch(() => {

                console.log(
                    "Browser menunggu izin musik."
                );

            });
    }

}


/* =========================================
   COUNTDOWN
========================================= */

const weddingDate =
    new Date(
        "September 12, 2026 08:00:00 GMT+0700"
    ).getTime();


function updateCountdown() {

    const days =
        document.getElementById("days");

    const hours =
        document.getElementById("hours");

    const minutes =
        document.getElementById("minutes");

    const seconds =
        document.getElementById("seconds");


    if (
        !days ||
        !hours ||
        !minutes ||
        !seconds
    ) {
        return;
    }


    const now =
        new Date().getTime();


    const distance =
        weddingDate - now;


    if (distance <= 0) {

        days.innerText = "00";
        hours.innerText = "00";
        minutes.innerText = "00";
        seconds.innerText = "00";

        return;
    }


    const dayValue =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hourValue =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minuteValue =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const secondValue =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    days.innerText =
        String(dayValue).padStart(2, "0");

    hours.innerText =
        String(hourValue).padStart(2, "0");

    minutes.innerText =
        String(minuteValue).padStart(2, "0");

    seconds.innerText =
        String(secondValue).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================
   MUSIC
========================================= */

function toggleMusic() {

    const music =
        document.getElementById(
            "backgroundMusic"
        );

    const button =
        document.getElementById(
            "musicButton"
        );


    if (!music) {
        return;
    }


    if (music.paused) {

        music.play()
            .then(() => {

                if (button) {
                    button.innerHTML = "🎵";
                }

            })
            .catch(() => {

                alert(
                    "Musik belum bisa diputar. Pastikan file music.mp3 ada di folder assets."
                );

            });

    } else {

        music.pause();

        if (button) {
            button.innerHTML = "🔇";
        }

    }

}


/* =========================================
   GALLERY POPUP
========================================= */

function openImage(imageSrc) {

    const modal =
        document.getElementById(
            "imageModal"
        );

    const image =
        document.getElementById(
            "modalImage"
        );


    if (!modal || !image) {
        return;
    }


    image.src = imageSrc;

    modal.classList.add("show");

}


function closeImage() {

    const modal =
        document.getElementById(
            "imageModal"
        );


    if (modal) {
        modal.classList.remove("show");
    }

}


/* =========================================
   RSVP
========================================= */

function sendRSVP() {

    const name =
        document.getElementById(
            "guestName"
        ).value.trim();


    const count =
        document.getElementById(
            "guestCount"
        ).value;


    const attendance =
        document.getElementById(
            "attendance"
        ).value;


    const message =
        document.getElementById(
            "guestMessage"
        ).value.trim();


    const result =
        document.getElementById(
            "rsvpMessage"
        );


    if (!name) {

        result.innerText =
            "Silakan masukkan nama terlebih dahulu.";

        return;
    }


    if (!attendance) {

        result.innerText =
            "Silakan pilih kehadiran.";

        return;
    }


    /*
       GANTI NOMOR WHATSAPP DI BAWAH
       DENGAN NOMOR KAMU.

       Contoh:
       628123456789
    */

    const phone =
        "628123456789";


    const text =
        `Halo Ridha & Dinar 👋

Nama: ${name}
Jumlah tamu: ${count}
Kehadiran: ${attendance}

Ucapan:
${message}`;


    const whatsappURL =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(text);


    window.open(
        whatsappURL,
        "_blank"
    );


    result.innerText =
        "Konfirmasi akan dibuka melalui WhatsApp.";

}


/* =========================================
   ESC UNTUK TUTUP FOTO
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeImage();
        }

    }
);