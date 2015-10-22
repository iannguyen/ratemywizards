class Like < ActiveRecord::Base
  validates :user_id, uniqueness: { scope: :review_id}
  validates :user_id, :review_id

  belongs_to :review
  belongs_to :user
end
