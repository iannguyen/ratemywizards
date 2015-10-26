class UsersController < ApplicationController
  before_action :already_signed_in?

  def new
  end

  def create
    @user = User.new(user_params)
    if params[:user][:password] != params[:user][:confirmation]
      flash.now[:errors] = ['Passwords do not match.']
      render :new
      return
    end

    if @user.save
      sign_in!(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
