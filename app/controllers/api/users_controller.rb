class Api::UsersController < ApplicationController
  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render :show
    else
      render :show
    end
  end

  def show
    @user = User.includes(reviews: :professor).find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:image_url)
  end
end
