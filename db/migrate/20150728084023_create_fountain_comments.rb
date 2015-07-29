class CreateFountainComments < ActiveRecord::Migration
  def change
    create_table :fountain_comments do |t|
      t.text :comment

      t.timestamps null: false
    end
  end
end
