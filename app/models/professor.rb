class Professor < ActiveRecord::Base
  validates :name, :house_id, :description, presence: true
  validates :description, length: { maximum: 420 }
  validates :house_id, inclusion: { in: (1..4).to_a }

  belongs_to :house
  has_many :reviews
end
