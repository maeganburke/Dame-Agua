class Fountain < ActiveRecord::Base

  has_many :fountain_comments
  has_many :fountain_ratings
  has_many :fountain_checkins
  validates :name, presence: true, uniqueness: true
  validates :location, presence: true

end
