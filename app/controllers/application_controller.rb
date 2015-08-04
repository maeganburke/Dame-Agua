class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :current_admin

  def current_user
  	if @current_user.nil?
  		@current_user = User.find_by(id: session[:user_id])
  	else
  		@current_user
  	end
  end

  def current_admin
    if @current_admin.nil?
      @current_admin = Admin.find_by(id: session[:admin_id])
    else
      @current_admin
    end
  end

end
