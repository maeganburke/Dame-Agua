class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :admin_only

  def current_user
  	if @current_user.nil?
  		@current_user = User.find_by(id: session[:user_id])
  	else
  		@current_user
  	end
  end

  def admin?
    session[:admin_user] && (ENV['ADMINS'] || "").split(',').include?(session[:admin_user])
  end
  helper_method :admin?

  def admin_required
    redirect_to '/auth/admin' unless admin?
  end
  
end
