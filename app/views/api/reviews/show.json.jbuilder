json.extract!(
  @review,
  :id, :body, :ability, :easiness, :helpfulness
)

json.user @review.user, :username, :image_url
