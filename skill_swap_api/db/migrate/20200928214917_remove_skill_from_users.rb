class RemoveSkillFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :skill, :text
  end
end
