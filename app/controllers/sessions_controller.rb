class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      fail
      redirect_to '/dameagua'
    else
      redirect_to '/'
    end
  end

  def delete
    session.clear
    redirect_to '/'
  end



end
