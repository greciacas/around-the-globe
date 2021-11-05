# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'grecia', password: '123456')

puts "#{User.count} user created"

Post.create!(
  image_url: 'https://res.cloudinary.com/dehiekpya/image/upload/v1635904246/posts/fzhygfykxibwgjgjrh9y.jpg',
  location: 'Rumba Cubana-Jersey City, NJ',
  user: @admin
)
Post.create!(
  image_url: 'https://res.cloudinary.com/dehiekpya/image/upload/v1635904201/posts/paemjkdkuwn1sjh4qzdz.jpg',
  location: 'Chart House-Weehaawken, NJ',
  user: @admin
)
Post.create!(
  image_url: 'https://res.cloudinary.com/dehiekpya/image/upload/v1635904232/posts/jabnxhhp1gnkxcfo9bho.jpg',
  location: 'Modern Restaurant and Lounge-Newrochelle, NY',
  user: @admin
)
Post.create!(
  image_url: 'https://res.cloudinary.com/dehiekpya/image/upload/v1635906082/posts/qbosasfagzqhwoujrp2a.jpg',
  location: 'Rooneys Oceanfront Restaurant-Long Branch, NJ',
  user: @admin
)

puts "#{Post.count} posts created"

Comment.create!(
  content: 'Food 10/10',
  user: @admin,
  post: Post.first
)
Comment.create!(
  content: 'Overrated',
  user: @admin,
  post: Post.second
)
Comment.create!(
  content: 'Terrible service but food was good',
  user: @admin,
  post: Post.third
)
Comment.create!(
  content: 'Nice place by the beach, good service',
  user: @admin,
  post: Post.fourth
)

puts "#{Comment.count} comments created"