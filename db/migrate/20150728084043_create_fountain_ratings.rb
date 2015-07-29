class CreateFountainRatings < ActiveRecord::Migration
  def change
    create_table :fountain_ratings do |t|
      t.integer :rating

      t.timestamps null: false
    end
  end
end
