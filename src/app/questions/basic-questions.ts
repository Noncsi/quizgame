import { Category } from "../categories";
import { BasicQuestion } from "../question";

export const basicQuestionsByCategories = [
    new Category(1, '1 - Celebek', [
      new BasicQuestion(111, 1, 'Hány tagú Győzike családja?', '4'),
      new BasicQuestion(112, 1, 'Berki Krisztiánnak van egy saját műsora, amit a SlágerTV csatornán sugároznak. Mi ennek a neve?', 'Überkirály'),
      new BasicQuestion(113, 1, 'Nevezz meg egy műsorvezetőt, aki vezette a Kölyök Klubbot!', 'Ördög Nóra / Jónás Rita'),
  
      new BasicQuestion(121, 2, 'Mi a beceneve Bódi Lászlónak, a Republic elhunyt frontemberének?', 'Cipő'),
      new BasicQuestion(122, 2, 'Hányszoros világbajnok Hosszú Katinka?', '9'),
      new BasicQuestion(123, 2, 'Ki volt a műsorvezetője a Mónika shownak?', 'Erdélyi Mónika'),
  
      new BasicQuestion(131, 3, 'Sorolj fel legalább 3 tagot az Irigy Hónalj Mirigyből (keresztnév vagy becenév elég)', '.'),
      new BasicQuestion(132, 3, 'Sorolj fel legalább 3 hírességet, aki rendszeresen szerepelt a Heti Hetes című műsorban', 'https://hu.wikipedia.org/wiki/Heti_Hetes'),
      new BasicQuestion(133, 3, 'Sorolj fel 3 műsort, amit Gundel-Takács Gábor vezet/vezetett', 'https://hu.wikipedia.org/wiki/Gundel_Tak%C3%A1cs_G%C3%A1bor)'),
    ]),
    new Category(2, '2 - Idegen szavak', [
      new BasicQuestion(211, 1, 'Mit jelent az, hogy valaki demonstrál?', 'bemutat, személtet/elkülönít, elszigetel'),
      new BasicQuestion(212, 1, 'Mit jelent, ha valaki infertilis?', 'Nem termékeny'),
      new BasicQuestion(213, 1, 'Mit jelent az, ha valaki hektikus?', 'zaklatott, ideges'),
  
      new BasicQuestion(221, 2, 'Mondj 2 olyan idegen szót, ami elkülönítést vagy elválasztást jelent!', 'szegregáció, izoláció, szeparáció'),
      new BasicQuestion(222, 2, 'Minek a szakértője a szomnológus?', 'alvás'),
      new BasicQuestion(223, 2, 'Mit jelent az, hogy intuív?', 'ösztönös megérsésen alapuló'),
  
      new BasicQuestion(231, 3, 'Milyen a lakonikus beszéd?', 'tömör'),
      new BasicQuestion(232, 3, 'Mit jelent az averzió?', 'idegenkedés, undor, ellenszenv'),
      new BasicQuestion(233, 3, 'Mivel foglalkozott az, aki szubrett volt?', 'szobalány, komorna'),
    ]),
    new Category(3, '3 - Szlogen', [
      new BasicQuestion(311, 1, 'Az élet habos oldala.', 'Borsodi'),
      new BasicQuestion(312, 1, 'Szárnyakad ad.', 'RedBull'),
      new BasicQuestion(313, 1, 'A legtöbb, mi adható.', 'Tchibo'),
  
      new BasicQuestion(321, 2, 'Férfiasan tökéletes', 'Gilette'),
      new BasicQuestion(322, 2, 'Törődj magaddal', 'Garnier'),
      new BasicQuestion(323, 2, 'Annyi a világ, amennyit beletöltesz', 'Dreher'),
  
      new BasicQuestion(331, 3, 'Életre tervezve', 'Bosch'),
      new BasicQuestion(332, 3, 'A bőre őre', 'Fabulon'),
      new BasicQuestion(333, 3, 'Te mindenre gondolsz', 'Tefal'),
    ]),
    new Category(4, '4 - Mitől fél az aki...?', [
      new BasicQuestion(411, 1, 'Szociofóbiás', 'emberektől, társaságtól'),
      new BasicQuestion(412, 1, 'Klausztrofóbiás', 'bezártságtól, kis helyektől'),
      new BasicQuestion(413, 1, 'Homofóbiás', 'homoszexualitástól'),
  
      new BasicQuestion(421, 2, 'Akrofóbiás', 'magasságtól'),
      new BasicQuestion(422, 2, 'Demofóbiás', 'tömegtől'),
      new BasicQuestion(423, 2, 'Hemofóbiás', 'vértől'),
  
      new BasicQuestion(431, 3, 'Aviofóbiás', 'repüléstől'),
      new BasicQuestion(432, 3, 'Hoplofóbiás', 'fegyverektől'),
      new BasicQuestion(433, 3, 'Autofóbiás', 'magánytól'),
    ]),
    new Category(5, '5 - Anagramma (ételek)', [
      new BasicQuestion(511, 1, 'törek', 'körte'),
      new BasicQuestion(512, 1, 'akar lábé', 'karalábé'),
      new BasicQuestion(513, 1, 'teker', 'retek'),
  
      new BasicQuestion(521, 2, 'dzsip nála', 'padlizsán'),
      new BasicQuestion(522, 2, 'csapra idom', 'paradicsom'),
      new BasicQuestion(523, 2, 'darás ingyen', 'sárgadinnye'),
  
      new BasicQuestion(531, 3, 'afrikai polip raknia', 'kaliforniai paprika'),
      new BasicQuestion(532, 3, 'baki csak rajz', 'kajszibarack'),
      new BasicQuestion(533, 3, 'ebéd ruganyos', 'édesburgonya'),
    ]),
    new Category(6, '6 - Régi jó rajfilmek', [
      new BasicQuestion(611, 1, 'A Pindúr Pandúrok készítéséhez felhasználtak cukrot, sót, és minden mi jót. Mi volt a negyedik alapanyag?', 'X vegyszer'),
      new BasicQuestion(612, 1, 'Hogy hívják a Mézga család 30. századi leszármazottját, akivel az időkibővítő készülék segítségével beszélgetnek?', 'MZ/X'),
      new BasicQuestion(613, 1, 'Mi Timon és Pumba mottója?', 'Hakuna Matata'),
  
      new BasicQuestion(621, 2, 'Sorolj fel 5 karaktert a Micimackóból!', 'Micimackó, Füles, Nyuszi, Malacka, Tigris, Bagoly, Róbert Gida'),
      new BasicQuestion(622, 2, 'Melyik az egyetlen Disney hercegnő, akinek gyereke van?', 'Ariel'),
      new BasicQuestion(623, 2, 'Milyen hangszeren játszik a Macskafogóból ismert Lusta Dick?', 'trombita'),
  
      new BasicQuestion(631, 3, 'Sorold fef Hófehérke törpéinek a nevét!', 'Tudor, Vidor, Szende, Szundi, Morgó, Hapci, Kuka'),
      new BasicQuestion(632, 3, 'Hány epizódja van a Magyar népmesék című rajzfilmsorozatnak?', '100'),
      new BasicQuestion(633, 3, 'Mi volt a Pixar stúdió legelső egészestés animációs filmje?', 'Toy Story'),
    ]),
    new Category(7, '7 - Melyik ország vagyok?', [
      new BasicQuestion(711, 1, 'Magyarországtól nyugatra, és Németországtól délre vagyok. A hivatalos nyelvem a német, és dombjaim a muzsika hangjától kelnek életre.', 'Ausztria'),
      new BasicQuestion(712, 1, 'A hivatalos nyelvem az arab, és kettő is van nálam a világ 7 csodájából.', 'Egyiptom'),
      new BasicQuestion(713, 1, 'Szigetek láncolata vagyok Ázsia keleti partjainál. Leghíresebb személyemet Godzillának hívják.', 'Japán'),
  
      new BasicQuestion(721, 2, 'A 20. század elején megnövekedett függetlenség iránti vágy miatt kettéoszlottam. Északi társammal azóta sem vagyunk jóban, de a Guiness söröm mindig megvígasztal.', 'Írország'),
      new BasicQuestion(722, 2, 'Én vagyok a világ legkisebb országa', 'Vatikán'),
      new BasicQuestion(723, 2, 'Nálam van a Föld legmagasabb pontja.', 'Nepál'),
  
      new BasicQuestion(731, 3, 'Fővárosom Wellington. Az olvasni tudok aránya 99% és egy nagyon híres filmtrilógia készült nálam a 21. század elején.', 'Új-Zéland'),
      new BasicQuestion(732, 3, 'Nekem van a legtöbb szomszédom a világon.', 'Oroszország (16)'),
      new BasicQuestion(733, 3, 'Nálam van a világ legtöbb tava', 'Kanada'),
    ]),
    new Category(8, '8 - 1 betű', [
      new BasicQuestion(811, 1, 'Melyik betű felel meg a római 5-ösnek?', 'V'),
      new BasicQuestion(812, 1, 'Melyik az a ruhaméret, ami növekszik, ha X-et rakunk elé?', 'L'),
      new BasicQuestion(813, 1, 'Hogy hívják James Bond társát, aki kütyüket ad neki?', 'Q'),
  
      new BasicQuestion(821, 2, 'A magyar billentyűzeten milyen betű van G-től jobbra?', 'H'),
      new BasicQuestion(822, 2, 'Milyen betűvel jelölik a kottákban, ha halkan kell játszani?', 'P'),
      new BasicQuestion(823, 2, 'Melyik a leggyakoribb vércsoport Magyarországon?', 'A'),
  
      new BasicQuestion(831, 3, 'Melyik az egyetlen betű a magyar Scrabble-ben, ami 10 pontot ér?', 'TY'),
      new BasicQuestion(832, 3, 'Melyik az a betű, amelyet 4 ponttal kell leírni a Morse kód szerint?', 'H'),
      new BasicQuestion(833, 3, 'Melyik vitamin hiánya okozza az angolkórt?', 'D'),
    ]),
    new Category(9, '9 - Mi sül ki ebből?', [
      new BasicQuestion(911, 1, 'burgonya, tej, vaj', 'Krumplipüré'),
      new BasicQuestion(912, 1, 'rizs, zoldborsó', 'Rizibizi'),
      new BasicQuestion(913, 1, 'tej, búzadara, cukor', 'Tejbegríz'),
  
      new BasicQuestion(921, 2, 'darált marhahús, paradicsom, vaj, tej, tésztalap, sajt', 'Lasagna'),
      new BasicQuestion(922, 2, 'avokádó, paradicsom, hagyma, lime', 'Guacamole'),
      new BasicQuestion(923, 2, 'római saláta, kruton, citromlé, olívaolaj, tojássárgája, mustár, parmezán', 'Cézár saláta'),
  
      new BasicQuestion(931, 3, 'Bélszín, leveles tészta, gomba', 'Wellington bélszín'),
      new BasicQuestion(932, 3, 'Mandula, cukor, tojás', 'Macaron'),
      new BasicQuestion(933, 3, 'Alma, szőlő, dióbél, zellerszár, salátalevél', 'Waldorf saláta'),
    ]),
    new Category(10, '10 - Emberi test', [
      new BasicQuestion(1011, 1, 'Melyik típusú vérből spriccelne a vér, ha felszúrnánk?', 'artéria/ütőér/verőér'),
      new BasicQuestion(1012, 1, 'Mik találhatók a gerinccsigolyák között?', 'porckorong'),
      new BasicQuestion(1013, 1, 'Hol található a legkisebb csontunk?', 'fül'),
  
      new BasicQuestion(1021, 2, 'Melyik szervünk az, amelynek mérete születésünktől fogva nem változik?', 'szem'),
      new BasicQuestion(1022, 2, 'Hány kromoszóma pár található az ember testi sejtjeiben?', '23'),
      new BasicQuestion(1023, 2, 'Sorold fel a 3 izomfajtát', 'harántcsíkolt, szív, sima'),
  
      new BasicQuestion(1031, 3, 'Sorolj fel kettő szervet, amik nélkül életben maradhat az ember', 'gyomor, lép'),
      new BasicQuestion(1032, 3, 'Nevezz meg 2 neurológiai betegséget!', 'Fejfájás/Sztrók/ALS/Parkinson kór/Demencia/Alzheimer-kór/Tourette-szindróma/epilepszia...'),
      new BasicQuestion(1033, 3, 'Mi az ideg latin neve?', 'neuron'),
    ]),
    new Category(11, '11 - Melyik filmből van az idézet?', [
      new BasicQuestion(1111, 1, 'Hasta la vista, baby', 'Terminátor 2'),
      new BasicQuestion(1112, 1, 'Toto, azt hiszem mar nem Kansasban vagyunk', 'Oz, a csodák csodája'),
      new BasicQuestion(1113, 1, 'Az elet olyan, mint egy doboz bonbon. sosem tudhattod mit veszel ki belole.', 'Forrest Gump'),
  
      new BasicQuestion(1121, 2, 'Tarts meg az aprót te mocskos állat', 'Reszkessetek betörők!'),
      new BasicQuestion(1122, 2, 'bator az, aki szembe mer szallni az ellensegeivel, de meg batrabb, ki a barattal száll szembe', 'Harry Potter és a bölcsek köve'),
      new BasicQuestion(1123, 2, 'Oh, igen. A múlt gyakran fájhat, és elfuthatsz előle, de akár tanulhatsz is belőle.', 'Oroszlánkirály'),
  
      new BasicQuestion(1131, 3, 'Senki sem tökéletes :)', 'Van, aki forrón szereti'),
      new BasicQuestion(1132, 3, 'Nyisd ki a zsilikaput, HAL!', '2001: Űrodüsszeia'),
      new BasicQuestion(1133, 3, 'Furcsa sors, hogy ennyi félelmet és kétséget kell elszenvednünk egy ilyen apró dolog, egy ilyen apróság miatt.', 'A Gyűrűk Ura'),
    ])
  ]