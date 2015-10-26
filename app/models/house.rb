class House < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :professors
  has_many :reviews, through: :professors

  attr_reader :highest_rated

  def house_average
    total = 0
    skip = 0
    best_avg = nil
    best_prof = nil
    self.professors.each do |professor|
      skip += 1 if professor.reviews.count.zero?
      current = professor.overall_average
      total += current

      if best_avg.nil? || current > best_avg
        best_avg = current
        best_prof = professor
      end
    end
    self.highest_rated = best_prof
    (total / (self.professors.count - skip)).round(1)
  end

  def highest_rated=(prof)
    @highest_rated = prof
  end
end
