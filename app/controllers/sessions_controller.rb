class SessionsController < ApplicationController
  before_action :already_signed_in?, except: [:destroy]

  def new
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
