class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:notice] = "Get excited! You've successfully signed in."
      redirect_to '#thedeal'
    else
      flash[:notice] = "Oopsies! Something went wrong. You sure that's your password?"
      redirect_to '/'
    end
  end

  def delete
    session.clear
    redirect_to '/'
  end



end
