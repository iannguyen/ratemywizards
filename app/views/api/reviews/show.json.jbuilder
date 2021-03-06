json.extract!(
  @review,
  :id, :body, :ability, :easiness, :helpfulness, :anonymous
)

json.likeCount @review.likes.length
json.user @review.user, :id, :username, :image_url
json.professor @review.professor, :id, :name
json.likes do
  json.array!(@review.likes) do |like|
    json.extract!(
      like,
      :id, :user_id, :review_id
    )
  end
end
