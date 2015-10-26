json.array!(@houses) do |house|
  json.extract!(
    house,
    :id, :name, :image_url, :house_average, :highest_rated
  )

    json.professors do
      json.array!(house.professors) do |professor|
        json.extract!(
          professor,
          :id, :name, :image_url, :overall_average
        )
    end
  end
end
