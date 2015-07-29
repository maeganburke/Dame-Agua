class Wbstore < ActiveRecord::Base

  has_many :waterbottles

  validates :name, presence: true
  validates :location, presence: true

end
