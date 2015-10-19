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
  end
end
