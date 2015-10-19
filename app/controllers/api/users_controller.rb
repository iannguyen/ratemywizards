class Api::UsersController < ApplicationController
  def show
    @user = User.includes(reviews: :professor).find(params[:id])
    render :show
  end
end
