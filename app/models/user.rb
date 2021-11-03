class User < ApplicationRecord
  has_secure_password
  has_many :posts, :comments

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }
end
