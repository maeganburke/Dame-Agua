require 'bcrypt'

class Admin < ActiveRecord::Base

  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  def show_username
    [username].compact.join(" - ")
  end

end
