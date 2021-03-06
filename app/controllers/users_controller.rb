class UsersController < ApplicationController

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
      # WelcomeMailer.welcome_email(@user).deliver_now
      flash[:alert] = "welcome to dame agua!"
      redirect_to '#thedeal'
    else
      flash[:notice] = "oops! it looks like there was an error. try again, homie!"
      redirect_to signup_path
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(username: params[:username])
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to '/'
  end

  def edit
    @user = User.find(session[:user_id])
  end

  def update
    @user = User.find(session[:user_id])
    if @user.update_attributes(user_params)
      redirect_to '/'
    else
      flash[:notice] = "oops! tt looks like there was an error. try again, homie!"
      redirect_to profile_path
    end
  end

private

  def user_params
    params.require(:user).permit(:name, :username, :email, :home_location, :password, :password_confirmation)
  end
end
