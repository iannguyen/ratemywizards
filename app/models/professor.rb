class Professor < ActiveRecord::Base
  validates :name, :house_id, presence: true
  has_attached_file :image

  belongs_to :house
end
