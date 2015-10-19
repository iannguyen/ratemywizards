class AddDescriptionAndCourseToProfessors < ActiveRecord::Migration
  def change
    add_column(:professors, :description, :text, null: false)
  end
end
