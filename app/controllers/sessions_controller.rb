class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:notice] = "get excited! you've successfully signed in."
      redirect_to '#thedeal'
    else
      flash[:notice] = "oopsies! something went wrong. you sure that's your password?"
      redirect_to '/'
    end
  end

  def delete
    session.clear
    redirect_to '/'
  end



end
