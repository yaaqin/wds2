//News type

const baseURL: string = 'backendUrl'

interface newsCategoryState { //CRUD
    id: number;
    name: string
}

const newsCategory: newsCategoryState[] = [
    {
        id: 1,
        name: 'Crypto'
    },
    {
        id: 2,
        name: 'Politik'
    },
    {
        id: 3,
        name: 'Teknologi'
    },
    {
        id: 4,
        name: 'Bencana Alam'
    },
]

const getDetailNews = async () => {  //require find by 33 nya (category, id, & slug)
    const category = 'Crypto'
    const id = 1231
    const slug = 'bitcoin-koreksi'
    try {
        await fetch(`${baseURL}/news/${category}/${id.toLocaleString()}/${slug}`) // edit delete beda method aja
    } catch (error) {

    }
}

type BlogContent =
    | { type: 'header'; content: string }
    | { type: 'paragraph'; content: string }
    | { type: 'quote'; content: string; author: string }
    | { type: 'image'; src: string | null; alt: string }
    | { type: 'list'; items: string[] };

type paginationState = {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    isNext: boolean;
    isPrev: boolean
}
interface payloadCreateNewsState { //interface payload for create and update
    title: string; // require
    coverImg: File | null; // require (ini null biar ada initializenya aja)
    shortDesk: string // require
    category: 'Crypto' | 'Politik' | 'Teknologi' | 'Bencana Alam' // isi string harus yang ada di category list (newsCategoryState)  => require
    newsContent: BlogContent[]
}

const payloadCreateNews: payloadCreateNewsState = {
    title: 'Bitcoin ath baru', //require
    coverImg: null,//require
    shortDesk: 'btc king kripto',//require
    category: 'Crypto',//require
    newsContent: [
        {
            type: "paragraph",
            content: "Saat ini, banyak perhatian tertuju pada Web3 karena siklus Bitcoin yang berulang, yang menunjukkan potensi signifikan dalam inovasi teknologi blockchain dan desentralisasi, memberikan harapan baru untuk masa depan ekonomi digital yang lebih transparan dan terjangkau.’",
        },
        {
            type: "quote",
            content: "This is a quote from an influential figure in the industry.",
            author: "Matt Mullenweg",
        },
        {
            type: "image",
            src: null,
            alt: "Illustration of WordPress",
        },
        {
            type: "paragraph",
            content: "Cryptocurrency telah merevolusi dunia keuangan dengan menawarkan pendekatan baru yang terdesentralisasi dalam melakukan transaksi digital. Berbasis pada teknologi blockchain, cryptocurrency menghilangkan kebutuhan akan perantara seperti bank dan lembaga keuangan lainnya dalam setiap transaksi. Blockchain sendiri adalah sistem buku besar terdistribusi yang mencatat setiap transaksi secara transparan dan aman, serta tahan terhadap manipulasi. Bitcoin, mata uang kripto pertama yang diperkenalkan pada tahun 2009 oleh entitas anonim bernama Satoshi Nakamoto, menjadi pelopor dalam menciptakan ekosistem keuangan digital yang sepenuhnya independen dari sistem moneter tradisional. Dalam perkembangannya, ribuan cryptocurrency lainnya, seperti Ethereum, Ripple, dan Litecoin, telah muncul dengan berbagai tujuan dan aplikasi, memperkaya dunia digital finansial.",
        },
        {
            type: "paragraph",
            content: "Tidak hanya untuk transaksi, cryptocurrency juga telah membuka pintu untuk inovasi lainnya, seperti smart contracts dan Decentralized Finance (DeFi). Ethereum, misalnya, memperkenalkan konsep smart contracts, yaitu program otomatis yang dieksekusi sendiri saat syarat-syarat tertentu terpenuhi. Smart contracts memungkinkan terciptanya aplikasi terdesentralisasi (dApps), yang tidak hanya berjalan di atas blockchain tetapi juga dapat menggantikan berbagai aplikasi terpusat, seperti platform keuangan, game, hingga jaringan sosial. DeFi, di sisi lain, adalah ekosistem layanan keuangan yang juga tidak membutuhkan perantara tradisional, memungkinkan pengguna untuk meminjam, meminjamkan, atau melakukan perdagangan aset kripto dengan lebih cepat dan efisien. Popularitas DeFi mencerminkan meningkatnya minat terhadap inovasi keuangan berbasis blockchain, yang terus berkembang seiring waktu.",
        },
        {
            type: "paragraph",
            content: "Namun, seperti teknologi lainnya, cryptocurrency tidak tanpa tantangan. Salah satu tantangan terbesar adalah volatilitas harga yang ekstrem, di mana nilai mata uang kripto bisa melonjak tajam dalam hitungan hari, namun juga bisa terjun bebas dalam waktu singkat. Ketidakstabilan ini membuat banyak orang ragu untuk menggunakannya sebagai alat pembayaran atau investasi jangka panjang. Selain itu, regulasi pemerintah di banyak negara masih belum jelas atau terlalu ketat, menciptakan ketidakpastian bagi pengembang dan pengguna cryptocurrency. Meski demikian, dengan adopsi yang semakin meluas dan terus adanya inovasi dalam teknologi blockchain, banyak pihak yang optimis bahwa cryptocurrency akan menjadi elemen penting dalam ekonomi global di masa depan, terutama dalam menciptakan sistem keuangan yang lebih inklusif dan transparan.",
        },
        {
            type: "list",
            items: [
                "Feature 1: Speed Optimization",
                "Feature 2: Cloud Solutions",
                "Feature 3: Website Design",
            ],
        },
    ]
}

type AuthorState = {
    profileImage: string;
    name: string
}

interface detailNewsState {
    title: string;
    coverImg: string;
    shortDesk: string
    category: 'Crypto' | 'Politik' | 'Teknologi' | 'Bencana Alam'
    newsContent: BlogContent[]
    author: AuthorState
    createAt: string
}

type listNews = {
    id: number;
    category: string;
    slug: string;
    title: string
    coverImage: string;
    shortDesk: string
    author: AuthorState
}

interface newsListState {
    data: listNews[]
    pagination: paginationState
}

//search & category

const searchNews = async () => { //endpoint search
    const keywoard = 'Crypto'
    try {
        const response = await fetch(`${baseURL}/news?search=${keywoard}`) // search by title
        const res: newsListState = await response.json()
        console.log(res)
    } catch (error) {

    }
}

const newsByCategory = async () => { //endpoint finsd news by category
    const category = 'Crypto'
    try {
        const response = await fetch(`${baseURL}/news?category=${category}`) // find by category
        const res: newsListState = await response.json()
        console.log(res)
    } catch (error) {

    }
}


//Role

//Role ada 3 (GodAdmin, SuperAdmin, dan Admin) => For Panel

//GodAdmin all access

//SuperAdmin all access except create SuperAdmin & GodAdmin

//Admin Create News



//Coverage Area

type AddCvgAreaState = {
    id?: number // require include in data list
    areaName: string
}

interface CvgAreaListState {
    data: AddCvgAreaState[]
    pagination: paginationState //default limit => 25
}

const payloadAddCvgArea: AddCvgAreaState = {
    areaName: 'Cisauk'
}

const cvgAreaList = async () => { //endpoint search
    try {
        const response = await fetch(`${baseURL}/coverage-area`) // CRUD
        const res: CvgAreaListState = await response.json()
        console.log(res)
    } catch (error) {

    }
}


//Retail

type retailState = {
    name: string
    url?: string //optional
}

interface retailListState {
    data: retailState[]
    pagination: paginationState  //default limit => 5
}

const payloadAddRetail: retailState = {
    name: 'Golden Park II',
    url: 'goldenppark.com'
}

const retailList = async () => { //endpoint search
    try {
        const response = await fetch(`${baseURL}/retail`) // CRUD
        const res: retailListState = await response.json()
        console.log(res)
    } catch (error) {

    }
}

//Hotel & Apartment

type HotelAndApartmentState = {
    name: string
    url?: string //optional
}

interface HotelAndApartmentListState {
    data: HotelAndApartmentState[]
    pagination: paginationState  //default limit => 5
}

const payloadAddHotelAndApartmentState: retailState = {
    name: 'Trembesi',
    url: 'trembesi.com'
}

const hotelAndApartmentList = async () => { //endpoint search
    try {
        const response = await fetch(`${baseURL}/hotel-apartment`) // CRUD
        const res: HotelAndApartmentState = await response.json()
        console.log(res)
    } catch (error) {

    }
}





//Internet Package

//PackageType list

type InternetPackageTypeState = {
    name: string
}

type InternetPackageState = {
    id: number
    type: string // by internet package type
    name: string
    speed: number
    price: number
    discount?: number
    icon?: string
}
type InternetPackagePayloadState = {
    id: number
    type: string // by internet package type
    name: string
    speed: number
    price: number
    discount?: number
    icon?: File //svg < 200kb
}

interface InternetPackageTypeListState {
    data: InternetPackageTypeState[]
}

interface InternetPackageListState {
    data: InternetPackageState[]
    pagination: paginationState
}

const payloadAddPackageType = {
    name: 'Broadband Business'
}

const internetPackagePayload = {

}