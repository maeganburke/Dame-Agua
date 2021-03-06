class Admin::UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      WelcomeMailer.welcome_email(@user).deliver_now
      redirect_to '/admin/users'
    else
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      redirect_to '/admin/users'
    else
      render :edit
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to '/admin/users'
  end

private

  def user_params
    params.require(:user).permit(:name, :username, :email, :home_location, :password, :password_confirmation)
  end
end
