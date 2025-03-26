export interface IUserPost {
    id: string;
    authorName: string;
    authorAvatar: string;
    createdAt: string;
    content: string;
    image?: string;
    location: {
        latitude: number;
        longitude: number;
    };
    likes: number;
    commentsCount: number;
}

export const ALL_POSTS: IUserPost[] = [
    {
        id: "1",
        authorName: "Алексей Иванов",
        authorAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
        createdAt: "2025-03-26T10:00:00Z",
        content: "Кто знает хорошего сантехника? Труба течёт 😩",
        location: { latitude: 56.8295, longitude: 60.6175 },
        likes: 12,
        commentsCount: 5,
    },
    {
        id: "2",
        authorName: "Марина Котова",
        authorAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
        createdAt: "2025-03-26T11:15:00Z",
        content: "Завтра раздаю книги у подъезда. Кому интересно?",
        image: "https://via.placeholder.com/400",
        location: { latitude: 56.8203, longitude: 60.5957 },
        likes: 8,
        commentsCount: 2,
    },
    {
        id: "3",
        authorName: "Дмитрий Смирнов",
        authorAvatar: "https://randomuser.me/api/portraits/men/3.jpg",
        createdAt: "2025-03-26T12:30:00Z",
        content:
            "Потерял кота в районе улицы Ленина. Отзывается на Барсик. Если кто видел – напишите!",
        image: "https://via.placeholder.com/400",
        location: { latitude: 56.8397, longitude: 60.6505 },
        likes: 25,
        commentsCount: 10,
    },
    {
        id: "4",
        authorName: "Ольга Васильева",
        authorAvatar: "https://randomuser.me/api/portraits/women/4.jpg",
        createdAt: "2025-03-26T14:00:00Z",
        content: "Ищу соседа для аренды квартиры. Кто заинтересован?",
        location: { latitude: 56.8154, longitude: 60.6123 },
        likes: 5,
        commentsCount: 1,
    },
    {
        id: "5",
        authorName: "Евгений Орлов",
        authorAvatar: "https://randomuser.me/api/portraits/men/5.jpg",
        createdAt: "2025-03-26T15:20:00Z",
        content: "Ребята, кто хочет в пятницу вечером в парк погулять?",
        location: { latitude: 56.832, longitude: 60.6151 },
        likes: 15,
        commentsCount: 3,
    },
    {
        id: "6",
        authorName: "Анна Сергеева",
        authorAvatar: "https://randomuser.me/api/portraits/women/6.jpg",
        createdAt: "2025-03-26T16:45:00Z",
        content: "Срочно нужна помощь с настройкой интернета. Провайдер тупит!",
        location: { latitude: 56.8271, longitude: 60.6103 },
        likes: 9,
        commentsCount: 4,
    },
    {
        id: "7",
        authorName: "Максим Волков",
        authorAvatar: "https://randomuser.me/api/portraits/men/7.jpg",
        createdAt: "2025-03-26T17:10:00Z",
        content: "Сегодня вечером будет шашлыки во дворе! Присоединяйтесь!",
        location: { latitude: 56.8452, longitude: 60.5901 },
        likes: 30,
        commentsCount: 12,
    },
    {
        id: "8",
        authorName: "Екатерина Петрова",
        authorAvatar: "https://randomuser.me/api/portraits/women/8.jpg",
        createdAt: "2025-03-26T18:20:00Z",
        content: "Отдам детские вещи бесплатно, в хорошем состоянии.",
        image: "https://via.placeholder.com/400",
        location: { latitude: 56.8193, longitude: 60.6214 },
        likes: 22,
        commentsCount: 6,
    },
    {
        id: "9",
        authorName: "Владимир Кузнецов",
        authorAvatar: "https://randomuser.me/api/portraits/men/9.jpg",
        createdAt: "2025-03-26T19:30:00Z",
        content: "Где купить свежие овощи в районе?",
        location: { latitude: 56.8415, longitude: 60.6029 },
        likes: 11,
        commentsCount: 3,
    },
    {
        id: "10",
        authorName: "Светлана Морозова",
        authorAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
        createdAt: "2025-03-26T20:45:00Z",
        content: "Может, организуем субботник в парке в эти выходные?",
        location: { latitude: 56.8256, longitude: 60.6302 },
        likes: 18,
        commentsCount: 5,
    },
    {
        id: "11",
        authorName: "Игорь Лебедев",
        authorAvatar: "https://randomuser.me/api/portraits/men/11.jpg",
        createdAt: "2025-03-26T21:55:00Z",
        content: "Соседи, не шумите по ночам! У меня дети спят!",
        location: { latitude: 56.8342, longitude: 60.6057 },
        likes: 50,
        commentsCount: 20,
    },
    {
        id: "12",
        authorName: "Наталья Фомина",
        authorAvatar: "https://randomuser.me/api/portraits/women/12.jpg",
        createdAt: "2025-03-26T22:10:00Z",
        content: "Куплю велик недорого. Кто продаёт?",
        location: { latitude: 56.8283, longitude: 60.5998 },
        likes: 5,
        commentsCount: 1,
    },
    {
        id: "13",
        authorName: "Артур Гаврилов",
        authorAvatar: "https://randomuser.me/api/portraits/men/13.jpg",
        createdAt: "2025-03-26T23:30:00Z",
        content: "Соседи, кто хочет вместе пробежаться утром?",
        location: { latitude: 56.8374, longitude: 60.6421 },
        likes: 17,
        commentsCount: 4,
    },
    {
        id: "14",
        authorName: "Лариса Миронова",
        authorAvatar: "https://randomuser.me/api/portraits/women/14.jpg",
        createdAt: "2025-03-27T00:45:00Z",
        content:
            "У нас завелась собака. Кто может порекомендовать хорошего кинолога?",
        location: { latitude: 56.8217, longitude: 60.6169 },
        likes: 9,
        commentsCount: 2,
    },
    {
        id: "15",
        authorName: "Сергей Романов",
        authorAvatar: "https://randomuser.me/api/portraits/men/15.jpg",
        createdAt: "2025-03-27T02:00:00Z",
        content: "Продаю шкаф, состояние отличное. Забирать самовывозом.",
        image: "https://via.placeholder.com/400",
        location: { latitude: 56.8311, longitude: 60.6082 },
        likes: 14,
        commentsCount: 3,
    },
];
