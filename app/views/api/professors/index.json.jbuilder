json.array!(@professors) do |professor|
  json.extract!(
  professor,
    :id, :name, :image_url, :house_id, :averages, :overall_average
  )

json.house professor.house, :name

json.reviews do
  json.array! (professor.reviews) do |review|
    json.extract!(
      review,
      :ability, :easiness, :helpfulness
    )
    json.likes review.likes, :user_id
    json.likeCount review.likes.length
    end
  end
end
