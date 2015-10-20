class Professor < ActiveRecord::Base
  validates :name, :house_id, :description, presence: true

  belongs_to :house
  has_many :reviews
end
