import React from 'react'

function Usermanual() {
  return (
    <div className="container mx-auto">
      <div className='p-3 lg:p-5'>
        <div className='px-5 py-6 pb text-lg text-gray-light' style={{boxShadow:"0px 0px 20px #0005"}}>
          <h2 className='text-xl lg:text-4xl text-primary font-playfairDisplay mb-6 capitalize'>System kaisay kaam kerta hai</h2>
          <ol className='list-decimal pl-6 text-sm lg:text-base'>
            <li className='mb-3'>System ki applications computer per behter aur aasaan tareeqe se kaam kerti hain jabke inhein mobile per bhi dekkha ja sakta hai. </li>
            <li className="mb-3">Apne cellphone ko sub se chhotay font per set karein.</li>
            <li className="mb-3">System ki majboori hai kay aik bar 100 se ziyada items/files zaahir nahin hoteen. Mazeed items “Load more” button ko press kerne se download hoti hain.</li>
            <li className="mb-3">Tamaam derj items dictionary ke andaaz se nazar aati hain jinhein ooper ya neeche ki jaanib ‘’slide up” aur “slide down” ker ke baa-aasaani dekkha jaa  sakta hai. Chunancheh iss kaawish ko Qurani Aayaat aur Alfaaz ki dictionary kaha jaa sakta hai.</li>
            <li className="mb-3">Mobile per Arabi/Urdu mein text munaasib andaaz se dekkhne ke liye mobile ko daayen jaanib (horizontal screen) mein behter tareeqe se dekkha ja sakta hai. Screen ko double-touch ker ke view ko barra bhi kiya ja sakta hai. </li>
            <li className="mb-3">Search system aik waqt mein kisi aik file system (hissa) ke liye makhsoos hai. Iss liye kisi item ki talaash ke liye tamaam files ko alag alag search kerne ki zaroorat ho gi.</li>
            <li className="mb-3">Folders ke ander Quran ki Word files hain jinke mazeed ander Quran ka Arabi aur              Urdu text hai.</li>
            <li className="mb-3">Folders per sirf 8-9 alfaaz aa saktay hain jiski wajah se aksar jumlay ikhtisaar ke saath derj hain magar Quran ki Word files ke ander baat mukammal aur sahi taur per dekkhi jaa     sakay gi. Folder aur Quran ki Word files ko cursor se double-click kerne se kkhola                        jaa sakta hai.</li>
            <li className="mb-3">Mauzuaat ko ujaagar kerne ke liye aur unki terteeb ko qaayem rakkhne ke liye alfaaz ko aagay peechhe kiya gaya hai jiska maqsad (Naauzu Billah) aayaat ki asl hai-at ko budulna nahin. Lehaaza mukammal baat samajhne ke liye Quran ki Word files ke ander Arabi aur Urdu ke asli text dekkhna zaroori hai.</li>
            <li className="mb-3">Roman Urdu ki Word files per lines ko a,b,c,d waghera se zahir kiya gaya hai.</li>
            <li className="mb-3">Roman Urdu ki Word file ke aakhir per teen dots (…) ka matalab hai jumla jaari hai.    </li>
            <li className="mb-3">Roman Urdu ki Word files per bracketon ke dermiyan coma “(,)” ka matlab sawaaliya (?) nishan hai.</li>
            <li className="mb-3">Roman Arabi folders mein bracketon [ ] ke ander Roman-Arabi mein likkhi hui aayaat hain.</li>
            <li className="mb-3">Tamaam Aayaat aur items ke aakhir mein Surah Number, Surah ka naam aur Aayat number derj hai jo kay baa-qaaeda aik code hai. Iss code ko ‘Search’ mein daalne se deegar jaghon per iss mutalliqa aayat ki maaloomat tak pohoncha jaa sakta hai.</li>
            <li className="mb-3">Roman Urdu ki Word files mein ‘rr’ ka matlab Urdu haroof-e-tahajji ka ‘(ڑ)’ hai.</li>
            <li className="mb-3">Roman Arabi mein block letters ‘LL,MM,RR,WW,YY’ kay dermiyan mein  “ن” ki aawaaz chhupi hai. </li>
            <li className="mb-3">Roman Arabi ke baaz jumlon ke shuru mein small ‘a’ se muraad sawaaliya baat hai.</li>
            <li className="mb-3">Roman Urdu mein ‘pph’ ka matlab ‘(پھ)’ ki aawaaz hai.</li>
            <li className="mb-3">Poore system ko 12 hisson mein taqseem kiya gaya hai jiske tafseel yoon hai:</li>
            <li className='mb-3'>
                <ol className='list-[lower-roman] pl-6 mt-3'>
                  <li className='mb-3'><strong>Pehla hissa ‘Quran-e-Kareem Ke Mauzuaat’ </strong>kul 26,301 items, Part-I….A to K (14,480) items aur Part-II….L to Z (12,450) items per mushtamal hai. Iss hisse ko iss tamaam kaavish ka markaz kaha jaa sakta hai. Items ko terteeb se Roman Urdu mein English alphabetical order mein ikhtesaar ke saath paysh kiya gaya hai. Zaroorat parrne per bracket mein Roman Arabi Qurani Aayat bhi hai taake matlab samajhne mein aasaani ho. Forlders ke ander Roman Urdu mein aayaat ka terjuma hai. Word file ko side se double-click kerne se andar se Arabi Aayat aur uska Urdu terjuma namudaar ho jaata hai. Shuru mein system chalaane mein thorri se dushwaari derpaysh ho sakti hai magar thorri practice se aboor haasil ho jaye ga. </li>
                  <li className='mb-3'><strong>Doosra hissa  ‘Quran ke Mauzuaat ki aik aur Terteeb’ </strong>7,463 items per mushtamal hai. Iss mein Quran-e-Majeed ke kuchh baqya mauzuaat hain. Iss hisse mein bhi Qurani haqaaeq dictionary shakl mein dikkhayee dein ge.</li>
                  <li className='mb-3'><strong>Teesra hissa  ‘Aayaat Rabb-e-Kareem Baare’ </strong>12,868 items per mushtamal hai. Yeh hissa Allah Ta’aala ki sifaat, Uski zaat aur Ahkaam se mutaalliq aayat per mabani hai. Folder per kaheen kaheen Urdu ke saath Roman Arabi bhi tehreer hai taake samajhne mein ziyada aasaani ho</li>
                  <li className='mb-3'><strong>Chautha hissa  ‘Aayaat Nabi SAAWAW baare’ </strong>2,561 items per mushtamal hai. Iss hiss mein Nabi SAAWAW se mutaalliq aayaat hain jis mein ziyada-ter Allah Ta’aala ne Nabi SAAWAW ko mukhaatib kiya hai.</li>
                  <li className='mb-3'><strong>Paanchwaan hissa  ‘Aayaat Anbiya AS baare’ </strong>1,594 items per mushtamal hai. Yeh hissa Anbiya AS ke haalaat-o-waaqeaat se mutaalliq aayaat per mabani hai.</li>
                  <li className='mb-3'><strong>Chhata hissa  ‘Numerical & Grammar Work’ </strong>18,480 items per mushtamal hai. Iss hisse mein Quran-e-paak ki aayat per adadi kaam (numerical work) aur kuchh grammar ka kaam anjaam diya gaya hai. Yeh kaawish research work ke liye aik zabardast database hai.</li>
                  <li className='mb-3'><strong>Saatwaan hissa  ‘Quran Arabi Haroof ki Suf-Bandi se’ </strong>mukammal Quran-e-Paak ki 6,349 Aayaat per mushtamal hai. Iss hisse mein Qurani aayaat ko Arabi   Haroof-e-tahajji ke alag alag folder mein paysh kiya gaya hai. Quran-e-Majeed per tehqeeq kerne walon ke liye yeh kaawish muawin saabit ho sakti hai.</li>
                  <li className='mb-3'><strong>Aatthwaan hissa  ‘Quran a,b,c, Terteeb se’ </strong>6,349 Aayaat per mushtamal hai. Yeh file Quran per research kerne walon ke liye soodMund ho sakti hai.</li>
                  <li className='mb-3'><strong>Nawaan hissa  ‘Quran-e-Majeed </strong>(114 Surah, 6349 Aayaat)’. Yeh Quran ki Suraton ki bunyaadi terteeb hai. Total 6,349 Aayaat mein 113 Surah ki ‘Bismillah-ir-Rahman-ir-Raheem’ bhi Aayaat shumaar kee jaati hai. Sirf aik Surah ‘Taubah’ per ‘Bismillah-ir-Rahman-ir-Raheem’ nahin parrhi jaati. Aayaat ko pehli se aakhiri aayat tak ooper se neeche seedha derj kiya gaya hai. Cursor ke zirye Aayaat ko tezi se ooper neeche dekkha jaa sakta hai. Iss tarah se Quran ka mutaalea dilchapsi aur ghaur-o-fikr ki daawat deta hai.</li>
                  <li className='mb-3'><strong>Daswaan hissa ‘Mushaabeh Aayaat aur Alfaaz </strong>11,021 items per musthtamal hai. Iss mein aisi aayaat aur alfaaz hain jo kum-o-baysh mushaabehat rakkhte hain. </li>
                  <li className='mb-3'><strong>Gyaarhwaan hissa ‘Baaz Aayaat ka Mawaazna aur Ghaur’ </strong>Yeh hissa bhi qaari-een ke liye khaas dil-chaspi ka baaes ho ga.</li>
                  <li className='mb-3'><strong>Baarhwaan hissa  ‘Quran Ka Khulaasa’ </strong> hai jo kay 2,031 items per mushtamal hai. </li>
                </ol>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Usermanual