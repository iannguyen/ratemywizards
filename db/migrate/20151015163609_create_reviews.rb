class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.boolean :anonymous, null: false
      t.integer :user_id, null: false
      t.integer :professor_id, null: false
      t.integer :ability, null: false
      t.integer :easiness, null: false
      t.integer :helpfulness, null: false
      t.timestamps null: false
    end
    add_index(:reviews, [:user_id, :professor_id], unique: true)
    add_index(:reviews, :ability)
    add_index(:reviews, :easiness)
    add_index(:reviews, :helpfulness)
  end
end
