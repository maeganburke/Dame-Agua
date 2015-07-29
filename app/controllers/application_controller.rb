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

  # def admin_only
  #   unless current_user && current_user.role == 'admin'
  #     flash[:access_denied] = 'Log in or Sign up!'
  #     redirect_to '/'
  #   end
  # end

end
