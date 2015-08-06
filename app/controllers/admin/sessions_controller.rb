class Admin::SessionsController < ApplicationController

  def create
    admin = Admin.find_by(username: params[:username])
    if admin && admin.authenticate(params[:password])
      session[:admin_id] = admin.id
      flash[:notice] = "Oh, you fancy, huh? You're signed in as an admin."
      redirect_to '/admin/users'
    else
      redirect_to '/'
    end
  end

  def new
    render :new
  end

  def delete
    session.clear
    redirect_to '/'
  end

end
