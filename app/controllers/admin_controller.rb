class AdminController < ApplicationController

  before_filter :authorized?

  def create
    @admin = Admin.new(admin_params)
    if @admin.valid?
      @admin.save
      session[:admin_id] = @admin.id
    else
      render :new
    end
  end

private
  def authorized?
    unless current_user.has_role? :admin
      flash[:error] = "You are not authorized to view that page."
      redirect_to root_path
    end
  end

  def admin_params
    params.require(:admin).permit(:username, :email, :password, :password_confirmation)
  end

end
