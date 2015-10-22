json.extract!(
  @review,
  :id, :body, :ability, :easiness, :helpfulness, :anonymous
)

json.user @review.user, :id, :username, :image_url
json.professor @review.professor, :id, :name
json.likes do
  json.array!(@review.likes) do |like|
    json.extract!(
      like,
      :user_id
    )
  end
end
json.likeCount @review.likes.length
