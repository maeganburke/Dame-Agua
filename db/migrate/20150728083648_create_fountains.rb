class CreateFountains < ActiveRecord::Migration
  def change
    create_table :fountains do |t|
      t.string :location
      t.string :name

      t.timestamps null: false
    end
  end
end
