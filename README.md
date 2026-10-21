# Undangan Digital Pernikahan — Elegan & Mewah

Website undangan pernikahan responsif dengan HTML, CSS, dan JavaScript murni.

## Fitur
- Sampul undangan dengan animasi amplop dan tombol “Buka Undangan”
- Musik latar (gunakan file MP3 milik sendiri)
- Countdown otomatis
- Profil kedua mempelai dan nama orang tua
- Detail akad dan resepsi
- Tombol lokasi Google Maps
- Galeri foto
- RSVP/konfirmasi kehadiran melalui WhatsApp
- Animasi saat bagian halaman masuk ke layar
- Desain responsif untuk HP dan desktop

## 1. Cara menjalankan di komputer
1. Ekstrak ZIP ini.
2. Buka folder `undangan-digital-elegan`.
3. Klik dua kali `index.html` untuk membuka di browser.
4. Untuk pengalaman yang lebih konsisten, gunakan ekstensi **Live Server** di Visual Studio Code: buka folder proyek, klik kanan `index.html`, lalu pilih **Open with Live Server**.

## 2. Personalisasi sebelum dibagikan
Buka `script.js`, lalu edit bagian `CONFIG` paling atas:
- `groom.firstName` dan `groom.fullName`: nama mempelai putra.
- `groom.father` dan `groom.mother`: nama ayah dan ibu mempelai putra.
- `bride.firstName` dan `bride.fullName`: nama mempelai putri.
- `bride.father` dan `bride.mother`: nama ayah dan ibu mempelai putri.
- `dateISO`: tanggal dan jam acara dalam format ISO, contoh `2026-12-12T08:00:00+07:00`.
- `dateLabel` dan `dateLabelUpper`: tanggal yang ditampilkan di halaman.
- `venueName`, `venueAddress`, `locationShort`: nama tempat, alamat, dan kota.
- `mapsUrl`: tautan Google Maps menuju lokasi.
- `akadTime` dan `receptionTime`: jadwal acara.
- `whatsappNumber`: nomor WhatsApp penerima RSVP, gunakan format internasional tanpa `+`, spasi, atau tanda hubung. Contoh Indonesia: `62859183999258`.

**Penting:** tanggal di `dateISO` harus disamakan dengan `dateLabel`. Format jam memakai zona WIB `+07:00` untuk contoh Indonesia bagian barat.

## 3. Ganti foto galeri dan foto sampul
Saat ini foto dari Unsplash hanya berfungsi sebagai foto contoh. Ganti dengan foto prewedding/keluarga yang Anda miliki:
- Sampul: cari `cover-photo` di `style.css`.
- Foto hero: cari `.hero-image` di `style.css`.
- Foto mempelai: ganti URL pada `.portrait-groom` dan `.portrait-bride` di `style.css`.
- Foto galeri: ganti atribut `src` di bagian `GALERI` dalam `index.html`.

Cara yang lebih aman untuk memakai foto sendiri:
1. Buat folder `assets/photos/`.
2. Simpan foto dengan nama sederhana, misalnya `sampul.jpg`, `putra.jpg`, `putri.jpg`, `galeri-1.jpg`, `galeri-2.jpg`, `galeri-3.jpg`.
3. Ganti URL foto menjadi path lokal seperti `assets/photos/sampul.jpg`.

## 4. Menambahkan musik
File musik tidak disertakan dalam ZIP. Tambahkan file MP3 yang Anda miliki hak untuk menggunakannya ke folder `assets/` dan beri nama **`music.mp3`**. Hasil akhirnya: `assets/music.mp3`.
Musik baru dicoba diputar setelah pengunjung menekan tombol buka undangan, karena browser umumnya memblokir autoplay tanpa interaksi pengguna. Tombol Musik/Jeda Musik bisa digunakan setelah undangan terbuka.

## 5. Publikasi gratis dengan GitHub Pages
1. Buat akun atau masuk ke GitHub.
2. Buat repository baru, misalnya `undangan-arkan-nadira`. Untuk situs undangan yang akan dibagikan, repository boleh **Public**.
3. Unggah isi folder proyek ini ke root repository (file `index.html` harus berada di root, bukan di dalam folder bertingkat).
4. Buka **Settings → Pages**.
5. Pada **Build and deployment**, pilih **Deploy from a branch**.
6. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
7. Tunggu proses publikasi. GitHub akan menampilkan alamat website seperti `https://username.github.io/undangan-arkan-nadira/`.
8. Buka alamat tersebut dari HP dan uji semua tombol sebelum dibagikan.

Panduan resmi: https://docs.github.com/pages

## 6. Alternatif publikasi gratis dengan Netlify
1. Buka https://www.netlify.com/ dan daftar/masuk.
2. Pilih opsi menambahkan situs baru dengan deploy manual (drag and drop).
3. Seret folder proyek yang berisi `index.html`, `style.css`, `script.js`, dan folder `assets` ke area deploy.
4. Netlify akan memberi alamat publik berakhiran `netlify.app`.
5. Uji link dari browser HP sebelum dikirim.

## 7. Membagikan lewat WhatsApp
Kirim pesan seperti ini setelah website online:

Assalamu'alaikum, Bapak/Ibu/Saudara/i.
Dengan penuh rasa syukur, kami mengundang Anda untuk hadir di acara pernikahan kami.

Silakan buka undangan digital melalui tautan berikut:
[PASTE LINK WEBSITE DI SINI]

Merupakan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
Terima kasih.

## Checklist sebelum online
- [ ] Nama kedua mempelai sudah benar.
- [ ] Nama ayah dan ibu kedua mempelai sudah benar.
- [ ] Tanggal dan jam pada countdown cocok dengan tanggal yang ditampilkan.
- [ ] Alamat acara dan link Google Maps benar.
- [ ] Nomor WhatsApp penerima RSVP sudah diganti.
- [ ] Foto contoh sudah diganti dengan foto yang disetujui untuk dipublikasikan.
- [ ] File `assets/music.mp3` tersedia jika ingin ada musik.
- [ ] Website diuji di HP dan desktop.
- [ ] Link website sudah bisa dibuka dalam mode incognito / browser lain.

## Catatan privasi
Website undangan bersifat publik. Hindari memasukkan data pribadi yang tidak diperlukan. Jika memakai repository publik, semua file yang diunggah dapat dilihat orang lain.


## Data undangan yang telah dipersonalisasi
- Mempelai putra: Fahrul Roziqin Akbar, putra ke-2 dari Bapak Didi Harijanto dan Ibu Catur Retno Widiastutik.
- Mempelai putri: Bianca Sabrina Hartono, putri ke-1 dari Bapak Mugi Hartono dan Ibu Eni Widayanti.
- Tanggal: Sabtu, 12 Desember 2026.
- Akad: 07.00 WIB.
- Resepsi: 10.00 WIB – selesai.
- Tempat: Hostel Mercure Madiun.
- Google Maps: https://maps.app.goo.gl/GhT1YPx7s24GS9UU9
- RSVP WhatsApp: 0859183999258 (disimpan dengan format internasional `62859183999258`).
- Tema: ivory, champagne gold, dan hijau zaitun.

Catatan: pastikan nama resmi venue/alamat lengkap, foto, dan musik sudah sesuai sebelum publikasi.


## Pembaruan tipografi
Nama mempelai memakai font kaligrafi Great Vibes, dipadukan dengan Cormorant Garamond untuk detail keluarga dan DM Sans untuk informasi kecil. Teks urutan anak dan nama orang tua ditampilkan rapat langsung di bawah nama masing-masing mempelai.


## Pembaruan foto mempelai
- Foto formal biru telah dipotong menjadi 2 foto terpisah:
  - `assets/photos/groom-fahrul.jpg`
  - `assets/photos/bride-bianca.jpg`
- Tiga foto lain sudah dimasukkan ke album:
  - `assets/photos/gallery-1.jpg`
  - `assets/photos/gallery-2.jpg`
  - `assets/photos/gallery-3.jpg`

Jika ingin mengganti susunan atau foto lain, cukup timpa file di folder `assets/photos/` lalu sesuaikan path pada `index.html` atau `style.css`.


## Edisi premium
- Sampul dan hero kini memakai foto pasangan yang Anda kirim.
- Ditambahkan bagian “Kisah Kami” dengan timeline tiga tahap.
- Album dan foto profil mendapat bingkai tipis warna emas serta sentuhan tipografi yang lebih elegan.


## Perbaikan ukuran galeri
Semua kartu galeri menggunakan rasio yang sama (4:5) dan foto memakai `object-fit: cover`, sehingga ukurannya konsisten di desktop maupun HP.


## Revisi background floral
Layout website tetap memakai desain undangan versi pertama (cover pembuka, hero, profil, countdown, detail acara, galeri, Kisah Kami, dan RSVP). Yang diganti hanya background cover dan hero menjadi wallpaper bunga ivory lokal. Foto pasangan tetap berada di bagian profil dan galeri; foto profil memakai versi background ivory agar tidak tampak biru.
