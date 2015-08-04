class Admin::UsersController < ApplicationController

    def index
      @users = User.all
    end

    def new
      @user = User.new
      if @user.valid?
        @user.save
      else
        render :new
      end
    end

    def create

    end

    def delete
      @user = User.destroy
    end

end
