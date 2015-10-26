json.extract!(
  @user,
  :id, :username, :image_url
)
json.likes @user.likes

json.likedReviews do
  json.array!(@user.liked_reviews) do |review|
    json.extract!(
    review,
      :id, :anonymous, :user_id, :professor_id, :ability, :easiness,
      :helpfulness, :body, :user
    )
  end
end

json.likeCount @user.likes.length

json.reviews do
  json.array!(@user.reviews) do |review|
    json.extract!(
      review,
      :id, :anonymous, :user_id, :professor_id,
      :ability, :easiness, :helpfulness,
      :body
    )
  json.professor review.professor, :name, :image_url
  end
end
