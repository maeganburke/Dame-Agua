class User < ActiveRecord::Base

  has_many :fountain_comments
  has_many :fountain_ratings
  has_many :fountain_checkins

  validates :name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  def set_default_role
		unless self.role
			self.role = :user
		end
	end

  def show_username
    [username].compact.join(" - ")
  end

end
