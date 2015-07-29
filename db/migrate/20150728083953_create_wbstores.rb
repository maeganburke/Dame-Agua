class CreateWbstores < ActiveRecord::Migration
  def change
    create_table :wbstores do |t|
      t.string :location
      t.string :name

      t.timestamps null: false
    end
  end
end
