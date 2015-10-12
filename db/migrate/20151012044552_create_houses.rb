class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.string :name, null: false
      t.timestamps null: false
    end
    add_index(:houses, :name, unique: true)
  end
end
