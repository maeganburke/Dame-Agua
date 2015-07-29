class CreateWaterbottles < ActiveRecord::Migration
  def change
    create_table :waterbottles do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
