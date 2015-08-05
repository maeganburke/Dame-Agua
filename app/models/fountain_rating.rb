class FountainRating < ActiveRecord::Base

    belongs_to :users
    belongs_to :fountains

end
