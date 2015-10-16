class House < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :professors
  has_many :reviews, through: :professors
end
