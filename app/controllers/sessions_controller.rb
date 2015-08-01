class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/dameagua'
    else
      redirect_to '/'
    end
  end

  def delete
    session.clear
    redirect_to '/'
  end

  def authenticate_admin
    auth_hash = request.env['omniauth.auth']

    session[:admin_user] = auth_hash['user_info']['email']

    if admin?
      redirect_to '/'
    else
      render :text => '401 Unauthorized', :status => 401
    end
  end

end
