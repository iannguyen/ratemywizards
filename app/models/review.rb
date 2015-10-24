class Review < ActiveRecord::Base
  validates :user_id, uniqueness: { scope: :professor_id }
  validates :user_id, :professor_id, :body, :ability, :easiness, :helpfulness, presence: true
  validates :body, length: { maximum: 400 }
  validates :ability, :easiness, :helpfulness, inclusion: { in: (1..5).to_a }
  validates :anonymous, :inclusion => {:in => [true, false]}

  belongs_to :professor
  belongs_to :user
  has_many :likes
end
