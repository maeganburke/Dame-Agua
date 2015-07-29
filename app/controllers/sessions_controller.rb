class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_email(params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/'
    else
      redirect_to '/'
    end
  end

  def delete
    session.clear
    redirect_to '/'
  end

end
