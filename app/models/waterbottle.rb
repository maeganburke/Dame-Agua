class Waterbottle < ActiveRecord::Base

  has_and_belongs_to_many :wbstores

  validates :name, presence: true, uniqueness: true
  
end
