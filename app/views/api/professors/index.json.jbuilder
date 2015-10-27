json.array!(@professors) do |professor|
  json.extract!(
  professor,
    :id, :name, :image_url, :house_id, :overall_average
  )

json.house professor.house, :name
json.review_count professor.reviews.count

end
