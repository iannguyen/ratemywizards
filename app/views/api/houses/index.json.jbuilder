json.array!(@houses) do |house|
  json.extract!(
    house,
    :id, :name, :image_url
  )
  
    json.professors do
      json.array!(house.professors) do |professor|
        json.extract!(
          professor,
          :id, :name, :image_url
        )
    end
  end
end
