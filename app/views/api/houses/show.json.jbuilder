json.extract!(
  @house,
  :id, :name
)

json.professors do
  json.array!(@house.professors) do |professor|
    json.extract!(
      professor,
      :id, :name
    )
  end
end
