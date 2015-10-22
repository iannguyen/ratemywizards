json.extract!(
  @review,
  :id, :body, :ability, :easiness, :helpfulness, :anonymous
)

json.user @review.user, :id, :username, :image_url
json.professor @review.professor, :id, :name
json.likes @review.likes
json.likeCount @review.likes.length
