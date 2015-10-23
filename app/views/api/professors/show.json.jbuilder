json.extract!(
  @professor,
  :id, :name, :image_url, :house_id, :description
)

json.house @professor.house, :name

json.reviews do
  json.array!(@professor.reviews) do |review|
    json.extract!(
      review,
      :id, :anonymous, :professor_id,
      :ability, :easiness, :helpfulness,
      :body, :user_id
    )
  json.user review.user, :username, :image_url
  json.likes review.likes, :id, :user_id, :review_id
  json.likeCount review.likes.length
  end
end
