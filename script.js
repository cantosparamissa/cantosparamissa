/* ============================================================
   CANTOS — script.js
   Biblioteca Digital Litúrgica
   Todos os dados e a lógica da plataforma
   ============================================================ */

/* ---------- Imagens ---------- */
const IMG = {
  altar: "https://images.pexels.com/photos/17702529/pexels-photo-17702529.jpeg?auto=compress&cs=tinysrgb&w=1600",
  altar2: "https://images.pexels.com/photos/11482084/pexels-photo-11482084.jpeg?auto=compress&cs=tinysrgb&w=1600",
  altar3: "https://images.pexels.com/photos/33780464/pexels-photo-33780464.jpeg?auto=compress&cs=tinysrgb&w=1600",
  cruz: "https://images.pexels.com/photos/8086561/pexels-photo-8086561.jpeg?auto=compress&cs=tinysrgb&w=1600",
  tabernaculo: "https://images.pexels.com/photos/35091466/pexels-photo-35091466.jpeg?auto=compress&cs=tinysrgb&w=1600",
  missa: "https://images.pexels.com/photos/7218365/pexels-photo-7218365.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ostensorio: "https://images.pexels.com/photos/7219489/pexels-photo-7219489.jpeg?auto=compress&cs=tinysrgb&w=1600",
  missa2: "https://images.pexels.com/photos/29199699/pexels-photo-29199699.jpeg?auto=compress&cs=tinysrgb&w=1600",
  vitral: "https://images.pexels.com/photos/13755423/pexels-photo-13755423.jpeg?auto=compress&cs=tinysrgb&w=1600",
  vitral2: "https://images.pexels.com/photos/12013439/pexels-photo-12013439.jpeg?auto=compress&cs=tinysrgb&w=1600",
  vitral3: "https://images.pexels.com/photos/28892492/pexels-photo-28892492.jpeg?auto=compress&cs=tinysrgb&w=1600",
  raios: "https://images.pexels.com/photos/7520345/pexels-photo-7520345.jpeg?auto=compress&cs=tinysrgb&w=1600",
  eucaristia: "https://images.pexels.com/photos/13386194/pexels-photo-13386194.jpeg?auto=compress&cs=tinysrgb&w=1600",
  calice: "https://images.pexels.com/photos/36657818/pexels-photo-36657818.jpeg?auto=compress&cs=tinysrgb&w=1600",
  comunhao: "https://images.pexels.com/photos/26711575/pexels-photo-26711575.jpeg?auto=compress&cs=tinysrgb&w=1600",
  maria: "https://images.pexels.com/photos/36098038/pexels-photo-36098038.jpeg?auto=compress&cs=tinysrgb&w=900",
  maria2: "https://images.pexels.com/photos/11497082/pexels-photo-11497082.jpeg?auto=compress&cs=tinysrgb&w=900",
  maria3: "https://images.pexels.com/photos/12355969/pexels-photo-12355969.jpeg?auto=compress&cs=tinysrgb&w=900",
  biblia: "https://images.pexels.com/photos/34454127/pexels-photo-34454127.jpeg?auto=compress&cs=tinysrgb&w=1600",
  biblia2: "https://images.pexels.com/photos/8735586/pexels-photo-8735586.jpeg?auto=compress&cs=tinysrgb&w=1600",
  vela: "https://images.pexels.com/photos/10438600/pexels-photo-10438600.jpeg?auto=compress&cs=tinysrgb&w=1600",
  hinario: "https://images.pexels.com/photos/33120490/pexels-photo-33120490.jpeg?auto=compress&cs=tinysrgb&w=1600",
  banco: "https://images.pexels.com/photos/3633711/pexels-photo-3633711.jpeg?auto=compress&cs=tinysrgb&w=1600",
  orgao: "https://images.pexels.com/photos/38373476/pexels-photo-38373476.jpeg?auto=compress&cs=tinysrgb&w=1600",
  catedral: "https://images.pexels.com/photos/4330019/pexels-photo-4330019.jpeg?auto=compress&cs=tinysrgb&w=1600",
  catedral2: "https://images.pexels.com/photos/10157042/pexels-photo-10157042.jpeg?auto=compress&cs=tinysrgb&w=1600",
  catedral3: "https://images.pexels.com/photos/30479959/pexels-photo-30479959.jpeg?auto=compress&cs=tinysrgb&w=1600",
  altarOuro: "https://images.pexels.com/photos/32979753/pexels-photo-32979753.jpeg?auto=compress&cs=tinysrgb&w=900"
};

const CATEGORIAS_CANTOS = [
  "Entrada","Ato Penitencial","Glória","Salmo","Aclamação","Ofertório",
  "Santo","Cordeiro","Comunhão","Final","Adoração","Marianos",
  "Espírito Santo","Quaresma","Páscoa","Natal","Tempo Comum","Outros"
];

const MOMENTOS_MISSA = [
  "Entrada","Ato Penitencial","Glória","Salmo","Aclamação",
  "Ofertório","Santo","Cordeiro","Comunhão","Final"
];

const MESES_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const MESES_ABR = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"];
const DIAS_PT = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
const DIAS_CURTO = ["DOM","SEG","TER","QUA","QUI","SEX","SÁB"];

/* ============================================================
   BANCO DE DADOS — CANTOS
   Letras de domínio público (hinos latinos tradicionais)
   youtubeId obrigatório para o embed
   ============================================================ */
const cantos = [
  {
    id: 1,
    titulo: "Eis-me aqui, Senhor",
    categoria: "Adoração",
    momentoMissa: "Ofertório",
    tempoLiturgico: "Tempo Comum",
    autor: "São Tomás de Aquino",
    compositor: "Canto gregoriano",
    tom: "Modo III",
    youtubeId: "4OzvUkSGKRg",
    imagem: IMG.altar,
    letra: "Pange, lingua, gloriosi\nCorporis mysterium,\nSanguinisque pretiosi,\nQuem in mundi pretium\nFructus ventris generosi\nRex effudit gentium.\n\nNobis datus, nobis natus\nEx intacta Virgine,\nEt in mundo conversatus,\nSparso verbi semine,\nSui moras incolatus\nMiro clausit ordine.\n\nIn supremae nocte cenae\nRecumbens cum fratribus,\nObservata lege plene\nCibis in legalibus,\nCibum turbae duodenae\nSe dat suis manibus.\n\nVerbum caro, panem verum\nVerbo carnem efficit:\nFitque sanguis Christi merum,\nEt si sensus deficit,\nAd firmandum cor sincerum\nSola fides sufficit."
  },
  {
    id: 2,
    titulo: "Tantum Ergo Sacramentum",
    categoria: "Adoração",
    momentoMissa: "Comunhão",
    tempoLiturgico: "Tempo Comum",
    autor: "São Tomás de Aquino",
    compositor: "Canto gregoriano",
    tom: "Modo III",
    youtubeId: "c2cEzberbXM",
    imagem: IMG.eucaristia,
    letra: "Tantum ergo Sacramentum\nVeneremur cernui:\nEt antiquum documentum\nNovo cedat ritui:\nPraestet fides supplementum\nSensuum defectui.\n\nGenitori, Genitoque\nLaus et iubilatio,\nSalus, honor, virtus quoque\nSit et benedictio:\nProcedenti ab utroque\nCompar sit laudatio.\nAmen."
  },
  {
    id: 3,
    titulo: "Adoro Te Devote",
    categoria: "Adoração",
    momentoMissa: "Comunhão",
    tempoLiturgico: "Tempo Comum",
    autor: "São Tomás de Aquino",
    compositor: "Canto gregoriano",
    tom: "Modo V",
    youtubeId: "CZetCZgM7_Y",
    imagem: IMG.calice,
    letra: "Adoro te devote, latens Deitas,\nQuae sub his figuris vere latitas:\nTibi se cor meum totum subiicit,\nQuia te contemplans totum deficit.\n\nVisus, tactus, gustus in te fallitur,\nSed auditu solo tuto creditur.\nCredo quidquid dixit Dei Filius:\nNil hoc verbo Veritatis verius.\n\nO memoriale mortis Domini,\nPanis vivus, vitam praestans homini,\nPraesta meae menti de te vivere,\nEt te illi semper dulce sapere.\n\nIesu, quem velatum nunc aspicio,\nOro fiat illud quod tam sitio:\nUt te revelata cernens facie,\nVisu sim beatus tuae gloriae. Amen."
  },
  {
    id: 4,
    titulo: "Panis Angelicus",
    categoria: "Comunhão",
    momentoMissa: "Comunhão",
    tempoLiturgico: "Tempo Comum",
    autor: "São Tomás de Aquino",
    compositor: "César Franck / tradição",
    tom: "A",
    youtubeId: "sZrJJTZQKlA",
    imagem: IMG.comunhao,
    letra: "Panis angelicus\nFit panis hominum;\nDat panis caelicus\nFiguris terminum.\nO res mirabilis:\nManducat Dominum\nPauper, servus et humilis.\n\nTe, trina Deitas\nUnaque, poscimus:\nSic nos tu visita,\nSicut te colimus;\nPer tuas semitas\nDuc nos quo tendimus,\nAd lucem quam inhabitas."
  },
  {
    id: 5,
    titulo: "Ave Verum Corpus",
    categoria: "Comunhão",
    momentoMissa: "Comunhão",
    tempoLiturgico: "Tempo Comum",
    autor: "Hino eucarístico séc. XIV",
    compositor: "W. A. Mozart / gregoriano",
    tom: "D",
    youtubeId: "sZrJJTZQKlA",
    imagem: IMG.eucaristia,
    letra: "Ave verum corpus, natum\nde Maria Virgine,\nvere passum, immolatum\nin cruce pro homine:\ncuius latus perforatum\nunda fluxit et sanguine:\nesto nobis praegustatum\nin mortis examine.\nO Iesu dulcis, O Iesu pie,\nO Iesu, fili Mariae."
  },
  {
    id: 6,
    titulo: "Ubi Caritas",
    categoria: "Ofertório",
    momentoMissa: "Ofertório",
    tempoLiturgico: "Tempo Comum",
    autor: "Tradição latina séc. VIII",
    compositor: "Canto gregoriano",
    tom: "Modo VI",
    youtubeId: "0wIAqDKdNEo",
    imagem: IMG.missa,
    letra: "Ubi caritas et amor, Deus ibi est.\nCongregavit nos in unum Christi amor.\nExsultemus et in ipso iucundemur.\nTimeamus et amemus Deum vivum.\nEt ex corde diligamus nos sincero.\n\nUbi caritas et amor, Deus ibi est.\nSimul ergo cum in unum congregamur:\nNe nos mente dividamur, caveamus.\nCessent iurgia maligna, cessent lites.\nEt in medio nostri sit Christus Deus.\n\nUbi caritas et amor, Deus ibi est.\nSimul quoque cum beatis videamus\nGlorianter vultum tuum, Christe Deus:\nGaudium, quod est immensum atque probum,\nSaecula per infinita saeculorum. Amen."
  },
  {
    id: 7,
    titulo: "O Salutaris Hostia",
    categoria: "Adoração",
    momentoMissa: "Final",
    tempoLiturgico: "Tempo Comum",
    autor: "São Tomás de Aquino",
    compositor: "Canto gregoriano",
    tom: "Modo VIII",
    youtubeId: "r3H5f7oePQE",
    imagem: IMG.ostensorio,
    letra: "O salutaris Hostia,\nQuae caeli pandis ostium:\nBella premunt hostilia,\nDa robur, fer auxilium.\n\nUni trinoque Domino\nSit sempiterna gloria,\nQui vitam sine termino\nNobis donet in patria. Amen."
  },
  {
    id: 8,
    titulo: "Gloria in Excelsis Deo",
    categoria: "Glória",
    momentoMissa: "Glória",
    tempoLiturgico: "Tempo Comum",
    autor: "Liturgia romana",
    compositor: "Patrick Lenk / tradição",
    tom: "C",
    youtubeId: "Y2GWd-8RR7U",
    imagem: IMG.vitral,
    letra: "Glória a Deus nas alturas,\ne paz na terra aos homens por Ele amados.\nSenhor Deus, Rei dos céus, Deus Pai todo-poderoso.\nNós Vos louvamos, nós Vos bendizemos,\nnós Vos adoramos, nós Vos glorificamos,\nnós Vos damos graças por vossa imensa glória.\n\nSenhor Jesus Cristo, Filho Unigênito,\nSenhor Deus, Cordeiro de Deus, Filho de Deus Pai.\nVós que tirais o pecado do mundo, tende piedade de nós.\nVós que tirais o pecado do mundo, acolhei a nossa súplica.\nVós que estais à direita do Pai, tende piedade de nós.\n\nSó Vós sois o Santo, só Vós o Senhor,\nsó Vós o Altíssimo, Jesus Cristo,\ncom o Espírito Santo, na glória de Deus Pai. Amém."
  },
  {
    id: 9,
    titulo: "Kyrie Eleison",
    categoria: "Ato Penitencial",
    momentoMissa: "Ato Penitencial",
    tempoLiturgico: "Tempo Comum",
    autor: "Liturgia romana",
    compositor: "Canto gregoriano — Missa de Angelis",
    tom: "Modo VIII",
    youtubeId: "Y2GWd-8RR7U",
    imagem: IMG.cruz,
    letra: "Kyrie eleison.\nKyrie eleison.\nKyrie eleison.\n\nChriste eleison.\nChriste eleison.\nChriste eleison.\n\nKyrie eleison.\nKyrie eleison.\nKyrie eleison.\n\nSenhor, tende piedade de nós.\nCristo, tende piedade de nós.\nSenhor, tende piedade de nós."
  },
  {
    id: 10,
    titulo: "Sanctus — Missa de Angelis",
    categoria: "Santo",
    momentoMissa: "Santo",
    tempoLiturgico: "Tempo Comum",
    autor: "Liturgia romana",
    compositor: "Canto gregoriano",
    tom: "Modo VI",
    youtubeId: "WQhZOX8bQfs",
    imagem: IMG.altar,
    letra: "Sanctus, Sanctus, Sanctus\nDominus Deus Sabaoth.\nPleni sunt caeli et terra gloria tua.\nHosanna in excelsis.\nBenedictus qui venit in nomine Domini.\nHosanna in excelsis.\n\nSanto, Santo, Santo,\nSenhor Deus do universo.\nO céu e a terra proclamam a vossa glória.\nHosana nas alturas.\nBendito o que vem em nome do Senhor.\nHosana nas alturas."
  },
  {
    id: 11,
    titulo: "Agnus Dei",
    categoria: "Cordeiro",
    momentoMissa: "Cordeiro",
    tempoLiturgico: "Tempo Comum",
    autor: "Liturgia romana",
    compositor: "Canto gregoriano",
    tom: "Modo VI",
    youtubeId: "IJ0h8icqVv8",
    imagem: IMG.calice,
    letra: "Agnus Dei, qui tollis peccata mundi: miserere nobis.\nAgnus Dei, qui tollis peccata mundi: miserere nobis.\nAgnus Dei, qui tollis peccata mundi: dona nobis pacem.\n\nCordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós.\nCordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós.\nCordeiro de Deus, que tirais o pecado do mundo, dai-nos a paz."
  },
  {
    id: 12,
    titulo: "Salve Regina",
    categoria: "Marianos",
    momentoMissa: "Final",
    tempoLiturgico: "Tempo Comum",
    autor: "Hermann Contractus (atrib.)",
    compositor: "Canto gregoriano",
    tom: "Modo V",
    youtubeId: "qt2ATQtQ7V4",
    imagem: IMG.maria,
    letra: "Salve, Regina, Mater misericordiae,\nvita, dulcedo et spes nostra, salve.\nAd te clamamus, exsules filii Hevae.\nAd te suspiramus, gementes et flentes,\nin hac lacrimarum valle.\n\nEia ergo, advocata nostra,\nillos tuos misericordes oculos ad nos converte.\nEt Iesum, benedictum fructum ventris tui,\nnobis post hoc exsilium ostende.\nO clemens, o pia, o dulcis Virgo Maria."
  },
  {
    id: 13,
    titulo: "Ave Maria",
    categoria: "Marianos",
    momentoMissa: "Final",
    tempoLiturgico: "Tempo Comum",
    autor: "Oração bíblica e tradicional",
    compositor: "Tradição / várias melodias",
    tom: "F",
    youtubeId: "gvNf0xg_OPY",
    imagem: IMG.maria2,
    letra: "Ave Maria, gratia plena,\nDominus tecum.\nBenedicta tu in mulieribus,\net benedictus fructus ventris tui, Iesus.\n\nSancta Maria, Mater Dei,\nora pro nobis peccatoribus,\nnunc et in hora mortis nostrae. Amen.\n\nAve Maria, cheia de graça,\no Senhor é convosco.\nBendita sois vós entre as mulheres,\ne bendito é o fruto do vosso ventre, Jesus.\nSanta Maria, Mãe de Deus,\nrogai por nós pecadores,\nagora e na hora da nossa morte. Amém."
  },
  {
    id: 14,
    titulo: "Regina Caeli",
    categoria: "Páscoa",
    momentoMissa: "Final",
    tempoLiturgico: "Páscoa",
    autor: "Antífona mariana pascal",
    compositor: "Canto gregoriano",
    tom: "Modo VI",
    youtubeId: "MO2nCUPFKaA",
    imagem: IMG.maria3,
    letra: "Regina caeli, laetare, alleluia,\nquia quem meruisti portare, alleluia,\nresurrexit sicut dixit, alleluia.\nOra pro nobis Deum, alleluia.\n\nRainha do céu, alegrai-vos, aleluia,\nporque Aquele que merecestes trazer em vosso seio, aleluia,\nressuscitou como disse, aleluia.\nRogai a Deus por nós, aleluia."
  },
  {
    id: 15,
    titulo: "Veni Creator Spiritus",
    categoria: "Espírito Santo",
    momentoMissa: "Entrada",
    tempoLiturgico: "Tempo Comum",
    autor: "Rabano Mauro (atrib.)",
    compositor: "Canto gregoriano",
    tom: "Modo VIII",
    youtubeId: "vptE7V55Ydk",
    imagem: IMG.vitral3,
    letra: "Veni, Creator Spiritus,\nmentes tuorum visita,\nimple superna gratia,\nquae tu creasti pectora.\n\nQui diceris Paraclitus,\naltissimi donum Dei,\nfons vivus, ignis, caritas,\net spiritalis unctio.\n\nTu septiformis munere,\ndigitus paternae dexterae,\ntu rite promissum Patris,\nsermone ditans guttura.\n\nAccende lumen sensibus,\ninfunde amorem cordibus,\ninfirma nostri corporis\nvirtute firmans perpeti.\n\nDeo Patri sit gloria,\net Filio, qui a mortuis\nsurrexit, ac Paraclito,\nin saeculorum saecula. Amen."
  },
  {
    id: 16,
    titulo: "Veni Sancte Spiritus",
    categoria: "Espírito Santo",
    momentoMissa: "Ofertório",
    tempoLiturgico: "Páscoa",
    autor: "Sequência de Pentecostes",
    compositor: "Canto gregoriano",
    tom: "Modo I",
    youtubeId: "vptE7V55Ydk",
    imagem: IMG.raios,
    letra: "Veni, Sancte Spiritus,\net emitte caelitus\nlucis tuae radium.\n\nVeni, pater pauperum,\nveni, dator munerum,\nveni, lumen cordium.\n\nConsolator optime,\ndulcis hospes animae,\ndulce refrigerium.\n\nO lux beatissima,\nreple cordis intima\ntuorum fidelium.\n\nDa tuis fidelibus,\nin te confidentibus,\nsacrum septenarium.\nDa virtutis meritum,\nda salutis exitum,\nda perenne gaudium. Amen."
  },
  {
    id: 17,
    titulo: "Attende Domine",
    categoria: "Quaresma",
    momentoMissa: "Ato Penitencial",
    tempoLiturgico: "Quaresma",
    autor: "Hino moçárabe",
    compositor: "Canto gregoriano",
    tom: "Modo V",
    youtubeId: "-xs67InkZ3A",
    imagem: IMG.cruz,
    letra: "Attende Domine, et miserere, quia peccavimus tibi.\n\nAd te Rex summe, omnium Redemptor,\noculos nostros sublevamus flentes:\nexaudi, Christe, supplicantum preces.\n\nDextera Patris, lapis angularis,\nvia salutis, ianua caelestis,\nablue nostri maculas delicti.\n\nRogamus, Deus, tuam maiestatem:\nauribus sacris gemitus exaudi:\ncrimina nostra placidus indulge."
  },
  {
    id: 18,
    titulo: "Parce Domine",
    categoria: "Quaresma",
    momentoMissa: "Ato Penitencial",
    tempoLiturgico: "Quaresma",
    autor: "Tradição quaresmal",
    compositor: "Canto gregoriano",
    tom: "Modo I",
    youtubeId: "c2cEzberbXM",
    imagem: IMG.biblia2,
    letra: "Parce, Domine, parce populo tuo:\nne in aeternum irascaris nobis.\n\nFlectamus iram vindicem,\nPloremus ante Iudicem;\nClamemus ore supplici,\nDicamus omnes cernui.\n\nNostris malis offendimus\nTuam Deus clementiam;\nEffunde nobis desuper,\nRemissor, indulgentiam."
  },
  {
    id: 19,
    titulo: "Stabat Mater Dolorosa",
    categoria: "Quaresma",
    momentoMissa: "Ofertório",
    tempoLiturgico: "Quaresma",
    autor: "Jacopone da Todi (atrib.)",
    compositor: "Canto gregoriano",
    tom: "Modo II",
    youtubeId: "nt-adJFJT_g",
    imagem: IMG.maria3,
    letra: "Stabat Mater dolorosa\niuxta crucem lacrimosa,\ndum pendebat Filius.\n\nCuius animam gementem,\ncontristatam et dolentem\npertransivit gladius.\n\nO quam tristis et afflicta\nfuit illa benedicta\nmater Unigeniti!\n\nQuis est homo qui non fleret,\nmatrem Christi si videret\nin tanto supplicio?\n\nSancta Mater, istud agas,\ncrucifixi fige plagas\ncordi meo valide.\n\nQuando corpus morietur,\nfac ut animae donetur\nparadisi gloria. Amen."
  },
  {
    id: 20,
    titulo: "Victimae Paschali Laudes",
    categoria: "Páscoa",
    momentoMissa: "Aclamação",
    tempoLiturgico: "Páscoa",
    autor: "Wipo de Borgonha (atrib.)",
    compositor: "Canto gregoriano",
    tom: "Modo I",
    youtubeId: "nt-adJFJT_g",
    imagem: IMG.vitral,
    letra: "Victimae paschali laudes\nimmolent Christiani.\n\nAgnus redemit oves:\nChristus innocens Patri\nreconciliavit peccatores.\n\nMors et vita duello\nconflixere mirando:\ndux vitae mortuus, regnat vivus.\n\nDic nobis, Maria,\nquid vidisti in via?\nSepulcrum Christi viventis,\net gloriam vidi resurgentis.\n\nScimus Christum surrexisse\na mortuis vere;\ntu nobis, victor Rex, miserere. Amen. Alleluia."
  },
  {
    id: 21,
    titulo: "Adeste Fideles",
    categoria: "Natal",
    momentoMissa: "Entrada",
    tempoLiturgico: "Natal",
    autor: "John Francis Wade",
    compositor: "John Francis Wade",
    tom: "G",
    youtubeId: "gvNf0xg_OPY",
    imagem: IMG.vela,
    letra: "Adeste, fideles, laeti triumphantes,\nVenite, venite in Bethlehem.\nNatum videte Regem angelorum.\nVenite adoremus, venite adoremus,\nVenite adoremus Dominum.\n\nDeum de Deo, lumen de lumine,\ngestant puellae viscera.\nDeum verum, genitum non factum.\nVenite adoremus Dominum.\n\nCantet nunc io chorus angelorum,\ncantet nunc aula caelestium:\nGloria, gloria in excelsis Deo.\nVenite adoremus Dominum."
  },
  {
    id: 22,
    titulo: "Rorate Caeli",
    categoria: "Outros",
    momentoMissa: "Entrada",
    tempoLiturgico: "Advento",
    autor: "Antífona de Advento",
    compositor: "Canto gregoriano",
    tom: "Modo I",
    youtubeId: "-xs67InkZ3A",
    imagem: IMG.vitral2,
    letra: "Rorate, caeli, desuper,\net nubes pluant iustum;\naperiatur terra et germinet Salvatorem.\n\nNe irascaris, Domine,\nne ultra memineris iniquitatis:\necce civitas Sancti facta est deserta,\nSion deserta facta est:\nIerusalem desolata est:\ndomus sanctificationis tuae et gloriae tuae."
  },
  {
    id: 23,
    titulo: "Te Deum Laudamus",
    categoria: "Final",
    momentoMissa: "Final",
    tempoLiturgico: "Tempo Comum",
    autor: "Hino ambrosiano",
    compositor: "Canto gregoriano",
    tom: "Modo III",
    youtubeId: "Y2GWd-8RR7U",
    imagem: IMG.orgao,
    letra: "Te Deum laudamus:\nte Dominum confitemur.\nTe aeternum Patrem\nomnis terra veneratur.\nTibi omnes angeli,\ntibi caeli et universae potestates:\ntibi cherubim et seraphim\nincessabili voce proclamant:\nSanctus, Sanctus, Sanctus\nDominus Deus Sabaoth.\n\nTu Rex gloriae, Christe.\nTu Patris sempiternus es Filius.\nTu, ad liberandum suscepturus hominem,\nnon horruisti Virginis uterum.\nTu, devicto mortis aculeo,\naperuisti credentibus regna caelorum."
  },
  {
    id: 24,
    titulo: "In Paradisum",
    categoria: "Final",
    momentoMissa: "Final",
    tempoLiturgico: "Tempo Comum",
    autor: "Liturgia dos fiéis defuntos",
    compositor: "Canto gregoriano / Fauré",
    tom: "Modo VII",
    youtubeId: "ieGJDsqqkJY",
    imagem: IMG.vitral2,
    letra: "In paradisum deducant te angeli;\nin tuo adventu suscipiant te martyres,\net perducant te in civitatem sanctam Ierusalem.\nChorus angelorum te suscipiat,\net cum Lazaro quondam paupere\naeternam habeas requiem."
  },
  {
    id: 25,
    titulo: "Ave Maris Stella",
    categoria: "Marianos",
    momentoMissa: "Entrada",
    tempoLiturgico: "Tempo Comum",
    autor: "Hino mariano séc. VIII-IX",
    compositor: "Canto gregoriano",
    tom: "Modo I",
    youtubeId: "qt2ATQtQ7V4",
    imagem: IMG.maria,
    letra: "Ave, maris stella,\nDei Mater alma,\natque semper Virgo,\nfelix caeli porta.\n\nSumens illud Ave\nGabrielis ore,\nfund nos in pace,\nmutans Hevae nomen.\n\nSolve vincla reis,\nprofer lumen caecis,\nmala nostra pelle,\nbona cuncta posce.\n\nVitam praesta puram,\niter para tutum,\nut videntes Iesum\nsemper collaetemur.\nSit laus Deo Patri,\nsummo Christo decus,\nSpiritui Sancto,\ntribus honor unus. Amen."
  },
  {
    id: 26,
    titulo: "Aleluia Gregoriano",
    categoria: "Aclamação",
    momentoMissa: "Aclamação",
    tempoLiturgico: "Tempo Comum",
    autor: "Liturgia romana",
    compositor: "Canto gregoriano",
    tom: "Modo VIII",
    youtubeId: "WQhZOX8bQfs",
    imagem: IMG.hinario,
    letra: "Alleluia, alleluia, alleluia.\n\nAleluia, aleluia, aleluia.\n\nVersículo (exemplo):\nEu sou o caminho, a verdade e a vida, diz o Senhor;\nninguém vai ao Pai senão por mim.\n\nAlleluia, alleluia, alleluia."
  },
  {
    id: 27,
    titulo: "Anima Christi",
    categoria: "Comunhão",
    momentoMissa: "Comunhão",
    tempoLiturgico: "Tempo Comum",
    autor: "Oração séc. XIV",
    compositor: "Tradição",
    tom: "D",
    youtubeId: "CZetCZgM7_Y",
    imagem: IMG.eucaristia,
    letra: "Anima Christi, sanctifica me.\nCorpus Christi, salva me.\nSanguis Christi, inebria me.\nAqua lateris Christi, lava me.\nPassio Christi, conforta me.\nO bone Iesu, exaudi me.\nIntra tua vulnera absconde me.\nNe permittas me separari a te.\nAb hoste maligno defende me.\nIn hora mortis meae voca me,\net iube me venire ad te,\nut cum Sanctis tuis laudem te\nin saecula saeculorum. Amen.\n\nAlma de Cristo, santificai-me.\nCorpo de Cristo, salvai-me.\nSangue de Cristo, inebriai-me."
  },
  {
    id: 28,
    titulo: "Asperges Me",
    categoria: "Entrada",
    momentoMissa: "Entrada",
    tempoLiturgico: "Tempo Comum",
    autor: "Salmo 50 (51)",
    compositor: "Canto gregoriano",
    tom: "Modo VII",
    youtubeId: "r3H5f7oePQE",
    imagem: IMG.altar2,
    letra: "Asperges me, Domine, hyssopo, et mundabor:\nlavabis me, et super nivem dealbabor.\n\nMiserere mei, Deus,\nsecundum magnam misericordiam tuam.\n\nGloria Patri, et Filio,\net Spiritui Sancto.\nSicut erat in principio, et nunc, et semper,\net in saecula saeculorum. Amen.\n\nAsperges me, Domine, hyssopo, et mundabor."
  },
  {
    id: 29,
    titulo: "Laudate Dominum",
    categoria: "Entrada",
    momentoMissa: "Entrada",
    tempoLiturgico: "Tempo Comum",
    autor: "Salmo 116 (117)",
    compositor: "W. A. Mozart / tradição",
    tom: "F",
    youtubeId: "sZrJJTZQKlA",
    imagem: IMG.orgao,
    letra: "Laudate Dominum, omnes gentes;\nlaudate eum, omnes populi.\nQuoniam confirmata est super nos misericordia eius,\net veritas Domini manet in aeternum.\n\nGloria Patri, et Filio,\net Spiritui Sancto.\nSicut erat in principio, et nunc, et semper,\net in saecula saeculorum. Amen.\n\nLouvai o Senhor, todas as nações,\nglorificai-o, todos os povos.\nÉ inabalável o seu amor por nós,\ne a fidelidade do Senhor permanece para sempre."
  },
  {
    id: 30,
    titulo: "Salmo 22 — O Senhor é meu pastor",
    categoria: "Salmo",
    momentoMissa: "Salmo",
    tempoLiturgico: "Tempo Comum",
    autor: "Salmo 22 (23)",
    compositor: "Tradição salmódica",
    tom: "G",
    youtubeId: "0wIAqDKdNEo",
    imagem: IMG.biblia,
    letra: "O Senhor é o pastor que me conduz;\nnão me falta coisa alguma.\n\nPelos prados e campinas verdejantes\nele me leva a descansar.\nPara as águas repousantes me encaminha\ne restaura as minhas forças.\n\nMesmo que eu passe pelo vale tenebroso,\nnenhum mal eu temerei.\nEstais comigo com bastão e com cajado;\neles me dão a segurança.\n\nFelizmente e com grande profusão\npreparais uma mesa para mim.\nPerante os meus inimigos ungireis minha cabeça,\ne o meu cálice transborda."
  }
];

/* ============================================================
   BANCO DE DADOS — SANTOS
   ============================================================ */
const santos = [
  { data: "08-01", nome: "Santo Afonso Maria de Ligório", tipo: "Memória", cor: "Branco", descricao: "Bispo e doutor da Igreja, fundador dos Redentoristas, mestre da teologia moral e da devoção a Nossa Senhora." },
  { data: "08-04", nome: "São João Maria Vianney", tipo: "Memória", cor: "Branco", descricao: "Cura d'Ars, padroeiro dos párocos, modelo de pastor dedicado à confissão e à Eucaristia." },
  { data: "08-05", nome: "Dedicação da Basílica de Santa Maria Maior", tipo: "Memória facultativa", cor: "Branco", descricao: "Memória da basílica mariana de Roma, sinal da maternidade de Maria." },
  { data: "08-06", nome: "Transfiguração do Senhor", tipo: "Festa", cor: "Branco", descricao: "Jesus se transfigura no Tabor diante de Pedro, Tiago e João, antecipando a glória pascal." },
  { data: "08-08", nome: "São Domingos de Gusmão", tipo: "Memória", cor: "Branco", descricao: "Fundador da Ordem dos Pregadores (dominicanos), apóstolo da pregação e do Rosário." },
  { data: "08-09", nome: "Santa Teresa Benedita da Cruz", tipo: "Memória facultativa", cor: "Vermelho", descricao: "Edith Stein, filósofa, carmelita e mártir, padroeira da Europa." },
  { data: "08-10", nome: "São Lourenço", tipo: "Festa", cor: "Vermelho", descricao: "Diácono e mártir de Roma, testemunha da caridade para com os pobres." },
  { data: "08-11", nome: "Santa Clara de Assis", tipo: "Memória", cor: "Branco", descricao: "Virgem, discípula de São Francisco, fundadora das Clarissas, contemplativa da pobreza evangélica." },
  { data: "08-13", nome: "Santos Ponciano e Hipólito", tipo: "Memória facultativa", cor: "Vermelho", descricao: "Papa e sacerdote, mártires da Igreja antiga." },
  { data: "08-14", nome: "São Maximiliano Maria Kolbe", tipo: "Memória", cor: "Vermelho", descricao: "Presbítero franciscano e mártir em Auschwitz, ofereceu a vida por um pai de família." },
  { data: "08-15", nome: "Assunção de Nossa Senhora", tipo: "Solenidade", cor: "Branco", descricao: "Maria é elevada ao céu em corpo e alma, primícia da ressurreição dos fiéis." },
  { data: "08-16", nome: "Santo Estêvão da Hungria", tipo: "Memória facultativa", cor: "Branco", descricao: "Rei que evangelizou o seu povo e consagrou a nação a Nossa Senhora." },
  { data: "08-20", nome: "São Bernardo de Claraval", tipo: "Memória", cor: "Branco", descricao: "Abade cisterciense e doutor da Igreja, cantor de Maria e da vida monástica." },
  { data: "08-21", nome: "São Pio X", tipo: "Memória", cor: "Branco", descricao: "Papa da Eucaristia frequente e da formação catequética." },
  { data: "08-22", nome: "Nossa Senhora Rainha", tipo: "Memória", cor: "Branco", descricao: "Memória da realeza de Maria, associada à realeza de Cristo." },
  { data: "08-23", nome: "Santa Rosa de Lima", tipo: "Memória facultativa", cor: "Branco", descricao: "Primeira santa da América, terciária dominicana, modelo de penitência e caridade." },
  { data: "08-24", nome: "São Bartolomeu", tipo: "Festa", cor: "Vermelho", descricao: "Apóstolo do Senhor, anunciou o Evangelho até o martírio." },
  { data: "08-27", nome: "Santa Mônica", tipo: "Memória", cor: "Branco", descricao: "Mãe de Santo Agostinho, modelo de perseverança na oração pela conversão dos filhos." },
  { data: "08-28", nome: "Santo Agostinho", tipo: "Memória", cor: "Branco", descricao: "Bispo de Hipona e doutor da Igreja, autor das Confissões e da Cidade de Deus." },
  { data: "08-29", nome: "Martírio de São João Batista", tipo: "Memória", cor: "Vermelho", descricao: "Memória da paixão do Precursor, que deu a vida pela verdade." },
  { data: "07-26", nome: "Santos Joaquim e Ana", tipo: "Memória", cor: "Branco", descricao: "Pais de Nossa Senhora, avós de Jesus, padroeiros dos avós." },
  { data: "07-29", nome: "Santos Marta, Maria e Lázaro", tipo: "Memória", cor: "Branco", descricao: "Amigos de Jesus em Betânia, modelos de serviço, escuta e amizade com o Senhor." },
  { data: "07-31", nome: "Santo Inácio de Loyola", tipo: "Memória", cor: "Branco", descricao: "Fundador da Companhia de Jesus, mestre dos Exercícios Espirituais." },
  { data: "09-03", nome: "São Gregório Magno", tipo: "Memória", cor: "Branco", descricao: "Papa e doutor, reformador da liturgia e da música sacra." },
  { data: "09-08", nome: "Natividade de Nossa Senhora", tipo: "Festa", cor: "Branco", descricao: "Nascimento de Maria, aurora da salvação." },
  { data: "09-14", nome: "Exaltação da Santa Cruz", tipo: "Festa", cor: "Vermelho", descricao: "A Cruz gloriosa, sinal da vitória de Cristo." },
  { data: "09-15", nome: "Nossa Senhora das Dores", tipo: "Memória", cor: "Branco", descricao: "Maria ao pé da Cruz, associada à paixão do Filho." },
  { data: "09-21", nome: "São Mateus", tipo: "Festa", cor: "Vermelho", descricao: "Apóstolo e evangelista, chamado da mesa da cobrança para o seguimento." },
  { data: "09-29", nome: "Santos Miguel, Gabriel e Rafael", tipo: "Festa", cor: "Branco", descricao: "Os arcanjos, mensageiros e defensores do povo de Deus." },
  { data: "06-24", nome: "Natividade de São João Batista", tipo: "Solenidade", cor: "Branco", descricao: "Nascimento do Precursor do Senhor." },
  { data: "06-29", nome: "São Pedro e São Paulo", tipo: "Solenidade", cor: "Vermelho", descricao: "Colunas da Igreja apostólica, mártires em Roma." },
  { data: "12-08", nome: "Imaculada Conceição", tipo: "Solenidade", cor: "Branco", descricao: "Maria concebida sem pecado original." },
  { data: "12-25", nome: "Natal do Senhor", tipo: "Solenidade", cor: "Branco", descricao: "Nascimento de Nosso Senhor Jesus Cristo." },
  { data: "01-01", nome: "Santa Maria, Mãe de Deus", tipo: "Solenidade", cor: "Branco", descricao: "Maria, Theotókos, no oitavo dia do Natal." },
  { data: "01-06", nome: "Epifania do Senhor", tipo: "Solenidade", cor: "Branco", descricao: "Manifestação de Cristo às nações." },
  { data: "03-19", nome: "São José", tipo: "Solenidade", cor: "Branco", descricao: "Esposo de Maria e padroeiro da Igreja universal." },
  { data: "03-25", nome: "Anunciação do Senhor", tipo: "Solenidade", cor: "Branco", descricao: "O Verbo se fez carne no seio da Virgem Maria." }
];

/* ============================================================
   BANCO DE DADOS — LITURGIA DIÁRIA
   Textos de estudo / referência. Confirmar sempre com o
   Ordo e o Lecionário oficiais da diocese.
   ============================================================ */
const liturgiaDiaria = [
  {
    data: "2026-08-02",
    diaSemana: "Domingo",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Verde",
    santoDoDia: "",
    celebracao: "18º Domingo do Tempo Comum",
    primeiraLeitura: {
      referencia: "Is 55,1-3",
      texto: "Assim fala o Senhor:\nÓ vós todos que estais com sede, vinde às águas;\nvós que não tendes dinheiro, vinde, fazei provisões e comei;\nvinde e, sem dinheiro e sem pagar, comprareis vinho e leite.\nPor que gastar dinheiro com aquilo que não alimenta,\ne o salário com o que não dá saciedade?\nOuvi-me com atenção e comei o que é bom;\ndeleitai-vos com iguarias suculentas.\nPrestai-me atenção e vinde a mim, ouvi e tereis vida.\nFirmarei convosco uma aliança eterna,\nmanterei as graças concedidas a Davi."
    },
    salmo: {
      referencia: "Sl 144 (145)",
      resposta: "Abri a vossa mão e saciais os vossos filhos.",
      texto: "Que vossas obras, ó Senhor, vos glorifiquem,\ne os vossos santos com louvores vos bendigam!\nNarrem a glória e o esplendor do vosso reino\ne saibam proclamar vosso poder!\n\nOs olhos, todos, esperam pelo Senhor,\ne ele os alimenta no tempo oportuno.\nEle abre a sua mão generosa\ne sacia todo ser vivo com fartura."
    },
    segundaLeitura: {
      referencia: "Rm 8,35.37-39",
      texto: "Irmãos:\nQuem nos separará do amor de Cristo?\nTribulação, angústia, perseguição, fome, nudez, perigo, espada?\nMas, em tudo isso, somos mais que vencedores,\ngraças àquele que nos amou.\nTenho a certeza de que nem a morte nem a vida,\nnem os anjos nem os principados,\nnem o presente nem o futuro, nem os poderes,\nnem a altura nem a profundidade,\nnem outra criatura qualquer\nnos poderá separar do amor de Deus,\nmanifestado em Cristo Jesus, nosso Senhor."
    },
    evangelho: {
      referencia: "Mt 14,13-21",
      texto: "Naquele tempo, Jesus partiu dali e foi de barco para um lugar deserto e afastado. Quando as multidões souberam disso, saíram das cidades e o seguiram a pé.\nAo sair da barca, Jesus viu uma grande multidão. Encheu-se de compaixão por eles e curou os que estavam doentes.\nAo entardecer, os discípulos aproximaram-se de Jesus e disseram: «Este lugar é deserto e a hora já está avançada. Despede as multidões, para que possam ir aos povoados comprar alguma coisa para comer.»\nJesus porém lhes disse: «Eles não precisam ir embora. Dai-lhes vós mesmos de comer.»\nOs discípulos responderam: «Só temos aqui cinco pães e dois peixes.»\nJesus disse: «Trazei-os aqui.»\nMandou que as multidões se sentassem na relva. Tomou os cinco pães e os dois peixes, ergueu os olhos para o céu e pronunciou a bênção. Partiu os pães e os deu aos discípulos. Os discípulos os distribuíram às multidões.\nTodos comeram e ficaram satisfeitos, e dos pedaços que sobraram recolheram ainda doze cestos cheios. Os que comeram foram cerca de cinco mil homens, sem contar mulheres e crianças."
    },
    reflexao: "O Senhor sacia a fome do seu povo. A multiplicação dos pães antecipa a Eucaristia: o pouco que oferecemos, abençoado por Cristo, torna-se abundância para todos.",
    oracao: "Ó Deus, protetor dos que em vós esperam, sem vós nada tem valor, nada é santo. Multiplicai sobre nós a vossa misericórdia para que, conduzidos por vós, usemos de tal modo os bens que passam que possamos aderir aos que não passam. Por nosso Senhor Jesus Cristo."
  },
  {
    data: "2026-08-06",
    diaSemana: "Quinta-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Branco",
    santoDoDia: "Transfiguração do Senhor",
    celebracao: "Festa da Transfiguração do Senhor",
    primeiraLeitura: {
      referencia: "Dn 7,9-10.13-14",
      texto: "Eu continuava olhando, até que foram colocados uns tronos, e um Ancião de muitos dias aí tomou lugar. Sua veste era branca como neve e os cabelos da cabeça, como lã pura; seu trono eram chamas de fogo, com rodas de fogo ardente.\nUm rio de fogo corria, impetuoso, e saía de diante dele. Milhares de milhares o serviam, e miríades de miríades o assistiam. O tribunal entrou em sessão e os livros foram abertos.\nEu estava vendo, nas minhas visões noturnas, e eis que, entre as nuvens do céu, vinha um como filho do homem, aproximando-se do Ancião de muitos dias, e foi conduzido à sua presença.\nA ele foram dados poder, glória e reino, e todos os povos, nações e línguas o serviam. Seu poder é um poder eterno, que nunca lhe será tirado, e seu reino, um reino que jamais será destruído."
    },
    salmo: {
      referencia: "Sl 96 (97)",
      resposta: "O Senhor é rei: exulte a terra inteira.",
      texto: "O Senhor é rei! Exulte a terra de alegria,\ne as ilhas numerosas rejubilem!\nTreva e nuvem o rodeiam no seu trono,\nque se apóia na justiça e no direito.\n\nAs montanhas se derretem como cera\nante a face do Senhor de toda a terra;\ne assim proclama o céu sua justiça,\ntodos os povos podem ver a sua glória."
    },
    segundaLeitura: {
      referencia: "2Pd 1,16-19",
      texto: "Caríssimos:\nNão foi seguindo fábulas habilmente inventadas que vos fizemos conhecer o poder e a vinda de nosso Senhor Jesus Cristo, mas sim por termos sido testemunhas oculares da sua majestade.\nEfetivamente, ele recebeu honra e glória da parte de Deus Pai, quando do seio da esplêndida glória se fez ouvir aquela voz que dizia: «Este é o meu Filho bem-amado, no qual ponho o meu bem-querer.»\nEsta voz, nós a ouvimos, vinda do céu, quando estávamos com ele no monte santo.\nConfirmamos assim a palavra dos profetas, à qual fazeis bem em prestar atenção, como a uma lâmpada que brilha em lugar escuro, até que desponte o dia e nasça em vossos corações a estrela da manhã."
    },
    evangelho: {
      referencia: "Mt 17,1-9",
      texto: "Naquele tempo, Jesus tomou consigo Pedro, Tiago e João, seu irmão, e os levou a um lugar à parte, sobre uma alta montanha.\nE foi transfigurado diante deles; o seu rosto brilhou como o sol e as suas roupas ficaram brancas como a luz.\nNisto apareceram-lhes Moisés e Elias, conversando com Jesus.\nEntão Pedro tomou a palavra e disse: «Senhor, é bom ficarmos aqui. Se queres, vou fazer aqui três tendas: uma para ti, uma para Moisés e outra para Elias.»\nPedro ainda falava, quando uma nuvem luminosa os cobriu com sua sombra, e da nuvem uma voz dizia: «Este é o meu Filho amado, no qual eu pus o meu bem-querer. Escutai-o!»\nQuando ouviram isto, os discípulos ficaram muito assustados e caíram com o rosto em terra.\nJesus se aproximou, tocou neles e disse: «Levantai-vos, e não tenhais medo.»\nOs discípulos ergueram os olhos e não viram mais ninguém, a não ser somente Jesus.\nQuando desciam da montanha, Jesus lhes ordenou: «Não conteis a ninguém esta visão, até que o Filho do Homem tenha ressuscitado dos mortos.»"
    },
    reflexao: "No Tabor, a glória de Cristo ilumina o caminho da cruz. Escutar o Filho amado é o coração da vida cristã e da liturgia.",
    oracao: "Ó Deus, que na transfiguração do vosso Filho confirmastes os mistérios da fé pelo testemunho de Moisés e Elias e prefigurastes a nossa adoção de filhos, concedei aos vossos servos ouvir a voz do vosso Filho amado e tornar-se coerdeiros da sua glória."
  },
  {
    data: "2026-08-09",
    diaSemana: "Domingo",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Verde",
    santoDoDia: "Santa Teresa Benedita da Cruz",
    celebracao: "19º Domingo do Tempo Comum",
    primeiraLeitura: {
      referencia: "1Rs 19,9a.11-13a",
      texto: "Naqueles dias, o profeta Elias chegou a Horeb, o monte de Deus, e passou a noite numa gruta.\nO Senhor disse-lhe: «Sai e permanece sobre o monte à espera do Senhor.»\nEntão o Senhor passou. Diante do Senhor, uma grande e forte rajada de vento fendia as montanhas e quebrava os rochedos; mas o Senhor não estava no vento.\nDepois do vento, veio um terremoto; mas o Senhor não estava no terremoto.\nDepois do terremoto, apareceu um fogo; mas o Senhor não estava no fogo.\nE depois do fogo, ouviu-se o murmúrio de uma brisa suave.\nOuvindo isto, Elias cobriu o rosto com o manto, saiu e ficou à entrada da gruta."
    },
    salmo: {
      referencia: "Sl 84 (85)",
      resposta: "Mostrai-nos, ó Senhor, o vosso amor e dai-nos vossa salvação.",
      texto: "Quero ouvir o que o Senhor irá falar:\né a paz que ele vai anunciar.\nEstá perto a salvação dos que o temem,\ne a sua glória habitará em nossa terra.\n\nA verdade e o amor se encontrarão,\na justiça e a paz se abraçarão.\nDa terra brotará a fidelidade,\ne a justiça olhará dos altos céus."
    },
    segundaLeitura: {
      referencia: "Rm 9,1-5",
      texto: "Irmãos:\nDigo a verdade em Cristo, não minto, e disso me dá testemunho a minha consciência no Espírito Santo: sinto uma grande tristeza e uma dor contínua no coração.\nSim, eu desejaria ser amaldiçoado, separado de Cristo, por amor de meus irmãos, os de minha raça.\nEles são israelitas. A eles pertencem a adoção filial, a glória, as alianças, a legislação, o culto, as promessas e também os patriarcas.\nDeles é que descende, quanto à carne, Cristo, que está acima de tudo, Deus bendito para sempre. Amém."
    },
    evangelho: {
      referencia: "Mt 14,22-33",
      texto: "Logo em seguida, Jesus obrigou os discípulos a entrar na barca e a passar para o outro lado, enquanto ele despedia as multidões.\nDepois de despedi-las, subiu ao monte, para orar a sós. A noite chegou, e Jesus continuava ali, sozinho.\nA barca, porém, já longe da terra, era agitata pelas ondas, pois o vento era contrário.\nNas últimas horas da noite, Jesus veio até os discípulos, andando sobre o mar.\nQuando os discípulos o avistaram, andando sobre o mar, ficaram apavorados e disseram: «É um fantasma.» E gritaram de medo.\nJesus, porém, logo lhes disse: «Coragem! Sou eu. Não tenhais medo.»\nPedro tomou a palavra e disse: «Senhor, se és tu, manda-me ir ao teu encontro, por cima das águas.»\nE Jesus respondeu: «Vem!»\nPedro desceu da barca e começou a andar sobre as águas, em direção a Jesus.\nMas, quando sentiu o vento, ficou com medo e, começando a afundar, gritou: «Senhor, salva-me!»\nJesus logo estendeu a mão, segurou Pedro, e lhe disse: «Homem fraco na fé, por que duvidaste?»\nAssim que subiram no barco, o vento se acalmou.\nOs que estavam no barco prostraram-se diante de Jesus, dizendo: «Verdadeiramente, tu és o Filho de Deus!»"
    },
    reflexao: "No meio das ondas, Cristo vem ao nosso encontro. A fé não elimina a tempestade, mas estende a mão para Aquele que salva.",
    oracao: "Deus eterno e todo-poderoso, a quem ousamos chamar de Pai, dai-nos cada vez mais um coração de filhos, para alcançarmos um dia a herança prometida. Por nosso Senhor Jesus Cristo."
  },
  {
    data: "2026-08-10",
    diaSemana: "Segunda-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Vermelho",
    santoDoDia: "São Lourenço",
    celebracao: "Festa de São Lourenço, diácono e mártir",
    primeiraLeitura: {
      referencia: "2Cor 9,6-10",
      texto: "Irmãos:\nSaibam: quem semeia pouco colherá também pouco, e quem semeia com largueza colherá também com largueza.\nDê cada um conforme tiver decidido em seu coração, sem pesar nem constrangimento, pois Deus ama quem dá com alegria.\nDeus é poderoso para vos cumular de toda sorte de graças, para que, em tudo, tenhais sempre o necessário e ainda possais participar generosamente de toda obra boa.\nComo está escrito: «Distribuiu, deu aos pobres; sua justiça permanece para sempre.»"
    },
    salmo: {
      referencia: "Sl 111 (112)",
      resposta: "Feliz o homem que se compadece e empresta.",
      texto: "Feliz o homem que respeita o Senhor\ne que ama com carinho a sua lei!\nSua descendência será forte sobre a terra,\nabençoada a geração dos homens retos."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Jo 12,24-26",
      texto: "Naquele tempo, disse Jesus aos seus discípulos:\n«Em verdade, em verdade vos digo: se o grão de trigo que cai na terra não morre, fica só; mas se morre, produz muito fruto.\nQuem se apega à sua vida, perde-a; mas quem faz pouca conta de sua vida neste mundo, conservá-la-á para a vida eterna.\nSe alguém me quer servir, siga-me, e onde eu estou, estará também o meu servo. Se alguém me serve, o Pai o honrará.»"
    },
    reflexao: "São Lourenço entregou a vida como o grão que morre para dar fruto. A caridade até o fim é o tesouro da Igreja.",
    oracao: "Ó Deus, que ao bem-aventurado Lourenço destes arder no fogo do vosso amor, concedei que o fogo da fé extinga em nós as chamas do vício. Por Cristo, nosso Senhor."
  },
  {
    data: "2026-08-11",
    diaSemana: "Terça-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Branco",
    santoDoDia: "Santa Clara de Assis",
    celebracao: "Memória de Santa Clara, virgem",
    primeiraLeitura: {
      referencia: "Fl 3,8-14",
      texto: "Irmãos:\nConsidero tudo como perda, comparando-o com o bem supremo que é conhecer a Cristo Jesus, meu Senhor.\nPor causa dele, perdi tudo e considero tudo como lixo, a fim de ganhar Cristo e estar com ele.\nNão tendo minha justiça própria, que vem da Lei, mas aquela que vem pela fé em Cristo, a justiça que vem de Deus, na base da fé.\nPretendo só conhecê-lo, experimentar o poder da sua ressurreição e participar dos seus sofrimentos, tornando-me semelhante a ele na morte, para ver se chego até a ressurreição dentre os mortos.\nNão que eu já tenha recebido tudo isso, ou já seja perfeito. Mas corro para alcançá-lo, visto que já fui alcançado por Cristo Jesus."
    },
    salmo: {
      referencia: "Sl 15 (16)",
      resposta: "Sois minha herança, ó Senhor!",
      texto: "Guardai-me, ó Deus, porque em vós me refugio.\nDigo ao Senhor: «Somente vós sois meu Senhor.»\nO Senhor é a porção da minha herança e do meu cálice;\néis vós quem me reconduzis à minha herança."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Mt 19,27-29",
      texto: "Naquele tempo, Pedro tomou a palavra e disse a Jesus: «Eis que nós deixamos tudo e te seguimos. Que haveremos de receber?»\nJesus respondeu: «Em verdade vos digo, quando o Filho do Homem estiver sentado no trono da sua glória, no dia da renovação do mundo, vós, que me seguistes, haveis de sentar-vos em doze tronos para julgar as doze tribos de Israel.\nE todo aquele que tiver deixado casas, irmãos, irmãs, pai, mãe, filhos, campos, por causa do meu nome, receberá cem vezes mais e terá como herança a vida eterna.»"
    },
    reflexao: "Clara escolheu Cristo como única herança. A pobreza evangélica não é falta, é liberdade para possuir o essencial.",
    oracao: "Ó Deus, que em Santa Clara levastes a um admirável amor à pobreza a escola de São Francisco, concedei, por sua intercessão, que vos sigamos na pobreza de espírito e mereçamos contemplar-vos no Reino dos céus."
  },
  {
    data: "2026-08-12",
    diaSemana: "Quarta-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Verde",
    santoDoDia: "",
    celebracao: "Tempo Comum — 19ª semana",
    primeiraLeitura: {
      referencia: "Ez 9,1-7; 10,18-22",
      texto: "Conteúdo de estudo: o profeta Ezequiel contempla o juízo que começa pelo santuário e a glória do Senhor que se eleva. É um convite à conversão e ao respeito pela presença de Deus no meio do seu povo."
    },
    salmo: {
      referencia: "Sl 112 (113)",
      resposta: "A glória do Senhor está acima dos céus.",
      texto: "Louvai, louvai, ó servos do Senhor,\nlouvai o nome do Senhor!\nBendito seja o nome do Senhor,\nagora e por toda a eternidade."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Mt 18,15-20",
      texto: "Naquele tempo, Jesus disse aos seus discípulos:\n«Se o teu irmão pecar contra ti, vai corrigi-lo, mas em particular, a sós contigo. Se ele te ouvir, terás ganho o teu irmão.\nSe ele não te ouvir, toma contigo mais uma ou duas pessoas, para que toda a questão seja decidida sob a palavra de duas ou três testemunhas.\nSe ele não vos der ouvido, dize-o à Igreja. Se nem mesmo à Igreja ele ouvir, seja para ti como um pagão e um publicano.\nEm verdade vos digo: tudo o que ligardes na terra será ligado no céu, e tudo o que desligardes na terra será desligado no céu.\nDigo-vos ainda: se dois de vós estiverem de acordo na terra sobre qualquer coisa que quiserem pedir, isto vos será concedido por meu Pai que está nos céus.\nPois onde dois ou três estiverem reunidos em meu nome, eu estou ali, no meio deles.»"
    },
    reflexao: "A correção fraterna e a oração em comum constroem a Igreja. Cristo se faz presente onde há comunhão no seu nome.",
    oracao: "Senhor, habitai no meio da vossa Igreja reunida e dai-nos um coração reconciliado. Por Cristo, nosso Senhor."
  },
  {
    data: "2026-08-13",
    diaSemana: "Quinta-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Verde",
    santoDoDia: "Santos Ponciano e Hipólito",
    celebracao: "Tempo Comum — 19ª semana",
    primeiraLeitura: {
      referencia: "Ez 12,1-12",
      texto: "Conteúdo de estudo: Ezequiel realiza um gesto profético de exílio, sinal da partida do povo. Deus fala mesmo quando o coração está endurecido."
    },
    salmo: {
      referencia: "Sl 77 (78)",
      resposta: "Não esqueçais as obras do Senhor.",
      texto: "Escuta, ó meu povo, a minha lei,\ninclinai o vosso ouvido às palavras que eu digo.\nVou abrir a minha boca em parábolas,\nvos revelar os mistérios do passado."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Mt 18,21–19,1",
      texto: "Naquele tempo, Pedro aproximou-se de Jesus e perguntou: «Senhor, quantas vezes devo perdoar, se meu irmão pecar contra mim? Até sete vezes?»\nJesus respondeu: «Não te digo até sete vezes, mas até setenta vezes sete.»\nE Jesus contou a parábola do servo impiedoso, que, perdoado de uma dívida imensa, não soube perdoar ao companheiro uma dívida pequena.\nO Pai do céu fará o mesmo se cada um não perdoar de coração ao seu irmão."
    },
    reflexao: "O perdão não tem contabilidade. Quem foi perdoado muito é chamado a perdoar sempre.",
    oracao: "Pai de misericórdia, ensinai-nos a perdoar como fomos perdoados. Por Cristo, nosso Senhor."
  },
  {
    data: "2026-08-14",
    diaSemana: "Sexta-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Vermelho",
    santoDoDia: "São Maximiliano Maria Kolbe",
    celebracao: "Memória de São Maximiliano Maria Kolbe, presbítero e mártir",
    primeiraLeitura: {
      referencia: "Sb 3,1-9",
      texto: "A vida dos justos está nas mãos de Deus, e nenhum tormento os atingirá.\nAos olhos dos insensatos eles pareceram morrer; sua saída deste mundo foi considerada uma desgraça, e sua partida do meio de nós, uma destruição; mas eles estão em paz.\nAos olhos dos homens, eles sofreram castigos, mas sua esperança estava cheia de imortalidade.\nPor uma breve correção receberão grandes benefícios, porque Deus os pôs à prova e os achou dignos de si."
    },
    salmo: {
      referencia: "Sl 115 (116)",
      resposta: "Preciosa é aos olhos do Senhor a morte dos seus santos.",
      texto: "Que poderei retribuir ao Senhor Deus\npor tudo aquilo que ele fez em meu favor?\nElevo o cálice da minha salvação,\ninvocando o nome santo do Senhor."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Jo 15,12-16",
      texto: "Naquele tempo, disse Jesus aos seus discípulos:\n«Este é o meu mandamento: amai-vos uns aos outros, assim como eu vos amei.\nNinguém tem amor maior do que aquele que dá a vida pelos amigos.\nVós sois meus amigos, se fizerdes o que eu vos mando.\nJá não vos chamo servos, porque o servo não sabe o que faz o seu senhor. Eu vos chamo amigos, porque vos dei a conhecer tudo o que ouvi de meu Pai.\nNão fostes vós que me escolhestes, mas fui eu que vos escolhi e vos designei para irdes e para que produzais fruto, e o vosso fruto permaneça.»"
    },
    reflexao: "Kolbe fez-se pão para um irmão no campo da morte. O maior amor é entregar a vida.",
    oracao: "Ó Deus, que a São Maximiliano, apaixonado pela Imaculada, destes a graça de amar o próximo até a morte, concedei-nos, por sua intercessão, trabalhar generosamente pela salvação dos homens. Por Cristo, nosso Senhor."
  },
  {
    data: "2026-08-15",
    diaSemana: "Sábado",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Branco",
    santoDoDia: "Nossa Senhora Assunta",
    celebracao: "Solenidade da Assunção de Nossa Senhora",
    primeiraLeitura: {
      referencia: "Ap 11,19a; 12,1-6a.10ab",
      texto: "Abriu-se o templo de Deus que está no céu e apareceu no templo a arca da Aliança.\nEntão apareceu no céu um grande sinal: uma Mulher vestida de sol, tendo a lua debaixo dos pés e sobre a cabeça uma coroa de doze estrelas.\nEstava grávida e gritava de dores, sentindo as angústias de dar à luz.\nEntão apareceu outro sinal no céu: um grande Dragão, cor de fogo.\nO Dragão parou diante da Mulher que estava para dar à luz, pronto para devorar o seu Filho, logo que nascesse.\nE ela deu à luz um Filho homem, que veio para governar todas as nações com cetro de ferro. Mas o Filho foi levado para junto de Deus e do seu trono.\nA Mulher fugiu para o deserto, onde Deus lhe tinha preparado um lugar.\nOuvi uma voz forte no céu, proclamando: «Agora realizou-se a salvação, a força e a realeza do nosso Deus, e o poder do seu Cristo.»"
    },
    salmo: {
      referencia: "Sl 44 (45)",
      resposta: "À vossa direita se encontra a rainha, com veste esplendente de ouro.",
      texto: "As filhas de reis vêm ao vosso encontro,\ne à vossa direita se encontra a rainha,\ncom veste esplendente de ouro de Ofir.\n\nEscutai, minha filha, olhai, ouvi isto:\n«Esquecei vosso povo e a casa paterna!\nDeixai que o rei se encante com vossa beleza!\nPrestai-lhe homenagem: é vosso Senhor!»"
    },
    segundaLeitura: {
      referencia: "1Cor 15,20-27",
      texto: "Irmãos:\nCristo ressuscitou dos mortos como primícias dos que morreram.\nCom efeito, por um homem veio a morte e é também por um homem que vem a ressurreição dos mortos.\nComo em Adão todos morrem, assim em Cristo todos receberão a vida.\nCada qual, porém, em sua ordem: Cristo, as primícias; depois, os que pertencem a Cristo, por ocasião da sua vinda.\nA seguir, será o fim, quando ele entregar a realeza a Deus Pai, depois de ter destruído todo principado, toda potestade e todo poder.\nPois é preciso que ele reine até que tenha posto todos os inimigos debaixo de seus pés.\nO último inimigo a ser destruído é a morte, pois Deus pôs tudo debaixo de seus pés."
    },
    evangelho: {
      referencia: "Lc 1,39-56",
      texto: "Naqueles dias, Maria partiu para a região montanhosa, dirigindo-se, apressadamente, a uma cidade da Judeia.\nEntrou na casa de Zacarias e saudou Isabel.\nQuando Isabel ouviu a saudação de Maria, a criança pulou no seu ventre e Isabel ficou cheia do Espírito Santo.\nCom um grande grito, exclamou: «Bendita és tu entre as mulheres e bendito é o fruto do teu ventre!\nComo posso merecer que a mãe do meu Senhor me venha visitar?\nLogo que a tua saudação chegou aos meus ouvidos, a criança pulou de alegria no meu ventre.\nBem-aventurada aquela que acreditou, porque será cumprido o que o Senhor lhe prometeu.»\nMaria disse:\n«A minha alma engrandece o Senhor,\ne o meu espírito se alegra em Deus, meu Salvador,\nporque olhou para a humildade de sua serva.\nDoravante todas as gerações me chamarão bem-aventurada,\nporque o Todo-poderoso fez grandes coisas em meu favor.\nO seu nome é santo,\ne sua misericórdia se estende, de geração em geração, sobre os que o temem.\nEle mostrou a força de seu braço:\ndispersou os soberbos de coração.\nDerrubou do trono os poderosos e elevou os humildes.\nEncheu de bens os famintos, e despediu os ricos de mãos vazias.\nAcolheu Israel, seu servo, lembrando-se de sua misericórdia,\nconforme prometeu aos nossos pais, em favor de Abraão e de sua descendência, para sempre.»\nMaria ficou três meses com Isabel; depois voltou para casa."
    },
    reflexao: "A Assunção é a Páscoa de Maria. O Magnificat ecoa na Igreja: Deus exalta os humildes e cumpre a promessa.",
    oracao: "Deus eterno e todo-poderoso, que elevastes à glória do céu, em corpo e alma, a imaculada Virgem Maria, mãe do vosso Filho, concedei-nos viver neste mundo constantemente atentos às coisas do alto, a fim de participarmos da sua glória. Por nosso Senhor Jesus Cristo."
  },
  {
    data: "2026-08-16",
    diaSemana: "Domingo",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Verde",
    santoDoDia: "Santo Estêvão da Hungria",
    celebracao: "20º Domingo do Tempo Comum",
    primeiraLeitura: {
      referencia: "Is 56,1.6-7",
      texto: "Assim fala o Senhor:\nObservai o direito e praticai a justiça, porque a minha salvação está para chegar e a minha justiça, para se manifestar.\nOs estrangeiros que aderem ao Senhor para o servir, para amar o nome do Senhor e ser seus servos, todos os que observam o sábado sem o profanar e se mantêm firmes na minha aliança,\neu os conduzirei ao meu santo monte e os alegrarei na minha casa de oração.\nSeus holocaustos e sacrifícios serão aceitos no meu altar, pois minha casa será chamada casa de oração para todos os povos."
    },
    salmo: {
      referencia: "Sl 66 (67)",
      resposta: "Que as nações vos glorifiquem, ó Senhor.",
      texto: "Que Deus nos dê a sua graça e sua bênção,\ne sua face resplandeça sobre nós!\nQue se conheça na terra o seu caminho\ne a sua salvação entre as nações."
    },
    segundaLeitura: {
      referencia: "Rm 11,13-15.29-32",
      texto: "Irmãos:\nEu vos digo, a vós, pagãos: enquanto for apóstolo dos pagãos, glorificarei o meu ministério, na esperança de despertar a emulação dos da minha raça e de salvar alguns deles.\nSe a rejeição deles resultou na reconciliação do mundo, o que será a sua reintegração senão a passagem da morte à vida?\nPois os dons e o chamado de Deus são irrevogáveis."
    },
    evangelho: {
      referencia: "Mt 15,21-28",
      texto: "Naquele tempo, Jesus partiu dali e foi para a região de Tiro e Sidônia.\nEis que uma mulher cananeia, vindo daquela região, pôs-se a gritar: «Senhor, Filho de Davi, tem piedade de mim: minha filha está cruelmente atormentada por um demônio.»\nMas Jesus não lhe respondeu palavra.\nSeus discípulos aproximaram-se e lhe pediram: «Manda-a embora, pois ela vem gritando atrás de nós.»\nJesus respondeu: «Eu fui enviado somente às ovelhas perdidas da casa de Israel.»\nMas a mulher, aproximando-se, prostrou-se diante de Jesus e começou a implorar: «Senhor, socorre-me!»\nJesus lhe disse: «Não fica bem tirar o pão dos filhos e jogá-lo aos cachorrinhos.»\nA mulher insistiu: «É verdade, Senhor; mas também os cachorrinhos comem as migalhas que caem da mesa de seus donos.»\nDiante disso, Jesus lhe disse: «Mulher, grande é a tua fé! Seja feito como tu queres.»\nE a partir daquele momento sua filha ficou curada."
    },
    reflexao: "A fé humilde e persistente atravessa fronteiras. A mesa de Deus é mais larga do que imaginamos.",
    oracao: "Ó Deus, que preparastes bens invisíveis para os que vos amam, derramai em nossos corações o fervor da vossa caridade, para que, amando-vos em tudo e acima de tudo, consigamos alcançar as vossas promessas que superam todo desejo."
  },
  {
    data: "2026-08-22",
    diaSemana: "Sábado",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Branco",
    santoDoDia: "Nossa Senhora Rainha",
    celebracao: "Memória de Nossa Senhora Rainha",
    primeiraLeitura: {
      referencia: "Is 9,1-6",
      texto: "O povo que andava nas trevas viu uma grande luz; uma luz raiou para os que habitavam uma terra sombria.\nPorque nasceu para nós um menino, um filho nos foi dado. Sobre os seus ombros está o sinal da soberania. Ele será chamado: Conselheiro admirável, Deus forte, Pai eterno, Príncipe da paz."
    },
    salmo: {
      referencia: "Sl 112 (113)",
      resposta: "Bendito seja o nome do Senhor, agora e para sempre.",
      texto: "Do nascer ao pôr do sol, louvado seja o nome do Senhor.\nO Senhor está acima de todas as nações, sua glória acima dos céus."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Lc 1,26-38",
      texto: "O anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, a uma virgem prometida em casamento a um homem chamado José. O nome da virgem era Maria.\nO anjo entrou onde ela estava e disse: «Alegra-te, cheia de graça, o Senhor está contigo.»\nMaria ficou perturbada. O anjo continuou: «Não tenhas medo, Maria, porque encontraste graça diante de Deus. Eis que conceberás e darás à luz um filho, e lhe porás o nome de Jesus. Ele será grande, será chamado Filho do Altíssimo, e o Senhor Deus lhe dará o trono de Davi, seu pai. Ele reinará para sempre sobre a descendência de Jacó, e o seu reinado não terá fim.»\nMaria disse: «Como acontecerá isso, se eu não conheço homem?»\nO anjo respondeu: «O Espírito Santo descerá sobre ti, e o poder do Altíssimo te cobrirá com a sua sombra. Por isso, o menino será chamado Santo, Filho de Deus.»\nMaria disse então: «Eis a serva do Senhor; faça-se em mim segundo a tua palavra.»"
    },
    reflexao: "A realeza de Maria é serviço: ela reina porque se fez serva. Sua coroa é o Fiat.",
    oracao: "Ó Deus, que fizestes da Mãe do vosso Filho nossa Mãe e Rainha, concedei que, sustentados por sua intercessão, alcancemos a glória dos vossos filhos no reino dos céus."
  },
  {
    data: "2026-08-23",
    diaSemana: "Domingo",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Verde",
    santoDoDia: "Santa Rosa de Lima",
    celebracao: "21º Domingo do Tempo Comum",
    primeiraLeitura: {
      referencia: "Is 22,19-23",
      texto: "Assim fala o Senhor a Sobna, o prefeito do palácio:\nEu te depuserei do teu cargo, te afastarei do teu posto.\nNaquele dia, chamarei o meu servo Eliacim, filho de Helcias; eu o vestirei com a tua túnica, porei o teu cinto nele e lhe entregarei o teu poder.\nEle será um pai para os habitantes de Jerusalém e para a casa de Judá.\nPorei sobre os seus ombros a chave da casa de Davi: ele abrirá e ninguém fechará, fechará e ninguém abrirá.\nEu o fincarei como um prego em lugar firme, e ele será um trono de glória para a casa de seu pai."
    },
    salmo: {
      referencia: "Sl 137 (138)",
      resposta: "Senhor, vossa bondade é para sempre: não abandoneis a obra de vossas mãos.",
      texto: "Ó Senhor, de coração eu vos dou graças,\nporque ouvistes as palavras dos meus lábios.\nPerante os vossos anjos vou cantar-vos\ne ante o vosso templo vou prostrar-me."
    },
    segundaLeitura: {
      referencia: "Rm 11,33-36",
      texto: "Ó profundidade da riqueza, da sabedoria e da ciência de Deus!\nComo são insondáveis os seus juízos e impenetráveis os seus caminhos!\nDe fato, quem conheceu o pensamento do Senhor? Ou quem foi seu conselheiro?\nOu quem primeiro lhe deu alguma coisa, de maneira a ter direito a um pagamento?\nNa verdade, tudo é dele, por ele e para ele. A ele a glória para sempre. Amém."
    },
    evangelho: {
      referencia: "Mt 16,13-20",
      texto: "Jesus foi à região de Cesareia de Filipe e ali perguntou aos seus discípulos: «Quem dizem os homens ser o Filho do Homem?»\nEles responderam: «Alguns dizem que é João Batista; outros, que é Elias; outros ainda, que é Jeremias ou algum dos profetas.»\nEntão Jesus lhes perguntou: «E vós, quem dizeis que eu sou?»\nSimão Pedro respondeu: «Tu és o Cristo, o Filho do Deus vivo.»\nJesus então declarou: «Feliz és tu, Simão, filho de Jonas, porque não foi a carne nem o sangue que te revelaram isso, mas o meu Pai que está nos céus.\nPor isso eu te digo que tu és Pedro, e sobre esta pedra construirei a minha Igreja, e as portas do inferno nunca prevalecerão contra ela.\nEu te darei as chaves do Reino dos Céus: tudo o que ligares na terra será ligado nos céus, e tudo o que desligares na terra será desligado nos céus.»\nJesus, então, ordenou aos discípulos que não dissessem a ninguém que ele era o Cristo."
    },
    reflexao: "A fé da Igreja nasce da confissão de Pedro: Tu és o Cristo. Sobre esta pedra, o Senhor continua a edificar o seu povo.",
    oracao: "Ó Deus, que unis os corações dos fiéis num só desejo, dai ao vosso povo amar o que ordenais e esperar o que prometeis, para que, no meio das mudanças deste mundo, sejam fixos os nossos corações onde se encontram as verdadeiras alegrias."
  },
  {
    data: "2026-08-24",
    diaSemana: "Segunda-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Vermelho",
    santoDoDia: "São Bartolomeu",
    celebracao: "Festa de São Bartolomeu, apóstolo",
    primeiraLeitura: {
      referencia: "Ap 21,9b-14",
      texto: "O anjo falou comigo: «Vem, vou mostrar-te a noiva, a esposa do Cordeiro.»\nLevou-me em espírito a uma montanha grande e alta. Mostrou-me a cidade santa, Jerusalém, que descia do céu, de junto de Deus, brilhando com a glória de Deus.\nA muralha da cidade tinha doze fundamentos, e neles os doze nomes dos doze apóstolos do Cordeiro."
    },
    salmo: {
      referencia: "Sl 144 (145)",
      resposta: "Vossos amigos anunciam, ó Senhor, a glória do vosso reinado.",
      texto: "Que vossas obras, ó Senhor, vos glorifiquem,\ne os vossos santos com louvores vos bendigam!\nNarrem a glória e o esplendor do vosso reino\ne saibam proclamar vosso poder."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Jo 1,45-51",
      texto: "Filipe encontrou-se com Natanael e lhe disse: «Encontramos aquele de quem escreveram Moisés, na Lei, e os profetas: Jesus de Nazaré, o filho de José.»\nNatanael disse: «De Nazaré pode sair algo de bom?» Filipe respondeu: «Vem ver.»\nJesus viu Natanael que vinha ao seu encontro e comentou: «Aí vem um israelita de verdade, um homem sem falsidade.»\nNatanael perguntou: «De onde me conheces?» Jesus respondeu: «Antes que Filipe te chamasse, enquanto estavas debaixo da figueira, eu te vi.»\nNatanael exclamou: «Rabi, tu és o Filho de Deus, tu és o Rei de Israel.»\nJesus disse: «Estás crendo porque te disse que te vi debaixo da figueira? Verás coisas maiores do que esta.»"
    },
    reflexao: "Bartolomeu (Natanael) passa da dúvida ao reconhecimento. O encontro com Jesus desfaz o preconceito.",
    oracao: "Fortalecei em nós, Senhor, a fé que o apóstolo São Bartolomeu confessou, e fazei que a Igreja seja para o mundo sacramento da vossa salvação."
  },
  {
    data: "2026-08-27",
    diaSemana: "Quinta-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Branco",
    santoDoDia: "Santa Mônica",
    celebracao: "Memória de Santa Mônica",
    primeiraLeitura: {
      referencia: "Eclo 26,1-4.13-16",
      texto: "Feliz o marido de uma mulher virtuosa: o número de seus dias será dobrado.\nA mulher forte é a alegria do seu marido, e ele viverá em paz todos os seus anos.\nA mulher de bem é uma sorte excelente: será dada àqueles que temem o Senhor."
    },
    salmo: {
      referencia: "Sl 130 (131)",
      resposta: "Guarda a minha alma na paz, junto de vós, Senhor.",
      texto: "Senhor, meu coração não se encheu de orgulho,\nnem se elevou no íntimo o meu olhar.\nNão fui atrás de grandezas, nem de coisas superiores a mim."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Lc 7,11-17",
      texto: "Jesus dirigiu-se a uma cidade chamada Naim. Ao se aproximar da porta da cidade, eis que levavam um defunto para fora, filho único de uma viúva.\nAo vê-la, o Senhor encheu-se de compaixão e disse: «Não chores.»\nAproximou-se, tocou no caixão, e os que o carregavam pararam. Jesus disse: «Jovem, eu te ordeno, levanta-te.»\nO morto sentou-se e começou a falar. E Jesus o entregou à sua mãe."
    },
    reflexao: "Mônica chorou e orou por anos. O Senhor devolveu-lhe o filho — não só à vida, mas à fé.",
    oracao: "Ó Deus, consolação dos que choram, que acolhestes com misericórdia as lágrimas de Santa Mônica pela conversão de seu filho Agostinho, concedei-nos, por intercessão de ambos, chorar os nossos pecados e alcançar a vossa graça."
  },
  {
    data: "2026-08-28",
    diaSemana: "Sexta-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Branco",
    santoDoDia: "Santo Agostinho",
    celebracao: "Memória de Santo Agostinho, bispo e doutor da Igreja",
    primeiraLeitura: {
      referencia: "1Jo 4,7-16",
      texto: "Caríssimos, amemo-nos uns aos outros, pois o amor vem de Deus, e todo aquele que ama nasceu de Deus e conhece a Deus.\nQuem não ama não conheceu a Deus, porque Deus é amor.\nNisto se manifestou o amor de Deus por nós: Deus enviou o seu Filho único ao mundo, para que tenhamos a vida por meio dele.\nNisto consiste o amor: não fomos nós que amamos a Deus, mas foi ele que nos amou e enviou o seu Filho como vítima de expiação pelos nossos pecados."
    },
    salmo: {
      referencia: "Sl 118 (119)",
      resposta: "Senhor, vossa palavra é lâmpada para os meus passos.",
      texto: "Como é doce ao paladar a vossa promessa,\nmais doce do que o mel à minha boca.\nVossa palavra é lâmpada para os meus passos,\ne luz para o meu caminho."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Mt 23,8-12",
      texto: "Naquele tempo, disse Jesus aos seus discípulos:\n«Vós não vos façais chamar de 'rabis', pois um só é o vosso Mestre, e todos vós sois irmãos.\nNa terra, não chameis a ninguém 'pai', pois um só é o vosso Pai, aquele que está nos céus.\nNão deixeis que vos chamem 'guias', pois um só é o vosso Guia, Cristo.\nPelo contrário, o maior dentre vós deve ser aquele que vos serve.\nQuem se exaltar será humilhado, e quem se humilhar será exaltado.»"
    },
    reflexao: "«Fizeste-nos para vós, Senhor, e o nosso coração anda inquieto enquanto não descansar em vós.» Agostinho ensina que a verdade se faz caridade.",
    oracao: "Renovai, Senhor, na vossa Igreja o espírito que destes a Santo Agostinho, bispo, para que, sedentos da verdadeira sabedoria, sejamos os seus discípulos como ele o foi do Cristo."
  },
  {
    data: "2026-08-29",
    diaSemana: "Sábado",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Vermelho",
    santoDoDia: "São João Batista",
    celebracao: "Memória do Martírio de São João Batista",
    primeiraLeitura: {
      referencia: "Jr 1,17-19",
      texto: "Cinge os teus rins, põe-te de pé e comunica-lhes tudo o que eu te mandar. Não tenhas medo diante deles; do contrário, sou eu que te farei tremer na presença deles.\nEu te transformo hoje numa cidade fortificada, numa coluna de ferro, num muro de bronze diante de todo este país.\nEles combaterão contra ti, mas não te vencerão, porque eu estou contigo para te livrar — oráculo do Senhor."
    },
    salmo: {
      referencia: "Sl 70 (71)",
      resposta: "Minha boca anunciará vossa justiça.",
      texto: "Eu me refugio em vós, Senhor, que eu não seja confundido para sempre.\nPela vossa justiça, defendei-me e libertai-me."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Mc 6,17-29",
      texto: "Herodes tinha mandado prender João e acorrentá-lo no cárcere, por causa de Herodíades, mulher de seu irmão Filipe, com quem se tinha casado.\nJoão dizia a Herodes: «Não te é permitido ficar com a mulher do teu irmão.»\nPor isso Herodíades o odiava e queria matá-lo, mas não podia. Herodes tinha medo de João, pois sabia que ele era justo e santo, e o protegia.\nChegou um dia oportuno, quando Herodes, no seu aniversário, ofereceu um banquete. A filha de Herodíades entrou e dançou, agradando a Herodes e aos convidados.\nO rei disse à moça: «Pede-me o que quiseres, e eu te darei.»\nEla saiu e perguntou à mãe: «Que vou pedir?» A mãe respondeu: «A cabeça de João Batista.»\nO rei ficou muito triste, mas, por causa do juramento e dos convidados, não quis recusar. Mandou um algoz com a ordem de trazer a cabeça de João. Ele foi, decapitou João no cárcere, trouxe a cabeça numa bandeja e a deu à moça, que a entregou à sua mãe.\nAo saberem disso, os discípulos de João foram lá, levaram o cadáver e o puseram no túmulo."
    },
    reflexao: "João morre pela verdade. A voz que gritava no deserto não se cala: preparai o caminho do Senhor.",
    oracao: "Ó Deus, que quisestes que São João Batista fosse o precursor do vosso Filho no nascimento e na morte, concedei que, como ele deu a vida pela justiça e a verdade, também nós lutemos com coragem pela confissão do vosso nome."
  },
  {
    data: "2026-08-30",
    diaSemana: "Domingo",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Verde",
    santoDoDia: "",
    celebracao: "22º Domingo do Tempo Comum",
    primeiraLeitura: {
      referencia: "Jr 20,7-9",
      texto: "Seduziste-me, Senhor, e eu me deixei seduzir; foste mais forte do que eu e prevaleceste.\nSirvo de irrisão o dia inteiro, todos zombam de mim.\nCada vez que falo, tenho de gritar, tenho de proclamar: «Violência e ruína!»\nA palavra do Senhor tornou-se para mim fonte de vergonha e de troça o dia inteiro.\nEu disse comigo: «Não pensarei mais nele, não falarei mais em seu nome.»\nMas havia no meu coração como que fogo ardente, fechado nos meus ossos. Estou esgotado de contê-lo e não posso mais."
    },
    salmo: {
      referencia: "Sl 62 (63)",
      resposta: "Minha alma tem sede de vós, ó meu Deus!",
      texto: "Sois vós, ó Senhor, o meu Deus, desde a aurora ansioso vos busco!\nA minh'alma tem sede de vós, minha carne também vos deseja,\ncomo terra sedenta e sem água."
    },
    segundaLeitura: {
      referencia: "Rm 12,1-2",
      texto: "Irmãos:\nPela misericórdia de Deus, eu vos exorto, irmãos, a vos oferecerdes em sacrifício vivo, santo e agradável a Deus: este é o vosso culto espiritual.\nNão vos conformeis com este mundo, mas transformai-vos, renovando vossa maneira de pensar e de julgar, para que possais distinguir o que é da vontade de Deus, a saber, o que é bom, o que lhe agrada, o que é perfeito."
    },
    evangelho: {
      referencia: "Mt 16,21-27",
      texto: "Desde então, Jesus começou a mostrar aos seus discípulos que era necessário ele ir a Jerusalém, sofrer muito da parte dos anciãos, dos chefes dos sacerdotes e dos escribas, ser morto e ressuscitar no terceiro dia.\nPedro tomou Jesus à parte e começou a repreendê-lo, dizendo: «Deus não permita tal coisa, Senhor! Que isso nunca te aconteça!»\nJesus, porém, voltou-se para Pedro e disse: «Vai para longe de mim, Satanás! Tu és para mim uma pedra de tropeço, porque não pensas as coisas de Deus, mas sim as coisas dos homens!»\nEntão Jesus disse aos discípulos: «Se alguém quer me seguir, renuncie a si mesmo, tome a sua cruz e me siga.\nPois quem quiser salvar a sua vida vai perdê-la; e quem perder a sua vida por causa de mim vai encontrá-la.\nDe fato, que adianta ao homem ganhar o mundo inteiro, mas perder a sua vida? O que poderá alguém dar em troca de sua vida?\nPorque o Filho do Homem virá na glória do seu Pai, com os seus anjos, e então retribuirá a cada um de acordo com a sua conduta.»"
    },
    reflexao: "Seguir Cristo é abraçar a cruz, não fugir dela. A vida se encontra quando é doada.",
    oracao: "Deus do universo, fonte de tudo o que é bom, infundi em nossos corações o amor do vosso nome e, ao tornardes mais sincera a nossa religião, aprofundai em nós o gosto do bem."
  },
  {
    data: "2026-07-26",
    diaSemana: "Domingo",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Verde",
    santoDoDia: "Santos Joaquim e Ana",
    celebracao: "17º Domingo do Tempo Comum",
    primeiraLeitura: {
      referencia: "1Rs 3,5.7-12",
      texto: "Em Gabaon, o Senhor apareceu a Salomão em sonho, durante a noite, e lhe disse: «Pede-me o que queres que eu te dê.»\nSalomão respondeu: «Senhor, meu Deus, destes a realeza a vosso servo em lugar de Davi, meu pai. Mas eu não passo de um adolescente e não sei governar.\nDai, pois, ao vosso servo um coração sábio, capaz de governar o vosso povo e de discernir entre o bem e o mal.»\nAgradou ao Senhor que Salomão tivesse feito esse pedido. E Deus lhe disse: «Dou-te um coração sábio e inteligente, como nunca houve antes de ti e nunca haverá depois de ti.»"
    },
    salmo: {
      referencia: "Sl 118 (119)",
      resposta: "Como eu amo, Senhor, a vossa lei!",
      texto: "A lei de vossa boca, para mim, vale mais do que milhares de peças de ouro e prata.\nComo é suave ao paladar a vossa promessa, mais doce do que o mel à minha boca."
    },
    segundaLeitura: {
      referencia: "Rm 8,28-30",
      texto: "Irmãos: Sabemos que tudo contribui para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu desígnio."
    },
    evangelho: {
      referencia: "Mt 13,44-52",
      texto: "O Reino dos Céus é como um tesouro escondido no campo. Um homem o encontra, esconde-o de novo e, cheio de alegria, vai, vende todos os seus bens e compra aquele campo.\nO Reino dos Céus é também como um comprador que procura pérolas preciosas. Ao encontrar uma de grande valor, ele vai, vende todos os bens e compra aquela pérola."
    },
    reflexao: "O Reino vale o tudo. Joaquim e Ana nos ensinam a transmitir a fé como o tesouro da família.",
    oracao: "Ó Deus, protetor dos que em vós esperam, dai-nos um coração sábio para escolher o tesouro que não passa."
  },
  {
    data: "2026-07-31",
    diaSemana: "Sexta-feira",
    tempoLiturgico: "Tempo Comum",
    corLiturgica: "Branco",
    santoDoDia: "Santo Inácio de Loyola",
    celebracao: "Memória de Santo Inácio de Loyola, presbítero",
    primeiraLeitura: {
      referencia: "1Cor 10,31–11,1",
      texto: "Irmãos: Quer comais, quer bebais, quer façais qualquer outra coisa, fazei tudo para a glória de Deus.\nNão vos torneis ocasião de tropeço nem para judeus, nem para gregos, nem para a Igreja de Deus.\nSede meus imitadores, como eu o sou de Cristo."
    },
    salmo: {
      referencia: "Sl 33 (34)",
      resposta: "Bendirei o Senhor Deus em todo o tempo.",
      texto: "Bendirei o Senhor Deus em todo o tempo, seu louvor estará sempre em minha boca."
    },
    segundaLeitura: null,
    evangelho: {
      referencia: "Lc 14,25-33",
      texto: "Grandes multidões acompanhavam Jesus. Voltando-se, ele lhes disse: «Se alguém vem a mim, mas não me prefere a seu pai e sua mãe, sua mulher e seus filhos, seus irmãos e suas irmãs, e até à sua própria vida, não pode ser meu discípulo.\nQuem não carrega sua cruz e não caminha atrás de mim não pode ser meu discípulo.»"
    },
    reflexao: "Ad maiorem Dei gloriam. Inácio ensina a ordenar os afetos para escolher o que mais conduz a Deus.",
    oracao: "Ó Deus, que suscitastes Santo Inácio para dilatar a glória do vosso nome, concedei que, combatendo na terra a seu exemplo, mereçamos ser coroados com ele no céu."
  }
];

/* ============================================================
   BANCO DE DADOS — NOVIDADES
   ============================================================ */
const novidades = [
  {
    id: 1,
    data: "07 AGO, 2026",
    dataIso: "2026-08-07",
    titulo: "Repertório já disponível para o 21º Domingo do Tempo Comum",
    descricao: "O repertório completo para a Santa Missa já está disponível.",
    categoria: "Repertório",
    imagem: IMG.hinario,
    texto: "O repertório sugerido para o 21º Domingo do Tempo Comum (23 de agosto de 2026) já está disponível na plataforma CANTOS.\n\nAs leituras deste domingo giram em torno da confissão de Pedro em Cesareia de Filipe: «Tu és o Cristo, o Filho do Deus vivo.» É um domingo privilegiado para cantos que proclamam a fé da Igreja e a pedra sobre a qual Cristo edifica o seu povo.\n\nSugerimos:\n• Entrada: Laudate Dominum ou Asperges Me\n• Ato penitencial: Kyrie Eleison\n• Glória: Gloria in Excelsis Deo\n• Aclamação: Aleluia Gregoriano\n• Ofertório: Ubi Caritas\n• Santo e Cordeiro: Missa de Angelis\n• Comunhão: Panis Angelicus ou Ave Verum Corpus\n• Final: Te Deum Laudamus\n\nVocê pode ouvir cada canto com o player do YouTube, favoritar e montar a sua própria Missa na área Minha Missa.\n\nQue este repertório ajude coros, salmistas e equipes de liturgia a preparar com cuidado a celebração."
  },
  {
    id: 2,
    data: "31 JUL, 2026",
    dataIso: "2026-07-31",
    titulo: "Repertório da Solenidade da Assunção",
    descricao: "Confira os cantos escolhidos para esta celebração.",
    categoria: "Solenidade",
    imagem: IMG.maria,
    texto: "No dia 15 de agosto a Igreja celebra a Solenidade da Assunção de Nossa Senhora — Maria elevada ao céu em corpo e alma.\n\nA cor litúrgica é o branco. O Evangelho é o Magnificat, o cântico da alegria dos humildes.\n\nRepertório sugerido:\n• Entrada: Ave Maris Stella\n• Salmo: À vossa direita se encontra a rainha\n• Ofertório: Ave Maria\n• Comunhão: Ave Verum Corpus\n• Final: Salve Regina\n\nTodos os cantos podem ser ouvidos nesta plataforma, sem sair do CANTOS. Adicione-os à Minha Missa e imprima o repertório da celebração."
  },
  {
    id: 3,
    data: "04 AGO, 2026",
    dataIso: "2026-08-04",
    titulo: "Memória de São João Maria Vianney, padroeiro dos párocos",
    descricao: "Um convite a rezar pelos sacerdotes e preparar a liturgia com simplicidade.",
    categoria: "Santos",
    imagem: IMG.missa,
    texto: "No dia 4 de agosto a Igreja faz memória do Santo Cura d'Ars. João Maria Vianney passou horas no confessionário e viveu da Eucaristia.\n\nÉ um dia oportuno para rezar pelos párocos e para lembrar que a beleza da liturgia não está no espetáculo, mas na fidelidade e no amor.\n\nNa plataforma você encontra a liturgia do dia, cantos eucarísticos e as Orações Eucarísticas para estudo e impressão."
  },
  {
    id: 4,
    data: "28 JUL, 2026",
    dataIso: "2026-07-28",
    titulo: "Como montar o repertório da sua comunidade",
    descricao: "Um guia simples para usar a área Minha Missa com o coro paroquial.",
    categoria: "Formação",
    imagem: IMG.banco,
    texto: "A área Minha Missa foi pensada para equipes de liturgia e coros.\n\n1. Escolha a data no Calendário ou na Liturgia Diária.\n2. Veja os cantos sugeridos para cada momento.\n3. Ouça o YouTube embed sem sair da plataforma.\n4. Toque em «Adicionar à Minha Missa».\n5. Reordene, remova, imprima ou compartilhe.\n\nTudo fica salvo no seu navegador, sem necessidade de cadastro."
  },
  {
    id: 5,
    data: "20 JUL, 2026",
    dataIso: "2026-07-20",
    titulo: "Orações Eucarísticas para consulta e impressão",
    descricao: "Textos para estudo, celebração e leitura orante.",
    categoria: "Orações",
    imagem: IMG.altar,
    texto: "As quatro Orações Eucarísticas principais do Missal Romano estão disponíveis para visualização, modo de leitura, impressão e download.\n\nLembramos que os textos oficiais em português são de uso litúrgico segundo o Missal Romano aprovado. Utilize esta área como apoio de estudo e preparação, confirmando sempre a edição oficial em vigor na sua diocese."
  },
  {
    id: 6,
    data: "11 AGO, 2026",
    dataIso: "2026-08-11",
    titulo: "Hoje a Igreja faz memória de Santa Clara de Assis",
    descricao: "Virgem, pobre e contemplativa: um coração voltado somente para Cristo.",
    categoria: "Santos",
    imagem: IMG.vitral,
    texto: "Clara de Assis (1193–1253) deixou tudo para seguir o Evangelho com Francisco. Fundou as Irmãs Pobres, as Clarissas, e viveu da Eucaristia e da pobreza.\n\nA liturgia do dia e os cantos sugeridos já estão na plataforma. Vale ouvir o Adoro Te Devote e o Anima Christi em espírito de contemplação."
  },
  {
    id: 7,
    data: "01 AGO, 2026",
    dataIso: "2026-08-01",
    titulo: "Calendário de agosto: festas e solenidades",
    descricao: "Transfiguração, São Lourenço, Santa Clara, Assunção e muito mais.",
    categoria: "Calendário",
    imagem: IMG.catedral,
    texto: "Agosto é um mês denso na liturgia: Transfiguração (6), São Lourenço (10), Santa Clara (11), São Maximiliano Kolbe (14), Assunção (15), Nossa Senhora Rainha (22), São Bartolomeu (24), Santa Mônica (27), Santo Agostinho (28) e o Martírio de João Batista (29).\n\nNavegue pelo calendário, toque no dia e prepare a celebração com leituras, santo e cantos."
  },
  {
    id: 8,
    data: "15 JUL, 2026",
    dataIso: "2026-07-15",
    titulo: "Cantos marianos para o Tempo Comum",
    descricao: "Salve Regina, Ave Maria, Ave Maris Stella e Regina Caeli.",
    categoria: "Repertório",
    imagem: IMG.maria2,
    texto: "Mesmo no Tempo Comum, a Igreja não deixa de cantar Maria. A Salve Regina acompanha o tempo depois de Pentecostes; o Regina Caeli é próprio do Tempo Pascal.\n\nReunimos os principais hinos marianos de domínio público, com player e letra, para uso nos finais de Missa, novenas e celebrações marianas."
  }
];

/* ============================================================
   BANCO DE DADOS — ORAÇÕES EUCARÍSTICAS
   Textos latinos de domínio público, com rubricas em português
   para estudo e preparação. Confirmar o Missal oficial.
   ============================================================ */
const oracoesEucaristicas = [
  {
    id: 1,
    titulo: "Oração Eucarística I",
    subtitulo: "Cânon Romano",
    descricao: "A mais antiga oração eucarística da liturgia romana, de caráter solene.",
    conteudo: "ORAÇÃO EUCARÍSTICA I\nCânon Romano\n\nO sacerdote, de mãos estendidas, diz:\n\nA vós, portanto, Pai clementíssimo, por Jesus Cristo, vosso Filho e nosso Senhor, suplicantes pedimos e rogamos: aceitai e abençoai estes dons, este sacrifício santo e puro, que vos oferecemos especialmente por vossa santa Igreja católica. Dai-lhe a paz, protegei-a, reuni-a e governa-a por toda a terra, em união com o vosso servo o Papa N., com o nosso Bispo N. e com todos aqueles que, fiéis à verdade, guardam a fé católica e apostólica.\n\n Lembrai-vos, Senhor, dos vossos filhos e filhas N. e N. e de todos os que estão aqui, dos quais conheceis a fé e a dedicação. Por eles vos oferecemos e também eles vos oferecem este sacrifício de louvor, a vós, Senhor, a si próprios e a todos os seus, para obterem a redenção das almas, a esperança da salvação e da integridade, e vos prestam as suas homenagens, Deus eterno, vivo e verdadeiro.\n\nEm comunhão com toda a Igreja, celebramos o dia santíssimo [da Ressurreição / da solenidade...] de Nosso Senhor Jesus Cristo. Reverenciamos a memória, em primeiro lugar, da gloriosa sempre Virgem Maria, Mãe do nosso Deus e Senhor Jesus Cristo, e a de São José, seu esposo, e a dos vossos santos Apóstolos e Mártires Pedro e Paulo, André, Tiago, João, Tomé, Tiago, Filipe, Bartolomeu, Mateus, Simão e Tadeu; Lino, Cleto, Clemente, Sisto, Cornélio, Cipriano, Lourenço, Crisógono, João e Paulo, Cosme e Damião, e de todos os vossos Santos. Por seus méritos e preces, concedei-nos em tudo a vossa proteção. Por Cristo Senhor nosso. Amém.\n\nAceitai, ó Pai, com bondade, esta oferenda dos vossos servos e de toda a vossa família; dai-nos a paz em nossos dias e livrai-nos da condenação eterna, de modo que sejamos contados entre os vossos eleitos. Por Cristo Senhor nosso. Amém.\n\nNós vos pedimos, ó Deus, que esta oferenda seja levada à vossa presença e se torne para nós o Corpo e o Sangue de vosso Filho muito amado, o Senhor nosso Jesus Cristo.\n\nNa véspera de sua paixão, ele tomou o pão em suas santas e veneráveis mãos, e, elevando os olhos ao céu, a vós, ó Deus, seu Pai todo-poderoso, dando-vos graças, o abençoou, partiu e o deu a seus discípulos, dizendo:\n\nTOMAI, TODOS, E COMEI:\nISTO É O MEU CORPO,\nQUE SERÁ ENTREGUE POR VÓS.\n\nDo mesmo modo, ao fim da ceia, ele tomou este cálice precioso em suas santas e veneráveis mãos, e, de novo dando-vos graças, o abençoou e o deu a seus discípulos, dizendo:\n\nTOMAI, TODOS, E BEBEI:\nESTE É O CÁLICE DO MEU SANGUE,\nO SANGUE DA NOVA E ETERNA ALIANÇA,\nQUE SERÁ DERRAMADO POR VÓS E POR TODOS\nPARA REMISSÃO DOS PECADOS.\nFAZEI ISTO EM MEMÓRIA DE MIM.\n\nEis o mistério da fé.\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\n\nCelebrando, pois, ó Pai, a memória do vosso Filho, da sua paixão que nos salva, da sua gloriosa ressurreição e da sua ascensão ao céu, e esperando a sua vinda, nós, vossos ministros e vosso povo santo, vos oferecemos o pão da vida e o cálice da salvação.\n\nDignai-vos olhar para estas oferendas com olhos serenos e bondosos, e aceitá-las como aceitastes os dons do justo Abel, o sacrifício de Abraão, nosso pai na fé, e a oblação pura e santa de Melquisedeque.\n\nSuplicantes, vos pedimos, ó Deus todo-poderoso, que esta oferenda seja levada à presença da vossa majestade pelas mãos do vosso santo Anjo, a fim de que, recebendo o Corpo e o Sangue do vosso Filho, sejamos repletos de todas as bênçãos do céu. Por Cristo Senhor nosso. Amém.\n\nLembrai-vos também, Senhor, dos vossos filhos e filhas N. e N., que nos precederam com o sinal da fé e dormem agora o sono da paz. A eles, Senhor, e a todos os que descansam em Cristo, concedei o lugar do reconforto, da luz e da paz. Por Cristo Senhor nosso. Amém.\n\nE a nós, pecadores, que confiamos na vossa infinita misericórdia, dignai-vos admitir à sociedade dos vossos santos Apóstolos e Mártires João Batista, Estêvão, Matias, Barnabé, Inácio, Alexandre, Marcelino, Pedro, Felicidade, Perpétua, Águeda, Lúcia, Inês, Cecília, Anastácia e de todos os vossos Santos. Por Cristo, nosso Senhor, por quem continuamente criais todos estes bens, os santificais, os vivificais, os abençoais e no-los dais.\n\nPor Cristo, com Cristo, em Cristo,\na vós, Deus Pai todo-poderoso,\nna unidade do Espírito Santo,\ntoda a honra e toda a glória,\nagora e para sempre.\nAmém."
  },
  {
    id: 2,
    titulo: "Oração Eucarística II",
    subtitulo: "Da Tradição Apostólica",
    descricao: "A mais breve, adequada ao cotidiano e às missas da semana.",
    conteudo: "ORAÇÃO EUCARÍSTICA II\n\nNa verdade, ó Pai, vós sois santo e fonte de toda santidade.\n\nSantificai, pois, estas oferendas, derramando sobre elas o vosso Espírito, a fim de que se tornem para nós o Corpo e o Sangue de Jesus Cristo, vosso Filho e Senhor nosso.\n\nEstando para ser entregue e abraçando livremente a paixão, ele tomou o pão, deu graças e o partiu e deu a seus discípulos, dizendo:\n\nTOMAI, TODOS, E COMEI:\nISTO É O MEU CORPO,\nQUE SERÁ ENTREGUE POR VÓS.\n\nDo mesmo modo, ao fim da ceia, ele tomou o cálice em suas mãos, deu graças novamente e o deu a seus discípulos, dizendo:\n\nTOMAI, TODOS, E BEBEI:\nESTE É O CÁLICE DO MEU SANGUE,\nO SANGUE DA NOVA E ETERNA ALIANÇA,\nQUE SERÁ DERRAMADO POR VÓS E POR TODOS\nPARA REMISSÃO DOS PECADOS.\nFAZEI ISTO EM MEMÓRIA DE MIM.\n\nEis o mistério da fé.\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\n\nCelebrando, pois, a memória da morte e ressurreição do vosso Filho, nós vos oferecemos, ó Pai, o pão da vida e o cálice da salvação, e vos agradecemos porque nos tornastes dignos de estar aqui na vossa presença e vos servir.\n\nE nós vos suplicamos que, participando do Corpo e Sangue de Cristo, sejamos reunidos pelo Espírito Santo num só corpo.\n\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro: que ela cresça na caridade, com o Papa N., com o nosso Bispo N. e todos os ministros do vosso povo.\n\nLembrai-vos também dos nossos irmãos e irmãs que morreram na esperança da ressurreição e de todos os que partiram desta vida: acolhei-os junto a vós na luz da vossa face.\n\nEnfim, nós vos pedimos, tende piedade de todos nós e dai-nos participar da vida eterna, com a Virgem Maria, Mãe de Deus, São José, seu esposo, os santos Apóstolos e todos os que neste mundo viveram na vossa amizade, a fim de vos louvarmos e glorificarmos por Jesus Cristo, vosso Filho.\n\nPor Cristo, com Cristo, em Cristo,\na vós, Deus Pai todo-poderoso,\nna unidade do Espírito Santo,\ntoda a honra e toda a glória,\nagora e para sempre.\nAmém."
  },
  {
    id: 3,
    titulo: "Oração Eucarística III",
    subtitulo: "",
    descricao: "De caráter universal, especialmente adequada aos domingos e festas.",
    conteudo: "ORAÇÃO EUCARÍSTICA III\n\nNa verdade, vós sois santo, ó Deus do universo, e tudo o que criastes proclama o vosso louvor, porque, por Jesus Cristo, vosso Filho e Senhor nosso, e pela força do Espírito Santo, dais vida e santidade a todas as coisas e não cessais de reunir o vosso povo, para que vos ofereça em toda parte, do nascer ao pôr do sol, um sacrifício perfeito.\n\nPor isso, nós vos suplicamos, santificai pelo Espírito Santo as oferendas que vos apresentamos para serem consagradas, a fim de que se tornem o Corpo e o Sangue de Jesus Cristo, vosso Filho e Senhor nosso, que nos mandou celebrar estes mistérios.\n\nNa noite em que ia ser entregue, ele tomou o pão, elevou os olhos a vós, ó Pai, deu graças, partiu o pão e o deu a seus discípulos, dizendo:\n\nTOMAI, TODOS, E COMEI:\nISTO É O MEU CORPO,\nQUE SERÁ ENTREGUE POR VÓS.\n\nDo mesmo modo, ele tomou o cálice em suas mãos, deu-vos graças e o entregou a seus discípulos, dizendo:\n\nTOMAI, TODOS, E BEBEI:\nESTE É O CÁLICE DO MEU SANGUE,\nO SANGUE DA NOVA E ETERNA ALIANÇA,\nQUE SERÁ DERRAMADO POR VÓS E POR TODOS\nPARA REMISSÃO DOS PECADOS.\nFAZEI ISTO EM MEMÓRIA DE MIM.\n\nEis o mistério da fé.\nTodas as vezes que comemos deste pão e bebemos deste cálice, anunciamos, Senhor, a vossa morte, enquanto esperamos a vossa vinda.\n\nCelebrando agora, ó Pai, a memória do vosso Filho, da sua paixão salvadora, da sua ressurreição dos mortos e da sua ascensão à vossa direita, enquanto esperamos a sua vinda gloriosa, nós vos oferecemos em ação de graças este sacrifício vivo e santo.\n\nOlhai com bondade a oferenda da vossa Igreja e reconhecei o sacrifício que nos reconcilia convosco. Concedei que, alimentando-nos com o Corpo e o Sangue do vosso Filho, sejamos repletos do Espírito Santo e nos tornemos em Cristo um só corpo e um só espírito.\n\nQue o Espírito Santo faça de nós uma oferenda permanente, a fim de alcançarmos a herança eterna, com os vossos eleitos: a bem-aventurada Virgem Maria, Mãe de Deus, São José, seu esposo, os vossos santos Apóstolos e gloriosos Mártires, São N. e todos os Santos, em cuja companhia esperamos gozar eternamente a vossa glória, por Cristo Senhor nosso, por quem dais ao mundo todo bem e toda graça.\n\nLembrai-vos, ó Pai, da vossa Igreja que se faz presente pelo mundo inteiro: com o Papa N., o nosso Bispo N., os demais Bispos, os sacerdotes, os diáconos e o povo da nova aliança.\n\nLembrai-vos também dos nossos irmãos e irmãs que adormeceram na esperança da ressurreição e de todos os que partiram desta vida na vossa misericórdia. Acolhei-os junto a vós na luz da vossa face.\n\nPor Cristo, com Cristo, em Cristo,\na vós, Deus Pai todo-poderoso,\nna unidade do Espírito Santo,\ntoda a honra e toda a glória,\nagora e para sempre.\nAmém."
  },
  {
    id: 4,
    titulo: "Oração Eucarística IV",
    subtitulo: "",
    descricao: "Narração ampla da história da salvação. Indicada quando não há prefácio próprio.",
    conteudo: "ORAÇÃO EUCARÍSTICA IV\n\nNós proclamamos vossa grandeza, Pai santo, e a sabedoria do vosso desígnio sobre o mundo: criastes o homem à vossa imagem e lhe confiastes o universo, para que, servindo a vós, seu Criador, exercesse o domínio sobre toda criatura.\n\nE quando pela desobediência perdeu a vossa amizade, não o abandonastes ao poder da morte, mas a todos socorrestes com misericórdia, para que, ao procurar-vos, vos encontrassem.\n\nMuitas vezes oferecestes aliança aos homens e os instruístes pelos profetas na esperança da salvação.\n\nE de tal modo, Pai santo, amastes o mundo que, chegada a plenitude dos tempos, nos enviastes vosso próprio Filho para ser o nosso Salvador.\n\nFeito homem por obra do Espírito Santo e nascido da Virgem Maria, compartilhou em tudo a nossa condição humana, menos o pecado.\n\nAos pobres anunciou o Evangelho da salvação, aos cativos, a libertação, e aos aflitos, a alegria.\n\nPara cumprir o vosso desígnio, ele mesmo se entregou à morte e, ressuscitando, destruiu a morte e renovou a vida.\n\nE, a fim de não mais vivermos para nós, mas para ele, que por nós morreu e ressuscitou, enviou, Pai, o Espírito Santo como primícias para os que creem, a fim de santificar todas as coisas, levando à plenitude a sua obra no mundo.\n\nPor isso, nós vos pedimos, ó Pai, que o mesmo Espírito Santo santifique estas oferendas, a fim de que se tornem o Corpo e o Sangue de nosso Senhor Jesus Cristo, para celebrarmos este grande mistério que ele nos deixou em sinal de eterna aliança.\n\nQuando, pois, chegou a hora de ser glorificado por vós, Pai santo, tendo amado os seus que estavam no mundo, amou-os até o fim. Enquanto ceavam, ele tomou o pão, abençoou-o, partiu-o e o deu a seus discípulos, dizendo:\n\nTOMAI, TODOS, E COMEI:\nISTO É O MEU CORPO,\nQUE SERÁ ENTREGUE POR VÓS.\n\nDo mesmo modo, ele tomou o cálice com vinho, deu-vos graças e o deu a seus discípulos, dizendo:\n\nTOMAI, TODOS, E BEBEI:\nESTE É O CÁLICE DO MEU SANGUE,\nO SANGUE DA NOVA E ETERNA ALIANÇA,\nQUE SERÁ DERRAMADO POR VÓS E POR TODOS\nPARA REMISSÃO DOS PECADOS.\nFAZEI ISTO EM MEMÓRIA DE MIM.\n\nEis o mistério da fé.\nSalvador do mundo, salvai-nos, vós que nos libertastes pela cruz e ressurreição.\n\nPor isso, ó Pai, nós também celebramos agora o memorial da nossa redenção: anunciamos a morte de Cristo e sua descida entre os mortos, proclamamos a sua ressurreição e ascensão à vossa direita e, cheios de esperança, aguardamos a sua vinda gloriosa.\n\nE vos oferecemos o seu Corpo e Sangue, sacrifício do vosso agrado e salvação para o mundo inteiro.\n\nOlhai, Senhor, para a vítima que vós mesmos preparastes para a vossa Igreja; e concedei a todos que formos alimentados pelo Corpo e Sangue do vosso Filho, cheios do Espírito Santo, nos tornemos em Cristo um só corpo e um só espírito, e uma oferenda viva para o louvor da vossa glória.\n\nLembrai-vos agora, ó Pai, de todos pelos quais vos oferecemos este sacrifício: do vosso servo o Papa N., do nosso Bispo N., do colégio episcopal e de todo o clero, dos oferentes e do povo que vos cerca, do povo resgatado e sincero, e de todos os que vos procuram de coração sincero.\n\nLembrai-vos também dos que morreram na paz do vosso Cristo e de todos os mortos, cuja fé só vós conhecestes.\n\nE a todos nós, vossos filhos, concedei, ó Pai de bondade, alcançarmos a herança eterna, com a bem-aventurada Virgem Maria, Mãe de Deus, São José, seu esposo, os santos Apóstolos e Santos, e, no vosso reino, com a Virgem Maria, podermos louvar e glorificar a vós, por Jesus Cristo, vosso Filho.\n\nPor Cristo, com Cristo, em Cristo,\na vós, Deus Pai todo-poderoso,\nna unidade do Espírito Santo,\ntoda a honra e toda a glória,\nagora e para sempre.\nAmém."
  },
  {
    id: 5,
    titulo: "Oração Eucarística da Reconciliação I",
    subtitulo: "Deus da aliança e da paz",
    descricao: "Indicada em celebrações penitenciais e no Tempo da Quaresma.",
    conteudo: "ORAÇÃO EUCARÍSTICA DA RECONCILIAÇÃO I\n\nNa verdade, vós sois santo e fonte de toda reconciliação, ó Pai. Por Jesus Cristo, vosso Filho amado, criastes o mundo e o chamastes à existência. Mesmo quando o homem vos desobedeceu e se afastou de vós, não o abandonastes ao poder da morte, mas estendestes a todos a mão, para que o pecador pudesse converter-se e viver.\n\nE a todos oferecestes a aliança da reconciliação, por Jesus Cristo, nosso Redentor e autor da paz.\n\nNós vos pedimos, ó Pai, que o Espírito Santo santifique estas oferendas, a fim de que se tornem o Corpo e o Sangue de Jesus Cristo, vosso Filho e Senhor nosso.\n\nQuando estávamos perdidos e não podíamos ir a vós, vós nos amastes até o fim. Jesus, na noite em que ia ser entregue, tomou o pão, deu graças, o partiu e o deu a seus discípulos, dizendo:\n\nTOMAI, TODOS, E COMEI:\nISTO É O MEU CORPO,\nQUE SERÁ ENTREGUE POR VÓS.\n\nDo mesmo modo, ele tomou o cálice, deu-vos graças e o deu a seus discípulos, dizendo:\n\nTOMAI, TODOS, E BEBEI:\nESTE É O CÁLICE DO MEU SANGUE,\nO SANGUE DA NOVA E ETERNA ALIANÇA,\nQUE SERÁ DERRAMADO POR VÓS E POR TODOS\nPARA REMISSÃO DOS PECADOS.\nFAZEI ISTO EM MEMÓRIA DE MIM.\n\nEis o mistério da fé.\nAnunciamos, Senhor, a vossa morte e proclamamos a vossa ressurreição. Vinde, Senhor Jesus!\n\nCelebrando, pois, a memória do vosso Filho, morto e descido à região dos mortos, ressuscitado e sentado à vossa direita, nós vos oferecemos, ó Pai, este sacrifício vivo e santo, e vos damos graças porque nos tornastes dignos de servir-vos.\n\nOlhai com bondade, ó Deus, aqueles que reunis à mesa do vosso Filho, e concedei que, alimentados pelo seu Corpo e Sangue e cheios do Espírito Santo, sejamos em Cristo um só corpo e um só espírito.\n\nFazei de nós um sinal de unidade e um instrumento da vossa paz no mundo. Que o Espírito Santo nos transforme em oferenda permanente, para que possamos obter a herança com os vossos eleitos, na companhia da Virgem Maria, Mãe de Deus, dos Apóstolos e dos Santos.\n\nPor Cristo, com Cristo, em Cristo,\na vós, Deus Pai todo-poderoso,\nna unidade do Espírito Santo,\ntoda a honra e toda a glória,\nagora e para sempre.\nAmém."
  },
  {
    id: 6,
    titulo: "Prefácio Comum e doxologia",
    subtitulo: "Textos de apoio à celebração",
    descricao: "Prefácio comum e doxologia final, para estudo e preparação.",
    conteudo: "PREFÁCIO COMUM I\nO desígnio da salvação\n\nO Senhor esteja convosco.\nEle está no meio de nós.\nCorações ao alto.\nO nosso coração está em Deus.\nDemos graças ao Senhor, nosso Deus.\nÉ nosso dever e nossa salvação.\n\nNa verdade, é justo e necessário, é nosso dever e salvação dar-vos graças, sempre e em todo lugar, Senhor, Pai santo, Deus eterno e todo-poderoso, por Cristo, Senhor nosso.\n\nPor ele, os anjos celebram vossa majestade, as dominacões o adoram e as potestades o temem. Os céus, as virtudes dos céus e os serafins o adoram, unidos em comum alegria.\n\nPermiti que também as nossas vozes se unam às deles, cantando, cheios de alegria:\n\nSanto, Santo, Santo, Senhor Deus do universo.\nO céu e a terra proclamam a vossa glória.\nHosana nas alturas.\nBendito o que vem em nome do Senhor.\nHosana nas alturas.\n\n—\n\nDOXOLOGIA FINAL\n\nPor Cristo, com Cristo, em Cristo,\na vós, Deus Pai todo-poderoso,\nna unidade do Espírito Santo,\ntoda a honra e toda a glória,\nagora e para sempre.\nAmém."
  }
];

/* ============================================================
   UTILITÁRIOS
   ============================================================ */
function criarYoutubeEmbed(youtubeId, titulo) {
  if (!youtubeId) {
    return `<div class="audio-indisponivel"><i class="fa-solid fa-music"></i><p>Áudio ainda não disponível.</p></div>`;
  }
  return `
    <div class="youtube-wrapper">
      <iframe
        src="https://www.youtube.com/embed/${youtubeId}"
        title="${escapeHtml(titulo || "Canto")}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>`;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function qs(sel, el = document) { return el.querySelector(sel); }
function qsa(sel, el = document) { return [...el.querySelectorAll(sel)]; }
function param(name) { return new URLSearchParams(location.search).get(name); }

function isoHoje() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function parseIso(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function toIso(date) {
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${m}-${d}`;
}

function addDays(iso, n) {
  const d = parseIso(iso);
  d.setDate(d.getDate() + n);
  return toIso(d);
}

function formatarDataLonga(iso) {
  const d = parseIso(iso);
  return `${DIAS_PT[d.getDay()]}, ${d.getDate()} de ${MESES_PT[d.getMonth()]} de ${d.getFullYear()}`;
}

function corVar(cor) {
  const map = {
    Verde: "var(--liturgico-verde)",
    Branco: "var(--liturgico-dourado)",
    Vermelho: "var(--liturgico-vermelho)",
    Roxo: "var(--liturgico-roxo)",
    Rosa: "var(--liturgico-rosa)",
    Preto: "var(--liturgico-preto)",
    Dourado: "var(--liturgico-dourado)"
  };
  return map[cor] || "var(--liturgico-verde)";
}

function getSantoPorData(iso) {
  const md = iso.slice(5);
  return santos.find(s => s.data === md) || null;
}

function getLiturgiaPorData(iso) {
  const encontrada = liturgiaDiaria.find(l => l.data === iso);
  if (encontrada) return encontrada;
  return montarLiturgiaBasica(iso);
}

function montarLiturgiaBasica(iso) {
  const d = parseIso(iso);
  const santo = getSantoPorData(iso);
  const especial = celebracoesMoveis(iso);
  const tempo = inferirTempo(iso);
  const cor = especial?.cor || santo?.cor || (d.getDay() === 0 ? "Verde" : tempo.cor);
  return {
    data: iso,
    diaSemana: DIAS_PT[d.getDay()],
    tempoLiturgico: especial?.tempo || tempo.nome,
    corLiturgica: cor,
    santoDoDia: especial?.santo || santo?.nome || "",
    celebracao: especial?.celebracao || (santo ? `${santo.tipo} de ${santo.nome}` : (d.getDay() === 0 ? "Domingo do Tempo Comum" : tempo.nome)),
    primeiraLeitura: null,
    salmo: null,
    segundaLeitura: null,
    evangelho: null,
    reflexao: santo?.descricao || "Conteúdo ainda não cadastrado.",
    oracao: "",
    incompleta: true
  };
}

function inferirTempo(iso) {
  const [, m, d] = iso.split("-").map(Number);
  if (m === 12 && d >= 25) return { nome: "Natal", cor: "Branco" };
  if (m === 12 && d < 25) return { nome: "Advento", cor: "Roxo" };
  if (m === 1 && d <= 12) return { nome: "Natal", cor: "Branco" };
  return { nome: "Tempo Comum", cor: "Verde" };
}

function celebracoesMoveis(iso) {
  const fixas = {
    "2026-04-05": { celebracao: "Domingo da Páscoa da Ressurreição", cor: "Branco", tempo: "Páscoa", santo: "" },
    "2026-04-03": { celebracao: "Sexta-feira Santa da Paixão do Senhor", cor: "Vermelho", tempo: "Tríduo Pascal", santo: "" },
    "2026-04-02": { celebracao: "Quinta-feira Santa — Ceia do Senhor", cor: "Branco", tempo: "Tríduo Pascal", santo: "" },
    "2026-05-24": { celebracao: "Domingo de Pentecostes", cor: "Vermelho", tempo: "Páscoa", santo: "" },
    "2026-05-31": { celebracao: "Solenidade da Santíssima Trindade", cor: "Branco", tempo: "Tempo Comum", santo: "" },
    "2026-06-04": { celebracao: "Solenidade do Santíssimo Corpo e Sangue de Cristo", cor: "Branco", tempo: "Tempo Comum", santo: "" }
  };
  return fixas[iso] || null;
}

function getCanto(id) { return cantos.find(c => c.id === Number(id)); }
function getNovidade(id) { return novidades.find(n => n.id === Number(id)); }
function getOracao(id) { return oracoesEucaristicas.find(o => o.id === Number(id)); }

function cantosPorMomento(momento, tempo) {
  let lista = cantos.filter(c => c.momentoMissa === momento || c.categoria === momento);
  if (tempo && tempo !== "Tempo Comum") {
    const sazonais = lista.filter(c => c.tempoLiturgico === tempo);
    if (sazonais.length) lista = sazonais;
  }
  if (!lista.length) lista = cantos.filter(c => c.categoria === momento);
  return lista;
}

function sugerirCantos(lit) {
  const tempo = lit.tempoLiturgico || "Tempo Comum";
  const mariana = /senhora|maria|assun|clara|rainha/i.test(lit.celebracao + " " + lit.santoDoDia);
  const momentos = ["Entrada","Salmo","Aclamação","Ofertório","Santo","Cordeiro","Comunhão","Final"];
  const mapa = {};
  momentos.forEach(m => {
    let escolhido = cantosPorMomento(m, tempo)[0];
    if (mariana && (m === "Final" || m === "Entrada")) {
      escolhido = cantos.find(c => c.categoria === "Marianos" && (m === "Final" ? c.id === 12 : c.id === 25)) || escolhido;
    }
    if (m === "Salmo") escolhido = cantos.find(c => c.id === 30) || escolhido;
    mapa[m] = escolhido || null;
  });
  return mapa;
}

/* ---------- LocalStorage ---------- */
const LS = {
  fav: "cantos_favoritos",
  missa: "cantos_minha_missa",
  leitura: "cantos_leitura",
  ultima: "cantos_ultima_data"
};

function lerJSON(chave, padrao) {
  try { return JSON.parse(localStorage.getItem(chave)) ?? padrao; }
  catch { return padrao; }
}
function gravarJSON(chave, valor) { localStorage.setItem(chave, JSON.stringify(valor)); }

function getFavoritos() { return lerJSON(LS.fav, { cantos: [], liturgias: [], oracoes: [], novidades: [] }); }
function setFavoritos(f) { gravarJSON(LS.fav, f); }

function toggleFavorito(tipo, id) {
  const f = getFavoritos();
  if (!f[tipo]) f[tipo] = [];
  const i = f[tipo].indexOf(id);
  if (i >= 0) f[tipo].splice(i, 1);
  else f[tipo].push(id);
  setFavoritos(f);
  toast(i >= 0 ? "Removido dos favoritos" : "Adicionado aos favoritos");
  return i < 0;
}
function ehFavorito(tipo, id) { return (getFavoritos()[tipo] || []).includes(id); }

function getMinhaMissa() {
  return lerJSON(LS.missa, MOMENTOS_MISSA.reduce((a, m) => (a[m] = [], a), {}));
}
function setMinhaMissa(m) { gravarJSON(LS.missa, m); }

function adicionarMinhaMissa(cantoId, momento) {
  const canto = getCanto(cantoId);
  if (!canto) return;
  const slot = momento || canto.momentoMissa || "Outros";
  const missa = getMinhaMissa();
  if (!missa[slot]) missa[slot] = [];
  if (missa[slot].includes(canto.id)) {
    toast("Este canto já está em Minha Missa");
    return;
  }
  missa[slot].push(canto.id);
  setMinhaMissa(missa);
  toast(`Adicionado em ${slot}`);
}

function removerMinhaMissa(slot, id) {
  const missa = getMinhaMissa();
  missa[slot] = (missa[slot] || []).filter(x => x !== id);
  setMinhaMissa(missa);
}

function moverMinhaMissa(slot, id, dir) {
  const missa = getMinhaMissa();
  const arr = missa[slot] || [];
  const i = arr.indexOf(id);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= arr.length) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  setMinhaMissa(missa);
}

function toast(msg) {
  let wrap = qs(".toast-wrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

function compartilhar(titulo, url) {
  const link = url || location.href;
  if (navigator.share) {
    navigator.share({ title: titulo, url: link }).catch(() => {});
  } else {
    navigator.clipboard.writeText(link).then(() => toast("Link copiado"));
  }
}

function baixarTexto(nome, conteudo) {
  const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = nome;
  a.click();
  URL.revokeObjectURL(a.href);
  toast("Download iniciado");
}

/* ============================================================
   HEADER / FOOTER
   ============================================================ */
function paginaAtual() { return document.body.dataset.page || "home"; }

function renderHeader() {
  const el = qs("#site-header");
  if (!el) return;
  const p = paginaAtual();
  const links = [
    { href: "index.html", id: "home", icon: "fa-house", label: "Início" },
    { href: "cantos.html", id: "cantos", icon: "fa-music", label: "Cantos" },
    { href: "liturgia-diaria.html", id: "liturgia", icon: "fa-book-open", label: "Liturgia Diária" },
    { href: "calendario.html", id: "calendario", icon: "fa-calendar-days", label: "Calendário" },
    { href: "oracoes-eucaristicas.html", id: "oracoes", icon: "fa-hands-praying", label: "Orações" },
    { href: "minha-missa.html", id: "missa", icon: "fa-church", label: "Minha Missa" },
    { href: "favoritos.html", id: "favoritos", icon: "fa-heart", label: "Favoritos" }
  ];
  el.innerHTML = `
    <div class="container header-inner">
      <a class="logo" href="index.html" aria-label="CANTOS — início">
        <span class="logo-mark"><i class="fa-solid fa-cross"></i></span>
        <span class="logo-text">CAN<span>TOS</span></span>
      </a>
      <nav class="nav-desktop" aria-label="Principal">
        ${links.map(l => `<a href="${l.href}" class="${p===l.id?"active":""}"><i class="fa-solid ${l.icon}"></i>${l.label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <a class="icon-btn" href="buscar.html" aria-label="Pesquisar"><i class="fa-solid fa-magnifying-glass"></i></a>
        <button class="icon-btn menu-toggle" aria-label="Abrir menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>
    <nav class="nav-mobile" id="nav-mobile">
      ${links.map(l => `<a href="${l.href}" class="${p===l.id?"active":""}"><i class="fa-solid ${l.icon}"></i>${l.label}</a>`).join("")}
      <a href="buscar.html"><i class="fa-solid fa-magnifying-glass"></i>Pesquisar</a>
      <a href="novidades.html"><i class="fa-solid fa-newspaper"></i>Novidades</a>
    </nav>`;
  const btn = qs(".menu-toggle", el);
  const mob = qs("#nav-mobile", el);
  btn?.addEventListener("click", () => {
    const open = mob.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
    btn.innerHTML = `<i class="fa-solid ${open ? "fa-xmark" : "fa-bars"}"></i>`;
  });
  window.addEventListener("scroll", () => {
    el.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });
}

function renderFooter() {
  const el = qs("#site-footer");
  if (!el) return;
  el.innerHTML = `
    <div class="container footer-grid">
      <div>
        <a class="logo" href="index.html">
          <span class="logo-mark"><i class="fa-solid fa-cross"></i></span>
          <span class="logo-text">CAN<span>TOS</span></span>
        </a>
        <p>Uma plataforma para ajudar você a preparar e viver melhor a Santa Missa.</p>
      </div>
      <div class="footer-col">
        <h4>Navegar</h4>
        <a href="index.html">Início</a>
        <a href="cantos.html">Cantos</a>
        <a href="liturgia-diaria.html">Liturgia Diária</a>
        <a href="calendario.html">Calendário</a>
      </div>
      <div class="footer-col">
        <h4>Sua celebração</h4>
        <a href="oracoes-eucaristicas.html">Orações</a>
        <a href="minha-missa.html">Minha Missa</a>
        <a href="favoritos.html">Favoritos</a>
        <a href="novidades.html">Novidades</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 CANTOS — Biblioteca Digital Litúrgica</span>
      <span>Conteúdo de estudo. Confirme sempre o Ordo e o Missal oficiais.</span>
    </div>`;
}

/* ============================================================
   COMPONENTES
   ============================================================ */
function cardCanto(c) {
  const fav = ehFavorito("cantos", c.id);
  return `
    <article class="canto-card" data-aos="fade-up">
      <a href="detalhes-canto.html?id=${c.id}" class="canto-cover" style="background-image:url('${c.imagem}')" aria-label="${escapeHtml(c.titulo)}">
        <span class="canto-cat-badge">${escapeHtml(c.categoria)}</span>
      </a>
      <div class="canto-body">
        <h3><a href="detalhes-canto.html?id=${c.id}">${escapeHtml(c.titulo)}</a></h3>
        <p class="canto-meta">${escapeHtml(c.tempoLiturgico)} · ${escapeHtml(c.autor)}</p>
        <div class="canto-actions">
          <a class="btn btn-navy btn-sm" href="detalhes-canto.html?id=${c.id}"><i class="fa-solid fa-play"></i> Ouvir</a>
          <button class="btn-icon ${fav?"active":""}" data-fav-canto="${c.id}" aria-label="Favoritar"><i class="fa-${fav?"solid":"regular"} fa-heart"></i></button>
          <button class="btn-icon gold" data-add-missa="${c.id}" aria-label="Adicionar à Minha Missa"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </article>`;
}

function cardNovidade(n) {
  return `
    <article class="novidade-card">
      <img src="${n.imagem}" alt="${escapeHtml(n.titulo)}">
      <div class="novidade-body">
        <div class="novidade-meta">
          <span>${n.data}</span>
          <span class="novidade-cat">${escapeHtml(n.categoria)}</span>
        </div>
        <h3>${escapeHtml(n.titulo)}</h3>
        <p>${escapeHtml(n.descricao)}</p>
        <a class="ler-mais" href="novidade.html?id=${n.id}">Ler mais →</a>
      </div>
    </article>`;
}

function bindAcoes(root = document) {
  qsa("[data-fav-canto]", root).forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.favCanto);
      const on = toggleFavorito("cantos", id);
      btn.classList.toggle("active", on);
      btn.innerHTML = `<i class="fa-${on?"solid":"regular"} fa-heart"></i>`;
    });
  });
  qsa("[data-add-missa]", root).forEach(btn => {
    btn.addEventListener("click", () => adicionarMinhaMissa(Number(btn.dataset.addMissa)));
  });
}

function chipCor(cor) {
  return `<span class="chip"><span class="dot" style="background:${corVar(cor)}"></span> Cor litúrgica: ${escapeHtml(cor)}</span>`;
}

/* ============================================================
   PÁGINAS
   ============================================================ */
function renderHome() {
  const root = qs("#page-content");
  if (!root) return;
  const hoje = isoHoje();
  localStorage.setItem(LS.ultima, hoje);
  const lit = getLiturgiaPorData(hoje);
  const d = parseIso(hoje);
  const proximas = [1,2,3,4].map(n => {
    const iso = addDays(hoje, n);
    const L = getLiturgiaPorData(iso);
    const dt = parseIso(iso);
    return { iso, L, dt };
  });
  const destaques = [12, 4, 8, 6, 15, 1];

  root.innerHTML = `
    <section class="hero">
      <div class="hero-bg" style="background-image:url('${IMG.altar}')"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-ornament"></div>
        <h1>Sua Liturgia em um só lugar</h1>
        <p class="lead">Cantos, Liturgia Diária, Calendário Litúrgico e muito mais.</p>
        <div class="hero-actions">
          <a class="btn btn-ouro" href="liturgia-diaria.html?data=${hoje}"><i class="fa-solid fa-book-open"></i> Ver liturgia de hoje</a>
          <a class="btn btn-ghost" href="cantos.html"><i class="fa-solid fa-music"></i> Explorar cantos</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="section-kicker"><i class="fa-solid fa-sun"></i> Hoje</p>
        <h2 class="section-title">Liturgia de hoje</h2>
        <div class="hoje-card" data-aos="fade-up">
          <div class="hoje-visual" style="background-image:url('${IMG.missa}')"></div>
          <div class="hoje-body">
            <p class="hoje-data">${DIAS_PT[d.getDay()]}</p>
            <h3 class="hoje-dia">${d.getDate()} de ${MESES_PT[d.getMonth()]} de ${d.getFullYear()}</h3>
            <div class="meta-row">
              <span class="chip">${escapeHtml(lit.tempoLiturgico)}</span>
              ${chipCor(lit.corLiturgica)}
              <span class="chip">${escapeHtml(lit.celebracao)}</span>
            </div>
            ${lit.santoDoDia ? `<div class="santo-box"><small>Santo do dia</small><strong>${escapeHtml(lit.santoDoDia)}</strong></div>` : ""}
            <div class="hoje-actions">
              <a class="btn btn-navy" href="liturgia-diaria.html?data=${hoje}">Ver liturgia</a>
              <a class="btn btn-outline" href="cantos.html">Ver cantos</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-creme">
      <div class="container">
        <p class="section-kicker"><i class="fa-solid fa-calendar-week"></i> Agenda</p>
        <h2 class="section-title">Próximas celebrações</h2>
        <div class="celeb-grid">
          ${proximas.map(p => `
            <a class="celeb-item" href="liturgia-diaria.html?data=${p.iso}">
              <div class="celeb-date">
                <div class="num">${p.dt.getDate()}</div>
                <div class="mes">${MESES_ABR[p.dt.getMonth()]}</div>
              </div>
              <div class="celeb-info">
                <h3>${DIAS_PT[p.dt.getDay()]}</h3>
                <p>${escapeHtml(p.L.celebracao || p.L.tempoLiturgico)}</p>
              </div>
            </a>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <p class="section-kicker"><i class="fa-solid fa-star"></i> Editorial</p>
        <h2 class="section-title">✨ Últimas novidades</h2>
        <p class="section-sub">Repertórios, solenidades e formação para a sua comunidade.</p>
        <div class="swiper swiper-novidades">
          <div class="swiper-wrapper">
            ${novidades.map(n => `<div class="swiper-slide">${cardNovidade(n)}</div>`).join("")}
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <p style="margin-top:8px"><a class="ler-mais" href="novidades.html">Ver todas as novidades →</a></p>
      </div>
    </section>

    <section class="section section-creme">
      <div class="container">
        <p class="section-kicker"><i class="fa-solid fa-music"></i> Ouça agora</p>
        <h2 class="section-title">Cantos em destaque</h2>
        <div class="cantos-grid">
          ${destaques.map(id => getCanto(id)).filter(Boolean).map(cardCanto).join("")}
        </div>
        <p style="margin-top:22px"><a class="btn btn-outline" href="cantos.html">Ver todos os cantos</a></p>
      </div>
    </section>

    <section class="section">
      <div class="container destaque-grid">
        <a class="cta-banner" href="calendario.html" style="background-image:url('${IMG.catedral}')">
          <div class="inner">
            <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-calendar-days"></i> Calendário</p>
            <h2>Calendário litúrgico</h2>
            <p>Solenidades, festas, memórias e a cor de cada dia.</p>
          </div>
        </a>
        <a class="cta-banner" href="oracoes-eucaristicas.html" style="background-image:url('${IMG.tabernaculo}')">
          <div class="inner">
            <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-hands-praying"></i> Orações</p>
            <h2>Orações Eucarísticas</h2>
            <p>Consulte, leia e imprima os textos da anáfora.</p>
          </div>
        </a>
        <a class="cta-banner" href="minha-missa.html" style="background-image:url('${IMG.ostensorio}')">
          <div class="inner">
            <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-church"></i> Repertório</p>
            <h2>Minha Missa</h2>
            <p>Monte, ouça e imprima o repertório da celebração.</p>
          </div>
        </a>
      </div>
    </section>`;

  bindAcoes(root);
  if (window.Swiper) {
    new Swiper(".swiper-novidades", {
      slidesPerView: 1,
      spaceBetween: 18,
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: { 720: { slidesPerView: 2 }, 1040: { slidesPerView: 3 } }
    });
  }
}

function renderCantos() {
  const root = qs("#page-content");
  if (!root) return;
  const q0 = param("q") || "";
  const cat0 = param("cat") || "Todos";
  root.innerHTML = `
    <section class="page-hero" style="--hero-img:url('${IMG.orgao}')">
      <div class="container">
        <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-music"></i> Biblioteca</p>
        <h1>Cantos para a Santa Missa</h1>
        <p>Pesquise por nome, momento, tempo litúrgico, autor ou compositor. Ouça sem sair da plataforma.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input id="busca-cantos" type="search" placeholder="Buscar canto, autor, tom..." value="${escapeHtml(q0)}" aria-label="Pesquisar cantos">
        </div>
        <div class="filtros" id="filtros-cat">
          <button class="filtro-btn ${cat0==="Todos"?"active":""}" data-cat="Todos">Todos</button>
          ${CATEGORIAS_CANTOS.map(c => `<button class="filtro-btn ${cat0===c?"active":""}" data-cat="${c}">${c}</button>`).join("")}
        </div>
        <p id="cantos-count" style="color:var(--cinza);margin-bottom:16px"></p>
        <div class="cantos-grid" id="lista-cantos"></div>
      </div>
    </section>`;

  const input = qs("#busca-cantos");
  let cat = cat0;
  const pintar = () => {
    const q = (input.value || "").toLowerCase().trim();
    const lista = cantos.filter(c => {
      const okCat = cat === "Todos" || c.categoria === cat || c.momentoMissa === cat || c.tempoLiturgico === cat;
      const blob = `${c.titulo} ${c.autor} ${c.compositor} ${c.tom} ${c.categoria} ${c.tempoLiturgico} ${c.letra}`.toLowerCase();
      return okCat && (!q || blob.includes(q));
    });
    qs("#cantos-count").textContent = `${lista.length} canto${lista.length===1?"":"s"} encontrado${lista.length===1?"":"s"}`;
    qs("#lista-cantos").innerHTML = lista.length ? lista.map(cardCanto).join("") : `<div class="empty-state"><i class="fa-solid fa-music"></i><p>Nenhum canto encontrado.</p></div>`;
    bindAcoes(qs("#lista-cantos"));
  };
  input.addEventListener("input", pintar);
  qsa("#filtros-cat .filtro-btn").forEach(b => {
    b.addEventListener("click", () => {
      qsa("#filtros-cat .filtro-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      cat = b.dataset.cat;
      pintar();
    });
  });
  pintar();
}

function renderDetalhesCanto() {
  const root = qs("#page-content");
  const c = getCanto(param("id"));
  if (!root) return;
  if (!c) {
    root.innerHTML = `<section class="section"><div class="container empty-state"><p>Canto não encontrado.</p><a class="btn btn-outline" href="cantos.html">Voltar aos cantos</a></div></section>`;
    return;
  }
  const fav = ehFavorito("cantos", c.id);
  root.innerHTML = `
    <section class="section">
      <div class="container">
        <a class="back-link" href="cantos.html"><i class="fa-solid fa-arrow-left"></i> Voltar</a>
        <p class="section-kicker"><i class="fa-solid fa-music"></i> ${escapeHtml(c.categoria)}</p>
        <h1 class="section-title">${escapeHtml(c.titulo)}</h1>
        <div class="meta-row">
          <span class="chip">${escapeHtml(c.tempoLiturgico)}</span>
          <span class="chip">${escapeHtml(c.momentoMissa)}</span>
          <span class="chip">Tom ${escapeHtml(c.tom)}</span>
        </div>
        <div style="margin:28px 0">${criarYoutubeEmbed(c.youtubeId, c.titulo)}</div>
        <div class="hoje-actions" style="margin-bottom:28px">
          <button class="btn btn-outline" id="btn-fav"><i class="fa-${fav?"solid":"regular"} fa-heart"></i> Favoritar</button>
          <button class="btn btn-navy" id="btn-missa"><i class="fa-solid fa-plus"></i> Adicionar à Minha Missa</button>
          <button class="btn btn-outline" id="btn-share"><i class="fa-solid fa-share-nodes"></i> Compartilhar</button>
        </div>
        <h2 class="section-title" style="font-size:1.6rem">Letra</h2>
        <div class="letra-box">${escapeHtml(c.letra)}</div>
        <div class="info-grid">
          <div class="info-item"><span>Autor</span><strong>${escapeHtml(c.autor)}</strong></div>
          <div class="info-item"><span>Compositor</span><strong>${escapeHtml(c.compositor)}</strong></div>
          <div class="info-item"><span>Tom</span><strong>${escapeHtml(c.tom)}</strong></div>
          <div class="info-item"><span>Momento da Missa</span><strong>${escapeHtml(c.momentoMissa)}</strong></div>
        </div>
      </div>
    </section>`;
  qs("#btn-fav").addEventListener("click", e => {
    const on = toggleFavorito("cantos", c.id);
    e.currentTarget.innerHTML = `<i class="fa-${on?"solid":"regular"} fa-heart"></i> Favoritar`;
  });
  qs("#btn-missa").addEventListener("click", () => adicionarMinhaMissa(c.id));
  qs("#btn-share").addEventListener("click", () => compartilhar(c.titulo));
}

function blocoLeitura(titulo, obj, icone) {
  if (!obj) return `<article class="leitura"><h3><i class="fa-solid ${icone}"></i> ${titulo}</h3><p>Conteúdo ainda não cadastrado.</p></article>`;
  return `<article class="leitura">
    <h3><i class="fa-solid ${icone}"></i> ${titulo}</h3>
    <p class="ref">${escapeHtml(obj.referencia || "")}${obj.resposta ? " — " + escapeHtml(obj.resposta) : ""}</p>
    <p>${escapeHtml(obj.texto)}</p>
  </article>`;
}

function renderLiturgiaDiaria() {
  const root = qs("#page-content");
  if (!root) return;
  let iso = param("data") || localStorage.getItem(LS.ultima) || isoHoje();
  localStorage.setItem(LS.ultima, iso);

  const pintar = (dataIso) => {
    iso = dataIso;
    localStorage.setItem(LS.ultima, iso);
    const lit = getLiturgiaPorData(iso);
    const santo = getSantoPorData(iso);
    const sug = sugerirCantos(lit);
    const d = parseIso(iso);
    history.replaceState({}, "", `liturgia-diaria.html?data=${iso}`);

    root.innerHTML = `
      <section class="page-hero" style="--hero-img:url('${IMG.biblia}')">
        <div class="container">
          <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-book-open"></i> Liturgia Diária</p>
          <h1>${escapeHtml(lit.celebracao || "Liturgia do dia")}</h1>
          <p>${formatarDataLonga(iso)}</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="nav-dias">
            <a class="btn btn-outline btn-sm" href="liturgia-diaria.html?data=${addDays(iso,-1)}"><i class="fa-solid fa-chevron-left"></i> Dia anterior</a>
            <div class="data-central">${d.getDate()} ${MESES_ABR[d.getMonth()]} ${d.getFullYear()}</div>
            <a class="btn btn-outline btn-sm" href="liturgia-diaria.html?data=${addDays(iso,1)}">Dia seguinte <i class="fa-solid fa-chevron-right"></i></a>
          </div>
          <div class="hoje-actions" style="margin-bottom:22px">
            <a class="btn btn-navy btn-sm" href="liturgia-diaria.html?data=${isoHoje()}">Hoje</a>
            <a class="btn btn-outline btn-sm" href="calendario.html?ano=${d.getFullYear()}&mes=${d.getMonth()}">Ver calendário</a>
            <button class="btn btn-outline btn-sm" id="fav-lit"><i class="fa-${ehFavorito("liturgias",iso)?"solid":"regular"} fa-heart"></i> Favoritar</button>
          </div>
          <div class="meta-row">
            <span class="chip">${escapeHtml(lit.diaSemana)}</span>
            <span class="chip">${escapeHtml(lit.tempoLiturgico)}</span>
            ${chipCor(lit.corLiturgica)}
          </div>
          ${lit.santoDoDia ? `<div class="santo-box" style="margin-top:18px"><small>Santo do dia</small><strong>${escapeHtml(lit.santoDoDia)}</strong>${santo ? `<p style="margin-top:6px;color:var(--cinza)">${escapeHtml(santo.descricao)}</p>` : ""}</div>` : ""}
          ${lit.incompleta ? `<p style="margin:16px 0;color:var(--cinza)">Leituras ainda não cadastradas para esta data. Confira o Ordo diocesano.</p>` : ""}
          <div style="margin-top:24px">
            ${blocoLeitura("Primeira Leitura", lit.primeiraLeitura, "fa-scroll")}
            ${blocoLeitura("Salmo Responsorial", lit.salmo, "fa-music")}
            ${lit.segundaLeitura ? blocoLeitura("Segunda Leitura", lit.segundaLeitura, "fa-book") : ""}
            ${blocoLeitura("Evangelho", lit.evangelho, "fa-book-bible")}
            ${lit.reflexao ? `<article class="leitura"><h3><i class="fa-solid fa-lightbulb"></i> Reflexão</h3><p>${escapeHtml(lit.reflexao)}</p></article>` : ""}
            ${lit.oracao ? `<article class="leitura"><h3><i class="fa-solid fa-hands-praying"></i> Oração</h3><p>${escapeHtml(lit.oracao)}</p></article>` : ""}
          </div>

          <h2 class="section-title" style="margin-top:36px;font-size:1.8rem">Cantos sugeridos para esta celebração</h2>
          <div class="sugestoes" id="sugestoes">
            ${Object.entries(sug).map(([m, c]) => c ? `
              <div class="sugestao-row">
                <div>
                  <div class="momento">${m}</div>
                  <strong>${escapeHtml(c.titulo)}</strong>
                </div>
                <div class="canto-actions">
                  <button class="btn btn-navy btn-sm" data-play="${c.id}"><i class="fa-solid fa-play"></i> Ouvir</button>
                  <button class="btn-icon" data-fav-canto="${c.id}"><i class="fa-${ehFavorito("cantos",c.id)?"solid":"regular"} fa-heart"></i></button>
                  <button class="btn-icon gold" data-add-missa="${c.id}"><i class="fa-solid fa-plus"></i></button>
                  <a class="btn btn-outline btn-sm" href="detalhes-canto.html?id=${c.id}">Detalhes</a>
                </div>
                <div class="player-slot" id="slot-${c.id}" style="flex-basis:100%;display:none;margin-top:8px"></div>
              </div>` : `<div class="sugestao-row"><div class="momento">${m}</div><span class="missa-empty">Conteúdo ainda não cadastrado.</span></div>`
            ).join("")}
          </div>
        </div>
      </section>`;

    bindAcoes(root);
    qs("#fav-lit")?.addEventListener("click", e => {
      const on = toggleFavorito("liturgias", iso);
      e.currentTarget.innerHTML = `<i class="fa-${on?"solid":"regular"} fa-heart"></i> Favoritar`;
    });
    qsa("[data-play]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.play);
        const c = getCanto(id);
        const slot = qs(`#slot-${id}`);
        const aberto = slot.style.display === "block";
        qsa(".player-slot").forEach(s => { s.style.display = "none"; s.innerHTML = ""; });
        if (!aberto && c) {
          slot.style.display = "block";
          slot.innerHTML = criarYoutubeEmbed(c.youtubeId, c.titulo);
        }
      });
    });
  };

  pintar(iso);
}

function renderCalendario() {
  const root = qs("#page-content");
  if (!root) return;
  const agora = new Date();
  let ano = Number(param("ano")) || agora.getFullYear();
  let mes = param("mes") !== null ? Number(param("mes")) : agora.getMonth();
  let selecionado = param("data") || isoHoje();

  const pintar = () => {
    const primeiro = new Date(ano, mes, 1);
    const inicio = primeiro.getDay();
    const diasMes = new Date(ano, mes + 1, 0).getDate();
    const hoje = isoHoje();
    let cells = "";
    for (let i = 0; i < inicio; i++) cells += `<button class="cal-day" disabled></button>`;
    for (let d = 1; d <= diasMes; d++) {
      const iso = `${ano}-${String(mes+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
      const lit = getLiturgiaPorData(iso);
      const santo = getSantoPorData(iso);
      const tipo = santo?.tipo || "";
      const classes = [
        "cal-day",
        iso === hoje ? "hoje" : "",
        iso === selecionado ? "selecionado" : "",
        /Solenidade/i.test(tipo + lit.celebracao) ? "solenidade" : ""
      ].join(" ");
      cells += `<button class="${classes}" data-iso="${iso}" title="${escapeHtml(lit.celebracao || santo?.nome || "")}">
        ${d}<span class="cal-dot" style="background:${corVar(lit.corLiturgica)}"></span>
      </button>`;
    }
    const litSel = getLiturgiaPorData(selecionado);
    const santoSel = getSantoPorData(selecionado);

    const anos = [];
    for (let y = ano - 3; y <= ano + 3; y++) anos.push(y);

    root.innerHTML = `
      <section class="page-hero" style="--hero-img:url('${IMG.catedral2}')">
        <div class="container">
          <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-calendar-days"></i> Ano litúrgico</p>
          <h1>Calendário litúrgico</h1>
          <p>Selecione o dia para ver celebração, santo, cor e a liturgia correspondente.</p>
        </div>
      </section>
      <section class="section">
        <div class="container cal-layout">
          <div class="cal-wrap">
            <div class="cal-head">
              <div class="cal-nav">
                <button class="icon-btn" id="prev-m" aria-label="Mês anterior"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="icon-btn" id="next-m" aria-label="Próximo mês"><i class="fa-solid fa-chevron-right"></i></button>
              </div>
              <div class="cal-selects">
                <label class="sr-only" for="sel-mes">Mês</label>
                <select id="sel-mes" aria-label="Selecionar mês">
                  ${MESES_PT.map((nome, i) => `<option value="${i}" ${i===mes?"selected":""}>${nome}</option>`).join("")}
                </select>
                <label class="sr-only" for="sel-ano">Ano</label>
                <select id="sel-ano" aria-label="Selecionar ano">
                  ${anos.map(y => `<option value="${y}" ${y===ano?"selected":""}>${y}</option>`).join("")}
                </select>
              </div>
              <button class="btn btn-outline btn-sm" id="btn-hoje-cal">Hoje</button>
            </div>
            <div class="cal-weekdays">${DIAS_CURTO.map(d => `<span>${d}</span>`).join("")}</div>
            <div class="cal-days">${cells}</div>
            <div class="cal-legend">
              <span><i class="cal-dot" style="background:var(--liturgico-verde);display:inline-block"></i> Verde</span>
              <span><i class="cal-dot" style="background:var(--liturgico-dourado);display:inline-block"></i> Branco / Dourado</span>
              <span><i class="cal-dot" style="background:var(--liturgico-vermelho);display:inline-block"></i> Vermelho</span>
              <span><i class="cal-dot" style="background:var(--liturgico-roxo);display:inline-block"></i> Roxo</span>
              <span><i class="cal-dot" style="background:var(--liturgico-rosa);display:inline-block"></i> Rosa</span>
            </div>
          </div>
          <aside class="painel-dia" style="border-top-color:${corVar(litSel.corLiturgica)}">
            <p class="hoje-data">${formatarDataLonga(selecionado)}</p>
            <h3 class="hoje-dia" style="font-size:1.7rem">${escapeHtml(litSel.celebracao)}</h3>
            <div class="meta-row">
              <span class="chip">${escapeHtml(litSel.tempoLiturgico)}</span>
              ${chipCor(litSel.corLiturgica)}
            </div>
            ${santoSel ? `<div class="santo-box"><small>${escapeHtml(santoSel.tipo)} — Santo do dia</small><strong>${escapeHtml(santoSel.nome)}</strong><p style="margin-top:6px">${escapeHtml(santoSel.descricao)}</p></div>` : litSel.santoDoDia ? `<div class="santo-box"><small>Santo do dia</small><strong>${escapeHtml(litSel.santoDoDia)}</strong></div>` : ""}
            <div class="hoje-actions">
              <a class="btn btn-navy" href="liturgia-diaria.html?data=${selecionado}">Ver liturgia</a>
              <a class="btn btn-outline" href="cantos.html">Ver cantos</a>
            </div>
          </aside>
        </div>
      </section>`;

    qs("#prev-m").onclick = () => { mes--; if (mes < 0) { mes = 11; ano--; } pintar(); };
    qs("#next-m").onclick = () => { mes++; if (mes > 11) { mes = 0; ano++; } pintar(); };
    qs("#sel-mes").onchange = e => { mes = Number(e.target.value); pintar(); };
    qs("#sel-ano").onchange = e => { ano = Number(e.target.value); pintar(); };
    qs("#btn-hoje-cal").onclick = () => {
      const n = new Date();
      ano = n.getFullYear(); mes = n.getMonth(); selecionado = isoHoje(); pintar();
    };
    qsa("[data-iso]").forEach(b => {
      b.onclick = () => { selecionado = b.dataset.iso; pintar(); };
    });
  };
  pintar();
}

function renderOracoes() {
  const root = qs("#page-content");
  if (!root) return;
  root.innerHTML = `
    <section class="page-hero" style="--hero-img:url('${IMG.tabernaculo}')">
      <div class="container">
        <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-hands-praying"></i> Missal</p>
        <h1>Orações Eucarísticas</h1>
        <p>Textos para consulta, celebração e impressão.</p>
      </div>
    </section>
    <section class="section">
      <div class="container oracoes-grid">
        ${oracoesEucaristicas.map(o => `
          <article class="oracao-card" data-aos="fade-up">
            <h3>${escapeHtml(o.titulo)}</h3>
            ${o.subtitulo ? `<p class="sub">${escapeHtml(o.subtitulo)}</p>` : ""}
            <p>${escapeHtml(o.descricao)}</p>
            <div class="hoje-actions">
              <a class="btn btn-navy btn-sm" href="oracao-eucaristica.html?id=${o.id}">Visualizar</a>
              <a class="btn btn-outline btn-sm" href="oracao-eucaristica.html?id=${o.id}&print=1">Imprimir</a>
              <button class="btn btn-outline btn-sm" data-dl="${o.id}">Baixar</button>
            </div>
          </article>`).join("")}
      </div>
    </section>`;
  qsa("[data-dl]").forEach(b => {
    b.onclick = () => {
      const o = getOracao(b.dataset.dl);
      if (o) baixarTexto(`${o.titulo}.txt`, `${o.titulo}\n${o.subtitulo}\n\n${o.conteudo}`);
    };
  });
}

function renderOracao() {
  const root = qs("#page-content");
  const o = getOracao(param("id"));
  if (!root) return;
  if (!o) {
    root.innerHTML = `<section class="section"><div class="container empty-state"><p>Oração não encontrada.</p></div></section>`;
    return;
  }
  const fav = ehFavorito("oracoes", o.id);
  root.innerHTML = `
    <section class="section">
      <div class="container" style="max-width:820px">
        <a class="back-link" href="oracoes-eucaristicas.html"><i class="fa-solid fa-arrow-left"></i> Voltar</a>
        <div class="toolbar-leitura" role="toolbar" aria-label="Modo de leitura">
          <button class="btn-icon" id="font-menos" aria-label="Diminuir fonte"><i class="fa-solid fa-minus"></i></button>
          <button class="btn-icon" id="font-mais" aria-label="Aumentar fonte"><i class="fa-solid fa-plus"></i></button>
          <button class="btn-icon" id="btn-escuro" aria-label="Modo escuro"><i class="fa-solid fa-moon"></i></button>
          <button class="btn-icon" id="btn-fs" aria-label="Tela cheia"><i class="fa-solid fa-expand"></i></button>
        </div>
        <p class="section-kicker"><i class="fa-solid fa-hands-praying"></i> Oração Eucarística</p>
        <h1 class="section-title">${escapeHtml(o.titulo)}</h1>
        ${o.subtitulo ? `<p class="section-sub">${escapeHtml(o.subtitulo)}</p>` : ""}
        <div class="hoje-actions" style="margin-bottom:20px">
          <button class="btn btn-navy btn-sm" id="btn-print"><i class="fa-solid fa-print"></i> Imprimir</button>
          <button class="btn btn-outline btn-sm" id="btn-dl"><i class="fa-solid fa-download"></i> Baixar</button>
          <button class="btn btn-outline btn-sm" id="btn-fav"><i class="fa-${fav?"solid":"regular"} fa-heart"></i> Favoritar</button>
        </div>
        <article class="oracao-texto" id="texto-oracao">${escapeHtml(o.conteudo)}</article>
      </div>
    </section>`;

  let size = Number(lerJSON(LS.leitura, { size: 1.22 }).size) || 1.22;
  const texto = qs("#texto-oracao");
  const apply = () => { texto.style.fontSize = size + "rem"; gravarJSON(LS.leitura, { size }); };
  apply();
  qs("#font-mais").onclick = () => { size = Math.min(1.8, size + 0.08); apply(); };
  qs("#font-menos").onclick = () => { size = Math.max(0.95, size - 0.08); apply(); };
  qs("#btn-escuro").onclick = () => document.body.classList.toggle("leitura-escura");
  qs("#btn-fs").onclick = () => document.body.classList.toggle("fs-mode");
  qs("#btn-print").onclick = () => window.print();
  qs("#btn-dl").onclick = () => baixarTexto(`${o.titulo}.txt`, `${o.titulo}\n${o.subtitulo}\n\n${o.conteudo}`);
  qs("#btn-fav").onclick = e => {
    const on = toggleFavorito("oracoes", o.id);
    e.currentTarget.innerHTML = `<i class="fa-${on?"solid":"regular"} fa-heart"></i> Favoritar`;
  };
  if (param("print") === "1") setTimeout(() => window.print(), 400);
}

function renderMinhaMissa() {
  const root = qs("#page-content");
  if (!root) return;

  const pintar = () => {
    const missa = getMinhaMissa();
    let total = 0;
    const blocos = MOMENTOS_MISSA.map(slot => {
      const ids = missa[slot] || [];
      total += ids.length;
      return `
        <div class="missa-slot">
          <h3>${slot}</h3>
          ${ids.length ? ids.map(id => {
            const c = getCanto(id);
            if (!c) return "";
            return `<div class="missa-canto">
              <div><strong>${escapeHtml(c.titulo)}</strong><div style="font-size:.8rem;color:var(--cinza)">${escapeHtml(c.categoria)}</div></div>
              <div class="canto-actions">
                <button class="btn btn-navy btn-sm" data-play="${c.id}"><i class="fa-solid fa-play"></i> Ouvir</button>
                <button class="btn-icon" data-up="${slot}:${c.id}" aria-label="Subir"><i class="fa-solid fa-arrow-up"></i></button>
                <button class="btn-icon" data-down="${slot}:${c.id}" aria-label="Descer"><i class="fa-solid fa-arrow-down"></i></button>
                <button class="btn-icon" data-rm="${slot}:${c.id}" aria-label="Remover"><i class="fa-solid fa-trash"></i></button>
              </div>
              <div class="player-slot" id="mslot-${c.id}" style="flex-basis:100%;display:none"></div>
            </div>`;
          }).join("") : `<p class="missa-empty">Nenhum canto neste momento. <a href="cantos.html?cat=${encodeURIComponent(slot)}">Adicionar</a></p>`}
        </div>`;
    }).join("");

    root.innerHTML = `
      <section class="page-hero" style="--hero-img:url('${IMG.missa2}')">
        <div class="container">
          <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-church"></i> Repertório</p>
          <h1>Minha Missa</h1>
          <p>Monte o repertório da celebração. Tudo fica salvo neste aparelho.</p>
        </div>
      </section>
      <section class="section">
        <div class="container" style="max-width:880px">
          <div class="hoje-actions" style="margin-bottom:22px">
            <button class="btn btn-navy btn-sm" id="print-missa"><i class="fa-solid fa-print"></i> Imprimir</button>
            <button class="btn btn-outline btn-sm" id="share-missa"><i class="fa-solid fa-share-nodes"></i> Compartilhar</button>
            <button class="btn btn-outline btn-sm" id="dl-missa"><i class="fa-solid fa-download"></i> Baixar</button>
            <a class="btn btn-outline btn-sm" href="cantos.html">Adicionar cantos</a>
          </div>
          <p style="margin-bottom:16px;color:var(--cinza)">${total} canto${total===1?"":"s"} no repertório</p>
          <div id="missa-lista">${blocos}</div>
        </div>
      </section>`;

    qsa("[data-play]").forEach(btn => {
      btn.onclick = () => {
        const id = Number(btn.dataset.play);
        const c = getCanto(id);
        const slot = qs(`#mslot-${id}`);
        const aberto = slot.style.display === "block";
        qsa(".player-slot").forEach(s => { s.style.display = "none"; s.innerHTML = ""; });
        if (!aberto && c) {
          slot.style.display = "block";
          slot.innerHTML = criarYoutubeEmbed(c.youtubeId, c.titulo);
        }
      };
    });
    qsa("[data-rm]").forEach(b => b.onclick = () => {
      const [s, id] = b.dataset.rm.split(":");
      removerMinhaMissa(s, Number(id)); pintar();
    });
    qsa("[data-up]").forEach(b => b.onclick = () => {
      const [s, id] = b.dataset.up.split(":");
      moverMinhaMissa(s, Number(id), -1); pintar();
    });
    qsa("[data-down]").forEach(b => b.onclick = () => {
      const [s, id] = b.dataset.down.split(":");
      moverMinhaMissa(s, Number(id), 1); pintar();
    });
    qs("#print-missa").onclick = () => window.print();
    qs("#share-missa").onclick = () => compartilhar("Minha Missa — CANTOS");
    qs("#dl-missa").onclick = () => {
      const m = getMinhaMissa();
      let txt = "MINHA MISSA — CANTOS\n\n";
      MOMENTOS_MISSA.forEach(s => {
        txt += `${s.toUpperCase()}\n`;
        (m[s] || []).forEach(id => { const c = getCanto(id); if (c) txt += `  - ${c.titulo} (${c.tom})\n`; });
        txt += "\n";
      });
      baixarTexto("minha-missa.txt", txt);
    };
  };
  pintar();
}

function renderFavoritos() {
  const root = qs("#page-content");
  if (!root) return;
  const f = getFavoritos();
  const blocos = [];
  if (f.cantos?.length) {
    blocos.push(`<h2 class="section-title" style="font-size:1.6rem">Cantos</h2><div class="cantos-grid">${f.cantos.map(id => getCanto(id)).filter(Boolean).map(cardCanto).join("")}</div>`);
  }
  if (f.liturgias?.length) {
    blocos.push(`<h2 class="section-title" style="font-size:1.6rem;margin-top:32px">Liturgias</h2><div class="result-list">${f.liturgias.map(iso => {
      const L = getLiturgiaPorData(iso);
      return `<a class="result-item" href="liturgia-diaria.html?data=${iso}"><div class="result-thumb"></div><div class="result-body"><small>${iso}</small><h3>${escapeHtml(L.celebracao)}</h3><p>${escapeHtml(L.tempoLiturgico)} · ${escapeHtml(L.corLiturgica)}</p></div></a>`;
    }).join("")}</div>`);
  }
  if (f.oracoes?.length) {
    blocos.push(`<h2 class="section-title" style="font-size:1.6rem;margin-top:32px">Orações</h2><div class="oracoes-grid">${f.oracoes.map(id => getOracao(id)).filter(Boolean).map(o => `
      <article class="oracao-card"><h3>${escapeHtml(o.titulo)}</h3><p>${escapeHtml(o.descricao)}</p><a class="btn btn-navy btn-sm" href="oracao-eucaristica.html?id=${o.id}">Visualizar</a></article>`).join("")}</div>`);
  }
  if (f.novidades?.length) {
    blocos.push(`<h2 class="section-title" style="font-size:1.6rem;margin-top:32px">Novidades</h2><div class="cantos-grid">${f.novidades.map(id => getNovidade(id)).filter(Boolean).map(cardNovidade).join("")}</div>`);
  }

  root.innerHTML = `
    <section class="page-hero" style="--hero-img:url('${IMG.vitral}')">
      <div class="container">
        <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-heart"></i> Biblioteca pessoal</p>
        <h1>Favoritos</h1>
        <p>Cantos, liturgias, orações e novidades que você guardou neste aparelho.</p>
      </div>
    </section>
    <section class="section"><div class="container">
      ${blocos.length ? blocos.join("") : `<div class="empty-state"><i class="fa-regular fa-heart"></i><p>Você ainda não favoritou conteúdos.</p><a class="btn btn-outline" href="cantos.html">Explorar cantos</a></div>`}
    </div></section>`;
  bindAcoes(root);
}

function renderNovidades() {
  const root = qs("#page-content");
  if (!root) return;
  root.innerHTML = `
    <section class="page-hero" style="--hero-img:url('${IMG.catedral3}')">
      <div class="container">
        <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-newspaper"></i> Editorial</p>
        <h1>Últimas novidades</h1>
        <p>Repertórios, solenidades e formação litúrgica.</p>
      </div>
    </section>
    <section class="section">
      <div class="container cantos-grid">
        ${novidades.map(cardNovidade).join("")}
      </div>
    </section>`;
}

function renderNovidade() {
  const root = qs("#page-content");
  const n = getNovidade(param("id"));
  if (!root) return;
  if (!n) {
    root.innerHTML = `<section class="section"><div class="container empty-state"><p>Novidade não encontrada.</p></div></section>`;
    return;
  }
  const outras = novidades.filter(x => x.id !== n.id).slice(0, 3);
  const fav = ehFavorito("novidades", n.id);
  root.innerHTML = `
    <section class="section">
      <div class="container" style="max-width:820px">
        <a class="back-link" href="novidades.html"><i class="fa-solid fa-arrow-left"></i> Voltar</a>
        <img src="${n.imagem}" alt="${escapeHtml(n.titulo)}" style="width:100%;border-radius:18px;max-height:360px;object-fit:cover;margin-bottom:18px">
        <div class="novidade-meta"><span>${n.data}</span><span class="novidade-cat">${escapeHtml(n.categoria)}</span></div>
        <h1 class="section-title">${escapeHtml(n.titulo)}</h1>
        <div class="hoje-actions" style="margin:12px 0 20px">
          <button class="btn btn-outline btn-sm" id="fav-nov"><i class="fa-${fav?"solid":"regular"} fa-heart"></i> Favoritar</button>
        </div>
        <article class="letra-box">${escapeHtml(n.texto)}</article>
        <h2 class="section-title" style="margin-top:40px;font-size:1.6rem">Você também pode gostar</h2>
        <div class="cantos-grid">${outras.map(cardNovidade).join("")}</div>
      </div>
    </section>`;
  qs("#fav-nov").onclick = e => {
    const on = toggleFavorito("novidades", n.id);
    e.currentTarget.innerHTML = `<i class="fa-${on?"solid":"regular"} fa-heart"></i> Favoritar`;
  };
}

function renderBuscar() {
  const root = qs("#page-content");
  if (!root) return;
  root.innerHTML = `
    <section class="page-hero" style="--hero-img:url('${IMG.hinario}')">
      <div class="container">
        <p class="section-kicker" style="color:var(--dourado-claro)"><i class="fa-solid fa-magnifying-glass"></i> Busca</p>
        <h1>Pesquisar conteúdos</h1>
        <p>Cantos, liturgias, santos, orações e novidades.</p>
      </div>
    </section>
    <section class="section">
      <div class="container" style="max-width:860px">
        <div class="search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input id="q-global" type="search" placeholder="Ex.: Comunhão, Clara, Assunção..." aria-label="Pesquisar" value="${escapeHtml(param("q")||"")}">
        </div>
        <div class="tabs" id="tabs-busca" style="margin-top:18px">
          ${["Todos","Cantos","Liturgias","Santos","Orações","Novidades"].map((t,i)=>`<button class="tab ${i===0?"active":""}" data-tab="${t}">${t}</button>`).join("")}
        </div>
        <div id="resultados" class="result-list"></div>
      </div>
    </section>`;

  let tab = "Todos";
  const input = qs("#q-global");
  const pintar = () => {
    const q = (input.value || "").toLowerCase().trim();
    if (!q) {
      qs("#resultados").innerHTML = `<div class="empty-state"><p>Digite para pesquisar em toda a biblioteca.</p></div>`;
      return;
    }
    const itens = [];
    if (tab === "Todos" || tab === "Cantos") {
      cantos.filter(c => `${c.titulo} ${c.categoria} ${c.autor} ${c.letra}`.toLowerCase().includes(q))
        .forEach(c => itens.push({ tipo: "Canto", titulo: c.titulo, sub: c.categoria, href: `detalhes-canto.html?id=${c.id}`, img: c.imagem }));
    }
    if (tab === "Todos" || tab === "Liturgias") {
      liturgiaDiaria.filter(l => `${l.celebracao} ${l.santoDoDia} ${l.evangelho?.referencia||""}`.toLowerCase().includes(q))
        .forEach(l => itens.push({ tipo: "Liturgia", titulo: l.celebracao, sub: l.data, href: `liturgia-diaria.html?data=${l.data}`, img: IMG.biblia }));
    }
    if (tab === "Todos" || tab === "Santos") {
      santos.filter(s => `${s.nome} ${s.descricao}`.toLowerCase().includes(q))
        .forEach(s => itens.push({ tipo: "Santo", titulo: s.nome, sub: s.tipo, href: `calendario.html`, img: IMG.maria }));
    }
    if (tab === "Todos" || tab === "Orações") {
      oracoesEucaristicas.filter(o => `${o.titulo} ${o.conteudo}`.toLowerCase().includes(q))
        .forEach(o => itens.push({ tipo: "Oração", titulo: o.titulo, sub: o.subtitulo, href: `oracao-eucaristica.html?id=${o.id}`, img: IMG.altar }));
    }
    if (tab === "Todos" || tab === "Novidades") {
      novidades.filter(n => `${n.titulo} ${n.texto} ${n.categoria}`.toLowerCase().includes(q))
        .forEach(n => itens.push({ tipo: "Novidade", titulo: n.titulo, sub: n.data, href: `novidade.html?id=${n.id}`, img: n.imagem }));
    }
    qs("#resultados").innerHTML = itens.length ? itens.map(i => `
      <a class="result-item" href="${i.href}">
        <img src="${i.img}" alt="">
        <div class="result-body"><small>${i.tipo}</small><h3>${escapeHtml(i.titulo)}</h3><p>${escapeHtml(i.sub||"")}</p></div>
      </a>`).join("") : `<div class="empty-state"><p>Nenhum resultado para “${escapeHtml(q)}”.</p></div>`;
  };
  input.addEventListener("input", pintar);
  qsa("#tabs-busca .tab").forEach(b => b.onclick = () => {
    qsa("#tabs-busca .tab").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    tab = b.dataset.tab;
    pintar();
  });
  pintar();
  input.focus();
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  const page = paginaAtual();
  const rotas = {
    home: renderHome,
    cantos: renderCantos,
    detalhes: renderDetalhesCanto,
    liturgia: renderLiturgiaDiaria,
    calendario: renderCalendario,
    oracoes: renderOracoes,
    oracao: renderOracao,
    missa: renderMinhaMissa,
    favoritos: renderFavoritos,
    novidades: renderNovidades,
    novidade: renderNovidade,
    buscar: renderBuscar
  };
  (rotas[page] || renderHome)();
  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 40 });

  const titulos = {
    home: "CANTOS — Sua liturgia em um só lugar",
    cantos: "Cantos para a Santa Missa — CANTOS",
    detalhes: "Detalhes do canto — CANTOS",
    liturgia: "Liturgia Diária — CANTOS",
    calendario: "Calendário Litúrgico — CANTOS",
    oracoes: "Orações Eucarísticas — CANTOS",
    oracao: "Oração Eucarística — CANTOS",
    missa: "Minha Missa — CANTOS",
    favoritos: "Favoritos — CANTOS",
    novidades: "Últimas Novidades — CANTOS",
    novidade: "Novidade — CANTOS",
    buscar: "Buscar — CANTOS"
  };
  if (titulos[page]) document.title = titulos[page];
  const c = page === "detalhes" ? getCanto(param("id")) : null;
  if (c) document.title = `${c.titulo} — CANTOS`;
  const n = page === "novidade" ? getNovidade(param("id")) : null;
  if (n) document.title = `${n.titulo} — CANTOS`;
  const o = page === "oracao" ? getOracao(param("id")) : null;
  if (o) document.title = `${o.titulo} — CANTOS`;
});
