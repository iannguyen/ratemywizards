json.extract!(
  @house,
  :id, :name, :image_url
)

json.professors do
  json.array!(@house.professors) do |professor|
    json.extract!(
      professor,
      :id, :name, :house_id, :image_url
    )
    
  json.reviews do
    json.array!(professor.reviews) do |review|
      json.extract!(
        review,
        :ability, :easiness, :helpfulness
      )
      end
    end
  end
end
