json.array!(@houses) do |house|
  json.extract!(
    house,
    :id, :name, :image_url
  )
end
