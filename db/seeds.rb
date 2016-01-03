MovieList.create!([
  {author_id: 3, title: "10 Extremely Underrated Movies To Watch This Friday Night", description: "You will love and enjoy these 10 underrated movies"},
  {author_id: 1, title: "Studio Ghibli's contribution to humanity", description: "Studio Ghibli, Inc. (株式会社スタジオジブリ Kabushiki-gaisha Sutajio Jiburi) is a Japanese animation film studio based in Koganei, Tokyo, Japan. "}
])
MovieListItem.create!([
  {imdbID: "tt0370986", movie_list_id: 1},
  {imdbID: "tt1855199", movie_list_id: 1},
  {imdbID: "tt1255953", movie_list_id: 1},
  {imdbID: "tt1120985", movie_list_id: 1},
  {imdbID: "tt2390361", movie_list_id: 1},
  {imdbID: "tt2024519", movie_list_id: 1},
  {imdbID: "tt1424432", movie_list_id: 1},
  {imdbID: "tt0206634", movie_list_id: 1},
  {imdbID: "tt0180093", movie_list_id: 1},
  {imdbID: "tt0414993", movie_list_id: 1},
  {imdbID: "tt0245429", movie_list_id: 2},
  {imdbID: "tt0092067", movie_list_id: 2},
  {imdbID: "tt0096283", movie_list_id: 2},
  {imdbID: "tt0097814", movie_list_id: 2},
  {imdbID: "tt0245429", movie_list_id: 2},
  {imdbID: "tt0095327", movie_list_id: 2},
  {imdbID: "tt0104652", movie_list_id: 2},
  {imdbID: "tt0119698", movie_list_id: 2},
  {imdbID: "tt0347149", movie_list_id: 2},
  {imdbID: "tt0876563", movie_list_id: 2},
  {imdbID: "tt0087544", movie_list_id: 2},
  {imdbID: "tt2013293", movie_list_id: 2}
])
User.create!([
  {session_token: "Q_XsydnENRpn0rSJIzTCtQ", username: "Dustin", password_digest: "$2a$10$DlZPHqK7DPFTMqNEOK6cnuS1x2XO/JGDP6z8VGiq495wKCJ8xxQyO"},
  {session_token: "mib1IlGckK3YoL_giUbpOQ", username: "Guest", password_digest: "$2a$10$GBzvpk5HL4fPC4W9LQRp8OhVXbIzg.NhZCM2hT98LoYDndSgZDZq6"},
  {session_token: "w2ONhYROk54b-yxXINHsxg", username: "Movieguru", password_digest: "$2a$10$ZwY69UKKTBAEAHFbKM1lAuTSsVe.LACbB.zE0qAonZjXDhhYFHmnK"}
])
