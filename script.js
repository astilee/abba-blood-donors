
const csvData = `
Timestamp,Name,Address,Blood Group,Phone number,Current Location
06/01/2026 12:18:10,Sijo Varghese Mathew ,Edavathra Peedikayil Puthencavu ,A positive (A+),9400850654,Puthencavu 
06/01/2026 12:18:33,Navin Koshy Varghese ,Kunnumpurath house puthencavu p.o Chengannur ,A positive (A+),8113919725,Chengannur 
06/01/2026 12:19:50,NIKHIL M VARGHESE ,Muriyil house puthencavu p o chengannur,B positive (B+),9744780198,Chengannur 
06/01/2026 12:21:21,Jeswin Koshy Titus,"Kallodikuzhiyil House
Edanad P.O.,
Chengannur, Puthencavu.",O positive (O+),7736702214,"Chengannur,India."
06/01/2026 12:21:38,LINTO JACOB VARGHESE ,MAMKUNNEL JOHN VILLA PUTHENCAVU PO CHENGANNUR 689123,B positive (B+),9656621436,FAHAHEEL. KUWAIT 
06/01/2026 12:22:34,LIJO VARGHESE ,Mamkunnel john Villa  puthencavu p.o chengannur 689123,AB positive (AB+),8714201095,GCC
06/01/2026 12:22:38,Dickson Thomas Chacko,"Charivuparampil House, Puthencavu P O, Chengannur.",A positive (A+),0567366212,
06/01/2026 12:22:53,Bijil M Varghese,Muriyil (H) puthencavu po chengannur ,A positive (A+),6282565901,Kerala
06/01/2026 12:26:23,VIPIN VALSON,"KADAVIL, PUTHENCAVU, CHENGANNUR",B negative (B-),0097474747963,Qatar
06/01/2026 12:26:30,Jijo Varghese,"Valliathu(H), Puthencavu. P.O, Angadical, Chengannur",O positive (O+),7736741693,Hyderabad
06/01/2026 12:29:51,Rojan Eapen Puthenpurackal ,"Puthenpurackal House, Puthencavu P.O. Chengannur 689123",O positive (O+),9846321407,"Puthencavu, Chengannur "
06/01/2026 12:34:05,Melvin biji mammen,Thattayil bunglow,O positive (O+),8848434431,Puthencavu 
06/01/2026 12:41:18,ARAVIND CS,SAROJA NIVAS PUTHENCAVU PO CHENGANNUR,A positive (A+),9495093924,PUTHENCAVU
06/01/2026 12:49:50,Manu K Oommen ,,O positive (O+),+974 30331279,Qatar
06/01/2026 12:53:08,JOJO PHILIP MATHEW ,Kadavil House,B positive (B+),+44 7776713199,United Kingdom 
,,,,,
06/01/2026 13:03:22,SUBIN MATHEW VARGHESE ,"PERMANENT ADDRESS KOTHAVELIL(H)KADAPRA MANNAR NIRANAM P.O PTA
PRESENT ADDRESS
AYROOKUZHIYIL PALLATH PUTHENCAVU P.O  CHENGANNUR ALAPPUZHA 
689123
",,,PUTHENCAVU 
06/01/2026 13:03:34,RONEY CHACKO,"Cheekanparayill
Puthencavu PO 
Chengannur 
",A negative (A-),00 968 9437 7307,OMAN
06/01/2026 13:09:23,Feby alexander ,Kanjiram nilkunnathil house ,B negative (B-),8714016164,"puthencavu, chengannur, alappuzha, kerala"
06/01/2026 13:09:40,Renish mathew ,"Cheekanparayill 
Puthencavu PO 
Chengannur ",A negative (A-),9961719144,UAE
06/01/2026 13:10:34,Lebin Thariyan ,Kallelil Kulamkandathil ,B positive (B+),7902330713,Edanad
06/01/2026 13:52:21,Shijil p moni ,"Pynummoottil house puthencavu p.o chengannur,Alappuzha,Kerala 689123",B positive (B+),9656407266,Saudi 
06/01/2026 14:38:59,Astile Easow John,"Mannil Peedikayil House
Puthencavu P.O
Chengannur
Alappuzha",B positive (B+),9847169856,Chengannur
06/01/2026 14:44:47,Reni t philip ,"Malayil Ayrookkuzhiyil 
Puthencavu (po) Chengannur ",O positive (O+),9539950802,"Chengannur, puthencavu "
06/01/2026 14:49:44,Jerin John,"THATTAYIL House, Puthencavu P. O, Chengannur ",B positive (B+),8078447112,Puthencavu 
06/01/2026 15:38:35,Shone Tbomas,Vattayuzhathil shone villa,O positive (O+),00971563425218,Dubai
06/01/2026 16:37:37,Joel Chacko Titus ,"Kallodikuzhiyil House,Edanad P.O,Chengannur ",O positive (O+),9061228034,Edanad 
06/01/2026 20:51:14,Ajo T Jacob,Thanuvelil house Puthencavu (p.o) chengannur ,O positive (O+),9961852007,Puthencavu 
06/01/2026 21:17:17,Roshan Chandy Varghese ,"Joe villa 
Mulakuzha P.O
Chengannur ",O positive (O+),07909135789,Piralassery 
06/01/2026 23:26:38,Prince varghese ,"Arayalummoottil House Puthencavu P.O Chengannur ,Alapuzha Kerala.689123 ",O positive (O+),9747247312,Kuwait
06/01/2026 23:47:41,Roshan Sam Varghese,"Planthara House,  Puthencavu ",A positive (A+),00971509572244,Abu Dhabi
07/01/2026 09:45:51,Sachin Varghese thomas ,Pandalathu peedikayil puthencavu p.o Chengannur,B positive (B+),7012533168,"Chengannur, India "
07/01/2026 10:13:49,Akhil M Varghese,"Muriyil house
Puthencave po 
Chengannur",B positive (B+),8714957801,Puthencave
07/01/2026 20:27:00,Vineesh v vijayan,Ayrookuzhivadakkethil,A negative (A-),9496808208,Kerala
07/01/2026 21:02:12,Rigin M Reji,Moothantteth piralassery p.o chengannur ,A negative (A-),7356296375,"Piralassery, chengannur"
07/01/2026 21:02:23,Rejin M Reji,Puthencavu,A negative (A-),8111821691,Puthencavu
09/01/2026 17:19:16,Akhil Alex Tharakan,"Aviratharakan Peedikayil, Puthencavu P. O Chengannur",B positive (B+),9605529832,Chengannur
09/01/2026 17:21:03,ROBIN THOMAS,"Cheekanpara South House , Puthencavu - P.O, Chemgannur, Alappuzha, Kerala- 689123",O positive (O+),8330022170,Puthencavu
09/01/2026 17:49:27,Shinu Thomas ,Parakoottathil (H) Puthencavu P.O Chengannur ,O positive (O+),8592803013,Puthencavu 
09/01/2026 18:02:49,Dennis varughese Chacko ,Charivuparampoil house puthenca po chengannur ,B positive (B+),+971502189266,UAE 
09/01/2026 18:11:23,Shibin p chacko,Puthukkeril melathethil putencavu po chengannur,A positive (A+),7306816435,Puthencavu
09/01/2026 19:30:42,Sumesh Mammen Koshy ,"Edanattu Peedikayil, Puthencavu P. O",O positive (O+),9539551011,Puthencavu 
09/01/2026 19:51:49,Bibin ,"APPILIPURAYIDATHIL, ANGADICAL ,PUTHENCAVU PO ,CHEGANNUR ",B positive (B+),+971543378676,UAE
09/01/2026 19:54:44,Jessin George ,Alummoottil joel villa kunnam p.o mavelikara ,A positive (A+),7034204064,Kerala india
09/01/2026 19:55:11,Rohith ,Mannil Peedikayil House Piralasserry po chengannur,O positive (O+),9048198915,Uae
09/01/2026 20:06:40,Alby Alexander,Kanjiramnilkunathil angadical puthencavu.p.o,B negative (B-),8113016162,Banglore
09/01/2026 20:14:22,Jose കെ George ,Karthikapally Peedikayil ,O positive (O+),9447484411,Puthencavu 
09/01/2026 20:30:37,Rintu Joseph Varghese ,"Pynummoottil House, Piralassery P.O, Chengannur ",B positive (B+),9744650616,Bangalore 
09/01/2026 21:01:41,Nishanth,Kadavil house piralassery p.o chengannur ,AB positive (AB+),9148161407,Bangalore 
09/01/2026 21:02:01,Alwin Jacob Philip ,Mulakuzha Peedikayil House Puthencavu PO Chengannur ,O positive (O+),7025527885,"Puthencavu, India"
09/01/2026 21:24:05,Alex Varghese,"Thadayuzhathil (H), Puthencavu P.O. Chengannur",O positive (O+),7025324801,Trivandrum
09/01/2026 21:57:52,Jerin p thomas,Pothiyil house puthencavu po chengannur,O positive (O+),6238841500,Puthencavu
09/01/2026 21:59:16,Abel biju ,Malayil ayrookuzhyil house puthencavu ,A positive (A+),7994163270,Puthencavu 
10/01/2026 09:14:54,Bipin varghese,"Velamparampil (house)
Peralasserry po
Chengannur ",B positive (B+),+971529425495,UAE ( Abu Dhabi)
11/01/2026 18:12:53,Aby Chacko,Appili purayidathil Puthencavu P. O,B positive (B+),9447273324,Puthencavu 
11/01/2026 18:14:54,Aji Soman,Ottakudiyil Puthencavu P. O.,A positive (A+),9446188173,Puthencavu 
11/01/2026 21:10:15,Sujokoshy,Modiuzhathil house puthencavu p. o chengannur angadical,A positive (A+),7306163756,Mumbai
11/01/2026 22:38:02,Varghese ,Malayil Ayriokuzhiyil ,A positive (A+),9400680862,Puthencavu
12/01/2026 01:44:19,Bipin varghese,"Velamparampil (house)
peralasserry p o 
chengannur 
689122",B positive (B+),+971529425495,"UAE ,. Abu Dhabi "
12/01/2026 09:03:58,Alan p thomas,Pandalathu peedikayil puthencavu P.O chengannur ,B positive (B+),8921160645,Kochi
12/01/2026 09:04:16,Emil koruth oommen ,Alummoottil house puthencavu chenganur ,O positive (O+),7306795015,Puthencavu junction 
12/01/2026 10:28:38,RIJO RAJAN JOSEPH,PUTHENPURACKAL HOUSE,O positive (O+),9605520760,DUBAI
12/01/2026 10:29:05,Alan George ,"Arakkanattil house, Piralassery PO, Chengannur ",O positive (O+),8078721095,Bangalore 
12/01/2026 11:15:00,Jacob Varghese ,Kadavil peedikayil ,B positive (B+),9947732968,
12/01/2026 12:01:45,Sreeraj k r,chothy bhavan,B positive (B+),9946980608,chengannur
12/01/2026 12:46:44,RENJITH ABRAHAM,PEEDIKAPARAMBIL,O positive (O+),+96565048559,KUWAIT
12/01/2026 15:53:34,Nithin Mathew ,Mamkoottathil house piralasery P.O Chengannur ,O positive (O+),9207374732,Piralasery 
12/01/2026 21:26:26,Sibin Abraham ,Kinattinkara puthenveedu puthencavu po chengannur ,A positive (A+),9744866214,Puthencavu 
12/01/2026 21:36:45,Aswin sunny koshy ,Thampuran kuzhiyile puthancavu po chengannur,B positive (B+),7034670479,UAE
13/01/2026 13:05:55,Jogy M Thomas,"Mannil Peedikayil, Puthencavu",O positive (O+),8867784838,Bangalore
13/01/2026 15:57:29,Nigil Oommen thomas,"Kayyalaparambil House  Puthencav p.o
Chengannur ",O positive (O+),6282982456,Saudi 
14/01/2026 17:26:09,Sakthi sivan,Kollarethu house Edanadu PO puthencavu ,AB positive (AB+),9048879371,Dubai 
14/01/2026 21:44:05,Deepu mathew,Mamkunnel  puthencavu P. O chengannur ,O positive (O+),8590991479,"Puthencavu, kuttypalli"
14/01/2026 21:44:35,Jerry Koshy ,"Peedikaparambil Jerry Villa, Puthencavu P. O. Chengannur ",O positive (O+),9656380364,UAE
14/01/2026 21:51:40,Georgy mathew,Melepurathu house,B positive (B+),8714339969,Puthencavu 
15/01/2026 17:23:50,ROBIN THOMAS,"Cheekanpara South (H), Puthencau .P.O, Chengannur, Alappuzha, Kerala - 689123",O positive (O+),8330022170,Puthencavu
15/01/2026 17:29:17,Tom George Vessly,"Charivuparampil (H),angadical,Puthencavu P.O,Chengannur",B positive (B+),8606284905,Chengannur
15/01/2026 17:39:57,Allen Eapen Varghese ,"Parakkottathil Boba Bhavan 
Puthencavu po chengannur 
Pin 689123",O positive (O+),08589000089,UK
15/01/2026 17:50:03,Brijith varghese mathew,"Charivuparampil house, puthencau po angadical ",AB positive (AB+),9986883434,Bangalore 
15/01/2026 18:01:38,Sudheesh Zachariah Koshy ,"Edanattu peedikayil, Puthencavu P. O Chengannur ",A positive (A+),9656674842,"Chengannur, India"
15/01/2026 19:06:59,Sibi Mathew ,"A V M Puthenveedu 
Arattupuzha 
Aranmula Pathanamthitta Kerala 
Pin_689123",A positive (A+),9744689894,Arattupuzha 
15/01/2026 19:13:54,Sojan Thekkedathu ,"Sojan chacko kadathasseril piralasseriy po chengannur pin 689122
",O positive (O+),8111895569,Thekkedathu catering 
16/01/2026 04:40:09,ALLEN GEORGE KOSHY,"KUNNUMPURATHU HOUSE
PUTHENCAVU PO
CHENGANNUR
PIN:689123",O positive (O+),9947722236,
16/01/2026 14:19:02,Jestin,Poovathoor house,B positive (B+),0097455419136,Doha qatar
16/01/2026 15:29:44,Nijin Benny koshy ,"Thampurankuzhiyil (h), puthencavu p.o,
Chengannur ",O positive (O+),+971509607357,"Dubai, UAE"
16/01/2026 15:37:50,Nrupan Paul George,"Koodathummuriyil, Puthencavu PO, Chengannur",A positive (A+),+974 55238017,Qatar
16/01/2026 22:28:04,Jerin. P. Thomas,Pothiyil house puthencavu p.o chengannur ,O positive (O+),Nil,Puthencavu 
16/01/2026 22:39:21,Alfred Koshy Alex ,"Nalloor malayil house 
Piralassery P.O 
Chengannur 
689122",A positive (A+),09400958358,"United kingdom,  Bentley "
16/01/2026 23:31:31,Bibi Easow Varghese,bibieasow@gmail.com,O positive (O+),+1-(519)-(701)-(8321),"Ontario, Canada"
17/01/2026 14:11:50,Jobi cherian ,Puthencavu ,O positive (O+),00971555270634,"Sharjah, UAE "
17/01/2026 14:59:11,Ancil G Abraham ,"Mankunnel House
Puthencavu PO
Chengannur
689123 ",B positive (B+),09847718330,Near Kuttipally Chapel
17/01/2026 15:21:49,Roni john,"Malayil mundackal (h) puthencavu p.o angadickal, chengannur ",O positive (O+),7907477404,"Sharjah,uae"
17/01/2026 16:19:07,Jikku Varghese ,"Arayalummoottil House, Puthencavu P. O. Chengannur, Kerala ",O positive (O+),9562547850,Bangalore 
17/01/2026 16:21:08,Gibu Varghese ,"Arayalummoottil House, Puthencavu P. O., Chengannur, Kerala ",O positive (O+),+91 75104 55418,Kuwait 
17/01/2026 20:16:09,Shaiju Thomas Kizhakkedathu,"Puthenpurackal, Puthencavu PO",O positive (O+),7829119900,"Bangalore, Karnataka, India"
17/01/2026 20:18:12,Joel J Joby,"Puthenpurackal, Puthencavu PO",O positive (O+),7303597933,"Puthencavu, Kerala, India "
17/01/2026 20:21:14,Kunju Ninan,"Puthenpurackal, Puthencavu PO",O positive (O+),8606428949,"Puthencavu, Kerala, India "
18/01/2026 02:11:19,Anish,Thalakkottu vadakkethil puthencavu p.o chengannur,A positive (A+),9061109598,Dubai 
18/01/2026 03:44:27,Roshan Reji,"Ampalathu House, Arattupuzha P.O pathanamthitta",B positive (B+),+353876691792,Ireland (Dublin)
18/01/2026 10:13:20,Binu chacko ,Puthukkeril puthenchira puthencavu,O positive (O+),9947332511,Puthencavu
18/01/2026 12:57:20,Jino Varghese ,Arayalumootil ,O positive (O+),+6440223919371,Newzland 
19/01/2026 02:12:53,JAS FELIX SUNIL ,Kollarayam peedikayil puthencavu P.O Chengannur ,O positive (O+),8075740173,Bangalore 
26/01/2026 17:51:12,AKHIL SOMAN ,Puthuparambil house edayaranmula po edayaranmula 689532,AB positive (AB+),9645275937,Chengannur 
26/01/2026 17:54:46,Asher georgy jacob,Melepurathu house ,A positive (A+),+91 9995324107,Dubai
26/01/2026 18:00:43,Mahesh Panicker ,"Anjilimoottil (House )
Nellimala Po
Eraviperoor 
Kumbanad ",B positive (B+),9947064045,Nellimala. Kumbanad to Othera road 
26/01/2026 18:45:38,SUNNY THOMAS,"Kizhakke Puthenpurackal, Puthencavu P. O., Chengannur",O positive (O+),9961891717,"Puthencavu, Chengannur"
26/01/2026 21:02:05,Jomon mathew joseph,"Kochazhikakathu (H)
Puthencavu po 
Angadical
Chengannur ",O positive (O+),+919847307302,Bahrain 
26/01/2026 22:16:20,JOSEPH CHERIAN ,"NEDUMPARAMPIL, PIRALASERRY P.O, CHENGANNUR",O positive (O+),+918138822780,DUBAI
26/01/2026 22:32:51,Thomas Mathew,"Karakkattu puthenveedu, Puthencavu Chengannur",B negative (B-),00971505402926,"Dubai, United Arab Emirates"
27/01/2026 02:01:41,JITHIN MAMMEN GEORGE ,Kizhakkethalackal peedikayil,A positive (A+),+16474259291,Canada 
27/01/2026 12:14:22,Biju Alexander ,Aviratharakan Peedikayil puthencavu p.o chengannur ,A positive (A+),8281355974,Puthencavu 
27/01/2026 13:07:21,Shibin P Cherian ,Pynummoottil Sherin’s Puthencavu PO Chengannur ,O positive (O+),0096899416795,Oman Muscat 
27/01/2026 13:39:56,Rudraksh.s,"Anizham house , Angadical ,Puthencavu po,Chengannur",A positive (A+),6238184487,"Chengannur , INDIA"
27/01/2026 15:27:50,Alen s aju,"
Pali padinjarethil puthencavu po Chengannur ",O positive (O+),9744421034,Puthencavu Mathentharakan School 
28/01/2026 10:48:09,Sachin Mathew,"Mamkoottathil House, Piralasery P.O, Chengannur,Alappuzha",B positive (B+),+973 35576678,"Manama, Bahrain "
28/01/2026 11:43:01,Mathewvarghese,Kizhakke kuttiyil puthencavu ,B positive (B+),+996 1510939,Puthencavu 
28/01/2026 12:14:31,SONIJOHN,"Edavanathucavil, puthencavu, chengannur",O positive (O+),9605360772,Keezhcherimel
29/01/2026 14:03:01,Abel Varghese ,"Alummoottil house 
Puthencavu ",O positive (O+),8281063356,"Puthencavu, chengannur "
29/01/2026 17:30:20,Alan Manoj,"Kallelil Puthenveedu,Kunnathumkara p.o,East Othera",B positive (B+),9995168343,East Othera
30/01/2026 13:22:17,Josh Joy Mathai ,Mannil Thundiyil Josh Villa Piralassery po Chengannur ,AB positive (AB+),7012943026,Chengannur and india
30/01/2026 22:17:07,Varghese Abraham ,Applipudayidathil Mulakuzha PO Chengannur ,O negative (O-),9061345407,Chengannur 
31/01/2026 12:14:33,Sabu Thomas ,"Alummoottil Breezeland, Edanad",A positive (A+),8921456615,"Puthencavu Eraviperoor Road, Near Bridge"
31/01/2026 12:17:35,Jacob Koshy,"Pallickal, Edanad, Chengannur ",A positive (A+),9495713241,"Church Road, Edanad"
31/01/2026 12:21:56,Justin thomas,Melepurathu angadikal p.o chengannur ,B positive (B+),8606873082,Angadical 
31/01/2026 12:24:55,Babu Alexander ,Avera Tharakan peedikayil Puthencavu p.o Chengannur ,O negative (O-),9447304109,PUTHENCAVU 
31/01/2026 12:25:28,Georgy mathew,Melepurathu piralassery p.o chengannur ,A positive (A+),8714339969,Angadical 
31/01/2026 12:53:13,JINU GEORGE,"KUNNUMPURATHU,  PUTHENCAVU  P. O, CHENGANNUR, ALAPPUZHA DIST- 689 123",A positive (A+),"9497786567,  7025760750","PUTHENCAVU, CHENGANNUR"
31/01/2026 13:22:29,Manoj .r. Nair,Mathilakam House puthencavu p.o chengannur ,O positive (O+),9447023232,Puthencavu 
01/02/2026 17:43:25,Shibin Thomas,Chengottayil house puthencavu p.o Chenganur ,O positive (O+),9744433121,Puthencavu
01/02/2026 22:32:28,Prince A Reji,Malayil Ayrookuzhiyil Puthencavu p.o chengannur,A positive (A+),9605275944,Near fortune mart
01/02/2026 23:52:25,AJU SOMAN,"Thalakkottu,puthencavu ",O positive (O+),00971566296374,ABUDHABI 
02/02/2026 14:29:31,Vishnu prasad ,"Painummoottill vadakethill, mulakuzha P. O, chengannur ",O positive (O+),9744832897,Century junction mulakuzha 
03/02/2026 13:31:37,James mathew,"Anickal house, Edanadu po, Chengannur",O positive (O+),9656573503,United Kingdom 
03/02/2026 15:05:45,Jeswin juby ,Allummootil house puthencavu po chengannur ,O positive (O+),7025880741,Puthencavu chengannur 
04/02/2026 20:22:45,Abin varghese jacob ,Edavathra peedikayil puthencavu p.o chengannur ,O positive (O+),7025302085,Chengannur
05/02/2026 23:22:39,RAJIMON P NINAN,PYNUMMOOTTIL HOUSE PUTHENCAVU P O CHENGANNUR,A positive (A+),00971554365928,DUBAI UAE
06/02/2026 14:01:32,Biku Mathew Abraham,Ayrukuzhiyil House Puthencavu Po Chengannur,B positive (B+),0508395243,Dubai
06/02/2026 14:10:27,Abin jacob varkey,"Mulakuzha Peedikayil 
Puthencavu p.o 
Chengannur ",O positive (O+),9656502588,"PUTHENCAVU, chengannur "
07/02/2026 13:17:49,Aaron Sanju,"Nedumparambil ho,Piralassery Po,Puthencavu,Chengannur ",B positive (B+),8138092741,Chengannur 
07/02/2026 14:10:18,Reji George ,Malayil ayrookuzhiyil puthencavu p.o chengannur ,A positive (A+),±917025799866,Puthencavu 
07/02/2026 14:12:41,Yohanan varghese ( thampi othera),Kochuvila modiyil othera p.o thiruvalla ,O positive (O+),9947072444,Othera
07/02/2026 16:34:26,Nimish Oommen,Peedikaparambil Puthencavu. P.O Chengannur ,A positive (A+),+91 8606933524,Puthencavu
`;
function parseCSV(csv) {
    const rows = [];
    let row = [];
    let current = '';
    let insideQuotes = false;

    for (let i = 0; i < csv.length; i++) {
        const char = csv[i];
        const next = csv[i + 1];

        if (char === '"' && next === '"') {
            current += '"';
            i++;
        } else if (char === '"') {
            insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
            row.push(current.trim());
            current = '';
        } else if (char === '\n' && !insideQuotes) {
            if (row.length) {
                row.push(current.trim());
                rows.push(row);
            }
            row = [];
            current = '';
        } else {
            current += char;
        }
    }

    if (current) {
        row.push(current.trim());
        rows.push(row);
    }

    rows.shift();

    return rows.map(r => ({
        name: r[1]?.trim() || "Unknown",
        blood: r[3]?.match(/\((.*?)\)/)?.[1] || null,
        phone: (r[4] || "").replace(/\s+/g, ""),
        location: r[5]?.trim() || "Unknown"
    })).filter(d => d.blood);
}

const donors = parseCSV(csvData);

const select = document.getElementById("bloodGroupSelect");
const cards = document.getElementById("cards");
const noResults = document.getElementById("noResults");

function populateBloodGroups() {
    const groups = [...new Set(donors.map(d => d.blood))].sort();

    groups.forEach(bg => {
        const opt = document.createElement("option");
        opt.value = bg;
        opt.textContent = `🩸 ${bg}`;
        select.appendChild(opt);
    });
}

populateBloodGroups();

select.addEventListener("change", () => {
    cards.innerHTML = "";
    noResults.style.display = "none";

    if (!select.value) return;

    const filtered = donors.filter(d => d.blood === select.value);

    if (!filtered.length) {
        noResults.style.display = "block";
        return;
    }

    filtered.forEach((d, i) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${i * 0.06}s`;

        card.innerHTML = `
            <div class="blood">${d.blood}</div>
            <div class="name">${d.name}</div>
            <div class="info">📞 <a href="tel:${d.phone}">${d.phone}</a></div>
            <div class="info">📍 ${d.location}</div>
        `;

        cards.appendChild(card);
    });
});

select.addEventListener("change", () => {
    setTimeout(() => {
        cards.scrollIntoView({ behavior: "smooth" });
    }, 200);
});
