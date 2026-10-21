
/*
 * PENGATURAN UNDANGAN
 * Ubah data di bagian CONFIG ini sebelum website dipublikasikan.
 * Nomor WhatsApp gunakan kode negara tanpa tanda +.
 */

const CONFIG = {
  groom: {
    firstName: "Fahrul",
    fullName: "Fahrul Roziqin Akbar",
    father: "Bapak Didi Harijanto",
    mother: "Ibu Catur Retno Widiastutik",
    birthOrder: "Putra ke-2"
  },

  bride: {
    firstName: "Bianca",
    fullName: "Bianca Sabrina Hartono",
    father: "Bapak Mugi Hartono",
    mother: "Ibu Eni Widayanti",
    birthOrder: "Putri ke-1"
  },

  photos: {
    groom: "assets/photos/bianca.png",
    bride: "assets/photos/fahrul.png"
  },

  dateISO: "2026-12-12T07:00:00+07:00",
  dateLabel: "Sabtu, 12 Desember 2026",
  dateLabelUpper: "SABTU, 12 DESEMBER 2026",
  locationShort: "Madiun, Jawa Timur",
  venueName: "Hotel Mercure Madiun",
  venueAddress: "Hotel Mercure Madiun, Madiun, Jawa Timur.",
  mapsUrl: "https://maps.app.goo.gl/GhT1YPx7s24GS9UU9",
  akadTime: "07.00 WIB – selesai",
  receptionTime: "10.00 WIB – selesai",
  whatsappNumber: "62859183999258"
};

const $ = (id) => document.getElementById(id);


// ============================================
// FUNGSI DASAR
// ============================================

function setText(id, value) {
  const element = $(id);

  if (element && value !== undefined && value !== null) {
    element.textContent = value;
  }
}


// ============================================
// FOTO PORTRAIT PENGANTIN
// Sesuai dengan struktur index.html
// .portrait-groom dan .portrait-bride
// ============================================

function setPortrait(selector, src, label) {
  const portrait = document.querySelector(selector);

  if (!portrait) {
    console.warn(
      `Elemen portrait ${selector} tidak ditemukan di HTML.`
    );
    return;
  }

  // Gunakan background-image karena HTML memakai elemen DIV.
  portrait.style.backgroundImage =
    `url("${src}")`;

  portrait.style.backgroundSize = "cover";
  portrait.style.backgroundPosition = "center";
  portrait.style.backgroundRepeat = "no-repeat";

  portrait.setAttribute("role", "img");
  portrait.setAttribute("aria-label", label);

  // Periksa apakah file gambar benar-benar tersedia.
  const imageChecker = new Image();

  imageChecker.onload = () => {
    console.info(`Foto ${label} berhasil dimuat.`);
  };

  imageChecker.onerror = () => {
    console.error(
      `Foto ${label} gagal dimuat. Periksa lokasi file: ${src}`
    );
  };

  imageChecker.src = src;
}


// ============================================
// TERAPKAN KONFIGURASI UNDANGAN
// ============================================

function applyConfig() {
  document.title =
    `Undangan Pernikahan | ${CONFIG.groom.firstName} & ${CONFIG.bride.firstName}`;

  // Nama di sampul dan hero
  setText("coverGroom", CONFIG.groom.firstName);
  setText("coverBride", CONFIG.bride.firstName);
  setText("heroGroom", CONFIG.groom.firstName);
  setText("heroBride", CONFIG.bride.firstName);

  // Nama lengkap dan keluarga
  setText("groomName", CONFIG.groom.fullName);
  setText("brideName", CONFIG.bride.fullName);

  setText("groomBirthOrder", CONFIG.groom.birthOrder);
  setText("brideBirthOrder", CONFIG.bride.birthOrder);

  setText("groomFather", CONFIG.groom.father);
  setText("groomMother", CONFIG.groom.mother);
  setText("brideFather", CONFIG.bride.father);
  setText("brideMother", CONFIG.bride.mother);

  // Tanggal pernikahan
  setText("coverDate", CONFIG.dateLabelUpper);
  setText("heroDate", CONFIG.dateLabel);

  const dateWithoutDay =
    CONFIG.dateLabel.replace(/^[^,]+,\s*/, "");

  setText("akadDate", dateWithoutDay);
  setText("receptionDate", dateWithoutDay);

  setText(
    "akadDay",
    CONFIG.dateLabel.split(",")[0]
  );

  setText(
    "receptionDay",
    CONFIG.dateLabel.split(",")[0]
  );

  // Lokasi dan waktu
  setText("heroLocationShort", CONFIG.locationShort);
  setText("venueName", CONFIG.venueName);
  setText("venueAddress", CONFIG.venueAddress);

  setText("akadPlace", CONFIG.venueName);
  setText("receptionPlace", CONFIG.venueName);

  setText("akadTime", CONFIG.akadTime);
  setText("receptionTime", CONFIG.receptionTime);

  // Google Maps
  const mapsLink = $("mapsLink");

  if (mapsLink) {
    mapsLink.href = CONFIG.mapsUrl;
    mapsLink.target = "_blank";
    mapsLink.rel = "noopener noreferrer";
  }

  // FOTO PENGANTIN
  // Selector disesuaikan dengan index.html yang kamu kirim.
  setPortrait(
    ".portrait-groom",
    CONFIG.photos.groom,
    `Foto ${CONFIG.groom.fullName}`
  );

  setPortrait(
    ".portrait-bride",
    CONFIG.photos.bride,
    `Foto ${CONFIG.bride.fullName}`
  );

  // Inisial pada amplop undangan
  const envelopeInitials =
    document.querySelector(".envelope-letter b");

  if (envelopeInitials) {
    const groomInitial =
      CONFIG.groom.firstName.trim().charAt(0).toUpperCase();

    const brideInitial =
      CONFIG.bride.firstName.trim().charAt(0).toUpperCase();

    envelopeInitials.innerHTML =
      `${groomInitial} <em>&</em> ${brideInitial}`;
  }
}


// ============================================
// COUNTDOWN PERNIKAHAN
// ============================================

function updateCountdown() {
  const eventTime =
    new Date(CONFIG.dateISO).getTime();

  const now = Date.now();
  const distance = eventTime - now;

  if (Number.isNaN(eventTime)) {
    setText(
      "countdownMessage",
      "Silakan periksa tanggal acara pada script.js."
    );
    return;
  }

  if (distance <= 0) {
    ["days", "hours", "minutes", "seconds"]
      .forEach((id) => setText(id, "00"));

    setText(
      "countdownMessage",
      "Hari bahagia kami telah tiba. Terima kasih atas doa Anda!"
    );

    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (distance / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (distance / 1000) % 60
  );

  setText("days", String(days).padStart(2, "0"));
  setText("hours", String(hours).padStart(2, "0"));
  setText("minutes", String(minutes).padStart(2, "0"));
  setText("seconds", String(seconds).padStart(2, "0"));
}


// ============================================
// ANIMASI SCROLL
// ============================================

function initReveal() {
  const revealItems =
    document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });
}


// ============================================
// MUSIK UNDANGAN
// ============================================

async function toggleMusic() {
  const audio = $("weddingMusic");
  const button = $("musicToggle");
  const label = $("musicLabel");

  if (!audio) {
    console.warn("Elemen audio tidak ditemukan.");
    return;
  }

  if (audio.paused) {
    try {
      await audio.play();

      if (button) {
        button.classList.add("is-playing");
        button.setAttribute("aria-pressed", "true");
      }

      if (label) {
        label.textContent = "Jeda Musik";
      }
    } catch (error) {
      if (label) {
        label.textContent = "Tambahkan music.mp3";

        window.setTimeout(() => {
          label.textContent = "Musik";
        }, 2600);
      }

      console.warn("Musik tidak dapat diputar:", error);
    }
  } else {
    audio.pause();

    if (button) {
      button.classList.remove("is-playing");
      button.setAttribute("aria-pressed", "false");
    }

    if (label) {
      label.textContent = "Putar Musik";
    }
  }
}


// ============================================
// MEMBUKA UNDANGAN
// ============================================

function openInvitation() {
  const cover = $("cover");
  const invitation = $("invitation");
  const musicButton = $("musicToggle");

  if (cover) {
    cover.classList.add("is-opening");
  }

  document.body.classList.remove("is-locked");

  if (invitation) {
    invitation.setAttribute("aria-hidden", "false");
  }

  if (musicButton) {
    musicButton.hidden = false;
  }

  // Musik dicoba setelah pengguna menekan tombol.
  void toggleMusic();

  window.setTimeout(() => {
    if (cover) {
      cover.style.display = "none";
    }

    const coupleSection = $("couple");

    if (coupleSection) {
      coupleSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, 850);
}


// ============================================
// RSVP MELALUI WHATSAPP
// ============================================

function initRSVP() {
  const form = $("rsvpForm");

  if (!form) {
    console.warn("Form RSVP tidak ditemukan.");
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const guestInput = $("guestInput");
    const attendanceInput = $("attendance");
    const guestCountInput = $("guestCount");

    if (
      !guestInput ||
      !attendanceInput ||
      !guestCountInput
    ) {
      console.error(
        "Elemen input RSVP belum lengkap di index.html."
      );
      return;
    }

    const guest = guestInput.value.trim();
    const attendance = attendanceInput.value;
    const count = guestCountInput.value;

    if (!guest) {
      guestInput.focus();
      return;
    }

    const message = [
      `Assalamu'alaikum. Saya ${guest}.`,
      `Konfirmasi undangan pernikahan ${CONFIG.groom.firstName} & ${CONFIG.bride.firstName}: ${attendance}.`,
      attendance === "Hadir"
        ? `Jumlah tamu: ${count}.`
        : "",
      "Terima kasih. Semoga acara berjalan lancar."
    ]
      .filter(Boolean)
      .join("\n");

    const phone =
      CONFIG.whatsappNumber.replace(/\D/g, "");

    if (!phone) {
      window.alert(
        "Nomor WhatsApp belum diatur. Silakan periksa CONFIG pada script.js."
      );
      return;
    }

    const url =
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  });
}


// ============================================
// INISIALISASI WEBSITE
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();

  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  initReveal();
  initRSVP();

  const openButton = $("openInvitation");

  if (openButton) {
    openButton.addEventListener(
      "click",
      openInvitation
    );
  }

  const musicButton = $("musicToggle");

  if (musicButton) {
    musicButton.addEventListener("click", () => {
      void toggleMusic();
    });
  }
});
