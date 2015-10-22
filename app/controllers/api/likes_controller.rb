class Api::LikesController < ApplicationController
  before_action :require_sign_in!

  def new
    @like = current_user.likes.new
  end

  def create
    @like = current_user.likes.new(like_params)
    if @like.save
      render json: @like
    else
      flash.now[:errors] = @like.errors.full_messages
      render json: {}
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: {}
  end

  private

  def like_params
    params.require(:like).permit(:review_id)
  end
end
