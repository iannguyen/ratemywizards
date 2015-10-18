json.array!(@professors) do |professor|
  json.extract!(
  professor,
    :id, :name, :image_url, :house_id,
  )

json.house professor.house, :name

json.reviews do
  json.array! (professor.reviews) do |review|
    json.extract!(
      review,
      :ability, :easiness, :helpfulness
    )
    end
  end
end
