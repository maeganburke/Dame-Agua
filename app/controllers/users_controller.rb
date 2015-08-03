class UsersController < ApplicationController
  # before_action :authorize_user, only: [:show]
  before_action :admin_only, only: [:index]

  def new
    @user = User.new
    @home_locations =   [
        ["",""],
        ["BCN", "BCN"],
        ["DC", "DC"]
      ]
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to '/'
    else
      render :new
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(params[:username])
  end

private

  def user_params
    params.require(:user).permit(:name, :username, :email, :home_location, :password, :password_confirmation)
  end
end
