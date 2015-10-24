class RemoveNotNullFromAnonymous < ActiveRecord::Migration
  def change
    remove_column(:reviews, :anonymous)
    add_column(:reviews, :anonymous, :boolean, default: false)
  end
end
