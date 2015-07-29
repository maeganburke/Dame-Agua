class Fountain < ActiveRecord::Base

  has_many :fountain_comments :fountain_ratings :fountain_checkins

  validates :name, presence: true, uniqueness: true
  validates :location, presence: true

end
