class Professor < ActiveRecord::Base
  validates :name, :house_id, :description, presence: true
  validates :description, length: { maximum: 420 }

  belongs_to :house
  has_many :reviews
end
