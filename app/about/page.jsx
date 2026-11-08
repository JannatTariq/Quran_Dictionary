import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="container mx-auto">
      <div className="p-3 lg:p-5">
        <div
          className="px-5 py-1 pb mt-[100px] text-lg text-gray-light"
          style={{ boxShadow: "0px 0px 20px #0005" }}
        >
          <div className="flex justify-center">
            <Image
              width={200}
              height={200}
              src="/images/Asad-Ali.jpg"
              alt="Asad Ali"
              className="w-[200px] mt-[-100px] mb-4 h-auto rounded-full"
            />
          </div>
          <h2 className="text-xl lg:text-4xl text-primary font-playfairDisplay mb-2 capitalize">
            A message from the founder
          </h2>
          <p className="mb-5 text-sm lg:text-base">
            {"The Quran was revealed by Allah ("}
            <em>{"Jalle Shaanahu"}</em>
            {") upon Muhammad SAAWAW, the Last Messenger of Allah, for the betterment "}
            <em>{"(Falah)"}</em>
            {" of mankind about 1444 years ago. Since then, the exponents of Quran and Authorities over its knowledge have been striving hard to unfold its intricacies. The Muslims strongly believe that this Holy Book is sufficient to tackle all issues of every age. So, they recite it not only in their routine prayers but on every event of death and birth as Allah says in the Quran that its recitation is useful for treatment of spiritual and bodily ailments and is a compact source of righteousness (Al-Quran:10:57, 17:82 & 41:44)."}
          </p>
          <p className="mb-5 text-sm lg:text-base">
            {"It is also a strong belief among Muslims that the Quran has its two main facets e.g. spiritual and material. However, the study of past and contemporary Islamic traditions would reveal that its followers have mostly focused on its spiritual and mystic side. Allah says that “I have created jinns and men for my reverence.” (51:56). At the same time Allah says that “I have created man for sheer hard-work” (90:4). Also says “We have created you for your trial as to who performs better work” (11:7). “He (Allah) created life and death for your trial as to who performs good deeds” (67:2). As to the worldly things, Quran says “All the things of earth have been created for its beautification and for competition among men to see as to who performs better” (18:7). One generally sees that many Muslims say prayers and go to mosques and monasteries for their personal uplift through spirituality and blessings ("}
            <em>{"Dua"}</em>
            {"). Sticking to the spiritual side is, however, not un-orthodox as Allah demands from man to ask for His mercy and His blessings through prayers ("}
            <em>{"Dua, Istaghfaar & Tawakkal"}</em>
            {"). This very practice keeps a man remain in touch with Allah and is a source of his constant uprightness."}
          </p>
          <p className="mb-5 text-sm lg:text-base">
            {"At this juncture, it can safely be said that a progressive Muslim society thrives on two main principles e.g. reverence of Allah and sheer hard-work. Whilst with these two main virtues Allah at 64 occasions in Quran desires man to think and think with these phrases: "}
            <em>{"AfaLaa Ta’qiloon, AfaLaa Yatadabbaroonal-Qur-aana, AfaLaa Tazakkaroon, Falau Laa Tazakkaroon, La-allakum Tatafakkaroon, Li-QaumiYYa'qiloon, Li-QaumiYYa'lamoon, Li-QaumiYYafqahoon, Li-QaumiYYatafakkaroon "}</em>
            {"and"}
            <em>{" Fal-Yanzuril-Insaanu"}</em>
            {" alike."}
          </p>
          <p className="mb-5 text-sm lg:text-base">
            {"It is fact that for living honorably and gracefully in this world it is necessary to do hard-work (besides regular prayers) and most importantly to think over the contemporary world. At this point of time, however, one can argue whether have Muslims society been successful in achieving this goal? Have they done the required hard-work as compared to the other thriving economies of the world? Have they ever created a think-tank to settle their socio-economic and political issues etc.----The reply will come not in affirmative?"}
          </p>
          <p className="mb-5 text-sm lg:text-base">
            {"The Quran, without any doubt, can help solve all the human problems. But to move in this direction one needs to understand genuinely the Quranic teachings dealing with material and social aspects. It is also necessary to ponder over the Aayahs of Quran dealing with national harmony, civic sense, socio-economic development and fruitful political reforms etc. So, I have ventured to document Quranic Aayahs in such an order that it helps to understand Quranic injunctions which sometimes remain obscure from the Muslim eye."}
          </p>
          <h2 className="text-xl lg:text-4xl text-primary font-playfairDisplay mb-2 capitalize">
            Mission statement
          </h2>
          <p className="mb-5 text-sm lg:text-base">
            {"In early 60s, the President of Pakistan Field Marshal Muhammad Ayyub Khan had once suggested his Principal Secretary Mr. Qudrat Ullah Shahaab that the Quranic Aayahs similar in nature and meanings should be arranged in order for enhancing the capacity of its readers. (Ref: "}
            <em>{"Shahaab Naama"}</em>
            {"). This project, however, could not be started due to political and administrative engagements of the Government. Nevertheless, after a long period of 60 years it fell to me that I have ventured to undertake this stupendous task. It took me a long 9 years’ day and night labour in finishing this project which I started soon after my retirement. In performing this task, I had no idea of any specific "}
            <em>{"fiqh"}</em>
            {" and leaning. I just saw and downloaded a Quran file from Internet and started working on it. I have not made any translation or "}
            <em>{"Tafseer "}</em>
            {"of my own but have done only a technical work with the help of computer technology. In this journey the valuable guidance of respectable Prof. Maulana Muhammad Rafiq gave me lot of encouragement and support for which I shall remain grateful to him. This work, of course, is not thoroughly complete and there is a lot of space still left. I believe that the students of tomorrow will carry this cause forward and fill the missing links."}
          </p>
          <h2 className="text-xl lg:text-4xl text-primary font-playfairDisplay mb-2 capitalize">
            Errors and omissions excepted
          </h2>
          <p className="mb-5 text-sm lg:text-base">
            {"Though utmost care has been taken to avoid mistakes, having spent a period of more than 9 years in completing this difficult assignment, the factor of human error still cannot be denied. Due to compulsions of computer the order of wordings had to be changed at some places without the intension of changing of meanings. If any difficulty arises for the readers exact details can be seen in the Arabic/Urdu text available within the Roman-Urdu text file. I believe that readers while ignoring errors and suggest improvements in Comments Section."}
          </p>
          <div className="mb-4">
            <p className="text-xl font-semibold text-black">{"ASAD ALI"}</p>
            <p className="text-sm lg:text-base">{"0302-4007720"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
