import React from "react";
import { getManualCounts } from "@/lib/manualCounts";

async function Usermanual() {
  const counts = await getManualCounts();

  return (
    <div className="container mx-auto">
      <div className="p-3 lg:p-5">
        <div
          className="px-5 py-6 text-lg text-gray-light"
          style={{ boxShadow: "0px 0px 20px #0005" }}
        >
          <h2 className="text-xl lg:text-4xl text-primary font-playfairDisplay mb-6 capitalize">
            System kaisay kaam kerta hai
          </h2>

          <p className="mb-3">
            Aap ki E-mail ID derkaar ho gi system ki applications ko sahee
            tareeqe se dekkhne ke liye.
          </p>

          <p className="mb-3">
            Screen per "Home" yaa "Explore Dictionary" dabaaiye start menu
            dekkhne ke liye. Screen per chalti kisi bhi item ke neeche neelay
            rung ka "Start Reading" button dabaane se woh item kkhul jaati
            hai...
          </p>

          <p className="mb-3">
            System ki applications computer per behter aur aasaan tareeqe se
            kaam kerti dikkhayee deti hain jabke inhein android phone per bhi
            dekkha ja sakta hai.
          </p>

          <p className="mb-3">
            Screen per chaltay huwe mauzuaat mein se kisi ko bhi iske neeche
            neela button "Start Reading" press ker ke ander daakhil huwa ja
            sakta hai...
          </p>

          <p className="mb-3">
            System ki majboori hai kay aik bar 100 se ziyada items/files zaahir
            nahin hoteen. Mazeed items "Load more" button ko press kerne se
            download hoti hain.
          </p>

          <p className="mb-3">
            Tamaam derj items dictionary ke andaaz se nazar aati hain...
          </p>

          <p className="mb-3">
            Mobile per Arabi/Urdu mein text munaasib andaaz se dekkhne ke
            liye...
          </p>

          <p className="mb-3">
            Search system aik waqt mein kisi aik file system (hissa) ke liye
            makhsoos hai...
          </p>

          <p className="mb-3">
            Folders ke ander Quran ki Word files hain jinke mazeed ander Quran
            ka Arabi aur Urdu text hai.
          </p>

          <p className="mb-3">Folders per sirf 8-9 alfaaz aa saktay hain...</p>

          <p className="mb-3">
            Mauzuaat ko ujaagar kerne ke liye aur unki terteeb ko qaayem rakkhne
            ke liye...
          </p>

          <p className="mb-3">
            Roman Urdu ki Word files per lines ko a,b,c,d waghera se zahir kiya
            gaya hai.
          </p>

          <p className="mb-3">
            Roman Urdu ki Word file ke aakhir per teen dots (…) ka matalab hai
            jumla jaari hai.
          </p>

          <p className="mb-3">
            Roman Urdu ki Word files per bracketon ke dermiyan coma "(,)" ka
            matlab sawaaliya "?" nishan hai...
          </p>

          <p className="mb-3">
            Folders per bracketon [ ] ke ander Roman-Arabi mein likkhi hui
            aayaat aur alfaaz hain.
          </p>

          <p className="mb-3">
            Tamaam Aayaat aur items ke aakhir mein Surah Number, Surah ka naam
            aur Aayat number derj hai...
          </p>

          <p className="mb-3">
            Roman Urdu ki Word files mein "rr" ka matlab Urdu haroof-e-tahajji
            ka "ڑ" hai.
          </p>

          <p className="mb-3">
            Roman Arabi mein block letters "LL, MM, RR, WW, YY" ka matlab hai
            kay do harfon ke dermiyan mein "ن" jabke "TT" ke dermiyan "د" harf
            chhupa huwa hai.
          </p>

          <p className="mb-3">
            Roman Arabi ke baaz jumlon ke shuru mein small "a" se muraad
            sawaaliya baat hai.
          </p>

          <p className="mb-3">
            Roman Urdu mein "pph" ka matlab "پھ" ki aawaaz hai.
          </p>

          <p className="mb-3">
            Yeh kaawish Quran ki mehez documentation se mutaaliq hai...
          </p>

          <p className="mb-6 font-semibold">
            Poore system ko 10 hisson mein taqseem kiya gaya hai jiske tafseel
            yoon hai:
          </p>

          <ol className="list-decimal pl-6 space-y-6 text-sm lg:text-base">
            <li>
              <strong>Pehla hissa ‘Quran-e-Kareem ke Mauzuaat’</strong>

              <ol className="list-[lower-roman] pl-6 mt-3 space-y-3">
                <li>
                  Pehla hissa <strong>‘Quran-e-Kareem ke Mauzuaat’</strong> A se
                  K tak <strong>{counts.mauzuaatAK.toLocaleString()}</strong>{" "}
                  items per mushtamal hai.
                </li>

                <li>
                  Pehla hissa <strong>‘Quran-e-Kareem ke Mauzuaat’</strong> L se
                  Z tak <strong>{counts.mauzuaatLZ.toLocaleString()}</strong>{" "}
                  items per mushtamal hai. Mauzu-e-kalaam ki zakhaamat ki wajah
                  se qaari ki sahoolat ke aik file ko do hisson mein taqseem
                  kiya gaya hai.
                </li>

                <li>
                  Pehla hissa <strong>‘Quran-e-Kareem ke Mauzuaat’</strong>{" "}
                  <strong>{counts.mauzuaatThird.toLocaleString()}</strong> items
                  per mushtamal hai. Iss mein Quran-e-Majeed ke mauzuaat ko aik
                  aur terteeb se ujaagar kiya gaya hai. Iss hisse mein bhi
                  Qurani mauzuaat dictionary shakl mein dikkhayee dein ge. In
                  ibtidayee teen hisson ko iss tamaam kaavish ka markaz qaraar
                  diya jaa sakta hai. Items ko terteeb se Roman Urdu mein
                  English alphabetical order mein ikhtesaar ke saath paysh kiya
                  gaya hai jo kay aik tekneeqi majboori thi. Zaroorat parrne per
                  bracket mein Roman Arabi mein Qurani Aayat bhi hai taake
                  matlab samajhne mein aasaani ho. Folders ke ander Roman Urdu
                  mein Aayaat ka terjuma hai. Iss Word file ko side se
                  double-click kerne se andar se Arabi Aayat aur uska Urdu
                  terjuma namudaar ho jaata hai. Shuru mein system chalaane mein
                  thorri se dushwaari derpaysh ho sakti hai magar thorri
                  practice se aboor haasil ho jaye ga.
                </li>
              </ol>
            </li>

            <li>
              <strong>Doosra hissa ‘Vocabulary Aayaat aur Alfaaz ki’</strong>{" "}
              <strong>{counts.vocabulary.toLocaleString()}</strong> items per
              mushtamal hai jis mein brackets mein [ ] Arabi Aayaat aur alfaaz
              hain. Iss hissay mein pooray Quran-e-Kareem ki Aayaat-e-Mubaareka
              jis lafz se shuru hoti hain unhein wahan se derj kiya gaya hai.
              Jabke wus-at-e-kalaam ko mazeed ujaagar karne ke liye baaz Aayaat
              ko Wau, Fay, Summa, Innamaa, Qul, Qaala, Qaalat, Qaaloo aur Qad
              waghera ke baad se shuru kiya gaya hai jiska maqsad Na-uzu Billah
              kisi Aayat ka matlab ya maani badalna nahin hai. Maqsad sirf yeh
              hai kay aik qaari Quran ke andaaz-e-takhaatib aur wus-at-e-kalaam
              ko dekkhne aur samajhne ke qaabil ho sakay. Quran ki kul{" "}
              <strong>{counts.haroof.toLocaleString()}</strong> Aayaat mein se
              2228 Aayaat Wau se shuru hoti hain. Wau ke baghair Aayaat ke
              indraaj se maaloom huwa kay wohi baat ya kalaam ka wahi andaaz
              kitni aur jaghon per maujood hai. Iss tareeqe se woh tamaam
              baatein saamne aa gayeen jinhein dekkhne ka mauqa Quran ke Qaari
              ko amoomi taur per nahin milta.
            </li>

            <li>
              <strong>Teesra hissa ‘Aayaat, Alfaaz aur Haqaaeq’</strong>{" "}
              <strong>{counts.haqaiq.toLocaleString()}</strong> items per
              mushtamal hai. Iss hissay mein Quran se mutaaliq deegar dilchasp
              maaloomaat hain jo Qari ke ilm aur tajassus mein izaafa ka baaes
              bun sakti hain, usay yeh bhi maaloom ho ga kay aik hee baat
              Quran-e-Hakeem ke kitne muqaamat per darj hai. Iss hisse mein
              Quran-e-Paak ki Aayat per adadi kaam (numerical work) aur kuchh
              grammer ka kaam anjaam diya gaya hai. Yeh kaawish research work ke
              liye aik mufeed database saabit ho sakti hai.
            </li>

            <li>
              <strong>Chautha hissa ‘Aayaat Rabb-e-Kareem Baare’</strong>{" "}
              <strong>{counts.rabb.toLocaleString()}</strong> items per
              mushtamal hai. Yeh hissa Allah Ta'aala ki sifaat, Uski zaat aur
              ahkaam se mutaalliq Aayaat per mabani hai. Folder per kaheen
              kaheen Urdu ke saath bracket mein Roman Arabi bhi tehreer hai
              taake samajhne mein mazeed aasaani ho. Iss hissay mein Allah
              Ta'aala se mutaaliq Aayaat ki takhsees mehz aik farzi taqseem hai.
            </li>

            <li>
              <strong>Paanchwaan hissa ‘Aayaat Nabi SAAWAW baare’</strong>{" "}
              <strong>{counts.nabi.toLocaleString()}</strong> items per
              mushtamal hai. Iss hiss mein Nabi SAAWAW se mutaalliq Aayaat hain
              jis mein ziyada-ter Allah Ta'aala ne Nabi SAAWAW ko mukhaatib ker
              ke kalaam kiya hai. Iss hissay mein Nabi SAAWAW se mutaalliq
              Aayaat ki takhsees mehz aik farzi taqseem hai.
            </li>
            <li>
              <strong>Chhata hissa ‘Aayaat Anbiya AS baare’</strong>{" "}
              <strong>{counts.anbiya.toLocaleString()}</strong> items per
              mushtamal hai. Yeh hissa Anbiya AS ke haalaat-o-waaqeaat se
              mutaalliq Aayaat per mabani hai.
            </li>

            <li>
              <strong>Saatwaan hissa ‘Quran Haroof-e-Tahajji Se’</strong> (
              <strong>{counts.haroof.toLocaleString()}</strong> Aayaat). Jaisa
              kay mukammal Quran-e-Paak{" "}
              <strong>{counts.haroof.toLocaleString()}</strong> Aayaat per
              mushtamal hai. Iss hisse mein Qurani Aayaat ko Arabi
              Haroof-e-Tahajji ke alag alag folder mein paysh kiya gaya hai.
              Quran-e-Majeed ke baare mein tehqeeq kerne walon ke liye yeh
              kaawish mufeed data-base fraaham ker sakti hai.
            </li>

            <li>
              <strong>Aatthwaan hissa ‘Quran a,b,c, Terteeb se’</strong>{" "}
              <strong>{counts.abc.toLocaleString()}</strong> Aayaat per
              mushtamal hai. Roman Arabi mein yeh file bhi Quran per research
              work kerne walon ke liye sood-Mund saabit ho gi.
            </li>

            <li>
              <strong> Nawaan hissa ‘Quran-e-Majeed’</strong> (114 Surah,{" "}
              <strong>{counts.quran.toLocaleString()}</strong> Aayaat). Roman
              Arabi mein yeh Quran ki Suraton ki amoomi terteeb hai. Total{" "}
              <strong>{counts.quran.toLocaleString()}</strong> Aayaat mein 113
              Surah ki ‘Bismillah-ir-Rahman-ir-Raheem’ bhi Aayaat shumaar kee
              jaati hai. Sirf aik Surah ‘Taubah’ per
              ‘Bismillah-ir-Rahman-ir-Raheem’ nahin parrhi jaati. Aayaat ko
              pehli se aakhiri Aayat tak ooper se neeche seedha derj kiya gaya
              hai. Cursor ke zirye Aayaat ko tezi se ooper neeche dekkha jaa
              sakta hai. Iss tarah se Quran ka mutaalea dilchapsi aur
              ghaur-o-fikr ki daawat deta hai.
            </li>

            <li>
              <strong>Daswaan hissa ‘Quran Ka Khulaasa’</strong> hai jo kay{" "}
              <strong>{counts.khulasa.toLocaleString()}</strong> items per
              mushtamal hai.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Usermanual;
