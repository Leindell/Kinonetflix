
from app import create_app, db
from app.models import Movie

from app import create_app, db
from app.models import Movie

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()

    items = [

        # ======================
        # ANIME
        # ======================
        Movie(
            title="Черный клевер",
            year=2017,
            genre="Action, Fantasy, Anime",
            description="Юный Аста мечтает стать королем магов, несмотря на отсутствие магии.",
            poster="black_clover.jpg",
            background="Black_Clover.gif",
            type="anime",
            rating_kp=8.2,
            rating_imdb=8.3,
            rating_personal=10.0,
            watch_url="https://www.kinopoisk.ru/series/1049731/"
        ),
        Movie(
            title="Блич",
            year=2004,
            genre="Action, Supernatural, Anime",
            description="Подросток получает силы проводника душ и вступает в бой с пустыми.",
            poster="bleach.jpg",
            background="Bleach.jpg",
            type="anime",
            rating_kp=8.4,
            rating_imdb=8.1,
            rating_personal=8.0,
            watch_url="https://www.kinopoisk.ru/series/258621/"
        ),
        Movie(
            title="Берсерк",
            year=1997,
            genre="Dark Fantasy, Anime",
            description="Мрачная история наемника Гатса в жестоком мире.",
            poster="berserk.jpg",
            background="Berserk.jpg",
            type="anime",
            rating_kp=8.6,
            rating_imdb=8.7,
            rating_personal=9.0,
            watch_url="https://www.kinopoisk.ru/series/257376/"
        ),
        Movie(
            title="Госпожа Кагуя: В любви как на войне",
            year=2019,
            genre="Romance, Comedy, Anime",
            description="Два гения пытаются заставить друг друга признаться в любви.",
            poster="kaguya_sama.jpg",
            background="Kaguya.jpg",
            type="anime",
            rating_kp=8.5,
            rating_imdb=8.5,
            rating_personal=8.0,
            watch_url="https://www.kinopoisk.ru/series/1231054/"
        ),
        Movie(
            title="Баскетбол Куроко",
            year=2012,
            genre="Sports, Anime",
            description="История школьной баскетбольной команды и скрытого гения Куроко.",
            poster="kuroko.jpg",
            background="Kuroko.gif",
            type="anime",
            rating_kp=8.7,
            rating_imdb=8.3,
            rating_personal=9.9,
            watch_url="https://www.kinopoisk.ru/series/676672/"
        ),
        Movie(
            title="Тетрадь смерти",
            year=2006,
            genre="Thriller, Supernatural, Anime",
            description="Тетрадь, убивающая по имени, меняет судьбу человечества.",
            poster="death_note.jpg",
            background="Death_note.jpg",
            type="anime",
            rating_kp=9.0,
            rating_imdb=9.0,
            rating_personal=9.5,
            watch_url="https://www.kinopoisk.ru/series/406148/"
        ),
        Movie(
            title="Клинок, рассекающий демонов",
            year=2019,
            genre="Action, Fantasy, Anime",
            description="Юноша сражается с демонами ради спасения сестры.",
            poster="demon_slayer.jpg",
            background="Demon_Slayer.jpg",
            type="anime",
            rating_kp=8.3,
            rating_imdb=8.6,
            rating_personal=8.0,
            watch_url="https://www.kinopoisk.ru/series/1220920/"
        ),
        Movie(
            title="Токийский гуль",
            year=2014,
            genre="Horror, Dark Fantasy, Anime",
            description="Студент становится наполовину гулем и теряет прежнюю жизнь.",
            poster="tokyo_ghoul.jpg",
            background="tokyo_ghoul.jpg",
            type="anime",
            rating_kp=8.0,
            rating_imdb=7.8,
            rating_personal=7.0,
            watch_url="https://www.kinopoisk.ru/series/841681/"
        ),
        Movie(
            title="Обещанный Неверленд",
            year=2019,
            genre="Thriller, Anime",
            description="Дети раскрывают ужасающую тайну приюта.",
            poster="neverland.jpg",
            background="promised.jpg",
            type="anime",
            rating_kp=8.4,
            rating_imdb=8.5,
            rating_personal=9.0,
            watch_url="https://www.kinopoisk.ru/series/1179789/"
        ),
        Movie(
            title="Гуррен-Лаганн",
            year=2007,
            genre="Mecha, Adventure, Anime",
            description="Люди прорываются из подземного мира к звездам.",
            poster="gurren_lagann.jpg",
            background="guren.jpg",
            type="anime",
            rating_kp=8.7,
            rating_imdb=8.3,
            rating_personal=9.0,
            watch_url="https://www.kinopoisk.ru/series/452973/"
        ),
        Movie(
            title="Поднятие уровня в одиночку",
            year=2024,
            genre="Action, Fantasy, Anime",
            description="Слабейший охотник получает уникальную способность прокачки.",
            poster="solo_leveling.jpg",
            background="solo_leveling.jpg",
            type="anime",
            rating_kp=8.6,
            rating_imdb=8.4,
            rating_personal=10.0,
            watch_url="https://www.kinopoisk.ru/series/5230828/"
        ),

        # ======================
        # SERIES
        # ======================
        Movie(
            title="Чернобыль",
            year=2019,
            genre="Drama, History",
            description="Хроника крупнейшей техногенной катастрофы XX века.",
            poster="chernobyl.jpg",
            background="chernobyl.jpg",
            type="series",
            rating_kp=9.1,
            rating_imdb=9.4,
            rating_personal=9.5,
            watch_url="#"
        ),
        Movie(
            title="Лучше звоните Солу",
            year=2015,
            genre="Crime, Drama",
            description="История превращения адвоката в криминального гения.",
            poster="better_call_saul.jpg",
            background="better_call_saul.jpg",
            type="series",
            rating_kp=8.9,
            rating_imdb=9.0,
            rating_personal=9.3,
            watch_url="#"
        ),
        Movie(
            title="Декстер",
            year=2006,
            genre="Crime, Thriller",
            description="Серийный убийца, карающий преступников.",
            poster="dexter.jpg",
            background="dexter.jpg",
            type="series",
            rating_kp=8.6,
            rating_imdb=8.6,
            rating_personal=9.0,
            watch_url="#"
        ),
        Movie(
            title="Шерлок",
            year=2010,
            genre="Detective, Drama",
            description="Современная интерпретация историй о Шерлоке Холмсе.",
            poster="sherlock.jpg",
            background="sherlock.jpg",
            type="series",
            rating_kp=9.0,
            rating_imdb=9.1,
            rating_personal=9.4,
            watch_url="#"
        ),
        Movie(
            title="Аркейн",
            year=2021,
            genre="Animation, Action",
            description="Противостояние двух сестер в мире Piltover и Zaun.",
            poster="arcane.jpg",
            background="arcane.jpg",
            type="series",
            rating_kp=9.0,
            rating_imdb=9.0,
            rating_personal=9.2,
            watch_url="#"
        ),
        Movie(
            title="Черная птица",
            year=2022,
            genre="Crime, Drama",
            description="Заключённый помогает ФБР поймать серийного убийцу.",
            poster="black_bird.jpg",
            background="black_bird.jpg",
            type="series",
            rating_kp=8.0,
            rating_imdb=8.1,
            rating_personal=8.4,
            watch_url="#"
        ),

        # ======================
        # MOVIES
        # ======================
        Movie(
            title="Остров проклятых",
            year=2010,
            genre="Thriller, Mystery",
            description="Маршал расследует исчезновение в психиатрической клинике.",
            poster="shutter_island.jpg",
            background="shutter_island.jpg",
            type="movie",
            rating_kp=8.5,
            rating_imdb=8.2,
            rating_personal=10.0,
            watch_url="#"
        ),
        Movie(
            title="Достать ножи",
            year=2019,
            genre="Crime, Comedy",
            description="Частный детектив расследует смерть писателя.",
            poster="knives_out.jpg",
            background="knives_out.jpg",
            type="movie",
            rating_kp=8.2,
            rating_imdb=7.9,
            rating_personal=10.0,
            watch_url="#"
        ),
        Movie(
            title="Джанго освобожденный",
            year=2012,
            genre="Western, Drama",
            description="Освобожденный раб мстит за свою жену.",
            poster="django.jpg",
            background="django.jpg",
            type="movie",
            rating_kp=8.6,
            rating_imdb=8.4,
            rating_personal=9.5,
            watch_url="#"
        ),
        Movie(
            title="Криминальное чтиво",
            year=1994,
            genre="Crime, Drama",
            description="Несколько переплетенных историй преступного мира.",
            poster="pulp_fiction.jpg",
            background="pulp_fiction.jpg",
            type="movie",
            rating_kp=8.6,
            rating_imdb=8.9,
            rating_personal=9.5,
            watch_url="#"
        ),
        Movie(
            title="Омерзительная восьмерка",
            year=2015,
            genre="Western, Thriller",
            description="Восемь незнакомцев застревают в лавке во время бури.",
            poster="hateful_eight.jpg",
            background="hateful_eight.jpg",
            type="movie",
            rating_kp=7.9,
            rating_imdb=7.8,
            rating_personal=9.5,
            watch_url="#"
        ),
        Movie(
            title="Бойцовский клуб",
            year=1999,
            genre="Drama, Thriller",
            description="Подпольные бои как форма протеста против общества.",
            poster="fight_club.jpg",
            background="fight_club.jpg",
            type="movie",
            rating_kp=8.7,
            rating_imdb=8.8,
            rating_personal=9.5,
            watch_url="#"
        ),
        Movie(
            title="Унесённые призраками",
            year=2001,
            genre="Fantasy, Anime",
            description="Девочка попадает в мир духов и богов.",
            poster="spirited_away.jpg",
            background="spirited_away.gif",
            type="movie",
            rating_kp=8.5,
            rating_imdb=8.6,
            rating_personal=10,
            watch_url="#"
        ),
        Movie(
            title="Волк с Уолл-стрит",
            year=2013,
            genre="Biography, Crime",
            description="Взлет и падение биржевого брокера.",
            poster="wolf_wall_street.jpg",
            background="wolf_wall_street.gif",
            type="movie",
            rating_kp=8.0,
            rating_imdb=8.2,
            rating_personal=8.0,
            watch_url="#"
        ),
    ]

    db.session.add_all(items)
    db.session.commit()

    print("✔ База данных успешно заполнена")


