import media
import fresh_tomatoes

toy_story = media.Movie("Toy Stroy",
                        "A stroy of a boy and his toys that come to life",
                        "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-m8zzyx_5670999f.jpeg?region=0%2C0%2C300%2C450",
                        "https://www.youtube.com/watch?v=SgoiKLFBA3Q")

#print(toy_story.storyline)

avatar = media.Movie("Avatar",
                     "A marine on an aline planet",
                     "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
                     "https://www.youtube.com/watch?v=5PSNL1qE6VY")

lalaland = media.Movie("La La Land",
                       "Love in Los Angeles",
                       "https://images-na.ssl-images-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                       "https://www.youtube.com/watch?v=0pdqf4P9MB8")
# print(avatar.storyline)
# avatar.show_trailer()
movies = [toy_story, avatar, lalaland]
# print(media.Movie.VALID_RATINGS)
fresh_tomatoes.open_movies_page(movies)
# print(media.Movie.__doc__)
# print(media.Movie.__name__)
# print(media.Movie.__module__)
