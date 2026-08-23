import { useEffect, useRef, useState } from "react";
import s from "./App.module.css";

function LineIcon({ name, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    printer: (
      <>
        <path d="M7 8V4h10v4" />
        <rect x="4" y="8" width="16" height="9" rx="2" />
        <path d="M7 14h10v6H7zM16.5 11.5h.01" />
      </>
    ),
    tag: (
      <>
        <path d="M20 13 13 20l-9-9V4h7z" />
        <circle cx="8.5" cy="8.5" r="1.2" />
      </>
    ),
    palette: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18h1.4a1.8 1.8 0 0 0 0-3.6h-1a1.5 1.5 0 0 1 0-3h2A6.5 6.5 0 0 0 21 8.2C20.2 5 16.6 3 12 3Z" />
        <circle cx="7.7" cy="10" r=".8" fill="currentColor" stroke="none" />
        <circle cx="10" cy="6.8" r=".8" fill="currentColor" stroke="none" />
        <circle cx="14.3" cy="6.6" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
    document: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h4M10 12h5M10 16h5" />
      </>
    ),
    color: (
      <>
        <path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z" />
        <path d="M9.5 15.5c.7 1.3 2 2 3.5 2" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="11" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
      </>
    ),
    camera: (
      <>
        <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
        <circle cx="12" cy="13" r="3.2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.5 2.7 8 7 10 4.3-2 7-5.5 7-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    scissors: (
      <>
        <circle cx="6" cy="7" r="2.5" />
        <circle cx="6" cy="17" r="2.5" />
        <path d="m8.2 8.2 11.3 8.3M8.2 15.8 19.5 7.5" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.2 3.2L16.5 7.5l-3.3 1.3L12 12l-1.2-3.2-3.3-1.3 3.3-1.3z" />
        <path d="m18.5 14 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7zM5.5 14l.6 1.5 1.4.5-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.5z" />
      </>
    ),
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7z" />,
    target: (
      <>
        <circle cx="11" cy="13" r="7" />
        <circle cx="11" cy="13" r="3" />
        <path d="m13 11 7-7M16 4h4v4" />
      </>
    ),
    diamond: <path d="m12 3 8 7-8 11-8-11zM4 10h16M9 3l-2 7 5 11 5-11-2-7" />,
    moon: <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.sparkles}</svg>;
}

function SocialIcon({ name, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.7" r=".9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg {...common}>
        <path d="M15 4v10.2a4.2 4.2 0 1 1-3.2-4.1" />
        <path d="M15 4c.5 2.5 2 4 4.5 4.5" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 19 18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.601 2.326A7.854 7.854 0 0 0 9.593 1C5.253 1 1.732 4.521 1.732 8.862c0 1.38.36 2.721 1.014 3.905L1.676 16.68l4.014-1.054a7.854 7.854 0 0 0 3.903.992h.003c4.34 0 7.862-3.521 7.862-7.862a7.86 7.86 0 0 0-3.857-6.43ZM9.596 15.29a6.53 6.53 0 0 1-3.326-.91l-.238-.141-2.383.625.636-2.326-.155-.24a6.53 6.53 0 0 1-1.003-3.436c0-3.573 2.9-6.474 6.469-6.474a6.45 6.45 0 0 1 4.576 1.895 6.44 6.44 0 0 1 1.893 4.573c0 3.573-2.9 6.474-6.469 6.474Zm3.648-4.839c-.2-.1-1.18-.582-1.363-.649-.182-.066-.315-.1-.448.1-.133.2-.514.649-.63.782-.116.133-.232.15-.431.05-.2-.1-.842-.31-1.602-.99-.592-.528-.992-1.18-1.108-1.38-.116-.2-.012-.308.087-.407.09-.089.2-.232.3-.348.1-.116.133-.2.2-.332.066-.133.033-.249-.017-.349-.05-.1-.448-1.08-.614-1.47-.16-.389-.325-.336-.448-.342-.116-.006-.249-.007-.382-.007a.73.73 0 0 0-.531.249c-.182.2-.697.682-.697 1.663 0 .98.714 1.929.814 2.062.1.133 1.404 2.143 3.4 3.005.476.205.846.327 1.135.418.477.152.911.13 1.254.079.383-.057 1.18-.482 1.346-.948.166-.465.166-.864.116-.948-.05-.083-.182-.133-.382-.232Z" />
    </svg>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [missingGallery, setMissingGallery] = useState({});
  const [flippedGallery, setFlippedGallery] = useState(null);
  const galleryGesture = useRef({ index: null, startX: 0, startY: 0, moved: false });

  const startGalleryGesture = (event, index) => {
    galleryGesture.current = {
      index,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
    };
  };

  const trackGalleryGesture = (event, index) => {
    const gesture = galleryGesture.current;
    if (gesture.index !== index) return;

    const distanceX = Math.abs(event.clientX - gesture.startX);
    const distanceY = Math.abs(event.clientY - gesture.startY);
    if (distanceX > 10 || distanceY > 10) gesture.moved = true;
  };

  const toggleGalleryCard = (event, index, isFlipped) => {
    const gesture = galleryGesture.current;
    const wasSwipe = gesture.index === index && gesture.moved;
    galleryGesture.current = { index: null, startX: 0, startY: 0, moved: false };

    if (wasSwipe) {
      event.preventDefault();
      return;
    }

    setFlippedGallery(isFlipped ? null : index);
  };

  useEffect(() => {
    document.title = "Puti Creative Print — Putiprint.id | Printing Samarinda";

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      "Puti Creative Print — Putiprint.id melayani printing dokumen, custom stiker, label produk, desain siap cetak, dan kebutuhan promosi di Samarinda."
    );
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(`.${s.fadeUp}`);
    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add(s.show));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(s.show);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenu = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.type === "click" && !event.target.closest("header")) setMenuOpen(false);
    };

    document.addEventListener("keydown", closeMenu);
    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("keydown", closeMenu);
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const services = [
    {
      icon: "printer",
      title: "Printing Dokumen",
      text: "Cetak hitam putih dan warna untuk tugas, proposal, brosur, undangan, dan kebutuhan kantor dengan hasil rapi dan cepat.",
    },
    {
      icon: "tag",
      title: "Custom Stiker",
      text: "Glossy, vinyl. Bisa custom ukuran, bentuk, dan finishing sesuai kebutuhan.",
    },
    {
      icon: "palette",
      title: "Desain Siap Cetak",
      text: "Bantu rapikan desain label, kemasan, logo, dan materi promosi biar hasil cetaknya lebih profesional.",
    },
  ];

  const pricelist = [
    {
      icon: "document",
      title: "Print Hitam Putih",
      text: "Cocok untuk tugas, dokumen, dan kebutuhan sekolah atau kantor.",
      price: "Rp500 / lembar",
    },
    {
      icon: "color",
      title: "Print Full Warna",
      text: "Hasil warna tajam untuk brosur, proposal, dan materi promosi.",
      price: "Rp3.000 / lembar",
    },
    {
      icon: "printer",
      title: "FC Warna / Bolak-balik",
      text: "Untuk kebutuhan dokumen yang butuh hasil lebih rapi dan lengkap.",
      price: "Rp500 - Rp2.000",
    },
    {
      icon: "camera",
      title: "Polaroid / Print Foto",
      text: "Cocok untuk foto kenangan, tugas sekolah, dan kebutuhan dekorasi.",
      price: "Mulai Rp3.000",
    },
    {
      icon: "tag",
      title: "Stiker & Custom",
      text: "Bisa custom nama, bentuk, ukuran, dan desain sesuai kebutuhan.",
      price: "Mulai Rp12.000-Rp.15.000 / lembar",
    },
    {
      icon: "copy",
      title: "Fotocopy",
      text: "Cepat dan rapi untuk kebutuhan harian maupun jumlah banyak.",
      price: "Rp300 / lembar",
    },
    {
      icon: "shield",
      title: "Laminating",
      text: "Biar dokumen lebih awet, rapi, dan terlindungi dari cipratan.",
      price: "Mulai Rp3.000",
    },
    {
      icon: "palette",
      title: "Desain Sederhana",
      text: "Bantu edit atau rapikan desain sederhana agar siap cetak.",
      price: "Mulai Rp5.000",
    },
    {
      icon: "mail",
      title: "Cetak Undangan",
      text: "Untuk acara pribadi, sekolah, dan kebutuhan event kecil maupun besar.",
      price: "Mulai Rp1.500 / pcs",
    },
    {
      icon: "scissors",
      title: "Potong / Finishing",
      text: "Rapikan hasil cetak dengan finishing potong yang lebih presisi.",
      price: "Mulai Rp2.000",
    },
  ];

  const steps = [
    {
      title: "Kirim kebutuhan",
      text: "Tinggal kirim desain atau jelaskan kebutuhan printing kamu lewat WhatsApp.",
    },
    {
      title: "Pilih bahan",
      text: "Tentukan bahan, ukuran, finishing, dan jumlah pesanan sesuai kebutuhan.",
    },
    {
      title: "Kami proses",
      text: "File dicek dulu, lalu masuk proses cetak dan finishing dengan hasil rapi.",
    },
    {
      title: "Siap diambil / dikirim",
      text: "Pesanan selesai dan siap diambil langsung atau dikirim ke alamat kamu.",
    },
  ];

  const faqs = [
    {
      q: "Bisa cetak satuan atau harus banyak?",
      a: "Bisa satuan maupun partai, tergantung jenis produk dan bahan yang dipilih.",
    },
    {
      q: "Bisa custom ukuran dan bentuk stiker?",
      a: "Bisa. Kamu bisa request ukuran, bentuk potong, bahan, dan finishing sesuai kebutuhan.",
    },
    {
      q: "Kalau belum punya desain gimana?",
      a: "Bisa konsultasi dulu. Kami bantu desain sederhana atau rapikan file supaya siap cetak.",
    },
    {
      q: "Berapa lama proses pengerjaannya?",
      a: "Estimasi tergantung jenis pesanan, jumlah, dan antrian. Untuk order umum biasanya bisa diproses cepat.",
    },
    {
      q: "Bisa kirim file lewat WhatsApp?",
      a: "Bisa banget. File desain bisa langsung dikirim lewat WhatsApp agar lebih mudah dicek.",
    },
    {
      q: "Apakah bisa kirim ke alamat rumah?",
      a: "Bisa. Pesanan bisa diambil langsung atau dikirim sesuai kebutuhan.",
    },
  ];

  const infoItems = [
    {
      icon: <SocialIcon name="whatsapp" className={s.infoVector} />,
      label: "WhatsApp",
      value: "0821-9167-9126",
    },
    { icon: <LineIcon name="pin" className={s.infoVector} />, label: "Lokasi", value: "Samarinda" },
    { icon: <LineIcon name="mail" className={s.infoVector} />, label: "Email", value: "putiprintid@gmail.com" },
  ];

  const galleryVideos = [
    {
      src: "/video-glossy.mp4",
      poster: "/video-glossy-poster.jpg",
      badge: "Glossy",
      title: "Stiker Glossy Custom",
      text: "Warna cerah dengan permukaan mengilap untuk stiker karakter, label, dan souvenir.",
    },
    {
      src: "/video-vinyl.mp4",
      poster: "/video-vinyl-poster.jpg",
      badge: "Vinyl",
      title: "Stiker Vinyl Produk",
      text: "Bahan lebih lentur dan tahan cipratan untuk label kemasan serta kebutuhan usaha.",
    },
  ];

  const galleryItems = [
    {
      image: "/gallery-1.jpg",
      title: "Stiker Glossy",
      text: "Permukaan mengilap dengan warna yang terlihat lebih hidup. Cocok untuk label kemasan, souvenir, dan kebutuhan promosi.",
    },
    {
      image: "/gallery-2.jpg",
      title: "Stiker Vinyl",
      text: "Bahan lebih lentur dan tahan cipratan. Pas untuk botol, cup, kemasan produk, dan label usaha.",
    },
    {
      image: "/gallery-3.jpg",
      title: "Label & Print Custom",
      text: "Ukuran, bentuk, bahan, dan finishing bisa disesuaikan dengan kebutuhan personal maupun UMKM.",
    },
    {
      image: "/gallery-4.jpg",
      title: "Safety Tag & Label",
      text: "Cetak label kerja, kartu informasi, dan kebutuhan perusahaan dengan laminasi yang rapi.",
      position: "center 68%",
    },
    {
      image: "/gallery-5.jpg",
      title: "Photo Strip Custom",
      text: "Foto mini bergaya photo strip untuk hadiah, kenang-kenangan, acara, dan souvenir.",
      position: "center 64%",
    },
  ];

  return (
    <div className={`${s.page} ${theme === "dark" ? s.dark : s.light}`}>
      <header className={s.navbar}>
        <div className={s.container}>
          <div className={s.navbarInner}>
            <a href="#" className={s.brand}>
              <div className={s.brandMark}>
                <img src="/logo.png" alt="Logo Puti Creative Print — Putiprint.id" className={s.brandLogo} />
              </div>
              <div className={s.brandText}>
                <span className={s.brandTitle}>Puti Creative Print</span>
                <span className={s.brandSub}>Putiprint.id • Creative Printing</span>
              </div>
            </a>

            <div className={s.navActions}>
              <button
                type="button"
                className={s.mobileThemeToggle}
                onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
                aria-label={theme === "dark" ? "Gunakan tema terang" : "Gunakan tema gelap"}
                aria-pressed={theme === "light"}
              >
                <LineIcon name={theme === "dark" ? "moon" : "sun"} className={s.themeIcon} />
              </button>

              <button
                type="button"
                className={s.menuToggle}
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={menuOpen}
                aria-controls="main-navigation"
              >
                <span className={`${s.menuLine} ${menuOpen ? s.menuLineTopOpen : ""}`}></span>
                <span className={`${s.menuLine} ${menuOpen ? s.menuLineMiddleOpen : ""}`}></span>
                <span className={`${s.menuLine} ${menuOpen ? s.menuLineBottomOpen : ""}`}></span>
              </button>
            </div>

            <nav id="main-navigation" className={`${s.navLinks} ${menuOpen ? s.navLinksOpen : ""}`}>
              <a href="#layanan" className={s.navLink} onClick={() => setMenuOpen(false)}>Layanan</a>
              <a href="#produk" className={s.navLink} onClick={() => setMenuOpen(false)}>Pricelist</a>
              <a href="#cara-order" className={s.navLink} onClick={() => setMenuOpen(false)}>Cara Order</a>
              <a href="#faq" className={s.navLink} onClick={() => setMenuOpen(false)}>FAQ</a>
              <a href="#kontak" className={s.navBtn} onClick={() => setMenuOpen(false)}>Hubungi Kami</a>
            </nav>
          </div>
        </div>
      </header>

      <section className={s.hero}>
        <div className={s.container}>
          <div className={s.heroPanel}>
            <div className={s.heroGrid}>
              <div className={`${s.heroLeft} ${s.fadeUp}`}>
                <div className={s.eyebrow}>
                  <LineIcon name="sparkles" className={s.eyebrowIcon} />
                  <span>Putiprint.id • Printing rumahan di Samarinda</span>
                </div>

                <h1 className={s.heroTitle}>
                  Cetak lebih rapi.
                  <span className={s.heroTitleAccent}>Tampil lebih meyakinkan.</span>
                </h1>

                <p className={s.heroText}>
                  Kami melayani printing dokumen, custom stiker, label produk,
                  desain siap cetak, dan kebutuhan promosi untuk personal,
                  sekolah, maupun UMKM dengan tampilan yang lebih profesional.
                </p>

                <div className={s.heroActions}>
                  <a href="#produk" className={s.btnPrimary}>Lihat Produk</a>
                  <a href="#kontak" className={s.btnSecondary}>Chat Sekarang</a>
                </div>

                <div className={s.trustRow}>
                  <div className={s.trustPill}>
                    <LineIcon name="bolt" className={s.trustIcon} />
                    <span>Fast Response</span>
                  </div>
                  <div className={s.trustPill}>
                    <LineIcon name="target" className={s.trustIcon} />
                    <span>Bisa Custom</span>
                  </div>
                  <div className={s.trustPill}>
                    <LineIcon name="diamond" className={s.trustIcon} />
                    <span>Hasil Rapi</span>
                  </div>
                </div>
              </div>

              <div className={`${s.heroRight} ${s.fadeUp} ${s.delay1}`}>
                <div className={s.visualWrap}>
                  <img
                    src="/hero-print.jpg"
                    alt="Contoh hasil printing Puti Creative Print"
                    className={s.visualImage}
                  />
                  <div className={s.visualCaption}>
                    <span>Print & Custom</span>
                    <span>Samarinda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="layanan" className={`${s.section} ${s.sectionSpace}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <div className={s.sectionKicker}>Layanan</div>
            <h2 className={s.sectionTitle}>Yang bisa kami bantu</h2>
            <p className={s.sectionText}>
              Fokus kami bukan cuma cetak, tapi bikin hasil kamu terlihat lebih proper,
              lebih clean, dan lebih enak dipandang.
            </p>
          </div>

          <div className={s.servicesGrid}>
            {services.map((item, index) => (
              <div
                key={item.title}
                className={`${s.serviceCard} ${s.hoverLift} ${s.fadeUp} ${
                  index === 0 ? "" : index === 1 ? s.delay1 : s.delay2
                }`}
              >
                <div className={s.serviceTop}>
                  <span className={s.serviceNumber}>0{index + 1}</span>
                  <div className={s.serviceIcon}>
                    <LineIcon name={item.icon} className={s.cardIcon} />
                  </div>
                </div>
                <h3 className={s.serviceTitle}>{item.title}</h3>
                <p className={s.serviceText}>{item.text}</p>
                <a href="#kontak" className={s.serviceLink}>Pesan layanan <span>↗</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${s.sectionSm} ${s.sectionSpaceSm}`}>
        <div className={s.container}>
          <div className={s.splitWrap}>
            <div className={s.splitGrid}>
              <div className={s.fadeUp}>
                <div className={`${s.sectionKicker} ${s.kickerPink}`}>Keunggulan</div>
                <h2 className={s.darkTitle}>Kenapa pilih Putiprint.id?</h2>
                <p className={s.darkSmall}>
                  Kami fokus di hasil cetak yang rapi, proses yang cepat, dan tampilan
                  yang bikin brand atau kebutuhan printing kamu terlihat lebih niat.
                </p>

                <div className={s.bulletList}>
                  {[
                    "Hasil print tajam dan warna lebih hidup.",
                    "Bisa custom ukuran, bahan, dan finishing.",
                    "Cocok untuk UMKM, sekolah, dan kebutuhan bisnis.",
                    "Melayani order satuan maupun partai.",
                    "Bisa bantu cek / rapikan desain sebelum cetak.",
                  ].map((text) => (
                    <div key={text} className={s.bulletItem}>
                      <div className={s.bulletDot}>✓</div>
                      <div className={s.bulletText}>{text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${s.galleryPanel} ${s.fadeUp} ${s.delay1}`}>
                <div className={s.galleryKicker}>Galeri</div>
                <h3 className={s.galleryTitle}>Lihat hasilnya lebih dekat</h3>
                <p className={s.galleryText}>
                  Dua video pilihan menampilkan hasil glossy dan vinyl. Foto lainnya tetap
                  bisa disentuh atau diarahkan untuk melihat detail.
                </p>

                <div className={s.galleryShowcase}>
                  <div className={s.galleryVideoGrid}>
                    {galleryVideos.map((item) => (
                      <article key={item.title} className={s.galleryVideoCard}>
                        <div className={s.galleryVideoFrame}>
                          <video
                            className={s.galleryVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            poster={item.poster}
                            aria-label={`Video contoh hasil ${item.title}`}
                          >
                            <source src={item.src} type="video/mp4" />
                          </video>
                          <span className={s.galleryVideoBadge}>{item.badge}</span>
                          <span className={s.galleryVideoLabel}>Video hasil</span>
                        </div>
                        <div className={s.galleryVideoCaption}>
                          <strong>{item.title}</strong>
                          <span>{item.text}</span>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className={s.galleryReelHeading}>
                    <span>Contoh lainnya</span>
                    <small>Geser untuk melihat • tap untuk detail</small>
                  </div>

                  <div
                    className={s.galleryReel}
                    onScroll={() => setFlippedGallery(null)}
                  >
                    {galleryItems.map((item, index) => {
                      const isMissing = Boolean(missingGallery[index]);
                      const isFlipped = flippedGallery === index;

                      return (
                        <button
                          type="button"
                          key={item.title}
                          className={`${s.galleryFlipCard} ${isFlipped ? s.galleryFlipActive : ""}`}
                          onPointerDown={(event) => startGalleryGesture(event, index)}
                          onPointerMove={(event) => trackGalleryGesture(event, index)}
                          onPointerCancel={() => {
                            galleryGesture.current = {
                              index: null,
                              startX: 0,
                              startY: 0,
                              moved: false,
                            };
                          }}
                          onClick={(event) => toggleGalleryCard(event, index, isFlipped)}
                          aria-pressed={isFlipped}
                          aria-label={`${item.title}: buka atau tutup detail`}
                        >
                          <span className={s.galleryFlipInner}>
                            <span className={`${s.galleryFace} ${s.galleryFront}`}>
                              {isMissing ? (
                                <span className={s.galleryPlaceholder}>Foto belum tersedia</span>
                              ) : (
                                <img
                                  src={item.image}
                                  alt={`Contoh hasil ${item.title}`}
                                  className={s.galleryFlipImage}
                                  style={{ objectPosition: item.position || "center" }}
                                  onError={() =>
                                    setMissingGallery((current) => ({ ...current, [index]: true }))
                                  }
                                />
                              )}
                              <span className={s.galleryHint}>Lihat detail</span>
                            </span>

                            <span className={`${s.galleryFace} ${s.galleryBack}`}>
                              <span className={s.galleryBackKicker}>Contoh Hasil</span>
                              <strong>{item.title}</strong>
                              <span>{item.text}</span>
                              <span className={s.galleryBackAction}>Tap untuk kembali</span>
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produk" className={`${s.section} ${s.sectionSpace}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <div className={s.sectionKicker}>Pricelist</div>
            <h2 className={s.sectionTitle}>Daftar harga layanan yang paling sering dicari</h2>
            <p className={s.sectionText}>
              Harga di bawah ini adalah harga mulai dan bisa menyesuaikan bahan, ukuran,
              jumlah, atau tingkat kesulitan desain.
            </p>
          </div>

          <div className={`${s.priceListWrap} ${s.fadeUp}`}>
            <div className={s.priceListHeader}>
              <div>
                <span className={s.priceListMini}>Puti Creative Print</span>
                <h3 className={s.priceListTitle}>Price List</h3>
              </div>
              <span className={s.priceListBadge}>Harga terjangkau • Hasil rapi</span>
            </div>

            <div className={s.priceListGrid}>
              {pricelist.map((item, index) => (
                <div
                  key={item.title}
                  className={`${s.priceListItem} ${s.hoverLift} ${s.fadeUp} ${
                    index % 4 === 0
                      ? ""
                      : index % 4 === 1
                      ? s.delay1
                      : index % 4 === 2
                      ? s.delay2
                      : s.delay3
                  }`}
                >
                  <div className={s.priceListIcon}>
                    <LineIcon name={item.icon} className={s.cardIcon} />
                  </div>

                  <div className={s.priceListContent}>
                    <h3 className={s.priceListItemTitle}>{item.title}</h3>
                    <p className={s.priceListItemText}>{item.text}</p>
                  </div>

                  <div className={s.priceListPriceWrap}>
                    <span className={s.priceListFrom}>Mulai dari</span>
                    <strong className={s.priceListPrice}>{item.price}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className={s.priceListFooter}>
              Harga terjangkau • Hasil cetak rapi • Bisa custom
            </div>
          </div>
        </div>
      </section>

      <section id="cara-order" className={`${s.sectionSm} ${s.sectionSpaceSm}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <div className={s.sectionKicker}>Cara Order</div>
            <h2 className={s.sectionTitle}>Alur pemesanan</h2>
            <p className={s.sectionText}>Cek di bawah ini</p>
          </div>

          <div className={s.processWrap}>
            {steps.map((item, index) => (
              <div
                key={item.title}
                className={`${s.processCard} ${s.hoverLift} ${s.fadeUp} ${
                  index === 0 ? "" : index === 1 ? s.delay1 : index === 2 ? s.delay2 : s.delay3
                }`}
              >
                <div className={s.processNumber}>{index + 1}</div>
                <h3 className={s.processTitle}>{item.title}</h3>
                <p className={s.processText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className={`${s.sectionSm} ${s.sectionSpaceSm}`}>
        <div className={s.container}>
          <div className={s.sectionHeader}>
            <div className={s.sectionKicker}>FAQ</div>
            <h2 className={s.sectionTitle}>Pertanyaan yang sering ditanyakan</h2>
            <p className={s.sectionText}></p>
          </div>

          <div className={s.faqWrap}>
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.q}
                  className={`${s.faqItem} ${s.fadeUp} ${
                    index === 0 ? "" : index === 1 ? s.delay1 : index === 2 ? s.delay2 : s.delay3
                  }`}
                >
                  <button
                    id={`faq-button-${index}`}
                    className={s.faqButton}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span>{item.q}</span>
                    <span className={s.faqIcon}>{isOpen ? "−" : "+"}</span>
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    className={`${s.faqContent} ${isOpen ? s.open : ""}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                  >
                    <div className={s.faqAnswerWrap}>
                      <p className={s.faqAnswer}>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="kontak" className={s.contactSection}>
        <div className={s.container}>
          <div className={s.contactWrap}>
            <div className={s.contactLeft}>
              <div className={`${s.sectionKicker} ${s.contactKicker}`}>Kontak</div>
              <h2 className={s.contactTitle}>Hubungi Putiprint.id</h2>
              <p className={s.contactText}>
                Mau order atau konsultasi bahan, finishing, dan desain? Hubungi kami lewat kontak berikut.
              </p>

              <div className={s.contactInfoList}>
                {infoItems.map((item) => (
                  <div key={item.label} className={s.contactInfoItem}>
                    <span className={s.contactIcon}>{item.icon}</span>
                    <div className={s.contactInfoText}>
                      <strong>{item.label}</strong>
                      <p>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={s.contactRight}>
              <div className={s.socialSimple}>
                <h3 className={s.socialTitle}>Ikuti Putiprint.id</h3>
                <p className={s.socialText}>Lihat contoh hasil terbaru atau chat langsung melalui ikon berikut.</p>

                <div className={s.socialRow}>
                  <a
                    href="https://wa.me/6282191679126?text=Halo%20saya%20mau%20order%20printing"
                    target="_blank"
                    rel="noreferrer"
                    className={s.socialLink}
                    aria-label="WhatsApp"
                  >
                    <SocialIcon name="whatsapp" className={s.socialVector} />
                  </a>

                  <a
                    href="https://instagram.com/putiprint.id"
                    target="_blank"
                    rel="noreferrer"
                    className={s.socialLink}
                    aria-label="Instagram"
                  >
                    <SocialIcon name="instagram" className={s.socialVector} />
                  </a>

                  <a
                    href="https://tiktok.com/@putiprint.id"
                    target="_blank"
                    rel="noreferrer"
                    className={s.socialLink}
                    aria-label="TikTok"
                  >
                    <SocialIcon name="tiktok" className={s.socialVector} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={s.floatingTools}>
        <span className={s.floatingWaBubble}>Chat via WhatsApp</span>
        <a href="https://wa.me/6282191679126?text=Halo%20saya%20mau%20order%20printing"
          target="_blank"
          rel="noreferrer"
          className={s.floatingWa}
          aria-label="Chat Puti Creative Print melalui WhatsApp"
        >
          <SocialIcon name="whatsapp" className={s.floatingVector} />
        </a>
      </div>

      <footer className={s.footer}>© 2026 Salujo Technologia. All rights reserved.</footer>
    </div>
  );
}
