class Api::UsersController < ApplicationController
  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update(user_params)
      flash[:errors] = ["Image updated successfully."]
      render :show
    else
      flash[:errors] = ["Image failed to update."]
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
