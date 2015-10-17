json.extract!(
  @professor,
  :id, :name, :image_url, :house_id,
)

json.house @professor.house, :name

json.reviews do
  json.array!(@professor.reviews) do |review|
    json.extract!(
      review,
      :id, :anonymous, :user_id, :professor_id,
      :ability, :easiness, :helpfulness,
      :body
    )
  json.user review.user, :username, :image_url
  end
end
