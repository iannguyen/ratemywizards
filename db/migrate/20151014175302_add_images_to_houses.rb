class AddImagesToHouses < ActiveRecord::Migration
  def change
    add_column(:houses, :image_url, :string)
  end
end
