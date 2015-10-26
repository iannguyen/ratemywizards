class Professor < ActiveRecord::Base
  validates :name, :house_id, :description, presence: true
  validates :name, length: { maximum: 25 }
  validates :description, length: { maximum: 420 }
  validates :house_id, inclusion: { in: (1..4).to_a }

  belongs_to :house
  has_many :reviews

  def overall_average
    overall = 0
    self.averages.each { |attr, value| overall += value }
    (overall / 3).round(1)
  end

  def averages
    avg = { ability: 0, easiness: 0, helpfulness: 0 }
    return avg if self.reviews.count.zero?
    self.reviews.each do |review|
      avg[:ability] += review.ability
      avg[:easiness] += review.easiness
      avg[:helpfulness] += review.helpfulness
    end

    avg.each do |attr, value|
      avg[attr] = (avg[attr] / self.reviews.count.to_f).round(1)
    end
  end

end
