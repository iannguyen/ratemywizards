json.extract!(
  @house,
  :id, :name, :image_url, :house_average, :highest_rated
)

json.professors do
  json.array!(@house.professors) do |professor|
    json.extract!(
      professor,
      :id, :name, :house_id, :image_url, :overall_average
    )

    json.review_count professor.reviews.count
  # json.reviews do
  #   json.array!(professor.reviews) do |review|
  #     json.extract!(
  #       review,
  #       :ability, :easiness, :helpfulness
  #     )
  #     end
  #   end
  end
end
