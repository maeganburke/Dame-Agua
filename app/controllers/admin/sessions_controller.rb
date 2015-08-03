class Admin::SessionsController < ApplicationController

  def create
    admin = Admin.find_by(username: params[:username])
    if admin && admin.authenticate(params[:session][:password])
      session[:admin_id] = admin.id
      redirect_to '/admin'
    else
      redirect_to '/'
    end
  end
end
