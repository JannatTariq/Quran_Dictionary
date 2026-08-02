import React from "react";

// async function Usermanual() {
//   return (
//     <div className="container mx-auto">
//       <div className="p-3 lg:p-5">
//         <div
//           className="px-5 py-6 text-lg text-gray-light"
//           style={{ boxShadow: "0px 0px 20px #0005" }}
//         >
//           <h2 className="text-xl lg:text-4xl text-primary font-playfairDisplay mb-6 capitalize">
//             System kaisay kaam kerta hai
//           </h2>

//           <p className="mb-3">
//             Aap ki E-mail ID derkaar ho gi system ki applications ko sahee
//             tareeqe se dekkhne ke liye.
//           </p>

//           <p className="mb-3">
//             Screen per &quot;Home&quot; yaa &quot;Explore Dictionary&quot;
//             dabaaiye start menu dekkhne ke liye. Screen per chalti kisi bhi item
//             ke neeche neelay rung ka &quot;Start Reading&quot; button dabaane se
//             woh item kkhul jaati hai...
//           </p>

//           <p className="mb-3">
//             System ki applications computer per behter aur aasaan tareeqe se
//             kaam kerti dikkhayee deti hain jabke inhein android phone per bhi
//             dekkha ja sakta hai.
//           </p>

//           <p className="mb-3">
//             Screen per chaltay huwe mauzuaat mein se kisi ko bhi iske neeche
//             neela button "Start Reading" press ker ke ander daakhil huwa ja
//             sakta hai...
//           </p>

//           <p className="mb-3">
//             System ki majboori hai kay aik bar 100 se ziyada items/files zaahir
//             nahin hoteen. Mazeed items &quot;Load more&quot; button ko press
//             kerne se download hoti hain.
//           </p>

//           <p className="mb-3">
//             Tamaam derj items dictionary ke andaaz se nazar aati hain...
//           </p>

//           <p className="mb-3">
//             Mobile per Arabi/Urdu mein text munaasib andaaz se dekkhne ke
//             liye...
//           </p>

//           <p className="mb-3">
//             Search system aik waqt mein kisi aik file system (hissa) ke liye
//             makhsoos hai...
//           </p>

//           <p className="mb-3">
//             Folders ke ander Quran ki Word files hain jinke mazeed ander Quran
//             ka Arabi aur Urdu text hai.
//           </p>

//           <p className="mb-3">Folders per sirf 8-9 alfaaz aa saktay hain...</p>

//           <p className="mb-3">
//             Mauzuaat ko ujaagar kerne ke liye aur unki terteeb ko qaayem rakkhne
//             ke liye...
//           </p>

//           <p className="mb-3">
//             Roman Urdu ki Word files per lines ko a,b,c,d waghera se zahir kiya
//             gaya hai.
//           </p>

//           <p className="mb-3">
//             Roman Urdu ki Word file ke aakhir per teen dots (…) ka matalab hai
//             jumla jaari hai.
//           </p>

//           <p className="mb-3">
//             Roman Urdu ki Word files per bracketon ke dermiyan coma "(,)" ka
//             matlab sawaaliya "?" nishan hai...
//           </p>

//           <p className="mb-3">
//             Folders per bracketon [ ] ke ander Roman-Arabi mein likkhi hui
//             aayaat aur alfaaz hain.
//           </p>

//           <p className="mb-3">
//             Tamaam Aayaat aur items ke aakhir mein Surah Number, Surah ka naam
//             aur Aayat number derj hai...
//           </p>

//           <p className="mb-3">
//             Roman Urdu ki Word files mein &quot;rr&quot; ka matlab Urdu
//             haroof-e-tahajji ka &quot;ڑ&quot; hai.
//           </p>

//           <p className="mb-3">
//             Roman Arabi mein block letters &quot;LL, MM, RR, WW, YY&quot; ka
//             matlab hai kay do harfon ke dermiyan mein &quot;ن&quot; jabke
//             &quot;TT&quot; ke dermiyan &quot;د&quot; harf chhupa huwa hai.
//           </p>

//           <p className="mb-3">
//             Roman Arabi ke baaz jumlon ke shuru mein small &quot;a&quot; se
//             muraad sawaaliya baat hai.
//           </p>

//           <p className="mb-3">
//             Roman Urdu mein &quot;pph&quot; ka matlab &quot;پھ&quot; ki aawaaz
//             hai.
//           </p>

//           <p className="mb-3">
//             Yeh kaawish Quran ki mehez documentation se mutaaliq hai...
//           </p>

//           <p className="mb-6 font-semibold">
//             Poore system ko 10 hisson mein taqseem kiya gaya hai jiske tafseel
//             yoon hai:
//           </p>

//           <ol className="list-decimal pl-6 space-y-6 text-sm lg:text-base">
//             <li>
//               <strong>Pehla hissa ‘Quran-e-Kareem ke Mauzuaat’</strong>

//               <ol className="list-[lower-roman] pl-6 mt-3 space-y-3">
//                 <li>
//                   Pehla hissa <strong>‘Quran-e-Kareem ke Mauzuaat’</strong> A se
//                   K tak <strong>15,508</strong> items per mushtamal hai.
//                 </li>

//                 <li>
//                   Pehla hissa <strong>‘Quran-e-Kareem ke Mauzuaat’</strong> L se
//                   Z tak <strong>13,651</strong> items per mushtamal hai.
//                   Mauzu-e-kalaam ki zakhaamat ki wajah se qaari ki sahoolat ke
//                   aik file ko do hisson mein taqseem kiya gaya hai.
//                 </li>

//                 <li>
//                   Pehla hissa <strong>‘Quran-e-Kareem ke Mauzuaat’</strong>{" "}
//                   <strong>7,033</strong> items per mushtamal hai. Iss mein
//                   Quran-e-Majeed ke mauzuaat ko aik aur terteeb se ujaagar kiya
//                   gaya hai. Iss hisse mein bhi Qurani mauzuaat dictionary shakl
//                   mein dikkhayee dein ge. In ibtidayee teen hisson ko iss tamaam
//                   kaavish ka markaz qaraar diya jaa sakta hai. Items ko terteeb
//                   se Roman Urdu mein English alphabetical order mein ikhtesaar
//                   ke saath paysh kiya gaya hai jo kay aik tekneeqi majboori thi.
//                   Zaroorat parrne per bracket mein Roman Arabi mein Qurani Aayat
//                   bhi hai taake matlab samajhne mein aasaani ho. Folders ke
//                   ander Roman Urdu mein Aayaat ka terjuma hai. Iss Word file ko
//                   side se double-click kerne se andar se Arabi Aayat aur uska
//                   Urdu terjuma namudaar ho jaata hai. Shuru mein system chalaane
//                   mein thorri se dushwaari derpaysh ho sakti hai magar thorri
//                   practice se aboor haasil ho jaye ga.
//                 </li>
//               </ol>
//             </li>

//             <li>
//               <strong>Doosra hissa ‘Vocabulary Aayaat aur Alfaaz ki’</strong>{" "}
//               <strong>21,009</strong> items per mushtamal hai jis mein brackets
//               mein [ ] Arabi Aayaat aur alfaaz hain. Iss hissay mein pooray
//               Quran-e-Kareem ki Aayaat-e-Mubaareka jis lafz se shuru hoti hain
//               unhein wahan se derj kiya gaya hai. Jabke wus-at-e-kalaam ko
//               mazeed ujaagar karne ke liye baaz Aayaat ko Wau, Fay, Summa,
//               Innamaa, Qul, Qaala, Qaalat, Qaaloo aur Qad waghera ke baad se
//               shuru kiya gaya hai jiska maqsad Na-uzu Billah kisi Aayat ka
//               matlab ya maani badalna nahin hai. Maqsad sirf yeh hai kay aik
//               qaari Quran ke andaaz-e-takhaatib aur wus-at-e-kalaam ko dekkhne
//               aur samajhne ke qaabil ho sakay. Quran ki kul 6349 Aayaat mein se
//               2228 Aayaat Wau se shuru hoti hain. Wau ke baghair Aayaat ke
//               indraaj se maaloom huwa kay wohi baat ya kalaam ka wahi andaaz
//               kitni aur jaghon per maujood hai. Iss tareeqe se woh tamaam
//               baatein saamne aa gayeen jinhein dekkhne ka mauqa Quran ke Qaari
//               ko amoomi taur per nahin milta.
//             </li>

//             <li>
//               <strong>Teesra hissa ‘Aayaat, Alfaaz aur Haqaaeq’</strong>{" "}
//               <strong>19,269</strong> items per mushtamal hai. Iss hissay mein
//               Quran se mutaaliq deegar dilchasp maaloomaat hain jo Qari ke ilm
//               aur tajassus mein izaafa ka baaes bun sakti hain, usay yeh bhi
//               maaloom ho ga kay aik hee baat Quran-e-Hakeem ke kitne muqaamat
//               per darj hai. Iss hisse mein Quran-e-Paak ki Aayat per adadi kaam
//               (numerical work) aur kuchh grammer ka kaam anjaam diya gaya hai.
//               Yeh kaawish research work ke liye aik mufeed database saabit ho
//               sakti hai.
//             </li>

//             <li>
//               <strong>Chautha hissa ‘Aayaat Rabb-e-Kareem Baare’</strong>{" "}
//               <strong>12,863</strong> items per mushtamal hai. Yeh hissa Allah
//               Ta'aala ki sifaat, Uski zaat aur ahkaam se mutaalliq Aayaat per
//               mabani hai. Folder per kaheen kaheen Urdu ke saath bracket mein
//               Roman Arabi bhi tehreer hai taake samajhne mein mazeed aasaani ho.
//               Iss hissay mein Allah Ta'aala se mutaaliq Aayaat ki takhsees mehz
//               aik farzi taqseem hai.
//             </li>

//             <li>
//               <strong>Paanchwaan hissa ‘Aayaat Nabi SAAWAW baare’</strong>{" "}
//               <strong>2,553</strong> items per mushtamal hai. Iss hiss mein Nabi
//               SAAWAW se mutaalliq Aayaat hain jis mein ziyada-ter Allah Ta'aala
//               ne Nabi SAAWAW ko mukhaatib ker ke kalaam kiya hai. Iss hissay
//               mein Nabi SAAWAW se mutaalliq Aayaat ki takhsees mehz aik farzi
//               taqseem hai.
//             </li>
//             <li>
//               <strong>Chhata hissa ‘Aayaat Anbiya AS baare’</strong>{" "}
//               <strong>1,758</strong> items per mushtamal hai. Yeh hissa Anbiya
//               AS ke haalaat-o-waaqeaat se mutaalliq Aayaat per mabani hai.
//             </li>

//             <li>
//               <strong>Saatwaan hissa ‘Quran Haroof-e-Tahajji Se’</strong> (
//               <strong>6,349</strong> Aayaat). Jaisa kay mukammal Quran-e-Paak{" "}
//               <strong>6,349</strong> Aayaat per mushtamal hai. Iss hisse mein
//               Qurani Aayaat ko Arabi Haroof-e-Tahajji ke alag alag folder mein
//               paysh kiya gaya hai. Quran-e-Majeed ke baare mein tehqeeq kerne
//               walon ke liye yeh kaawish mufeed data-base fraaham ker sakti hai.
//             </li>

//             <li>
//               <strong>Aatthwaan hissa ‘Quran a,b,c, Terteeb se’</strong>{" "}
//               <strong>6,349</strong> Aayaat per mushtamal hai. Roman Arabi mein
//               yeh file bhi Quran per research work kerne walon ke liye sood-Mund
//               saabit ho gi.
//             </li>

//             <li>
//               <strong> Nawaan hissa ‘Quran-e-Majeed’</strong> (114 Surah,{" "}
//               <strong>6,349</strong> Aayaat). Roman Arabi mein yeh Quran ki
//               Suraton ki amoomi terteeb hai. Total <strong>6,349</strong> Aayaat
//               mein 113 Surah ki ‘Bismillah-ir-Rahman-ir-Raheem’ bhi Aayaat
//               shumaar kee jaati hai. Sirf aik Surah ‘Taubah’ per
//               ‘Bismillah-ir-Rahman-ir-Raheem’ nahin parrhi jaati. Aayaat ko
//               pehli se aakhiri Aayat tak ooper se neeche seedha derj kiya gaya
//               hai. Cursor ke zirye Aayaat ko tezi se ooper neeche dekkha jaa
//               sakta hai. Iss tarah se Quran ka mutaalea dilchapsi aur
//               ghaur-o-fikr ki daawat deta hai.
//             </li>

//             <li>
//               <strong>Daswaan hissa ‘Quran Ka Khulaasa’</strong> hai jo kay{" "}
//               <strong>3,232</strong> items per mushtamal hai.
//             </li>
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Usermanual;

export default async function Usermanual() {
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

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              Aap ki E-mail ID derkaar ho gi system ki applications ko sahee
              tareeqe se dekkhne ke liye
            </li>
            <li>
              Screen per chalti nazar aati kisi bhi item ke neeche neelay rung
              ka &quot;START READING&quot; button touch kerne se woh item kkhul
              jaati hai. File kkhulne mein 2/3 second lug sakte hain.
            </li>
            <li>
              Screen ke daayen jaanib ooper teen &lsquo;DASH&rsquo; ko touch
              kerne se baayen jaanib &lsquo;EXPLORE DICTIONARY&rsquo; ki option
              naumdaar ho jaati hai jisay touch kerne se main menue kkhul jaata
              hai. Main menu ko behter taur se dekkhne ke liye Cellphone ki
              screen 2 ungliyon se barra ker leejiye. Matlooba file ko kkholne
              ke baad screen ko waapis chhota ke leejiye. Baara (12) files mein
              se kisi ko bhi touch kerne se woh file kkhul jaati hai. Files ko
              kkholne ka sub se aasaan tareeqa yehi hai agarche kay &lsquo;START
              READING&rsquo; ne neele button ko touch karne se bhi kisi file
              mein daakhil huwa ja sakta hai.
            </li>
            <li>
              Mobile phone per Arabi/Urdu mein text munaasib andaaz se dekkhne
              ke liye mobile phone ko daayen jaanib (horizontal screen) mein
              behter tareeqe se dekkha ja sakta hai. Screen ko double-touch ker
              ke view ko barra bhi kiya ja sakta hai.
            </li>
            <li>
              Cellphone screen ko &lsquo;DESKTOP SITE&rsquo; mode per set kerne
              se aur horizontal position per rakkhne se applications ziyaada
              behter nazar aati hain.
            </li>
            <li>
              Shuru mein system ki applications ko samajhne mein kuchh dushwaari
              ho sakti hai magar thorri practice se iss mushkil per qaabu paaya
              jaa sakta hai.
            </li>
            <li>
              System ki applications computer yaa Tablet per behter aur aasaan
              tareeqe se kaam kerti dikkhayee deti hain jabke inhein Android
              phone per bhi dekkha ja sakta hai.
            </li>
            <li>
              Parrhne ke liye 100 lines aik baar namudaar hoteen hain. Mazeed
              items &lsquo;LOAD MORE&rsquo; button ko touch kerne se download
              hoti hain. Taahum &lsquo;LOAD MORE&rsquo; button ko chaar baar
              musalsal touch kerne se 400 lines aik hee baar namudaar ho jaati
              hain.
            </li>
            <li>
              Tamaam derj items dictionary ke andaaz se nazar aati hain jinhein
              ooper ya neeche ki jaanib &lsquo;slide up&rsquo; aur &lsquo;slide
              down&rsquo; ker ke baa-aasaani dekkha jaa sakta hai. Chunancheh
              iss kaawish ko Qurani Aayaat aur Alfaaz ki dictionary kaha jaa
              sakta hai.
            </li>
            <li>
              Search system aik waqt mein kisi aik file system (hissa) ke liye
              makhsoos hai. Iss liye kisi item ki talaash ke liye tamaam files
              ko alag alag file mein search kerne ki zaroorat ho gi.
            </li>
            <li>
              Folders ke ander Quran ki Word files hain jinke mazeed ander Quran
              ka Arabi aur Urdu text hai. Word files ko touch kerne se
              Arabi/Urdu text namudaar ho jaata hai.
            </li>
            <li>
              Folders per sirf 8-9 alfaaz aa saktay hain jiski wajah se aksar
              jumlay ikhtisaar ke saath derj hain magar Quran ki Word files ke
              ander baat mukammal aur sahi taur per dekkhi jaa sakti hai. Folder
              aur Quran ki Word files ko cursor se double-click kerne se kkhola
              jaa sakta hai.
            </li>
            <li>
              Mauzuaat ko ujaagar kerne ke liye aur unki terteeb ko qaayem
              rakkhne ke liye kisi jumlay ke alfaaz ko aagay peechhe kiya gaya
              hai jiska maqsad (Naauzu Billah) aayaat ki asl hai-at ko budulna
              nahin. Lehaaza mukammal baat samajhne ke liye Quran ki Word files
              ke ander Arabi aur Urdu ke asli text dekkhna zaroori hai.
            </li>
            <li>
              Roman Urdu ki Word files per lines ko a,b,c,d waghera se zahir
              kiya gaya hai.
            </li>
            <li>
              Roman Urdu ki Word file ke aakhir per teen dots (…) ka matalab hai
              jumla jaari hai.
            </li>
            <li>
              Roman Urdu ki Word files per bracketon ke dermiyan coma
              &quot;(,)&quot; ka matlab sawaaliya &quot; ? &quot; nishan hai
              wajah yeh hai kay system folder per sawaaliya nishan (?) nahin
              utthaata.
            </li>
            <li>
              Folders per bracketon [ ] ke ander Roman-Arabi mein likkhi hui
              aayaat aur alfaaz hain.
            </li>
            <li>
              Tamaam Aayaat aur items ke aakhir mein Surah Number, Surah ka naam
              aur Aayat number derj hai jo kay baa-qaaeda aik code hai. Iss code
              ko &lsquo;Search&rsquo; mein daalne se deegar jaghon per iss
              mutalliqa aayat ki maaloomat tak pohoncha jaa sakta hai.
            </li>
            <li>
              Roman Urdu ki Word files mein &quot;rr&quot; ka matlab Urdu
              haroof-e-tahajji ka &quot;ڑ&quot; hai.
            </li>
            <li>
              Roman Arabi mein block letters &quot;LL,MM,RR,WW,YY&quot; ka
              matlab hai kay do harfon ke dermiyan mein &quot;ن&quot; jabke
              &lsquo;TT&rsquo; ke dermiyan &quot;د&quot; harf chhupa huwa hai.
            </li>
            <li>
              Roman Arabi ke baaz jumlon ke shuru mein small &lsquo;a&rsquo; se
              muraad sawaaliya baat hai.
            </li>
            <li>
              Roman Urdu mein &apos;pph&apos; ka matlab &quot;پھ&quot; ki aawaaz
              hai.
            </li>
            <li>
              Yeh kaawish Quran ki mehez documentation se mutaaliq hai. Internet
              se aik Qurni nuskhe ko download ker ke kisi maali manfi-at ke
              iraade ke baghair yeh kaam anjaam diya gaya hai jis mein na koi
              faqhi takhsees hai na aur koi soch. Kaam kerne waalay ne na tau
              khud koi terjuma anjaam diya hai aur na tafseer balke computer ki
              technology se faeda utthaate huwe sirf aik tekneeki kaam anjaam
              diya hai. Aatth saal ki shab-o-roz mehnat se kaam takmeel ko
              pohoncha jis mein Prof. Muhammad Rafiq sahib ka mashwara bhi
              shaamil-e-haal raha. Dekkha jaye tau Abhi bhi bohut saara kaam
              honay ki abhi gunjaesh baaqi hai jisay baad mein aanay waalay
              taalibaan-e-ilam-o-irfan aur aagay barrhayen ge InshaAllah.
            </li>
            <li>
              <span className="font-semibold block mb-3">
                Poore system ko 10 hisson mein taqseem kiya gaya hai jiske
                tafseel yoon hai:
              </span>
              <ol className="list-decimal pl-6 space-y-4 text-sm lg:text-base">
                <li>
                  <strong>
                    Pehla hissa &lsquo;Quran-e-Kareem ke Mauzuaat&rsquo;
                  </strong>
                  <ol className="list-[lower-roman] pl-6 mt-3 space-y-3">
                    <li>
                      Pehla hissa{" "}
                      <strong>&lsquo;Quran-e-Kareem ke Mauzuaat&rsquo;</strong>{" "}
                      A se K tak <strong>15,508</strong> items per mushtamal
                      hai.
                    </li>
                    <li>
                      Pehla hissa{" "}
                      <strong>&lsquo;Quran-e-Kareem ke Mauzuaat&rsquo;</strong>{" "}
                      L se Z tak <strong>13,651</strong> items per mushtamal
                      hai. Mauzu-e-kalaam ki zakhaamat ki wajah se qaari ki
                      sahoolat ke aik file ko do hisson mein taqseem kiya gaya
                      hai.
                    </li>
                    <li>
                      Pehla hissa{" "}
                      <strong>&lsquo;Quran-e-Kareem ke Mauzuaat&rsquo;</strong>{" "}
                      <strong>7,033</strong> items per mushtamal hai. Iss mein
                      Quran-e-Majeed ke mauzuaat ko aik aur terteeb se ujaagar
                      kiya gaya hai. Iss hisse mein bhi Qurani mauzuaat
                      dictionary shakl mein dikkhayee dein ge. In ibtidayee teen
                      hisson ko iss tamaam kaavish ka markaz qaraar diya jaa
                      sakta hai. Items ko terteeb se Roman Urdu mein English
                      alphabetical order mein ikhtesaar ke saath paysh kiya gaya
                      hai jo kay aik tekneeqi majboori thi. Zaroorat parrne per
                      bracket mein Roman Arabi mein Qurani Aayat bhi hai taake
                      matlab samajhne mein aasaani ho. Folders ke ander Roman
                      Urdu mein Aayaat ka terjuma hai. Iss Word file ko side se
                      double-click kerne se andar se Arabi Aayat aur uska Urdu
                      terjuma namudaar ho jaata hai. Shuru mein system chalaane
                      mein thorri se dushwaari derpaysh ho sakti hai magar
                      thorri practice se aboor haasil ho jaye ga.
                    </li>
                  </ol>
                </li>

                <li>
                  <strong>
                    Doosra hissa &lsquo;Vocabulary Aayaat aur Alfaaz ki&rsquo;
                  </strong>{" "}
                  <strong>21,009</strong> items per mushtamal hai jis mein
                  brackets mein [ ] Arabi Aayaat aur alfaaz hain. Iss hissay
                  mein pooray Quran-e-Kareem ki Aayaat-e-Mubaareka jis lafz se
                  shuru hoti hain unhein wahan se derj kiya gaya hai. Jabke
                  wus-at-e-kalaam ko mazeed ujaagar karne ke liye baaz Aayaat ko
                  Wau, Fay, Summa, Innamaa, Qul, Qaala, Qaalat, Qaaloo aur Qad
                  waghera ke baad se shuru kiya gaya hai jiska maqsad Na-uzu
                  Billah kisi Aayat ka matlab ya maani badalna nahin hai. Maqsad
                  sirf yeh hai kay aik qaari Quran ke andaaz-e-takhaatib aur
                  wus-at-e-kalaam ko dekkhne aur samajhne ke qaabil ho sakay.
                  Quran ki kul 6349 Aayaat mein se 2228 Aayaat Wau se shuru hoti
                  hain. Wau ke baghair Aayaat ke indraaj se maaloom huwa kay
                  wohi baat ya kalaam ka wahi andaaz kitni aur jaghon per
                  maujood hai. Iss tareeqe se woh tamaam baatein saamne aa
                  gayeen jinhein dekkhne ka mauqa Quran ke Qaari ko amoomi taur
                  per nahin milta.
                </li>

                <li>
                  <strong>
                    Teesra hissa &lsquo;Aayaat, Alfaaz aur Haqaaeq&rsquo;
                  </strong>{" "}
                  <strong>19,269</strong> items per mushtamal hai. Iss hissay
                  mein Quran se mutaaliq deegar dilchasp maaloomaat hain jo Qari
                  ke ilm aur tajassus mein izaafa ka baaes bun sakti hain, usay
                  yeh bhi maaloom ho ga kay aik hee baat Quran-e-Hakeem ke kitne
                  muqaamat per darj hai. Iss hisse mein Quran-e-Paak ki Aayat
                  per adadi kaam (numerical work) aur kuchh grammer ka kaam
                  anjaam diya gaya hai. Yeh kaawish research work ke liye aik
                  mufeed database saabit ho sakti hai.
                </li>

                <li>
                  <strong>
                    Chautha hissa &lsquo;Aayaat Rabb-e-Kareem Baare&rsquo;
                  </strong>{" "}
                  <strong>12,863</strong> items per mushtamal hai. Yeh hissa
                  Allah Ta&apos;aala ki sifaat, Uski zaat aur ahkaam se
                  mutaalliq Aayaat per mabani hai. Folder per kaheen kaheen Urdu
                  ke saath bracket mein Roman Arabi bhi tehreer hai taake
                  samajhne mein mazeed aasaani ho. Iss hissay mein Allah
                  Ta&apos;aala se mutaaliq Aayaat ki takhsees mehz aik farzi
                  taqseem hai.
                </li>

                <li>
                  <strong>
                    Paanchwaan hissa &lsquo;Aayaat Nabi SAAWAW baare&rsquo;
                  </strong>{" "}
                  <strong>2,553</strong> items per mushtamal hai. Iss hiss mein
                  Nabi SAAWAW se mutaalliq Aayaat hain jis mein ziyada-ter Allah
                  Ta&apos;aala ne Nabi SAAWAW ko mukhaatib ker ke kalaam kiya
                  hai. Iss hissay mein Nabi SAAWAW se mutaaliq Aayaat ki
                  takhsees mehz aik farzi taqseem hai.
                </li>

                <li>
                  <strong>
                    Chhata hissa &lsquo;Aayaat Anbiya AS baare&rsquo;
                  </strong>{" "}
                  <strong>1,758</strong> items per mushtamal hai. Yeh hissa
                  Anbiya AS ke haalaat-o-waaqeaat se mutaalliq Aayaat per mabani
                  hai.
                </li>

                <li>
                  <strong>
                    Saatwaan hissa &lsquo;Mushaabeh/Repeat Aayaat&rsquo;
                  </strong>{" "}
                  Roman Arabi mein yeh hissa <strong>3,058</strong> items per
                  mushtamal hai. Yeh hissa dilchaspi aur ghaur-o-fikr ke mawaad
                  se bharpoor hai.
                </li>

                <li>
                  <strong>
                    Aatthwaan hissa &lsquo;Quran Haroof-e-Tahajji Se&rsquo;
                  </strong>{" "}
                  (<strong>6,349</strong> Aayaat). Jaisa kay mukammal
                  Quran-e-Paak <strong>6,349</strong> Aayaat per mushtamal hai.
                  Iss hisse mein Qurani Aayaat ko Arabi Haroof-e-Tahajji ke alag
                  alag folder mein paysh kiya gaya hai. Quran-e-Majeed ke baare
                  mein tehqeeq kerne walon ke liye yeh kaawish mufeed data-base
                  fraaham ker sakti hai.
                </li>

                <li>
                  <strong>
                    Nawaan hissa &lsquo;Quran a,b,c, Terteeb se&rsquo;
                  </strong>{" "}
                  <strong>6,349</strong> Aayaat per mushtamal hai. Roman Arabi
                  mein yeh file bhi Quran per research work kerne walon ke liye
                  sood-Mund saabit ho gi.
                </li>

                <li>
                  <strong>
                    Daswaan hissa &lsquo;Quran-e-Majeed (114 Surah, 6,349
                    Aayaat)&rsquo;
                  </strong>
                  . Roman Arabi mein yeh Quran ki Suraton ki amoomi terteeb hai.
                  Total <strong>6,349</strong> Aayaat mein 113 Suraton ke shuru
                  mein &lsquo;Bismillah-ir-Rahman-ir-Raheem&rsquo; bhi Aayaat
                  shumaar kee jaati hai. Sirf aik Surah &lsquo;Taubah&rsquo; per
                  &lsquo;Bismillah-ir-Rahman-ir-Raheem&rsquo; nahin parrhi
                  jaati. Aayaat ko pehli se aakhiri aayat tak ooper se neeche
                  seedha derj kiya gaya hai. Cursor ke zirye Aayaat ko tezi se
                  ooper neeche dekkha jaa sakta hai. Iss tarah se Quran ka
                  mutaalea dilchapsi aur ghaur-o-fikr ki daawat deta hai.
                </li>

                <li>
                  <strong>
                    Gayaarhwaan hissa &lsquo;Quran-e-Majeed&rsquo;
                  </strong>{" "}
                  ka Roman Urdu Nuskha jis ki bunyaad ye saara kaam ko anjaam
                  diya gaya hai.
                </li>

                <li>
                  <strong>
                    Baarhaarhwaan hissa &lsquo;Quran Ka Khulaasa&rsquo;
                  </strong>{" "}
                  hai jo kay <strong>3,232</strong> items per mushtamal hai.
                  Poore Quran ko sur-at ke saath kum se kum waqt mein dekkhne ke
                  liye Quran ke khulaasa terteeb diya gaya hai.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
