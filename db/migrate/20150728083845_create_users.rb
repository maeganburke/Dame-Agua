class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :home_location
      t.string :name
      t.string :username
      t.text :avatar
      t.string :email
      t.string :password

      t.timestamps null: false
    end
  end
end
