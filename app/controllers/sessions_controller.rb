class SessionsController < ApplicationController
  before_action :already_signed_in?, except: [:demo, :destroy]

  def new
  end

  def demo
    id = [18, 19, 20].sample
    @user = User.find(id)
    sign_in!(@user)
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password],
    )
    if user
      sign_in!(user)
    else
      flash.now[:errors] = ['Invalid username or password']
      render :new
    end
  end

  def destroy
    sign_out!
    render json: {}
  end
end
