class Api::LikesController < ApplicationController
  before_action :require_sign_in!

  def new
    @like = current_user.likes.new
  end

  def create
    @like = current_user.likes.new
    if @like.save
      flash.now[:errors] = "LIKED"
      render json: {}
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

end
