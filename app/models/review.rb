class Review < ActiveRecord::Base
  validates :anonymous, default: false
  validates :user_id, uniqueness: { scope: :professor_id }
  validates :user_id, :professor_id, :body, presence: true
  validates :body, length: { maximum: 300 }
  validates :ability, :easiness, :helpfulness, inclusion: { in: (1..5).to_a }

  belongs_to :professor
  belongs_to :user
  has_many :likes
end
