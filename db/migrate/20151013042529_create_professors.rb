class CreateProfessors < ActiveRecord::Migration
  def change
    create_table :professors do |t|
      t.string :name, null: false
      t.integer :house_id, null: false
      t.string :image_file_name
      t.timestamps null: false
    end
    add_index(:professors, :house_id)
  end
end
