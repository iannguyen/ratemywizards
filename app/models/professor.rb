class Professor < ActiveRecord::Base
  validates :name, :house_id, presence: true

  belongs_to :house
end
