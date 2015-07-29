class CreateFountainCheckins < ActiveRecord::Migration
  def change
    create_table :fountain_checkins do |t|
      t.datetime :time

      t.timestamps null: false
    end
  end
end
