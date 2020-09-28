class CreateSkills < ActiveRecord::Migration[6.0]
  def change
    create_table :skills do |t|
      t.string :field
      t.string :years_experience
      t.belongs_to :user 

      t.timestamps
    end
  end
end
